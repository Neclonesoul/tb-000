import type { CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;
export type PublicProject = ReturnType<typeof toPublicProject>;

export function sortProjects(projects: ProjectEntry[]) {
  return [...projects].sort((a, b) => a.data.order - b.data.order);
}

export function toPublicProject(project: ProjectEntry) {
  const { relationships, ...data } = project.data;
  return {
    ...data,
    href: `/systems/${data.slug}/`,
    relationships: relationships.map((item) => item.id)
  };
}
