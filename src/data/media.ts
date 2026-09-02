export type MediaRecord = {
  src: string;
  alt: string;
  caption?: string;
  href?: string;
  demoHref?: string;
};

const projectMedia: Record<string, MediaRecord> = {
  archmac: {
    src: '/media/curated/archmac-02.png',
    alt: 'ARCHMAC sovereign Linux workstation',
    caption: 'ARCHMAC / SOVEREIGN WORKSTATION'
  },
  web: {
    src: '/media/curated/web-01.webp',
    alt: 'WEB live web engineering project',
    caption: 'WEB / LIVE SYSTEM',
    href: 'https://web.tysonbarnes.co.uk',
    demoHref: 'https://demo.tysonbarnes.co.uk'
  },
  'sa-public-api-observatory': {
    src: '/media/curated/api-observatory-01.webp',
    alt: 'SA Public API Observatory interface',
    caption: 'SA PUBLIC API OBSERVATORY'
  },
  'veld-life': {
    src: '/media/curated/veld-life-01.webp',
    alt: 'VELD LIFE African cellular automata experiment',
    caption: 'VELD//LIFE / LIVE EXPERIMENT',
    href: 'https://veld-life.barnestyson.workers.dev/'
  }
};

const fieldMedia: readonly [MediaRecord, MediaRecord] = [
  {
    src: '/media/curated/field-galaxy.webp',
    alt: 'Field photographic record',
    caption: 'FIELD RECORD / GALAXY'
  },
  {
    src: '/media/curated/field-kjv1611.webp',
    alt: 'KJV 1611 field photographic record',
    caption: 'FIELD RECORD / KJV 1611'
  }
];

export const media = {
  hero: {
    src: '/media/curated/hero-01.webp',
    alt: 'Industrial engineering landscape at dusk'
  } satisfies MediaRecord,

  portrait: {
    src: '/media/curated/tyson-barnes.webp',
    alt: 'Portrait of Tyson Barnes'
  } satisfies MediaRecord,

  projects: projectMedia,
  field: fieldMedia
} as const;
