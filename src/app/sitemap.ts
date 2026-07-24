import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skytrustinc.com';

  const routes = [
    '',
    '/services',
    '/services/software-development',
    '/services/system-management',
    '/services/cloud-architecture',
    '/services/data-analytics',
    '/services/devops-automation',
    '/services/api-integration',
    '/services/network-security',
    '/services/cloud-security',
    '/services/compliance-consulting',
    '/services/threat-monitoring',
    '/services/penetration-testing',
    '/services/incident-response',
    '/solutions',
    '/solutions/small-business',
    '/solutions/enterprise',
    '/solutions/healthcare',
    '/solutions/finance',
    '/solutions/government',
    '/about/company',
    '/about/team',
    '/about/careers',
    '/about/certifications',
    '/pricing',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/security-disclosure',
    '/resources/blog',
    '/resources/case-studies',
    '/resources/whitepapers',
    '/resources/glossary',
    '/resources/faq',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));
}
