import { Metadata } from 'next';
import { caseStudies } from '@/lib/data';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './CaseStudies.module.css';

export const metadata: Metadata = {
  title: 'Case Studies | SkyTrust',
  description: 'Real-world examples of how SkyTrust helps organizations secure their infrastructure and achieve compliance.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Customer Success</div>
            <h1 className={styles.title}>Proven Results</h1>
            <p className={styles.subtitle}>
              See how we've helped organizations across industries stop breaches, pass audits, and secure their digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.list}>
            {caseStudies.map((study, index) => (
              <div key={study.slug} className={styles.studyCard}>
                <div className={styles.studyHeader}>
                  <div className="badge">{study.industry}</div>
                  <div className={styles.servicesList}>
                    {study.services.map(svc => (
                      <span key={svc} className={styles.serviceTag}>{svc}</span>
                    ))}
                  </div>
                </div>
                
                <h2 className={styles.studyTitle}>{study.title}</h2>
                
                <div className={styles.studyGrid}>
                  <div className={styles.narrative}>
                    <div className={styles.block}>
                      <h3>The Challenge</h3>
                      <p>{study.challenge}</p>
                    </div>
                    <div className={styles.block}>
                      <h3>The SkyTrust Solution</h3>
                      <p>{study.solution}</p>
                    </div>
                    <div className={styles.block}>
                      <h3>The Result</h3>
                      <p>{study.result}</p>
                    </div>
                  </div>
                  
                  <div className={styles.metrics}>
                    <div className={styles.metricsCard}>
                      <h3 className={styles.metricsTitle}>Impact</h3>
                      {study.metrics.map((metric, i) => (
                        <div key={i} className={styles.metricItem}>
                          <div className={styles.metricValue}>{metric.value}</div>
                          <div className={styles.metricLabel}>{metric.label}</div>
                          <div className={styles.metricDesc}>{metric.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
