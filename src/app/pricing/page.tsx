'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, X } from 'lucide-react';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    desc: 'For small businesses needing foundational enterprise security.',
    priceMonthly: '$1,500',
    priceAnnual: '$1,250',
    popular: false,
    features: [
      'Next-Gen Antivirus (NGAV)',
      'Basic Email Security',
      'Monthly Vulnerability Scans',
      'Business Hours Support (8x5)',
      'Security Awareness Training',
    ],
  },
  {
    name: 'Business',
    desc: 'For growing organizations with compliance requirements.',
    priceMonthly: '$3,500',
    priceAnnual: '$2,900',
    popular: true,
    features: [
      'Everything in Starter',
      '24/7 Managed SOC (MDR)',
      'SIEM Log Ingestion (up to 50GB/mo)',
      '1 Compliance Framework (SOC 2 or ISO)',
      'Annual Penetration Test',
      '1-Hour Incident Response SLA',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Custom architectures for complex, multi-cloud environments.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    popular: false,
    features: [
      'Everything in Business',
      'Cloud Security Posture Management',
      'Unlimited SIEM Ingestion',
      'Multiple Compliance Frameworks',
      'Dedicated Security Account Manager',
      '15-Min Incident Response SLA',
    ],
  },
];

const featuresList = [
  { 
    category: 'Threat Detection',
    items: [
      { name: 'Endpoint Protection (EDR)', starter: true, business: true, enterprise: true },
      { name: 'Network Traffic Analysis', starter: false, business: true, enterprise: true },
      { name: 'Cloud Workload Protection', starter: false, business: false, enterprise: true },
      { name: 'Behavioral Analytics', starter: false, business: true, enterprise: true },
    ]
  },
  { 
    category: 'Response & Support',
    items: [
      { name: 'SOC Monitoring', starter: 'Business Hours', business: '24/7/365', enterprise: '24/7/365 Dedicated' },
      { name: 'Critical Alert SLA', starter: '4 Hours', business: '1 Hour', enterprise: '15 Minutes' },
      { name: 'Incident Containment', starter: 'Automated', business: 'Analyst-Led', enterprise: 'Analyst-Led + Forensic' },
    ]
  },
  { 
    category: 'Compliance & Advisory',
    items: [
      { name: 'Vulnerability Scanning', starter: 'Monthly', business: 'Weekly', enterprise: 'Continuous' },
      { name: 'Compliance Prep', starter: false, business: '1 Framework', enterprise: 'Unlimited' },
      { name: 'Penetration Testing', starter: false, business: '1x Annual', enterprise: '2x Annual + Red Team' },
    ]
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Plans & Pricing</div>
            <h1 className={styles.title}>Transparent Pricing.<br/>No Surprise Fees.</h1>
            <p className={styles.subtitle}>
              Choose the level of protection that fits your threat model. Scale up instantly as your business grows.
            </p>
            
            <div className={styles.toggleWrap}>
              <span className={!annual ? styles.activeText : ''}>Monthly</span>
              <button 
                className={`${styles.toggle} ${annual ? styles.toggleActive : ''}`}
                onClick={() => setAnnual(!annual)}
                aria-label="Toggle billing cycle"
              >
                <span className={styles.toggleKnob} />
              </button>
              <span className={annual ? styles.activeText : ''}>
                Annually <span className={styles.saveBadge}>Save up to 15%</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {plans.map(plan => (
              <div key={plan.name} className={`${styles.card} ${plan.popular ? styles.cardPopular : ''}`}>
                {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.desc}</p>
                
                <div className={styles.priceWrap}>
                  <span className={styles.price}>
                    {annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  {plan.priceMonthly !== 'Custom' && (
                    <span className={styles.period}>/mo</span>
                  )}
                </div>
                
                <Link 
                  href="/contact" 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} ${styles.planBtn}`}
                  style={{ width: '100%' }}
                >
                  {plan.priceMonthly === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Link>
                
                <ul className={styles.features}>
                  {plan.features.map((feat, i) => (
                    <li key={i} className={styles.featureItem}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <h2 className="section-title">Feature Comparison</h2>
          </div>
          
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Starter</th>
                  <th>Business</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featuresList.map((cat, i) => (
                  <React.Fragment key={i}>
                    <tr>
                      <td colSpan={4} className={styles.categoryRow}>{cat.category}</td>
                    </tr>
                    {cat.items.map((item, j) => (
                      <tr key={j}>
                        <td>{item.name}</td>
                        <td>
                          {typeof item.starter === 'boolean' 
                            ? (item.starter ? <CheckCircle2 size={20} className={styles.checkIcon} /> : <X size={20} className={styles.xIcon} />)
                            : item.starter}
                        </td>
                        <td>
                          {typeof item.business === 'boolean' 
                            ? (item.business ? <CheckCircle2 size={20} className={styles.checkIcon} /> : <X size={20} className={styles.xIcon} />)
                            : item.business}
                        </td>
                        <td>
                          {typeof item.enterprise === 'boolean' 
                            ? (item.enterprise ? <CheckCircle2 size={20} className={styles.checkIcon} /> : <X size={20} className={styles.xIcon} />)
                            : item.enterprise}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBanner 
        title="Not sure which plan is right for you?"
        subtitle="Schedule a free assessment. We'll analyze your current posture and recommend the exact coverage you need."
      />
    </>
  );
}
