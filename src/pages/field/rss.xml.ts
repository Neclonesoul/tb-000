export const prerender = true;

export function GET() {
  return Response.redirect(
    'https://tysonbarnes.co.uk/rss.xml',
    301
  );
}
