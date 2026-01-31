// Portfolio Data - Jorge de los Santos (tebayoso)
// Comprehensive data for animated portfolio

export interface TimelineEvent {
  date: string;
  title: string;
  company?: string;
  description: string;
  emoji: string;
  tags: string[];
  type: 'career' | 'milestone' | 'education';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'archived' | 'maintained';
  icon: string;
  tech: string[];
  commits?: number;
  highlights: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Philosophy {
  icon: string;
  title: string;
  description: string;
}

export interface Recognition {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

// =================================
// PERSONAL INFO
// =================================

export const personalInfo = {
  name: 'Jorge de los Santos',
  handle: '@tebayoso',
  title: 'Software Architect',
  subtitle: 'Platform Engineer • Blockchain Developer • AI Builder',
  tagline: 'Building fast, failing faster',
  location: 'Barcelona, Spain • Originally from Tandil, Argentina',
  email: 'jorge@pox.me',
  yearsExperience: 12,
  linesOfCode: '4.8M+',
  languages: ['Spanish (Native)', 'Catalan (Native)', 'English (Professional)'],
};

// =================================
// TIMELINE DATA
// =================================

export const timelineEvents: TimelineEvent[] = [
  {
    date: 'October 2012',
    title: 'The Transformation Begins',
    description: 'Made the bold decision to leave construction work and pursue my passion for software development. Started learning to code intensively, driven by curiosity and determination.',
    emoji: '🏗️',
    tags: ['Career Change', 'Self-taught', 'Ruby'],
    type: 'milestone',
  },
  {
    date: 'October 2013',
    title: 'First Software Engineering Job',
    description: 'Landed my first professional role as a software developer. Proved that dedication and self-learning could compete with traditional education.',
    emoji: '💼',
    tags: ['Ruby', 'Rails', 'Professional'],
    type: 'career',
  },
  {
    date: '2013-2015',
    title: 'Computer Engineering Studies',
    company: 'Universidad Nacional del Centro',
    description: 'Pursued formal education in computer engineering while working. Built a strong theoretical foundation in mathematics, algorithms, and software architecture.',
    emoji: '🎓',
    tags: ['Education', 'Algorithms', 'Computer Science'],
    type: 'education',
  },
  {
    date: 'April 2015',
    title: 'Semi Senior Developer at Globant',
    company: 'Globant',
    description: 'Joined one of Latin America\'s largest tech companies. Worked on enterprise projects and received the Annual Recognition Award for ethical conduct and social project participation.',
    emoji: '🌟',
    tags: ['Enterprise', 'Ruby on Rails', 'Award'],
    type: 'career',
  },
  {
    date: 'September 2018',
    title: 'Engineering Manager at Michelin',
    company: 'Michelin North America',
    description: 'Took on leadership responsibilities managing engineering teams for a Fortune 500 company. Led digital transformation initiatives and optimized critical systems.',
    emoji: '🚀',
    tags: ['Leadership', 'Management', 'Enterprise'],
    type: 'career',
  },
  {
    date: 'October 2020',
    title: 'Founded Euler Tools',
    company: 'Euler Tools',
    description: 'Co-founded a blockchain analytics startup. Built a comprehensive data pipeline processing millions of blockchain transactions. Managed 100+ microservices across multiple chains.',
    emoji: '🏆',
    tags: ['Founder', 'Blockchain', 'Web3', 'DeFi'],
    type: 'career',
  },
  {
    date: '2022-2024',
    title: 'AI & Blockchain Consulting',
    company: 'Various Clients',
    description: 'Provided strategic consulting for enterprises adopting AI and blockchain technologies. Trained professionals at universities and companies in generative AI applications.',
    emoji: '🤖',
    tags: ['AI', 'Consulting', 'Training'],
    type: 'career',
  },
  {
    date: '2024-Present',
    title: 'Building the Future',
    company: 'Metalab / Sinequix',
    description: 'Currently architecting AI-powered solutions and open-source tools. Focus on developer experience, automation, and making complex technology accessible.',
    emoji: '⚡',
    tags: ['AI Agents', 'Open Source', 'DevEx'],
    type: 'career',
  },
];

// =================================
// PROJECTS DATA
// =================================

export const projects: Project[] = [
  {
    id: 'opencode',
    title: 'OpenCode',
    description: 'AI coding agent with multi-platform support. Full-stack monorepo with Turbo, featuring web UI (Solid.js), desktop app (Tauri), Slack integration, and enterprise features.',
    status: 'active',
    icon: '🤖',
    tech: ['TypeScript', 'Bun', 'Solid.js', 'Tauri', 'Hono'],
    commits: 6946,
    highlights: [
      '19+ workspace packages',
      'MCP protocol support',
      'Cross-platform (web, desktop, serverless)',
    ],
  },
  {
    id: 'system',
    title: 'SYSTEM',
    description: 'Mac AI control agent enabling natural language control of your entire computer. 30+ specialized tools including media, system, messaging, and browser automation.',
    status: 'active',
    icon: '🖥️',
    tech: ['TypeScript', 'Node.js', 'AppleScript', 'MCP'],
    commits: 20,
    highlights: [
      'Vision capabilities (screenshot analysis)',
      'iMessage integration',
      'Raycast extension support',
    ],
  },
  {
    id: 'arganan',
    title: 'Arganan',
    description: 'Personal finance platform based on Maybe Finance. Complete multi-currency, multi-organization financial management with AI-powered insights.',
    status: 'active',
    icon: '💰',
    tech: ['Ruby on Rails', 'PostgreSQL', 'Hotwire', 'D3.js'],
    commits: 1492,
    highlights: [
      '124 domain models',
      'Real-time bank sync (Plaid)',
      'AI financial advisor',
    ],
  },
  {
    id: 'omnicost',
    title: 'OmniCost',
    description: 'AI-powered construction cost estimation SaaS. Polyglot monorepo with 3 frontend apps and 7 Python microservices for automated pricing.',
    status: 'active',
    icon: '🏗️',
    tech: ['Next.js', 'Python', 'Supabase', 'AWS Lambda'],
    highlights: [
      '466K+ BC3 products indexed',
      'Multi-vendor price aggregation',
      'E-commerce scraping pipeline',
    ],
  },
  {
    id: 'awslogin',
    title: '@proofxme/awslogin',
    description: 'AWS authentication CLI tool published on npm. Smart SSO detection, cross-account access, 1Password integration, and 100x faster profile listing.',
    status: 'maintained',
    icon: '🔐',
    tech: ['Node.js', 'Inquirer.js', 'AWS SDK'],
    commits: 23,
    highlights: [
      'Published on npm',
      '1Password TOTP integration',
      'Multi-account support',
    ],
    link: 'https://npmjs.com/package/@proofxme/awslogin',
  },
  {
    id: 'euler',
    title: 'Euler Tools',
    description: 'Blockchain analytics platform with 100+ independent projects. Smart contracts, DeFi bots, data pipelines, and multi-chain support.',
    status: 'archived',
    icon: '⛓️',
    tech: ['React', 'Solidity', 'AWS', 'Kinesis', 'PostgreSQL'],
    highlights: [
      '100+ microservices',
      'Multi-chain (ETH, BSC, Polygon)',
      'Real-time blockchain data',
    ],
  },
];

// =================================
// SKILLS DATA
// =================================

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💬',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'Ruby', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Solidity', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Bash', level: 85 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Ruby on Rails', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'Express/Hono', level: 88 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Redis', level: 85 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Solid.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Hotwire/Turbo', level: 85 },
    ],
  },
  {
    title: 'Infrastructure',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 92 },
      { name: 'Docker', level: 88 },
      { name: 'Terraform', level: 75 },
      { name: 'Cloudflare', level: 85 },
      { name: 'GitHub Actions', level: 90 },
    ],
  },
  {
    title: 'AI & Blockchain',
    icon: '🤖',
    skills: [
      { name: 'LLM APIs (Claude, GPT)', level: 90 },
      { name: 'MCP Protocol', level: 88 },
      { name: 'Smart Contracts', level: 82 },
      { name: 'Web3.js/Ethers', level: 80 },
      { name: 'AI Agents', level: 85 },
    ],
  },
];

