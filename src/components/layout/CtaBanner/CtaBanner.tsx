'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './CtaBanner.module.css';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CtaBanner({
  title = "Ready to Secure Your Enterprise Infrastructure?",
  subtitle = "From 24/7 managed SOC threat monitoring and cloud security to SOC 2 compliance readiness, partner with SkyTrust to build resilience.",
  primaryBtnText = "Schedule Free Security Assessment",
  primaryBtnHref = "/contact",
  secondaryBtnText = "Call 24/7 Hotline",
  secondaryBtnHref = "tel:4692675806",
}: CtaBannerProps) {
  return (
    <section className={styles.bannerWrap}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Get Started Today</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <div className={styles.actions}>
            <Link href={primaryBtnHref} className="btn btn-primary btn-lg">
              {primaryBtnText} <ArrowRight size={18} />
            </Link>
            {secondaryBtnText && secondaryBtnHref && (
              <Link href={secondaryBtnHref} className="btn btn-secondary btn-lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
                <Phone size={16} />
                {secondaryBtnText}
              </Link>
            )}
          </div>

          {/* Decorative elements */}
          <div className={styles.glow} />
          <div className={styles.glowRight} />
          <div className={styles.gridOverlay} />
        </div>
      </div>
    </section>
  );
}
