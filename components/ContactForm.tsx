"use client";

import { useState, type FormEvent } from "react";
import {
  COMPANY_SIZES,
  IMPROVE_OPTIONS,
  validateContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/validation";

const EMPTY: ContactInput = {
  name: "",
  email: "",
  company: "",
  role: "",
  companySize: "",
  challenge: "",
  improve: "",
};

const field =
  "mt-2 w-full border border-line bg-ink-2 px-4 py-3 text-sm text-paper placeholder:text-muted-dark focus:border-accent";

function FieldError({ k, message }: { k: string; message?: string }) {
  return message ? (
    <p id={`e-${k}`} className="mt-1.5 text-xs text-red-400">
      {message}
    </p>
  ) : null;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactInput>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [website, setWebsite] = useState(""); // honeypot

  const set = (k: keyof ContactInput) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const first = Object.keys(errs)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website }),
      });
      if (res.ok) {
        setStatus("sent");
        setValues(EMPTY);
      } else {
        const data = (await res.json().catch(() => ({}))) as { errors?: ContactErrors };
        if (data.errors) setErrors(data.errors);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div id="contact-form" role="status" className="border border-accent/50 p-8">
        <h3 className="font-serif text-2xl">Thank you — your message is in.</h3>
        <p className="mt-3 text-muted">I&apos;ll review it and get back to you soon.</p>
      </div>
    );
  }

  const aria = (k: keyof ContactInput) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `e-${k}` : undefined,
  });

  return (
    <form id="contact-form" onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="text-sm">Name</label>
          <input id="f-name" name="name" autoComplete="name" value={values.name} onChange={set("name")} className={field} {...aria("name")} />
          <FieldError k="name" message={errors.name} />
        </div>
        <div>
          <label htmlFor="f-email" className="text-sm">Work Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" value={values.email} onChange={set("email")} className={field} {...aria("email")} />
          <FieldError k="email" message={errors.email} />
        </div>
        <div>
          <label htmlFor="f-company" className="text-sm">Company</label>
          <input id="f-company" name="company" autoComplete="organization" value={values.company} onChange={set("company")} className={field} {...aria("company")} />
          <FieldError k="company" message={errors.company} />
        </div>
        <div>
          <label htmlFor="f-role" className="text-sm">Role</label>
          <input id="f-role" name="role" autoComplete="organization-title" value={values.role} onChange={set("role")} className={field} {...aria("role")} />
          <FieldError k="role" message={errors.role} />
        </div>
        <div>
          <label htmlFor="f-companySize" className="text-sm">Company Size</label>
          <select id="f-companySize" name="companySize" value={values.companySize} onChange={set("companySize")} className={field} {...aria("companySize")}>
            <option value="">Select…</option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <FieldError k="companySize" message={errors.companySize} />
        </div>
        <div>
          <label htmlFor="f-improve" className="text-sm">What would you like to improve?</label>
          <select id="f-improve" name="improve" value={values.improve} onChange={set("improve")} className={field} {...aria("improve")}>
            <option value="">Select…</option>
            {IMPROVE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <FieldError k="improve" message={errors.improve} />
        </div>
      </div>
      <div>
        <label htmlFor="f-challenge" className="text-sm">What is your biggest QA challenge?</label>
        <textarea id="f-challenge" name="challenge" rows={5} value={values.challenge} onChange={set("challenge")} className={field} {...aria("challenge")} />
        <FieldError k="challenge" message={errors.challenge} />
      </div>

      {/* Honeypot: hidden from people, visible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong. Please check the form and try again.
        </p>
      )}
    </form>
  );
}
