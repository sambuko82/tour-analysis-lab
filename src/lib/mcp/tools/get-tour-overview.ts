import { defineTool } from "@lovable.dev/mcp-js";
import { tourData } from "../tour-data";

export default defineTool({
  name: "get_tour_overview",
  title: "Get tour overview",
  description:
    "Return the East Java 5D4N tour overview: title, location, duration, rating, operator, currency, base price, and highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const overview = {
      id: tourData.id,
      title: tourData.title,
      location: tourData.location,
      duration: tourData.duration,
      groupSize: tourData.groupSize,
      languages: tourData.languages,
      rating: tourData.rating,
      reviewCount: tourData.reviewCount,
      operatorName: tourData.operatorName,
      currency: tourData.currency,
      basePricePerPerson: tourData.basePrice,
      description: tourData.description,
      highlights: tourData.highlights,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(overview, null, 2) }],
      structuredContent: overview,
    };
  },
});
