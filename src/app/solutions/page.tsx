import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building, Building2, HeartPulse, Landmark } from 'lucide-react';
import { solutions } from '@/lib/data';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Solutions.module.css';

export const metadata: Metadata = {
  title: 'Industry Solutions',
  description: 'Tailored cybersecurity solutions for small businesses, enterprises, healthcare, finance, and government organizations.',
};

const iconMap: Record<string, any> = {
  Building,
  Building2,
  HeartPulse,
  Landmark,
};

export default function SolutionsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Who We Serve</div>
            <h1 className={styles.title}>Security Engineered For<br />Your Unique Vertical</h1>
            <p className={styles.subtitle}>
              We understand that a healthcare provider's threat model differs drastically from a financial institution's. Our solutions are purpose-built for your industry's specific regulations and adversaries.
            </p>
          </div>
        </div>
        <div className={styles.heroGlow} />
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {solutions.map((sol) => {
              const Icon = iconMap[sol.icon] || Building;
              return (
                <div key={sol.slug} className={styles.card}>
                  <div className={styles.iconWrap}>
                    <Icon size={32} />
                  </div>
                  <h2 className={styles.cardTitle}>{sol.name}</h2>
                  <div className={styles.cardTagline}>{sol.tagline}</div>
                  <p className={styles.cardDesc}>{sol.description}</p>
                  
                  <ul className={styles.features}>
                    {sol.features.map((feat, i) => (
                      <li key={i} className={styles.featureItem}>
                        <span className="accent-dot" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/solutions/${sol.slug}`} className="btn btn-secondary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                    View {sol.name} Solution <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
