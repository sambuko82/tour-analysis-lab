import { defineTool } from "@lovable.dev/mcp-js";
import { tourData } from "../tour-data";

export default defineTool({
  name: "get_inclusions",
  title: "Get tour inclusions",
  description: "Return what is included and not included in the East Java 5D4N tour price.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = { included: tourData.included, notIncluded: tourData.notIncluded };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
