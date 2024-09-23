export class LangflowClient {
  private baseURL: string;
  private applicationToken: string;
  private langflowId: string;
  private flowId: string;

  constructor(baseURL, applicationToken, langflowId, flowId) {
    this.baseURL = baseURL;
    this.applicationToken = applicationToken;
    this.langflowId = langflowId;
    this.flowId = flowId;
  }

  async post(endpoint, body, headers = { "Content-Type": "application/json" }) {
    headers["Authorization"] = `Bearer ${this.applicationToken}`;
    headers["Content-Type"] = "application/json";
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const responseMessage = await response.json();
      if (!response.ok) {
        throw new Error(
          `${response.status} ${response.statusText} - ${JSON.stringify(
            responseMessage
          )}`
        );
      }
      return responseMessage;
    } catch (error) {
      console.error("Request Error:", error.message);
      throw error;
    }
  }

  async runFlow(inputValue) {
    try {
      const endpoint = `/lf/${this.langflowId}/api/v1/run/${this.flowId}?stream=false`;
      return await this.post(endpoint, {
        input_value: inputValue,
        input_type: "chat",
        output_type: "chat",
        tweaks: {},
      });
    } catch (error) {
      console.error("Error running flow:", error);
      throw error;
    }
  }
}
