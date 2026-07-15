import { defineMcp } from "@lovable.dev/mcp-js";
import getTourOverview from "./tools/get-tour-overview";
import getItinerary from "./tools/get-itinerary";
import getPricing from "./tools/get-pricing";
import getInclusions from "./tools/get-inclusions";
import getFaq from "./tools/get-faq";

export default defineMcp({
  name: "east-java-tour-mcp",
  title: "East Java Tour MCP",
  version: "0.1.0",
  instructions:
    "Public tools for the Java Volcano Tour Operator's 5D4N East Java tour (Ijen, Papuma, Tumpak Sewu, Bromo). Use `get_tour_overview` for the top-level summary, `get_itinerary` for the day-by-day plan, `get_pricing` for per-person tier pricing and quotes by group size, `get_inclusions` for what is included / excluded, and `get_faq` for frequently asked questions.",
  tools: [getTourOverview, getItinerary, getPricing, getInclusions, getFaq],
});
