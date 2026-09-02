interface Env { ASSETS: { fetch(request: Request): Promise<Response> } }

const text = `TYSON BARNES
────────────────────────────────────────

ENGINEERING THE PHYSICAL & DIGITAL WORLD.

South Africa / United Kingdom

WORK

TB–001   Bible Terminal
TB–002   Bible Illuminated
TB–003   Galaxy Linux
TB–004   Field Terminal

SOURCE
github.com/Neclonesoul

WEB
tysonbarnes.co.uk

────────────────────────────────────────
TB–000
`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/field/' || path === '/field') {
      return Response.redirect(`${url.origin}/notes/`, 301);
    }

    if (path === '/field/rss.xml') {
      return Response.redirect(`${url.origin}/rss.xml`, 301);
    }

    if (path.startsWith('/field/')) {
      const suffix = path.slice('/field/'.length);
      return Response.redirect(`${url.origin}/notes/${suffix}`, 301);
    }

    if (path === '/work/' || path === '/work') {
      return Response.redirect(`${url.origin}/systems/`, 301);
    }

    if (path.startsWith('/work/')) {
      const suffix = path.slice('/work/'.length);
      return Response.redirect(`${url.origin}/systems/${suffix}`, 301);
    }

    const accept = request.headers.get('accept') ?? '';
    const agent = request.headers.get('user-agent') ?? '';
    const wantsText = accept.includes('text/plain') || /^(curl|wget|httpie)\//i.test(agent);
    if (wantsText && path === '/') {
      return new Response(text, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=300' } });
    }
    return env.ASSETS.fetch(request);
  }
};
