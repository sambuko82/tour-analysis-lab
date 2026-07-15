import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { tourData } from "../tour-data";

export default defineTool({
  name: "get_faq",
  title: "Get tour FAQ",
  description:
    "Return frequently asked questions about the East Java tour. Optionally filter by a keyword that must appear in the question or answer.",
  inputSchema: {
    keyword: z.string().trim().min(1).optional().describe("Optional case-insensitive keyword to filter FAQ entries."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ keyword }) => {
    const kw = keyword?.toLowerCase();
    const faq = kw
      ? tourData.faq.filter((f) => f.q.toLowerCase().includes(kw) || f.a.toLowerCase().includes(kw))
      : tourData.faq;
    return {
      content: [{ type: "text", text: JSON.stringify(faq, null, 2) }],
      structuredContent: { faq },
    };
  },
});
