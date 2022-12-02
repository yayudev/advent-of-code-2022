import { readFile } from "fs/promises";
import { join as joinPath } from "path";

export async function readInputData(filename: string): Promise<string[]> {
  const path = joinPath(__dirname, "inputs", filename);
  const fileContent = await readFile(path, { encoding: "utf-8" });
  const rawData = fileContent.split("\n");

  // Add an extra empty string at the end to make it easy to parse and loop.
  rawData.push("");

  return rawData;
}
