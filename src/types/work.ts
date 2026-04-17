export type WorkMedium =
  | "3D Animation"
  | "3D Render"
  | "Web Design"
  | "Graphic"
  | "Video"
  | "Photography";

export type WorkStatus = "Draft" | "Published";

export interface Work {
  id: string;
  title: string;
  slug: string;
  cover: string | null;
  thumbnail: string | null;
  medium: WorkMedium[];
  year: number | null;
  client: string | null;
  role: string | null;
  tools: string[];
  summary: string | null;
  challenge: string | null;
  approach: string | null;
  solution: string | null;
  outcome: string | null;
  mediaUrls: string[];
  externalLink: string | null;
  featured: boolean;
  status: WorkStatus;
  order: number;
}
