import { readFile } from "fs/promises";
import { join } from "path";
import { pathExists } from "fs-extra";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: "Slug is required",
    });
  }

  try {
    // Probeer eerst .js bestand
    const jsFilePath = join(process.cwd(), "content", "news", `${slug}.js`);
    if (await pathExists(jsFilePath)) {
      // Dynamisch importeren van JS module
      const module = await import(jsFilePath);
      return module.default;
    }

    // Fallback naar .json bestand
    const jsonFilePath = join(process.cwd(), "content", "news", `${slug}.json`);
    const content = await readFile(jsonFilePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "News article not found",
    });
  }
});
