'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Cloud, FileCheck, Activity, Target, Zap, Code, Server } from 'lucide-react';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './ServiceTemplate.module.css';

const iconMap: Record<string, React.ElementType> = {
  Shield, Cloud, FileCheck, Activity, Target, Zap, Code, Server
};

interface ServiceTemplateProps {
  service: any; // Using any for simplicity here, matches services from data.ts
  problemNarrative: React.ReactNode;
  methodology: { title: string; desc: string }[];
  customWidget?: React.ReactNode;
}

export default function ServiceTemplate({ service, problemNarrative, methodology, customWidget }: ServiceTemplateProps) {
  const Icon = iconMap[service.icon] || Shield;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className="section-label">Service Detail</div>
            <h1 className={styles.title}>{service.name}</h1>
            <p className={styles.tagline}>{service.tagline}</p>
            <p className={styles.desc}>{service.description}</p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary">
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.iconWrap}>
              <Icon size={120} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Checklist Split */}
      <section className="section">
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.narrativeCol}>
            <h2 className={styles.sectionTitle}>The Problem We Solve</h2>
            <div className={styles.narrativeContent}>
              {problemNarrative}
            </div>
          </div>
          <div className={styles.checklistCol}>
            <div className={styles.checklistCard}>
              <h3 className={styles.checklistTitle}>What's Included</h3>
              <ul className={styles.checklist}>
                {service.features.map((feat: string, i: number) => (
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

      {/* Custom Widget Section (if provided) */}
      {customWidget && (
        <section className={`section ${styles.widgetSection}`}>
          <div className="container">
            {customWidget}
          </div>
        </section>
      )}

      {/* Methodology */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Approach</div>
            <h2 className="section-title">How We Deliver {service.name}</h2>
          </div>
          
          <div className={styles.methodGrid}>
            {methodology.map((step, i) => (
              <div key={i} className={styles.methodCard}>
                <div className={styles.methodNumber}>0{i + 1}</div>
                <h3 className={styles.methodTitle}>{step.title}</h3>
                <p className={styles.methodDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner 
        title={`Secure your ${service.name.toLowerCase()} today.`} 
        subtitle="Talk to an expert about customizing this service for your environment."
      />
    </>
  );
}
