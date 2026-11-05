import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";
import {
  contactSchema,
  resolveFormTarget,
  sendContact,
  type ContactValues,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<keyof ContactValues, string>>;

const empty: ContactValues = { name: "", email: "", message: "" };
const fieldClass =
  "h-11 rounded-lg border-border bg-background/60 px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const update = (k: keyof ContactValues, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) {
      // Bot filled the hidden field — pretend success, send nothing.
      setStatus("success");
      return;
    }
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = Object.keys(next)[0];
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await sendContact(parsed.data, resolveFormTarget(import.meta.env.VITE_FORM_ENDPOINT));
      setStatus("success");
      setValues(empty);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass flex flex-col items-start rounded-xl p-6 md:p-8" role="status">
        <CheckCircle2 className="size-8 text-success" aria-hidden="true" />
        <h3 className="mt-4 font-mono text-lg font-semibold text-foreground">Message sent.</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. I'll reply to your email as soon as I can.
        </p>
        <Button variant="glass" size="sm" className="mt-6 h-9 px-3" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form noValidate onSubmit={onSubmit} className="glass rounded-xl p-6 md:p-8" aria-label="Contact form">
      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(fieldClass, errors.name && "border-destructive")}
            placeholder="Your name"
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(fieldClass, errors.email && "border-destructive")}
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Message" error={errors.message}>
          <Textarea
            id="contact-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={cn(fieldClass, "h-auto min-h-36 py-3", errors.message && "border-destructive")}
            placeholder="Tell me about the role or project…"
          />
        </Field>
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="mt-5 flex gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <p className="text-foreground">
            Your message couldn't be sent ({errorMsg}). Please try again, or email me directly at{" "}
            <a href={`mailto:${site.email}`} className="text-primary-glow underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">Goes straight to my inbox.</p>
        <Button type="submit" variant="accent" size="lg" disabled={sending}>
          {sending ? <Loader2 className="animate-spin" /> : <Send />}
          {sending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={`contact-${id}`} className="font-mono text-xs text-muted-foreground">
        {label}
      </Label>
      {children}
      {error ? (
        <p id={`contact-${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
