export const IMPROVE_OPTIONS = [
  "Regression",
  "API Testing",
  "QA Strategy",
  "Test Coverage",
  "Automation",
  "Performance Testing",
  "AI for QA",
  "Other",
] as const;

export const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-1000", "1000+"] as const;

export type ContactInput = {
  name: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  challenge: string;
  improve: string;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: Partial<ContactInput>): ContactErrors {
  const e: ContactErrors = {};
  const v = (k: keyof ContactInput) => (input[k] ?? "").toString().trim();

  if (v("name").length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(v("email"))) e.email = "Please enter a valid work email.";
  if (v("company").length < 2) e.company = "Please enter your company name.";
  if (v("role").length < 2) e.role = "Please enter your role.";
  if (!(COMPANY_SIZES as readonly string[]).includes(v("companySize"))) e.companySize = "Please select a company size.";
  if (v("challenge").length < 10) e.challenge = "Please describe your challenge in at least a sentence.";
  if (v("challenge").length > 3000) e.challenge = "Please keep this under 3000 characters.";
  if (!(IMPROVE_OPTIONS as readonly string[]).includes(v("improve"))) e.improve = "Please choose what you'd like to improve.";
  return e;
}
