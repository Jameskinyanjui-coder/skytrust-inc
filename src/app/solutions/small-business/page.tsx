import { Metadata } from 'next';
import { solutions } from '@/lib/data';
import SolutionTemplate from '@/components/solutions/SolutionTemplate/SolutionTemplate';

export const metadata: Metadata = {
  title: 'Small Business Cybersecurity',
  description: 'Enterprise-grade security scaled for small businesses and lean IT teams.',
};

export default function SmallBusinessPage() {
  const solution = solutions.find(s => s.slug === 'small-business');

  const narrative = (
    <>
      <p>
        Small businesses often operate under a dangerous misconception: "We're too small to be a target." The reality is exactly the opposite. Cybercriminals increasingly target SMBs precisely because they usually lack dedicated security teams and robust defenses.
      </p>
      <p>
        A single successful ransomware attack or wire fraud incident can bankrupt a small business. Yet, the cybersecurity market caters almost exclusively to the Fortune 500. Small businesses are left trying to stitch together a patchwork of consumer-grade antivirus tools and default firewall settings.
      </p>
      <p>
        SkyTrust levels the playing field. We deliver the same enterprise-grade capabilities, including 24/7 monitoring, endpoint detection, and incident response, packaged into an accessible, predictable monthly subscription that doesn't require you to hire a CISO.
      </p>
    </>
  );

  const benefits = [
    { title: 'Predictable Costs', desc: 'No surprise hardware refreshes or emergency consulting fees. One flat monthly rate covers your entire security program.' },
    { title: 'Zero Headcount Required', desc: 'You don\'t need to hire security analysts. Our SOC acts as your dedicated security department, working alongside your existing IT staff or MSP.' },
    { title: 'Enterprise Tooling', desc: 'Gain access to top-tier SIEM, EDR, and vulnerability scanning tools that are normally cost-prohibitive for smaller organizations.' },
  ];

  return (
    <SolutionTemplate 
      solution={solution}
      narrative={narrative}
      benefits={benefits}
    />
  );
}
