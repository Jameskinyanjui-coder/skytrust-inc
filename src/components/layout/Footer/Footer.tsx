import Link from 'next/link';
import { Mail, Phone, MessageCircle, Globe, Code, Video } from 'lucide-react';
import Logo from '@/components/common/Logo/Logo';
import styles from './Footer.module.css';

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { href: '/services/network-security', label: 'Network Security' },
      { href: '/services/cloud-security', label: 'Cloud Security' },
      { href: '/services/compliance-consulting', label: 'Compliance Consulting' },
      { href: '/services/threat-monitoring', label: 'Threat Monitoring' },
      { href: '/services/penetration-testing', label: 'Penetration Testing' },
      { href: '/services/incident-response', label: 'Incident Response' },
    ],
  },
  solutions: {
    title: 'Solutions',
    links: [
      { href: '/solutions/small-business', label: 'Small Business' },
      { href: '/solutions/enterprise', label: 'Enterprise' },
      { href: '/solutions/healthcare', label: 'Healthcare' },
      { href: '/solutions/finance', label: 'Finance' },
      { href: '/solutions/government', label: 'Government' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { href: '/resources/blog', label: 'Blog' },
      { href: '/resources/case-studies', label: 'Case Studies' },
      { href: '/resources/whitepapers', label: 'Whitepapers' },
      { href: '/resources/glossary', label: 'Security Glossary' },
      { href: '/resources/faq', label: 'FAQ' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { href: '/about/company', label: 'About Us' },
      { href: '/about/team', label: 'Leadership Team' },
      { href: '/about/careers', label: 'Careers' },
      { href: '/about/certifications', label: 'Certifications' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/security-disclosure', label: 'Security Disclosure' },
    ],
  },
};

const complianceBadges = ['SOC 2 Type II', 'ISO 27001', 'HIPAA', 'PCI-DSS', 'GDPR Ready'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Main footer */}
      <div className={`container ${styles.main}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Logo />
          <p className={styles.brandDesc}>
            Enterprise-grade cybersecurity for the organizations that can't afford to be compromised. Protecting your infrastructure 24/7/365.
          </p>
          {/* Contact */}
          <div className={styles.contact}>
            <a href="tel:469-267-5806" className={styles.contactItem}>
              <Phone size={14} /> 469-267-5806 (24/7 Support)
            </a>
            <a href="mailto:info@skytrustinc.com" className={styles.contactItem}>
              <Mail size={14} /> info@skytrustinc.com
            </a>
            <div className={styles.contactItem} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              11498 Luna Rd, Suite 104, Farmers Branch, TX 75234
            </div>
          </div>
          {/* Social */}
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <MessageCircle size={20} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <Code size={20} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">
              <Video size={20} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([key, col]) => (
          <div key={key} className={styles.col}>
            <h4 className={styles.colTitle}>{col.title}</h4>
            <ul className={styles.colLinks}>
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.colLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h4 className={styles.colTitle}>Security Digest</h4>
          <p className={styles.newsletterDesc}>Weekly threat intelligence and security insights. No spam, unsubscribe anytime.</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="your@email.com"
              className={styles.newsletterInput}
              aria-label="Email for newsletter"
              required
            />
            <button type="button" className={styles.newsletterBtn}>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Compliance badges */}
      <div className={styles.badges}>
        <div className="container">
          <div className={styles.badgesInner}>
            <span className={styles.badgesLabel}>Certified & Compliant:</span>
            <div className={styles.badgeList}>
              {complianceBadges.map(badge => (
                <span key={badge} className={styles.badge}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} SkyTrust Global Services Inc. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy</Link>
            <Link href="/terms-of-service" className={styles.bottomLink}>Terms</Link>
            <Link href="/security-disclosure" className={styles.bottomLink}>Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
