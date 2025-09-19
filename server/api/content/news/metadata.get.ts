import { readFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async (event) => {
  try {
    const filePath = join(process.cwd(), "content", "news", "metadata.json");
    const content = await readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "News metadata not found",
    });
  }
});
