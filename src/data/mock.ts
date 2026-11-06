// FAKE DATA only. TODO(API): replace with responses from the backend once its contract is ready.
import type { Article, EnterpriseProfile, Session } from '../types';
export const mockSessions: Session[] = [
  { id: 's1', label: 'Today', date: 'Sun, Nov 1' }, { id: 's2', label: 'Yesterday', date: 'Sat, Oct 31' },
  { id: 's3', label: 'Friday', date: 'Oct 30' }, { id: 's4', label: 'Thursday', date: 'Oct 29' }, { id: 's5', label: 'Wednesday', date: 'Oct 28' },
];
export const mockArticles: Article[] = [
  { id: 'a1', tag: 'MARKETS', source: 'Reuters', title: 'Fed signals patience as core inflation cools for a third month', summary: 'Policymakers held rates steady and hinted that cuts remain on the table for Q1, citing softer services inflation and a steadier labour market.', match: 94, rating: 4 },
  { id: 'a2', tag: 'AI / TECH', source: 'The Information', title: 'Chipmakers race to lock in 2027 advanced-packaging capacity', summary: 'Hyperscaler demand is pushing foundries to pre-sell capacity two years out, tightening supply for smaller AI hardware players.', match: 91, rating: 0 },
  { id: 'a3', tag: 'FINTECH', source: 'FT', title: 'EU finalises instant-payments rules, banks given 9 months to comply', summary: 'The regulation caps fees at parity with standard transfers and mandates payee verification — a margin hit for legacy card rails.', match: 88, rating: 5 },
  { id: 'a4', tag: 'ENTERPRISE', source: 'Bloomberg', title: 'SaaS budgets shift toward agentic tooling as seat growth stalls', summary: 'CIO surveys show flat seat counts but rising spend on usage-priced AI agents, reshaping how vendors forecast revenue.', match: 85, rating: 0 },
  { id: 'a5', tag: 'CRYPTO', source: 'CoinDesk', title: 'Stablecoin settlement volumes overtake a major card network in Q3', summary: 'On-chain dollar transfers grew 38% QoQ, led by B2B cross-border flows in LatAm and Southeast Asia.', match: 79, rating: 3 },
];
export const mockProfile: EnterpriseProfile = {
  name: 'Oviya Ramakrishnasamy', email: 'oviya@northwind.io', company: 'Northwind Labs', role: 'Head of Product',
  organisationSize: '201–1,000', industry: 'Fintech', companyInfo: 'B2B payments infrastructure for mid-market SaaS.',
  roleInfo: 'Own the payments roadmap; tracking EU regulation and competitor launches.',
};
export const organisationSizes = ['1–50', '51–200', '201–1,000', '1,000+'];
