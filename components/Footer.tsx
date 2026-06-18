export default function Footer() {
  return (
    <footer className="relative border-t border-[#f97316]/20 bg-[#020617] px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
          The Tonbo Bunch
        </p>
        <p className="mt-2 font-[var(--font-serif-ja)] text-xs text-[#a89880]">
          Neo-Heisei Soul Rock
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <a
            href="https://twitter.com/the_tonbo_bunch"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#a89880] transition-colors hover:text-[#f97316]"
          >
            X (Twitter)
          </a>
          <a
            href="https://www.tiktok.com/@thetonbobunch"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#a89880] transition-colors hover:text-[#f97316]"
          >
            TikTok
          </a>
          <a
            href="https://www.instagram.com/the_tonbo_bunch/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#a89880] transition-colors hover:text-[#f97316]"
          >
            Instagram
          </a>
          <a
            href="https://youtu.be/kQqYu2FCxfo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#a89880] transition-colors hover:text-[#f97316]"
          >
            YouTube
          </a>
          <a
            href="https://open.spotify.com/artist/5s4BP2W6yy8n4ZlzB5Cqkt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#a89880] transition-colors hover:text-[#f97316]"
          >
            Spotify
          </a>
        </div>
        <p className="mt-8 text-xs text-[#a89880]/40">
          &copy; {new Date().getFullYear()} The Tonbo Bunch. All rights reserved.
        </p>
        <p className="mt-2 font-[var(--font-serif-ja)] text-xs italic text-[#a89880]/40">
          「技術は音楽を邪魔しない。むしろ、音楽を届けるための最高の懐中電灯になる。」
        </p>
      </div>
    </footer>
  );
}
