const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/artist/5s4BP2W6yy8n4ZlzB5Cqkt?utm_source=generator&theme=0";

const LINKS = {
  spotify: "https://open.spotify.com/artist/5s4BP2W6yy8n4ZlzB5Cqkt",
  appleMusic: "https://music.apple.com/jp/artist/1632351865",
};

export default function Discography() {
  return (
    <section id="discography" className="relative bg-[#060b18] py-24 px-4">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
          <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
            Discography
          </span>
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
        </div>
        <h2 className="mt-8 font-[var(--font-serif-ja)] text-2xl font-bold text-[#f5f0e8] md:text-3xl">
          発表作品
        </h2>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Spotify player */}
        <iframe
          src={SPOTIFY_EMBED_URL}
          width="100%"
          height="560"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="border-0 block"
          title="The Tonbo Bunch on Spotify"
        />

        {/* Streaming links */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#1db954]/30 px-5 py-3 transition-all hover:border-[#1db954] hover:bg-[#1db954]/10"
          >
            <svg className="h-5 w-5 text-[#1db954]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.1em] text-[#1db954]">Spotify</span>
          </a>
          <a
            href={LINKS.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#fc3c44]/30 px-5 py-3 transition-all hover:border-[#fc3c44] hover:bg-[#fc3c44]/10"
          >
            <svg className="h-5 w-5 text-[#fc3c44]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.064-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a5.494 5.494 0 00-.39 1.548c-.06.34-.077.684-.094 1.025 0 .068-.008.136-.012.204v11.99c.012.193.021.387.038.58.068.784.229 1.553.559 2.278.711 1.566 1.882 2.634 3.532 3.151.61.19 1.243.274 1.876.29.637.014 1.275.01 1.913.01h11.07c.552 0 1.1.009 1.652-.013.553-.023 1.102-.086 1.645-.25 1.637-.476 2.828-1.498 3.557-3.048.35-.745.524-1.536.588-2.349.014-.18.02-.36.028-.54.003-.065.009-.13.009-.196V6.319l-.001-.195zm-9.646 14.95c-1.07.036-1.93-.315-2.625-1.07-.637-.693-.914-1.542-.897-2.486.017-1.01.381-1.847 1.077-2.527.728-.713 1.617-1.037 2.638-.996 1.059.04 1.902.436 2.562 1.214.623.735.885 1.6.85 2.55-.04 1.02-.434 1.857-1.153 2.534-.71.67-1.572.986-2.452.78zm1.434-8.14c-.54.073-1.07.108-1.604.058-.8-.075-1.552-.3-2.25-.67-.108-.058-.143-.117-.14-.24.006-.48.003-.96.003-1.44V5.63c0-.23.053-.286.28-.318 1.17-.163 2.33-.34 3.5-.505.496-.07.994-.134 1.49-.201.036-.005.07-.005.143-.01v5.27c0 .48.005.96-.002 1.44-.003.158-.038.215-.196.23-.407.04-.817.063-1.224.098z"/>
            </svg>
            <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.1em] text-[#fc3c44]">Apple Music</span>
          </a>
        </div>
      </div>
    </section>
  );
}
