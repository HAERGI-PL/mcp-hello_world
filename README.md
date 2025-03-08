# MCP Hello World

A simple, easy-to-understand implementation of the Model Context Protocol (MCP) using JavaScript ES Modules.

> **Note**: This implementation has been tested and verified to work with Claude, Anthropic's AI assistant.

## What is MCP?

The Model Context Protocol (MCP) is a standardized interface that allows AI assistants to interact with external tools and services. It enables AI models to:

- Discover available tools
- Call tools with structured inputs
- Receive structured outputs
- Process and display the results to users

This protocol creates a bridge between AI models and external capabilities, making AI assistants more powerful and useful in real-world applications.

## Project Structure

This repository contains a minimalistic JavaScript (ESM) MCP server implementation:

```
.
├── src/
│   ├── index.mjs     # Main server implementation
│   └── hello.mjs     # Hello World tool implementation
├── package.json
└── README.md
```

The server implements:

- A single "hello_world" tool that takes a name and returns a personalized greeting
- Standard MCP interfaces for tool discovery and execution
- Uses the official `@modelcontextprotocol/sdk` package

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Server Setup

```bash
npm install
npm start
```

This will start the MCP server running on stdio, ready to process tool discovery and execution requests.

## How It Works

1. **Tool Definition**: The server defines a "hello_world" tool with a specific input schema that requires a "name" parameter.

2. **Tool Discovery**: When an AI assistant connects to the server, it can request a list of available tools using the ListTools request.

3. **Tool Execution**: The AI assistant can then call the "hello_world" tool with a name parameter, and receive a formatted greeting in response.

4. **Data Flow**:
   - AI Assistant → MCP Server: Tool discovery request
   - MCP Server → AI Assistant: List of available tools with schemas
   - AI Assistant → MCP Server: Tool execution request with parameters
   - MCP Server → AI Assistant: Tool execution result

This simple example demonstrates the core MCP concepts:
- Tool definition with schemas
- Tool discovery
- Tool execution
- Structured input/output

## Use Cases

This implementation can be used as:

- A learning resource for developers new to MCP
- A starting point for building more complex MCP servers
- A testing tool for AI assistants that implement MCP client capabilities
- A reference implementation for the MCP specification

## License

The MCP Hello World repository is licensed under the MIT License.

## Further Resources

- [MCP GitHub Repository](https://github.com/modelcontextprotocol/protocol)
- [MCP Documentation](https://modelcontextprotocol.ai/)
- [MCP SDK Package](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
