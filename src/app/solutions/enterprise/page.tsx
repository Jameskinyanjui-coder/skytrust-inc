import { Metadata } from 'next';
import { solutions } from '@/lib/data';
import SolutionTemplate from '@/components/solutions/SolutionTemplate/SolutionTemplate';

export const metadata: Metadata = {
  title: 'Enterprise Cybersecurity Solutions',
  description: 'Advanced threat detection and continuous compliance for large-scale enterprise architectures.',
};

export default function EnterprisePage() {
  const solution = solutions.find(s => s.slug === 'enterprise');

  const narrative = (
    <>
      <p>
        Enterprises face a compounding security challenge: massive attack surfaces, sprawling multi-cloud environments, decentralized workforces, and highly sophisticated adversaries. Defending this perimeter is no longer a human-scale problem.
      </p>
      <p>
        Even with robust internal security teams, enterprises struggle with alert fatigue. Analysts spend their days triaging thousands of low-fidelity SIEM alerts rather than proactively hunting for advanced persistent threats (APTs) or architectural vulnerabilities.
      </p>
      <p>
        SkyTrust partners with enterprise CISOs to augment their existing capabilities. Whether you need a fully managed SOC to handle Tier 1/2 triage, specialized Cloud Security Posture Management (CSPM), or an offensive security team for continuous red teaming, we integrate seamlessly with your internal processes.
      </p>
    </>
  );

  const benefits = [
    { title: 'Force Multiplier', desc: 'Free up your senior engineers to focus on architecture and strategy while we handle the 24/7 alert triage and log analysis.' },
    { title: 'Multi-Cloud Visibility', desc: 'Gain a unified view of your security posture across AWS, Azure, GCP, and on-premise data centers through our centralized platform.' },
    { title: 'Board-Level Reporting', desc: 'Translate technical metrics into business risk. We provide executive summaries that clearly articulate security ROI to your board of directors.' },
  ];

  return (
    <SolutionTemplate 
      solution={solution}
      narrative={narrative}
      benefits={benefits}
    />
  );
}
