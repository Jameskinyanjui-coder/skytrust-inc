'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import {
  Shield, Cloud, FileCheck, Activity, Target, Zap,
  Building2, Heart, Landmark, DollarSign, Users,
  BookOpen, FileText, Download, HelpCircle, Search,
  Menu, X, ChevronDown, Phone, Mail, ExternalLink,
  Briefcase, Award, ShieldCheck, Code, Server
} from 'lucide-react';
import styles from './Header.module.css';
import Logo from '@/components/common/Logo/Logo';

const megaMenuData = {
  services: {
    label: 'Services',
    items: [
      { href: '/services/software-development', icon: Code, title: 'Custom Software Development', desc: 'Scalable web & mobile applications' },
      { href: '/services/system-management', icon: Server, title: 'System Management', desc: '24/7 IT infrastructure management' },
      { href: '/services/cloud-architecture', icon: Cloud, title: 'Cloud Architecture & Dev', desc: 'AWS, Azure & GCP cloud solutions' },
      { href: '/services/data-analytics', icon: Activity, title: 'Data Analytics & BI', desc: 'Data engineering & executive dashboards' },
      { href: '/services/devops-automation', icon: Zap, title: 'DevOps & Automation', desc: 'CI/CD pipelines & IaC infrastructure' },
      { href: '/services/api-integration', icon: ShieldCheck, title: 'API Integration', desc: 'REST, GraphQL & third-party integrations' },
    ],
    cta: { href: '/services', label: 'View All Services' },
  },
  security: {
    label: 'Security',
    items: [
      { href: '/services/network-security', icon: Shield, title: 'Network Security', desc: 'Perimeter protection & zero trust' },
      { href: '/services/cloud-security', icon: Cloud, title: 'Cloud Security', desc: 'CSPM, container & posture defense' },
      { href: '/services/compliance-consulting', icon: FileCheck, title: 'Compliance Consulting', desc: 'SOC 2, ISO 27001, HIPAA & PCI-DSS' },
      { href: '/services/threat-monitoring', icon: Activity, title: 'Threat Monitoring', desc: '24/7 SOC-as-a-service & SIEM' },
      { href: '/services/penetration-testing', icon: Target, title: 'Penetration Testing', desc: 'Ethical red team & vulnerability tests' },
      { href: '/services/incident-response', icon: Zap, title: 'Incident Response', desc: '24/7 breach emergency hotline' },
    ],
    cta: { href: '/services', label: 'View All Security Services' },
  },
  solutions: {
    label: 'Solutions',
    items: [
      { href: '/solutions/small-business', icon: Users, title: 'Small Business', desc: 'Affordable enterprise-grade protection' },
      { href: '/solutions/enterprise', icon: Building2, title: 'Enterprise', desc: 'Scalable, dedicated security & dev teams' },
      { href: '/solutions/healthcare', icon: Heart, title: 'Healthcare', desc: 'HIPAA & patient data protection' },
      { href: '/solutions/finance', icon: DollarSign, title: 'Finance', desc: 'PCI-DSS & fraud prevention' },
      { href: '/solutions/government', icon: Landmark, title: 'Government', desc: 'FedRAMP-aligned public sector security' },
    ],
    cta: { href: '/solutions', label: 'View All Industry Solutions' },
  },
  company: {
    label: 'Company',
    items: [
      { href: '/about/company', icon: Building2, title: 'About SkyTrust', desc: 'Our mission and enterprise vision' },
      { href: '/about/team', icon: Users, title: 'Leadership & Team', desc: 'Meet our security architects & executives' },
      { href: '/about/careers', icon: Briefcase, title: 'Careers', desc: 'Join our team of cybersecurity experts' },
      { href: '/about/certifications', icon: Award, title: 'Certifications', desc: 'Industry accreditations & compliance ISOs' },
    ],
    cta: { href: '/about/company', label: 'Learn More About Us' },
  },
};

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className={styles.nav} ref={menuRef} aria-label="Main navigation">
          {Object.entries(megaMenuData).map(([key, menu]) => (
            <div
              key={key}
              className={styles.navItem}
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`${styles.navBtn} ${activeMenu === key ? styles.navBtnActive : ''}`}
                onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                aria-expanded={activeMenu === key}
                aria-haspopup="true"
              >
                {menu.label}
                <ChevronDown size={14} className={`${styles.chevron} ${activeMenu === key ? styles.chevronOpen : ''}`} />
              </button>

              {activeMenu === key && (
                <div className={styles.megaMenu} role="menu">
                  <div className={styles.megaMenuInner}>
                    <div className={styles.megaMenuGrid}>
                      {menu.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link key={item.href} href={item.href} className={styles.megaMenuItem} role="menuitem">
                            <div className={styles.megaMenuIcon}>
                              <Icon size={18} />
                            </div>
                            <div>
                              <div className={styles.megaMenuTitle}>{item.title}</div>
                              <div className={styles.megaMenuDesc}>{item.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className={styles.megaMenuFooter}>
                      <Link href={menu.cta.href} className={styles.megaMenuCta}>
                        {menu.cta.label} <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link href="/pricing" className={`${styles.navLink} ${pathname === '/pricing' ? styles.navLinkActive : ''}`}>
            Pricing
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <span className={styles.statusPill}>
            <span className={styles.statusDot} />
            SOC Operational
          </span>
          <a href="tel:4692675806" className={styles.emergencyBtn} title="24/7 Emergency Incident Hotline">
            <Phone size={14} className={styles.emergencyIcon} />
            <span>24/7 Emergency</span>
          </a>
          <Link href="/contact" className="btn btn-primary btn-sm">
            Request Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu} role="navigation" aria-label="Mobile navigation">
          <div className={styles.mobileInner}>
            {Object.entries(megaMenuData).map(([key, menu]) => (
              <div key={key} className={styles.mobileSection}>
                <button
                  className={styles.mobileSectionBtn}
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                  aria-expanded={mobileExpanded === key}
                >
                  {menu.label}
                  <ChevronDown size={16} className={`${styles.chevron} ${mobileExpanded === key ? styles.chevronOpen : ''}`} />
                </button>
                {mobileExpanded === key && (
                  <div className={styles.mobileSubItems}>
                    {menu.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.href} 
                          href={item.href} 
                          className={styles.mobileSubItem}
                          onClick={() => setMobileOpen(false)}
                        >
                          <Icon size={16} />
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <Link href="/pricing" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className={styles.mobileCtas}>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                Request Free Consultation
              </Link>
              <div className={styles.mobileContact}>
                <a href="tel:4692675806" className={styles.mobileContactItem}><Phone size={15} /> 469-267-5806</a>
                <a href="mailto:info@skytrustinc.com" className={styles.mobileContactItem}><Mail size={15} /> info@skytrustinc.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
