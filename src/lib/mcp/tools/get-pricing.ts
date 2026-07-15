import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { priceForTravelers, tourData } from "../tour-data";

export default defineTool({
  name: "get_pricing",
  title: "Get tour pricing",
  description:
    "Return the full per-person pricing tier table for the East Java 5D4N tour, and optionally quote a price for a specific group size.",
  inputSchema: {
    travelers: z
      .number()
      .int()
      .min(1)
      .max(50)
      .optional()
      .describe("Optional group size. If provided, also returns the matching tier and total price."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ travelers }) => {
    const result: {
      currency: string;
      tiers: typeof tourData.pricingTiers;
      quote?: { travelers: number; tier: string; pricePerPerson: number; total: number };
    } = {
      currency: tourData.currency,
      tiers: tourData.pricingTiers,
    };
    if (typeof travelers === "number") {
      const tier = priceForTravelers(travelers);
      result.quote = {
        travelers,
        tier: tier.groupSize,
        pricePerPerson: tier.pricePerPerson,
        total: tier.pricePerPerson * travelers,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
