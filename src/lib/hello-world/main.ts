import { HelloWorldInput, HelloWorldOutput } from "./types";

export async function helloWorld({}: HelloWorldInput = {}): Promise<HelloWorldOutput> {
  return { message: "Hello, world!" };
}
