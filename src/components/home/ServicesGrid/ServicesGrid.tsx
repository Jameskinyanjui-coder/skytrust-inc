'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ServicesGrid.module.css';
import { services } from '@/lib/data';

const colorThemes = [
  styles.themeBlue,
  styles.themePurple,
  styles.themeCyan,
  styles.themeEmerald,
  styles.themeAmber,
  styles.themeRose,
];

export default function ServicesGrid() {
  return (
    <section className="section" aria-label="Enterprise Security and Software Engineering Services">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Enterprise Solutions</div>
          <h2 className="section-title">Full-Spectrum Cybersecurity &amp;<br />Software Engineering Services</h2>
          <p className="section-desc" style={{ maxWidth: '720px', margin: '0 auto' }}>
            From 24/7 managed SOC threat monitoring and cloud infrastructure to custom enterprise software engineering and audit readiness, SkyTrust provides complete digital protection and growth.
          </p>
        </div>

        <div className={styles.grid}>
          {services.slice(0, 6).map((svc, idx) => {
            const themeClass = colorThemes[idx % colorThemes.length];
            return (
              <Link key={svc.slug} href={`/services/${svc.slug}`} className={`card ${styles.card} ${themeClass}`}>
                {svc.image && (
                  <div className={styles.imageWrapper}>
                    <img src={svc.image} alt={svc.name} className={styles.image} />
                  </div>
                )}
                <div className={styles.content}>
                  <h3 className={styles.name}>{svc.name}</h3>
                  <p className={styles.desc}>{svc.description}</p>
                  <span className={styles.learnMore}>
                    Explore Service <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link href="/services" className="btn btn-secondary">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
