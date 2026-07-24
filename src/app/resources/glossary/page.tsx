import { Metadata } from 'next';
import { glossaryTerms } from '@/lib/data';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Glossary.module.css';

export const metadata: Metadata = {
  title: 'Cybersecurity Glossary | SkyTrust',
  description: 'A comprehensive dictionary of cybersecurity terminology, acronyms, and concepts.',
};

export default function GlossaryPage() {
  // Group terms by letter
  const groupedTerms = glossaryTerms.reduce((acc, term) => {
    if (!acc[term.letter]) acc[term.letter] = [];
    acc[term.letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const letters = Object.keys(groupedTerms).sort();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Knowledge Base</div>
            <h1 className={styles.title}>Cybersecurity Glossary</h1>
            <p className={styles.subtitle}>
              Demystifying the jargon. A reference guide to common security terms and acronyms.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.alphabetNav}>
            {letters.map(letter => (
              <a key={letter} href={`#letter-${letter}`} className={styles.navLetter}>
                {letter}
              </a>
            ))}
          </div>

          <div className={styles.glossaryList}>
            {letters.map(letter => (
              <div key={letter} id={`letter-${letter}`} className={styles.letterSection}>
                <div className={styles.letterHeader}>{letter}</div>
                <div className={styles.termsGrid}>
                  {groupedTerms[letter].map(term => (
                    <div key={term.term} className={styles.termCard}>
                      <h3 className={styles.termTitle}>{term.term}</h3>
                      <p className={styles.termDesc}>{term.definition}</p>
                    </div>
                  ))}
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
