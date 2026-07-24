'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import styles from './Assessment.module.css';

export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    size: '',
    industry: '',
    needs: [] as string[],
    name: '',
    email: '',
    company: '',
  });

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);
  
  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(handleNext, 300); // Auto-advance
  };

  const toggleNeed = (need: string) => {
    setFormData(prev => {
      const needs = prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need];
      return { ...prev, needs };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5); // Success step
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.wizardContainer}>
          
          {step < 5 && (
            <div className={styles.progressWrap}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${(step / 4) * 100}%` }} />
              </div>
              <div className={styles.stepText}>Step {step} of 4</div>
            </div>
          )}

          {step === 1 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Company Size</h1>
              <p className={styles.subtitle}>How many employees do you have?</p>
              
              <div className={styles.optionsGrid}>
                {['1-49', '50-249', '250-999', '1000+'].map(size => (
                  <button 
                    key={size}
                    className={`${styles.optionBtn} ${formData.size === size ? styles.optionActive : ''}`}
                    onClick={() => handleSelect('size', size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Industry</h1>
              <p className={styles.subtitle}>What sector do you operate in?</p>
              
              <div className={styles.optionsGrid}>
                {['Financial Services', 'Healthcare', 'Technology', 'Manufacturing', 'Retail/E-commerce', 'Other'].map(ind => (
                  <button 
                    key={ind}
                    className={`${styles.optionBtn} ${formData.industry === ind ? styles.optionActive : ''}`}
                    onClick={() => handleSelect('industry', ind)}
                  >
                    {ind}
                  </button>
                ))}
              </div>
              <button className={styles.backBtn} onClick={handleBack}><ArrowLeft size={16} /> Back</button>
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Primary Needs</h1>
              <p className={styles.subtitle}>Select all that apply.</p>
              
              <div className={styles.optionsGrid}>
                {[
                  'Compliance (SOC 2, HIPAA, PCI)',
                  '24/7 Managed SOC (MDR)',
                  'Penetration Testing',
                  'Cloud Security Posture',
                  'Incident Response',
                  'General Security Audit'
                ].map(need => (
                  <button 
                    key={need}
                    className={`${styles.optionBtn} ${formData.needs.includes(need) ? styles.optionActive : ''}`}
                    onClick={() => toggleNeed(need)}
                  >
                    {need}
                  </button>
                ))}
              </div>
              
              <div className={styles.actions}>
                <button className={styles.backBtn} onClick={handleBack}><ArrowLeft size={16} /> Back</button>
                <button 
                  className="btn btn-primary" 
                  onClick={handleNext}
                  disabled={formData.needs.length === 0}
                >
                  Continue <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Your Details</h1>
              <p className={styles.subtitle}>Where should we send your customized assessment?</p>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className={styles.formGroup}>
                  <label>Work Email</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className={styles.formGroup}>
                  <label>Company Name</label>
                  <input type="text" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                </div>
                
                <div className={styles.actions}>
                  <button type="button" className={styles.backBtn} onClick={handleBack}><ArrowLeft size={16} /> Back</button>
                  <button type="submit" className="btn btn-primary">
                    Get My Assessment
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 5 && (
            <div className={styles.successState}>
              <CheckCircle2 size={64} className={styles.successIcon} />
              <h1 className={styles.title}>Assessment Request Received</h1>
              <p className={styles.subtitle}>
                Thank you, {formData.name.split(' ')[0] || 'there'}. Our security engineering team is reviewing your profile. 
                We will contact you at {formData.email} within 1 business day with your tailored assessment and recommendations.
              </p>
              <a href="/" className="btn btn-secondary" style={{ marginTop: '32px' }}>Return to Home</a>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
