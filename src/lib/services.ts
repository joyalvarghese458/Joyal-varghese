// Service descriptions are grounded in the portfolio's project and experience collections.
export const services = [
  {
    id: 'erp-development',
    title: 'ERP & business tools',
    summary: 'Connected tools for the way your business works: inventory, HRMS, finance, approvals, and branch operations.',
    color: 'yellow',
    stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL'],
    includes: [
      'Custom dashboards and workflows for teams and branches',
      'Role-based permissions, approvals, and reporting',
      'Modules for inventory, procurement, HRMS, and finance',
    ],
    caseStudy: { slug: 'multi-branch-erp', title: 'Multi-Branch ERP' },
  },
  {
    id: 'web-applications',
    title: 'Web applications',
    summary: 'Responsive React and Next.js applications that make everyday tasks clear, from business dashboards to customer-facing websites.',
    color: 'blue',
    stack: ['React', 'Next.js', 'TypeScript', 'TanStack Query'],
    includes: [
      'Mobile-first interfaces and reusable components',
      'Forms, data tables, dashboards, and API integration',
      'Authentication and interfaces tailored to user roles',
    ],
    caseStudy: { slug: 'yasmac-erp', title: 'Yasmac ERP' },
  },
  {
    id: 'apis-and-databases',
    title: 'APIs & databases',
    summary: 'The backend behind the interface: structured APIs, connected business data, and access controls built around your application.',
    color: 'green',
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma'],
    includes: [
      'REST APIs and authentication with JWT',
      'Relational database design and query optimization',
      'Document storage and integrations for business workflows',
    ],
    caseStudy: { slug: 'ak-prefab-erp', title: 'AK Prefab ERP' },
  },
  {
    id: 'ecommerce-websites',
    title: 'E-commerce websites',
    summary: 'Storefronts that help customers discover your products, choose what they need, and get in touch from any screen.',
    color: 'pink',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    includes: [
      'Product catalogues, variants, and cart interactions',
      'Bulk-order enquiries and customer contact options',
      'Responsive layouts with performance and SEO in mind',
    ],
    caseStudy: { slug: 'highrange-flavours', title: 'Highrange Flavours' },
  },
] as const;
