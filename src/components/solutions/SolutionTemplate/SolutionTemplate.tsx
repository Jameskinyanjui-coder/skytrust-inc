'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './SolutionTemplate.module.css';

interface SolutionTemplateProps {
  solution: any; 
  narrative: React.ReactNode;
  benefits: { title: string; desc: string }[];
}

export default function SolutionTemplate({ solution, narrative, benefits }: SolutionTemplateProps) {
  const Icon = ShieldCheck; // Fallback icon

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className="section-label">Industry Solution</div>
            <h1 className={styles.title}>{solution.name}</h1>
            <p className={styles.tagline}>{solution.tagline}</p>
            <p className={styles.desc}>{solution.description}</p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary">
                Request Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroBg} />
      </section>

      <section className="section">
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.narrativeCol}>
            <h2 className={styles.sectionTitle}>The Landscape</h2>
            <div className={styles.narrativeContent}>
              {narrative}
            </div>
          </div>
          <div className={styles.checklistCol}>
            <div className={styles.checklistCard}>
              <h3 className={styles.checklistTitle}>Key Capabilities</h3>
              <ul className={styles.checklist}>
                {solution.features.map((feat: string, i: number) => (
                  <li key={i} className={styles.checklistItem}>
                    <CheckCircle2 size={20} className={styles.checkIcon} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <h2 className="section-title">Strategic Outcomes</h2>
          </div>
          
          <div className={styles.methodGrid}>
            {benefits.map((step, i) => (
              <div key={i} className={styles.methodCard}>
                <h3 className={styles.methodTitle}>{step.title}</h3>
                <p className={styles.methodDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner 
        title={`Secure your ${solution.name.toLowerCase()} organization.`} 
        subtitle="Speak with an industry specialist today."
      />
    </>
  );
}