// =================================
// PHILOSOPHY DATA
// =================================

export const philosophies: Philosophy[] = [
  {
    icon: '⚡',
    title: 'Build Fast, Learn Faster',
    description: 'Ship early, gather feedback, iterate relentlessly. The best code is written after you understand the real problem, not before.',
  },
  {
    icon: '🎯',
    title: 'Evidence Over Assumptions',
    description: 'Measure before optimizing. Every technical decision should be backed by data, testing, or documented reasoning.',
  },
  {
    icon: '🧩',
    title: 'Simplicity is Sophistication',
    description: 'The best solutions are the simplest ones that work. Complex systems emerge from simple, well-composed parts.',
  },
  {
    icon: '🤝',
    title: 'Teach While Building',
    description: 'Knowledge shared is knowledge multiplied. Document decisions, mentor others, and create systems that educate.',
  },
  {
    icon: '🛡️',
    title: 'Security by Default',
    description: 'Never compromise on security. Encrypt secrets, validate inputs, and assume every external system is hostile.',
  },
  {
    icon: '🔄',
    title: 'Embrace Change',
    description: 'Technology evolves rapidly. Stay curious, experiment with new tools, and be willing to unlearn outdated patterns.',
  },
];

// =================================
// RECOGNITION DATA
// =================================

export const recognitions: Recognition[] = [
  {
    icon: '🏅',
    title: 'Globant Annual Recognition',
    description: 'Ethical conduct & social projects (2014)',
  },
  {
    icon: '🐙',
    title: 'Pull Shark x4',
    description: 'GitHub achievement for merged PRs',
  },
  {
    icon: '👥',
    title: 'Pair Extraordinaire x4',
    description: 'GitHub collaborative coding achievement',
  },
  {
    icon: '❄️',
    title: 'Arctic Code Vault',
    description: 'Code preserved in Arctic for 1000 years',
  },
  {
    icon: '📚',
    title: 'Stack Exchange Contributor',
    description: 'Active community knowledge sharing',
  },
  {
    icon: '💝',
    title: 'Public Sponsor',
    description: 'Supporting open source development',
  },
];

// =================================
// STATS DATA
// =================================

export const stats: Stat[] = [
  {
    value: '12+',
    label: 'Years Coding',
    sublabel: 'Since 2012',
  },
  {
    value: '4.8M+',
    label: 'Lines Written',
    sublabel: 'And counting',
  },
  {
    value: '8.5K+',
    label: 'Commits',
    sublabel: 'Across projects',
  },
  {
    value: '100+',
    label: 'Microservices',
    sublabel: 'Built & deployed',
  },
];

// =================================
// SOCIAL LINKS
// =================================

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/tebayoso',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tebayoso',
    icon: 'linkedin',
  },
  {
    name: 'Twitter/X',
    url: 'https://twitter.com/tebayoso',
    icon: 'twitter',
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackexchange.com/users/3008237',
    icon: 'stackoverflow',
  },
];

export const scheduleUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2yTLITzvwnkrprJtAhdCqih8hGBMLDlczBLqS5WPUJtdDvUqA5wE4O8xr_riU3kpJ5jOkHOvzq?gv=true';
