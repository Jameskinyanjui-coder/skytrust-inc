import { Metadata } from 'next';
import { solutions } from '@/lib/data';
import SolutionTemplate from '@/components/solutions/SolutionTemplate/SolutionTemplate';

export const metadata: Metadata = {
  title: 'Government Cybersecurity Solutions',
  description: 'Defend public sector infrastructure against nation-state adversaries with SkyTrust.',
};

export default function GovernmentPage() {
  const solution = solutions.find(s => s.slug === 'government');

  const narrative = (
    <>
      <p>
        Public sector organizations and their contractors are on the front lines of global cyber warfare. From municipal governments facing crippling ransomware attacks to defense contractors targeted by state-sponsored espionage, the stakes in the public sector go beyond financial loss, directly impacting national security.
      </p>
      <p>
        To do business with the government, contractors must meet incredibly stringent security mandates, such as the Cybersecurity Maturity Model Certification (CMMC) and NIST SP 800-171. However, implementing these complex frameworks requires specialized expertise that most organizations do not possess in-house.
      </p>
      <p>
        SkyTrust helps municipalities, state agencies, and defense industrial base (DIB) contractors defend critical infrastructure and achieve mandate compliance. We build environments capable of storing Controlled Unclassified Information (CUI) and deploy threat hunting teams capable of detecting advanced state-sponsored actors.
      </p>
    </>
  );

  const benefits = [
    { title: 'CMMC & NIST Readiness', desc: 'Accelerate your path to CMMC certification. We implement the necessary technical controls and draft the System Security Plans (SSP) required for compliance.' },
    { title: 'Critical Infrastructure Defense', desc: 'Secure SCADA and ICS networks. We deploy specialized monitoring that understands industrial protocols to protect physical infrastructure.' },
    { title: 'Ransomware Resilience', desc: 'Protect municipal services. We implement immutable backups, network segmentation, and rapid recovery playbooks to ensure cities stay operational.' },
  ];

  return (
    <SolutionTemplate 
      solution={solution}
      narrative={narrative}
      benefits={benefits}
    />
  );
}
