import { getCollection } from 'astro:content';
import { sortProjects, toPublicProject } from '@/lib/projects';

export async function GET() {
  const projects = sortProjects(await getCollection('projects')).map(toPublicProject);
  return new Response(JSON.stringify({ site: 'TB–000', updated: '2026-08-21', projects }, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=3600' }
  });
}
