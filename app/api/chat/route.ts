import { LangflowClient } from "../../utils/langflow";

const { LANGFLOW_API_KEY, LANGFLOW_URL, LANGFLOW_ID, LANGFLOW_FLOW_ID } =
  process.env;

const langflowClient = new LangflowClient(
  LANGFLOW_URL,
  LANGFLOW_API_KEY,
  LANGFLOW_ID,
  LANGFLOW_FLOW_ID
);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages[messages?.length - 1]?.content;

    const response = await langflowClient.runFlow(latestMessage);
    const message = response.outputs[0].outputs[0].outputs.message.message.text;
    return new Response(message);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
