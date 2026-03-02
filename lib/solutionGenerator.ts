import {
  roleTemplates,
  type SolutionTemplate,
  type SolutionType,
  SOLUTION_TYPE_LABELS,
} from "@/content/solution-templates";
import { INDUSTRY_POOLS } from "@/content/solution-templates/industry-pools";

export interface GeneratedSolution {
  problem: string;
  buyer: string;
  offer: string;
  pricingModel: string;
  distributionChannel: string;
  firstMoves: [string, string, string];
  solutionType: SolutionType;
  solutionTypeLabel: string;
  valueProposition: string;
  vibepreneurHook: string;
}

export interface SectorContext {
  label: string;
  sectorContext: string;
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

function toGeneratedSolution(t: SolutionTemplate): GeneratedSolution {
  return {
    problem: t.problem,
    buyer: t.buyer,
    offer: t.offer,
    pricingModel: t.pricingModel,
    distributionChannel: t.distributionChannel,
    firstMoves: [...t.firstMoves],
    solutionType: t.solutionType,
    solutionTypeLabel: SOLUTION_TYPE_LABELS[t.solutionType],
    valueProposition: t.valueProposition,
    vibepreneurHook: t.vibepreneurHook,
  };
}

function selectWithTypeDiversity(
  candidates: SolutionTemplate[],
  count: number,
  seed: number
): SolutionTemplate[] {
  if (candidates.length <= count) return candidates;

  const typeGroups = new Map<SolutionType, SolutionTemplate[]>();
  for (const c of candidates) {
    const group = typeGroups.get(c.solutionType) ?? [];
    group.push(c);
    typeGroups.set(c.solutionType, group);
  }

  const selected: SolutionTemplate[] = [];
  const usedTypes = new Set<SolutionType>();
  const types = Array.from(typeGroups.keys());

  let idx = seed % types.length;
  while (selected.length < count && usedTypes.size < types.length) {
    const type = types[idx % types.length];
    if (!usedTypes.has(type)) {
      const group = typeGroups.get(type)!;
      selected.push(group[seed % group.length]);
      usedTypes.add(type);
    }
    idx++;
  }

  if (selected.length < count) {
    for (const c of candidates) {
      if (selected.length >= count) break;
      if (!selected.includes(c)) {
        selected.push(c);
      }
    }
  }

  return selected;
}

export function generateSolutions(
  role: string,
  industry?: string
): GeneratedSolution[] {
  const normalizedRole = role.toLowerCase().trim();
  const seed = hashCode(normalizedRole + (industry ?? ""));

  if (industry) {
    const pool = INDUSTRY_POOLS[industry];
    if (pool && pool.solutions.length > 0) {
      const affinityMatches = pool.solutions.filter((s) =>
        s.roleAffinity.includes(normalizedRole)
      );

      const candidates =
        affinityMatches.length >= 3 ? affinityMatches : pool.solutions;
      const selected = selectWithTypeDiversity(candidates, 3, seed);
      return selected.map(toGeneratedSolution);
    }
  }

  const templates = roleTemplates[normalizedRole];
  if (!templates) {
    const fallbackKeys = Object.keys(roleTemplates);
    const fallbackKey = fallbackKeys[seed % fallbackKeys.length];
    return roleTemplates[fallbackKey].solutions.map(toGeneratedSolution);
  }

  return templates.solutions.map(toGeneratedSolution);
}

export function getRoleLabel(role: string): string {
  const templates = roleTemplates[role.toLowerCase().trim()];
  return templates?.label ?? role;
}

export function getSectorContext(industry: string): SectorContext | null {
  const pool = INDUSTRY_POOLS[industry];
  if (!pool) return null;
  return { label: pool.label, sectorContext: pool.sectorContext };
}

export function getIndustryLabel(industry: string): string {
  const pool = INDUSTRY_POOLS[industry];
  return pool?.label ?? industry;
}
