# Langflow Chat

Langflow chat is a Next.js application that can speak to your Langflow flows over API.

## Prerequisites

You should have built a chat flow using [DataStax Langflow](https://www.datastax.com/products/langflow).

You can find the credentials for the flow by opening the API settings. You will need to generate an API key and find the base URL, Langflow ID and Flow ID.

## Setup

### Running in GitHub Codespaces

Create a new repo from this template repository, then create a Codespace for the main branch.

Within the Codespace, install the dependencies by running `npm install`.

Copy the supplied `.env.example` to `.env` and enter your API details and credentials for Langflow:

- `LANGFLOW_API_KEY`: The API key for interacting with Langflow
- `LANGFLOW_URL`: The base URL of your Langflow instance
- `LANGFLOW_ID`: The Langflow ID
- `LANGFLOW_FLOW_ID`: The flow ID

### Running locally

Clone this repository to your local machine.

Install the dependencies by running `npm install`.

Copy the supplied `.env.example` to `.env` and enter your API details and credentials for Langflow:

- `LANGFLOW_API_KEY`: The API key for interacting with Langflow
- `LANGFLOW_URL`: The base URL of your Langflow instance
- `LANGFLOW_ID`: The Langflow ID
- `LANGFLOW_FLOW_ID`: The flow ID

## Running the Project

Once you have your credentials saved, run `npm run dev` in your terminal. Open [http://localhost:3000](http://localhost:3000) to view the chatbot in your browser.
