import { z } from "zod";

export const HelloWorldToolSchema = z.object({
  name: z.string(),
});

export const helloWorldToolDefinition = {
  name: "hello_world",
  description: "Returns hello world <name>",
  inputSchema: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name to return",
      },
    },
    required: ["name"],
  },
};

export const handleHelloWorld = (args) => {
  const validated = HelloWorldToolSchema.parse(args);
  const { name } = validated;

  return {
    content: [
      {
        type: "text",
        text: `Hello, ${name}!`,
      },
    ],
  };
}; 