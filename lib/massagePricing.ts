// Current price list per Gloria's email of 9 Oct 2026, which supersedes the
// previous $90 / $130 / $170 remedial tiers and the $110 Bowen rate.
//
// The 90-minute remedial tier was REMOVED in that email — her list contains
// only 45 and 70 minutes. If it comes back, add it here rather than hardcoding
// a price into a component (prices were previously duplicated across
// ServicesGrid, what-to-expect and the remedial service page, which is how the
// old figures went stale).
export const remedialMassagePricing = [
  { label: "45 mins", price: "$100" },
  { label: "70 mins", price: "$145" },
];

export const bowenPricing = [
  { label: "45–60 mins", price: "$120" },
];
