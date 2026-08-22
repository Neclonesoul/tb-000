import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/lib/site';

export async function GET(context: { site?: URL }) {
  const notes = (await getCollection('notes')).filter((note) => !note.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Tyson Barnes / Notes', description: 'Technical notes from TB–000.', site: context.site ?? new URL(SITE.url),
    items: notes.map((note) => ({ title: note.data.title, description: note.data.description, pubDate: note.data.date, link: `/notes/${note.id}/` }))
  });
}
