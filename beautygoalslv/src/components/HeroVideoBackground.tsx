type HeroVideoBackgroundProps = {
  videoId: string;
};

const YOUTUBE_VIDEO_ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/;

const buildEmbedUrl = (videoId: string): string => {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    cc_load_policy: "0",
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

const HeroVideoBackground = ({ videoId }: HeroVideoBackgroundProps) => {
  if (!YOUTUBE_VIDEO_ID_PATTERN.test(videoId)) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <iframe
        src={buildEmbedUrl(videoId)}
        title="Beauty Goals LV hero background video"
        className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/40 to-ink/20" />
    </div>
  );
};

export default HeroVideoBackground;
