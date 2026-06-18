export type ExperimentStatus = "active" | "observing" | "paused" | "closed";

export type ExperimentSection = {
  title: string;
  body: string;
};

export type Experiment = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  hypothesis: string;
  status: ExperimentStatus;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  sections: ExperimentSection[];
};

export const experiments: Experiment[] = [
  {
    slug: "spinfall",
    name: "Spinfall",
    tagline: "A falling-block puzzle study about rhythm, pressure, and recovery.",
    description:
      "Spinfall explores whether a familiar arcade loop can feel newly legible when the core tension is framed around controlled collapse instead of pure speed.",
    hypothesis:
      "Players will return more often when failure feels like a readable system to investigate, not a punishment to endure.",
    status: "active",
    primaryCtaLabel: "Review the Study",
    primaryCtaHref: "/experiments/spinfall",
    sections: [
      {
        title: "Question",
        body: "Can a compact puzzle format create enough strategic texture through timing, gravity, and recovery choices?",
      },
      {
        title: "Signal",
        body: "Early sessions should reveal whether players describe the game in terms of patterns they are learning rather than scores they are chasing.",
      },
      {
        title: "Next Test",
        body: "Prototype a short-session loop with replayable seeds, then compare completion intent against frustration drop-off.",
      },
    ],
  },
  {
    slug: "garbage-tycoon",
    name: "Garbage Tycoon",
    tagline: "A systems game about waste, route density, and strange little economies.",
    description:
      "Garbage Tycoon tests whether mundane municipal logistics can become compelling when players discover profit inside constraints, inefficiency, and timing.",
    hypothesis:
      "A resource-management game can stand out if the fantasy is grounded in overlooked infrastructure instead of abstract empire building.",
    status: "observing",
    primaryCtaLabel: "Inspect the Notes",
    primaryCtaHref: "/experiments/garbage-tycoon",
    sections: [
      {
        title: "Question",
        body: "Will players find satisfaction in optimizing an unglamorous system when the feedback is precise and visible?",
      },
      {
        title: "Signal",
        body: "The strongest signal is spontaneous route planning: players sketching better loops before the game asks them to.",
      },
      {
        title: "Next Test",
        body: "Run a paper prototype around neighborhood density, truck capacity, contamination penalties, and contract timing.",
      },
    ],
  },
  {
    slug: "vacuum-truck",
    name: "Vacuum Truck",
    tagline: "A field-service simulation about suction, terrain, and messy constraints.",
    description:
      "Vacuum Truck investigates whether tactile industrial work can become a satisfying simulation through physics-like feedback and careful job planning.",
    hypothesis:
      "Players who enjoy work simulations will respond to specialized machinery when each job creates a distinct spatial and procedural puzzle.",
    status: "paused",
    primaryCtaLabel: "Open the Field Log",
    primaryCtaHref: "/experiments/vacuum-truck",
    sections: [
      {
        title: "Question",
        body: "Is the appeal of the machine strong enough before adding broader business-management systems?",
      },
      {
        title: "Signal",
        body: "Useful evidence would show players caring about hose placement, access angles, and cleanup quality without being prompted.",
      },
      {
        title: "Next Test",
        body: "Build a single-location interaction prototype focused on reach, flow rate, obstruction, and visible progress.",
      },
    ],
  },
];

export function getExperimentBySlug(slug: string) {
  return experiments.find((experiment) => experiment.slug === slug);
}
