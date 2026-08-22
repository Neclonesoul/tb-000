import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/lib/site';

export async function GET(context: { site?: URL }) {
  const records = (await getCollection('field')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Tyson Barnes / Field Records', description: 'Field notes from Africa.', site: context.site ?? new URL(SITE.url),
    items: records.map((record) => ({ title: `${record.data.id} / ${record.data.title}`, description: `${record.data.category} — ${record.data.location}`, pubDate: record.data.date, link: `/field/${record.id}/` }))
  });
}
