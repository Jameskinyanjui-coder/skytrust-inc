import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileText, Briefcase, HelpCircle, ArrowRight } from 'lucide-react';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Resources.module.css';

export const metadata: Metadata = {
  title: 'Cybersecurity Resources & Insights',
  description: 'Explore the SkyTrust library of cybersecurity research, threat intel, case studies, and compliance guides.',
};

const resourceCategories = [
  {
    title: 'Security Blog',
    desc: 'Latest threat intelligence, zero-day analysis, and security engineering best practices from our experts.',
    href: '/resources/blog',
    icon: FileText,
  },
  {
    title: 'Case Studies',
    desc: 'See how we have helped organizations like yours stop breaches and achieve compliance.',
    href: '/resources/case-studies',
    icon: Briefcase,
  },
  {
    title: 'Cyber Glossary',
    desc: 'A comprehensive dictionary of cybersecurity terminology, acronyms, and concepts.',
    href: '/resources/glossary',
    icon: BookOpen,
  },
  {
    title: 'FAQ',
    desc: 'Answers to common questions about our services, pricing, and onboarding process.',
    href: '/resources/faq',
    icon: HelpCircle,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Knowledge Hub</div>
            <h1 className={styles.title}>Insights for the Modern Defender</h1>
            <p className={styles.subtitle}>
              Actionable intelligence, in-depth research, and practical guides to help you navigate the evolving threat landscape.
            </p>
          </div>
        </div>
        <div className={styles.heroGlow} />
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {resourceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.title} href={cat.href} className={styles.card}>
                  <div className={styles.iconWrap}>
                    <Icon size={32} />
                  </div>
                  <h2 className={styles.cardTitle}>{cat.title}</h2>
                  <p className={styles.cardDesc}>{cat.desc}</p>
                  <div className={styles.cardAction}>
                    Explore <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
