export type Project = {
  slug: string;
  no: string;
  title: string;
  kicker: string;
  discipline: string;
  year: string;
  art: 'bible' | 'yard' | 'veld' | 'industrial' | 'alder';
  description: string;
  status: string;
  scope: string;
  challenge: string;
  response: string;
  evidence: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'bible-illuminated',
    no: '01',
    title: 'Bible Illuminated',
    kicker: 'An enduring reading experience',
    discipline: 'Digital product / typography',
    year: '2026',
    art: 'bible',
    description: 'A considered approach to reading an enduring text: digital typography, simple navigation and offline-first access.',
    status: 'Built project · case study in progress',
    scope: 'Scripture reading experience, navigation and offline-oriented product design.',
    challenge: 'How might a rich, historically significant text feel clear and approachable on a modern screen without unnecessary visual noise?',
    response: 'Prioritise legibility, a restrained typographic hierarchy, clear navigation and an interface that lets the text take precedence.',
    evidence: 'Add authenticated screenshots, reading states and a short explanation of iteration choices.',
    tags: ['Interface', 'Typography', 'Offline-first']
  },
  {
    slug: 'yard-proof',
    no: '02',
    title: 'YARD//PROOF',
    kicker: 'Design for the conditions of work',
    discipline: 'Experience / systems',
    year: '2026',
    art: 'yard',
    description: 'A field evidence workflow designed around capture, verification and reliable records in a busy logistics environment.',
    status: 'Product development · sensitive operational material',
    scope: 'Field-worker capture flow, geolocation feedback, exception states and evidence handover.',
    challenge: 'How can a fast-moving team produce consistent records when time, connectivity and operating conditions are constrained?',
    response: 'Design deliberate capture steps, legible verification states and explicit exception handling so that each record has a comprehensible path.',
    evidence: 'Use only anonymised diagrams, reconstructed screens and authorised photographs. Do not publish client or operational data.',
    tags: ['Mobile', 'Human factors', 'Workflow']
  },
  {
    slug: 'veld-life',
    no: '03',
    title: 'VELD//LIFE',
    kicker: 'Experimenting in public',
    discipline: 'Creative technology',
    year: '2026',
    art: 'veld',
    description: 'An exploratory digital experience where visual systems, interaction and computation become the medium.',
    status: 'Experimental work · documentation in progress',
    scope: 'Interactive and generative visual exploration.',
    challenge: 'What happens when rules, motion and interaction create the visual language rather than decorating a fixed composition?',
    response: 'Treat the browser as a canvas for experimentation, making the underlying behaviour part of the design.',
    evidence: 'Add a verified live demonstration, source excerpts and short screen recordings.',
    tags: ['Creative code', 'Interaction', 'Experiment']
  },
  {
    slug: 'industrial-interfaces',
    no: '04',
    title: 'Industrial Interfaces',
    kicker: 'Clarity when it matters',
    discipline: 'Industrial / information design',
    year: 'Selected experience',
    art: 'industrial',
    description: 'Human-centred thinking applied to operator screens, controls and the visual language of engineered systems.',
    status: 'Experience overview · representative illustrations',
    scope: 'Interface hierarchy, state visibility, operational workflows and system feedback.',
    challenge: 'Present essential information quickly and consistently in environments where ambiguity has real consequences.',
    response: 'Focus on contrast, structure, state semantics, alarms and how information is prioritised for the operator.',
    evidence: 'Include only reconstructed examples or specifically approved project artefacts, without proprietary interfaces.',
    tags: ['HMI', 'Information', 'Safety']
  },
  {
    slug: 'alder-and-vale',
    no: '05',
    title: 'Alder & Vale',
    kicker: 'An exercise in restraint',
    discipline: 'Art direction / identity',
    year: 'Concept study',
    art: 'alder',
    description: 'A fictional brand identity study exploring editorial composition, typographic confidence and a premium digital presence.',
    status: 'Fictional concept · not a client commission',
    scope: 'Fictional brand direction and website visual study.',
    challenge: 'Build a coherent premium identity using simple visual ingredients rather than ornament for its own sake.',
    response: 'Use typography, generous space and a small, consistent design vocabulary to make the brand recognisable.',
    evidence: 'Present concept sketches, comparisons and the final design; identify the work as self-initiated.',
    tags: ['Identity', 'Art direction', 'Concept']
  }
];
