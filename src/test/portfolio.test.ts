import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { filterProjects, projects } from "@/data/projects";
import { contactSchema, resolveFormTarget } from "@/lib/contact";

const titles = (c: Parameters<typeof filterProjects>[1]) =>
  filterProjects(projects, c).map((p) => p.title);

describe("project filter", () => {
  it("All shows every project", () => {
    expect(titles("All")).toEqual(["ProConnect", "Modern Tech", "ShopWise"]);
  });
  it("QA shows only ShopWise", () => {
    expect(titles("QA")).toEqual(["ShopWise"]);
  });
  it("Database shows ProConnect and Modern Tech", () => {
    expect(titles("Database")).toEqual(["ProConnect", "Modern Tech"]);
  });
  it("Frontend shows ProConnect and ShopWise", () => {
    expect(titles("Frontend")).toEqual(["ProConnect", "ShopWise"]);
  });
});

describe("contact form validation", () => {
  it("rejects an invalid email", () => {
    const r = contactSchema.safeParse({ name: "Ann", email: "nope", message: "Hello there friend" });
    expect(r.success).toBe(false);
  });
  it("rejects an empty message", () => {
    const r = contactSchema.safeParse({ name: "Ann", email: "a@b.co", message: "" });
    expect(r.success).toBe(false);
  });
  it("accepts a complete message", () => {
    const r = contactSchema.safeParse({ name: "Ann", email: "a@b.co", message: "Hello there friend" });
    expect(r.success).toBe(true);
  });
  it("treats a URL as Formspree and a bare key as Web3Forms", () => {
    expect(resolveFormTarget("https://formspree.io/f/abc")?.kind).toBe("formspree");
    expect(resolveFormTarget("abc-123")?.kind).toBe("web3forms");
    expect(resolveFormTarget("")).toBeNull();
  });
});

describe("privacy", () => {
  it("no phone number appears in site content", () => {
    const files: string[] = [];
    const walk = (dir: string) => {
      for (const f of readdirSync(dir)) {
        const p = join(dir, f);
        if (statSync(p).isDirectory()) walk(p);
        else if (/\.(tsx?|ts)$/.test(f)) files.push(p);
      }
    };
    walk(join(process.cwd(), "src/data"));
    walk(join(process.cwd(), "src/components/portfolio"));
    // SA mobile formats: +27 xx xxx xxxx or 0xx xxx xxxx
    const phone = /(\+27|\b0)[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{4}\b/;
    for (const f of files) expect(readFileSync(f, "utf8")).not.toMatch(phone);
  });
});
