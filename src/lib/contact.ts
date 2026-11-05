import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message is too long (max 2000 characters)."),
});

export type ContactValues = z.infer<typeof contactSchema>;

export type FormTarget =
  | { kind: "formspree"; url: string }
  | { kind: "web3forms"; url: string; accessKey: string }
  | null;

/**
 * VITE_FORM_ENDPOINT accepts either:
 *  - a full URL (e.g. Formspree: https://formspree.io/f/xxxxxx), or
 *  - a Web3Forms access key (posted to https://api.web3forms.com/submit).
 */
export function resolveFormTarget(value: string | undefined): FormTarget {
  const v = value?.trim();
  if (!v) return null;
  if (/^https?:\/\//i.test(v)) return { kind: "formspree", url: v };
  return { kind: "web3forms", url: "https://api.web3forms.com/submit", accessKey: v };
}

export async function sendContact(values: ContactValues, target: FormTarget): Promise<void> {
  if (!target) throw new Error("Contact form is not configured yet.");
  const body: Record<string, string> = {
    name: values.name,
    email: values.email,
    message: values.message,
    subject: `Portfolio message from ${values.name}`,
  };
  if (target.kind === "web3forms") body.access_key = target.accessKey;

  const res = await fetch(target.url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
}
