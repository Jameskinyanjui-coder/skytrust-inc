import { Metadata } from 'next';
import { ShieldCheck, Award, FileCheck } from 'lucide-react';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Certifications.module.css';

export const metadata: Metadata = {
  title: 'Certifications & Compliance | SkyTrust',
  description: 'SkyTrust holds the industry\'s most rigorous security certifications, proving our commitment to protecting your data.',
};

const certs = [
  {
    name: 'SOC 2 Type II',
    icon: ShieldCheck,
    desc: 'SkyTrust undergoes an annual SOC 2 Type II audit by an independent third-party firm, attesting to our controls relevant to security, availability, processing integrity, confidentiality, and privacy.',
  },
  {
    name: 'ISO/IEC 27001:2022',
    icon: Award,
    desc: 'Our Information Security Management System (ISMS) is certified to the ISO 27001 standard, demonstrating a systematic approach to managing sensitive company and customer information.',
  },
  {
    name: 'PCI-DSS Level 1',
    icon: FileCheck,
    desc: 'As a Level 1 Service Provider, SkyTrust meets the rigorous data security standards required by the Payment Card Industry for storing, processing, and transmitting cardholder data.',
  },
];

export default function CertificationsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Trust & Assurance</div>
            <h1 className={styles.title}>We Practice What We Preach</h1>
            <p className={styles.subtitle}>
              You cannot secure others if your own house is not in order. We hold ourselves to the highest global standards for security and compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {certs.map(cert => {
              const Icon = cert.icon;
              return (
                <div key={cert.name} className={styles.card}>
                  <div className={styles.iconWrap}>
                    <Icon size={40} />
                  </div>
                  <h2 className={styles.certName}>{cert.name}</h2>
                  <p className={styles.certDesc}>{cert.desc}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.reportBox}>
            <div className={styles.reportContent}>
              <h3>Request Our Audit Reports</h3>
              <p>Under NDA, we provide prospective and current clients with full access to our SOC 2 Type II report, ISO 27001 certificate, and recent penetration test summaries.</p>
            </div>
            <a href="/contact" className="btn btn-primary">Request Documentation</a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
