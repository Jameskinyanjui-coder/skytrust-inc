import { Metadata } from 'next';
import { solutions } from '@/lib/data';
import SolutionTemplate from '@/components/solutions/SolutionTemplate/SolutionTemplate';

export const metadata: Metadata = {
  title: 'Healthcare Cybersecurity',
  description: 'HIPAA compliant cybersecurity solutions for hospitals, clinics, and healthtech startups.',
};

export default function HealthcarePage() {
  const solution = solutions.find(s => s.slug === 'healthcare');

  const narrative = (
    <>
      <p>
        The healthcare industry is the #1 target for ransomware. A cyberattack on a hospital isn't just a data breach; it's a critical threat to patient safety. When clinical systems go offline, surgeries are delayed, ambulances are diverted, and patient outcomes suffer.
      </p>
      <p>
        Securing healthcare environments is uniquely difficult. IT teams must balance strict HIPAA regulatory requirements with the need for rapid, frictionless access by clinicians. Furthermore, the proliferation of connected medical devices (IoMT) introduces thousands of unpatchable, vulnerable endpoints into the clinical network.
      </p>
      <p>
        SkyTrust's healthcare practice is led by professionals who understand clinical workflows. We implement security controls that protect Protected Health Information (PHI) without slowing down doctors and nurses. From securing legacy medical devices to ensuring 24/7 uptime for EHR systems, we protect the technology that protects patients.
      </p>
    </>
  );

  const benefits = [
    { title: 'HIPAA Audit Readiness', desc: 'Maintain continuous compliance with the HIPAA Security and Privacy Rules. We provide the policies, technical controls, and evidence required to pass OCR audits.' },
    { title: 'IoMT Segmentation', desc: 'We isolate vulnerable medical devices (like MRI machines and infusion pumps) from the broader network, ensuring they cannot be used as attack vectors.' },
    { title: 'Clinical Workflow Preservation', desc: 'Security shouldn\'t cause friction in emergency situations. We implement adaptive authentication and SSO to keep clinicians moving fast while staying secure.' },
  ];

  return (
    <SolutionTemplate 
      solution={solution}
      narrative={narrative}
      benefits={benefits}
    />
  );
}
