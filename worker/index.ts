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
    const accept = request.headers.get('accept') ?? '';
    const agent = request.headers.get('user-agent') ?? '';
    const wantsText = accept.includes('text/plain') || /^(curl|wget|httpie)\//i.test(agent);
    if (wantsText && new URL(request.url).pathname === '/') {
      return new Response(text, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=300' } });
    }
    return env.ASSETS.fetch(request);
  }
};
