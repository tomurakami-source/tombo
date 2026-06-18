import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type LivePost = {
  slug: string;
  date: string;
  label: string;
  venue: string;
  address?: string;
  openTime?: string;
  startTime?: string | null;
  price?: number;
  discount?: number;
  photos: string[];
  content: string;
};

const LIVES_DIR = path.join(process.cwd(), "content/lives");

function loadAllLives(): LivePost[] {
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
        address: data.address,
        openTime: data.openTime,
        startTime: data.startTime,
        price: data.price,
        discount: data.discount,
        photos: data.photos ?? [],
        content: content.trim(),
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getCurrentLive(): LivePost | null {
  const lives = loadAllLives();
  return lives.length > 0 ? lives[0] : null;
}

export function getArchivedLives(): LivePost[] {
  const lives = loadAllLives();
  return lives.slice(1);
}

export function getAllLives(): LivePost[] {
  return loadAllLives();
}
