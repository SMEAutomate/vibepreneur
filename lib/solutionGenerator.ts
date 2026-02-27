import {
  roleTemplates,
  industryModifiers,
  type SolutionTemplate,
} from "@/content/solution-templates";

export interface GeneratedSolution {
  problem: string;
  buyer: string;
  offer: string;
  pricingModel: string;
  distributionWedge: string;
  firstMoves: [string, string, string];
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function applyIndustryModifier(
  solution: SolutionTemplate,
  industryKey: string
): GeneratedSolution {
  const modifier = industryModifiers[industryKey];
  if (!modifier) {
    return { ...solution };
  }

  return {
    problem: `${modifier.contextPrefix.toLowerCase()} ${solution.problem.charAt(0).toLowerCase()}${solution.problem.slice(1)}`,
    buyer: solution.buyer.replace(
      /at [\w\s-]+(?:companies|firms|organisations|startups)/i,
      `${modifier.buyerSuffix}`
    ),
    offer: solution.offer,
    pricingModel: solution.pricingModel,
    distributionWedge: solution.distributionWedge,
    firstMoves: [...solution.firstMoves],
  };
}

export function generateSolutions(
  role: string,
  industry?: string
): GeneratedSolution[] {
  const normalizedRole = role.toLowerCase().trim();
  const templates = roleTemplates[normalizedRole];

  if (!templates) {
    const fallbackKeys = Object.keys(roleTemplates);
    const hash = hashCode(normalizedRole);
    const fallbackKey = fallbackKeys[hash % fallbackKeys.length];
    const fallback = roleTemplates[fallbackKey];

    return fallback.solutions.map((s) =>
      industry ? applyIndustryModifier(s, industry) : { ...s }
    );
  }

  return templates.solutions.map((s) =>
    industry ? applyIndustryModifier(s, industry) : { ...s }
  );
}

export function getRoleLabel(role: string): string {
  const templates = roleTemplates[role.toLowerCase().trim()];
  return templates?.label ?? role;
}
