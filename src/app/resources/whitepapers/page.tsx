import { Metadata } from 'next';
import Link from 'next/link';
import { Download, FileText, ArrowRight, Shield, Cloud, Lock, AlertTriangle } from 'lucide-react';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Whitepapers.module.css';

export const metadata: Metadata = {
  title: 'Security Whitepapers & Research | SkyTrust Inc.',
  description: 'Download in-depth security research, compliance guides, and technical whitepapers authored by the SkyTrust security team.',
};

const whitepapers = [
  {
    slug: 'zero-trust-implementation-guide-2025',
    title: 'Zero Trust Architecture: Implementation Guide 2025',
    category: 'Architecture',
    icon: Shield,
    pages: 42,
    date: 'July 2025',
    excerpt: 'A comprehensive technical guide to designing, deploying, and operating a Zero Trust security architecture for enterprise environments. Covers identity, device, network, application, and data pillars.',
    tags: ['Zero Trust', 'IAM', 'Network Security'],
  },
  {
    slug: 'cloud-security-posture-management',
    title: 'CSPM in Practice: Securing Multi-Cloud Environments',
    category: 'Cloud Security',
    icon: Cloud,
    pages: 28,
    date: 'June 2025',
    excerpt: 'How to implement effective Cloud Security Posture Management across AWS, Azure, and GCP. Includes a 50-point misconfiguration checklist and automated remediation strategies.',
    tags: ['Cloud', 'CSPM', 'AWS', 'Azure', 'GCP'],
  },
  {
    slug: 'soc2-type2-complete-guide',
    title: 'SOC 2 Type II: The Complete Practitioner\'s Guide',
    category: 'Compliance',
    icon: FileText,
    pages: 56,
    date: 'May 2025',
    excerpt: 'Everything your team needs to achieve SOC 2 Type II certification. From selecting a Trust Service Criteria scope to managing evidence collection and working with auditors.',
    tags: ['SOC 2', 'Compliance', 'Audit'],
  },
  {
    slug: 'ransomware-defense-playbook',
    title: 'Ransomware Defense Playbook: Before, During & After',
    category: 'Incident Response',
    icon: AlertTriangle,
    pages: 34,
    date: 'April 2025',
    excerpt: 'A tactical playbook for defending against ransomware at every stage of an attack. Includes IR runbooks, backup strategies, negotiation guidance, and a recovery framework.',
    tags: ['Ransomware', 'IR', 'Backup', 'Recovery'],
  },
  {
    slug: 'devsecops-maturity-model',
    title: 'DevSecOps Maturity Model: From Ad-Hoc to Automated',
    category: 'DevSecOps',
    icon: Lock,
    pages: 38,
    date: 'March 2025',
    excerpt: 'A five-level maturity model for integrating security into your software delivery lifecycle. Actionable benchmarks, tooling recommendations, and a 90-day roadmap.',
    tags: ['DevSecOps', 'CI/CD', 'SAST', 'DAST'],
  },
  {
    slug: 'hipaa-security-rule-2025',
    title: 'HIPAA Security Rule 2025: What\'s Changed & Your Action Plan',
    category: 'Compliance',
    icon: FileText,
    pages: 22,
    date: 'February 2025',
    excerpt: 'A focused analysis of the 2025 HIPAA Security Rule amendments with a practical, prioritized action plan for covered entities and business associates.',
    tags: ['HIPAA', 'Healthcare', 'Compliance'],
  },
];

const categoryColors: Record<string, string> = {
  Architecture: 'var(--accent)',
  'Cloud Security': 'var(--accent)',
  Compliance: '#a78bfa',
  'Incident Response': '#f87171',
  DevSecOps: '#34d399',
};

export default function WhitepapersPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className="section-label">Knowledge Base</div>
          <h1 className={styles.title}>Security Whitepapers & Research</h1>
          <p className={styles.subtitle}>
            In-depth technical guides, compliance frameworks, and threat research authored by the SkyTrust security team. Free to download.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {whitepapers.map((wp) => {
              const Icon = wp.icon;
              const color = categoryColors[wp.category] || 'var(--accent)';
              return (
                <article key={wp.slug} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap} style={{ color }}>
                      <Icon size={24} />
                    </div>
                    <span className={styles.category} style={{ color }}>{wp.category}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{wp.title}</h2>
                  <p className={styles.cardExcerpt}>{wp.excerpt}</p>
                  <div className={styles.tags}>
                    {wp.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.meta}>{wp.pages} pages · {wp.date}</span>
                    <Link href="/contact" className={styles.downloadBtn}>
                      <Download size={15} />
                      Download PDF
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.cta}>
            <p>Want early access to new research?</p>
            <Link href="/contact" className="btn btn-primary">
              Subscribe to Research Updates <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a custom security assessment?"
        subtitle="Our team can conduct a tailored security review of your environment and deliver a findings report."
      />
    </>
  );
}
