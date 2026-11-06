export type Page = 'home' | 'signin' | 'signup' | 'account' | 'enterprise' | 'personal' | 'dashboard';
export type Article = { id: string; tag: string; source: string; title: string; summary: string; match: number; rating: number };
export type Session = { id: string; label: string; date: string };
export type EnterpriseProfile = { name: string; email: string; company: string; role: string; organisationSize: string; industry: string; companyInfo: string; roleInfo: string };
