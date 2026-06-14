import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type LivePost = {
  slug: string;
  date: string;
  label: string;
  venue: string;
  photos: string[];
  content: string;
};

const LIVES_DIR = path.join(process.cwd(), "content/lives");

export function getAllLives(): LivePost[] {
  if (!fs.existsSync(LIVES_DIR)) return [];

  return fs
    .readdirSync(LIVES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(LIVES_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        date: data.date ?? slug,
        label: data.label ?? slug,
        venue: data.venue ?? "",
        photos: data.photos ?? [],
        content: content.trim(),
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
