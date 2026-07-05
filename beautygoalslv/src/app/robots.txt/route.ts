export const GET = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://beautygoalslv.com/sitemap.xml",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
