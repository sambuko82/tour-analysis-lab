import { defineTool } from "@lovable.dev/mcp-js";
import { tourData } from "../tour-data";

export default defineTool({
  name: "get_itinerary",
  title: "Get tour itinerary",
  description: "Return the day-by-day itinerary for the East Java 5D4N tour.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const itinerary = tourData.itinerary;
    return {
      content: [{ type: "text", text: JSON.stringify(itinerary, null, 2) }],
      structuredContent: { itinerary },
    };
  },
});
