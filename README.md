
## Overview
- Bali_Ai like a chat bot using Google AI Studio api

## Data Flow

1. The user enters a prompt or input in the frontend UI (e.g., a chat interface or input field).
2. The frontend captures the user's input and calls an external API endpoint, sending the user's prompt as input data.
3. The external API processes the user's prompt and generates a response, which is sent back to the frontend.
4. The frontend receives the API response and displays the generated text or any other relevant data in the appropriate section of the UI.
5. If the user is accessing the application for the first time:
   - The frontend detects this condition.
   - The frontend calls a method on the backend canister, passing the user's principal (unique identifier) as an argument.
   - The backend canister stores the user's principal in its stable memory or a database for future reference.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **dfx**: You have installed the latest version of the DFINITY Canister SDK, `dfx`. You can download it from the DFINITY SDK page. [installation guide](https://demergent-labs.github.io/azle/get_started.html#installation) 

- **Node.js**: You have installed Node.js, version 18 or above. You can download it from the Node.js website.

- **Google AI Studio**: The project uses Google AI Studio for generating questions and verifying feedback authenticity. The model used is `Gemini Pro`. You can get an API Key from [Google AI Studio](https://makersuite.google.com/) for free.
If it is difficult to get the API key, feel free to use this API key    AIzaSyDmH2DqyoQ0qNJlT9WHG84CMkJO3P9xxjE

Please ensure all these prerequisites are met before proceeding with the setup of the project.

### Developing

Begin by opening a terminal window.

 ### Step 1: Navigate into the folder containing the project's files and start a local instance of the Internet Computer with the command:

`cd bali_ai`
`dfx start --background --clean`

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

Here's the corrected syntax for the README:

**Deploy the Local Internet Identity**: Run the following command to deploy the local Internet Identity:

```
dfx deploy internet_identity
```

**Deploy the Backend**: Follow the instructions in the backend README to deploy the backend.

```
dfx deploy backend
```

**Generate Backend**: 

```
dfx deploy backend
```

**Deploy the Frontend**: Follow the instructions in the frontend README to deploy the frontend.

```
dfx deploy frontend
```
