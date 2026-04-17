import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Work, WorkMedium, WorkStatus } from "@/types/work";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DB_ID = process.env.NOTION_WORKS_DB_ID!;

function getText(page: PageObjectResponse, key: string): string | null {
  const prop = page.properties[key];
  if (!prop) return null;
  if (prop.type === "rich_text") return prop.rich_text[0]?.plain_text ?? null;
  if (prop.type === "title") return prop.title[0]?.plain_text ?? null;
  if (prop.type === "url") return prop.url;
  return null;
}

function getNumber(page: PageObjectResponse, key: string): number | null {
  const prop = page.properties[key];
  if (prop?.type === "number") return prop.number;
  return null;
}

function getCheckbox(page: PageObjectResponse, key: string): boolean {
  const prop = page.properties[key];
  if (prop?.type === "checkbox") return prop.checkbox;
  return false;
}

function getMultiSelect(page: PageObjectResponse, key: string): string[] {
  const prop = page.properties[key];
  if (prop?.type === "multi_select") return prop.multi_select.map((o) => o.name);
  return [];
}

function getSelect(page: PageObjectResponse, key: string): string | null {
  const prop = page.properties[key];
  if (prop?.type === "select") return prop.select?.name ?? null;
  return null;
}

function getFile(page: PageObjectResponse, key: string): string | null {
  const prop = page.properties[key];
  if (prop?.type === "files" && prop.files.length > 0) {
    const f = prop.files[0];
    if (f.type === "external") return f.external.url;
    if (f.type === "file") return f.file.url;
  }
  return null;
}

function parseWork(page: PageObjectResponse): Work {
  const mediaRaw = getText(page, "Media URLs");
  const mediaUrls = mediaRaw
    ? mediaRaw.split("\n").map((u) => u.trim()).filter(Boolean)
    : [];

  return {
    id: page.id,
    title: getText(page, "Title") ?? "Untitled",
    slug: getText(page, "Slug") ?? page.id,
    cover: getFile(page, "Cover"),
    thumbnail: getFile(page, "Thumbnail"),
    medium: getMultiSelect(page, "Medium") as WorkMedium[],
    year: getNumber(page, "Year"),
    client: getText(page, "Client"),
    role: getText(page, "Role"),
    tools: getMultiSelect(page, "Tools"),
    summary: getText(page, "Summary"),
    challenge: getText(page, "Challenge"),
    approach: getText(page, "Approach"),
    solution: getText(page, "Solution"),
    outcome: getText(page, "Outcome"),
    mediaUrls,
    externalLink: getText(page, "External Link"),
    featured: getCheckbox(page, "Featured"),
    status: (getSelect(page, "Status") ?? "Draft") as WorkStatus,
    order: getNumber(page, "Order") ?? 0,
  };
}

export async function getAllWorks(
  options: { featuredOnly?: boolean } = {}
): Promise<Work[]> {
  const filter: Parameters<typeof notion.databases.query>[0]["filter"] = {
    property: "Status",
    select: { equals: "Published" },
  };

  const featuredFilter = options.featuredOnly
    ? {
        and: [
          filter,
          { property: "Featured", checkbox: { equals: true } },
        ],
      }
    : filter;

  const response = await notion.databases.query({
    database_id: DB_ID,
    filter: featuredFilter as Parameters<typeof notion.databases.query>[0]["filter"],
    sorts: [
      { property: "Order", direction: "descending" },
      { property: "Year", direction: "descending" },
    ],
  });

  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page" && "properties" in p)
    .map(parseWork);
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  const response = await notion.databases.query({
    database_id: DB_ID,
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Status", select: { equals: "Published" } },
      ],
    },
  });

  const page = response.results[0];
  if (!page || !("properties" in page)) return null;
  return parseWork(page as PageObjectResponse);
}

export async function getAllSlugs(): Promise<string[]> {
  const works = await getAllWorks();
  return works.map((w) => w.slug);
}
