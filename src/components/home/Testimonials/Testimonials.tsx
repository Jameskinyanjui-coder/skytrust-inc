'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <section className="section" style={{ background: 'var(--bg-2)' }} aria-label="Client Testimonials">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Success</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            Trusted by Security-Conscious Organizations
          </h2>
        </div>

        <div className={styles.carouselContainer}>
          {/* Previous Button */}
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={handlePrev} 
            aria-label="Previous feedback"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Viewport for showing 1 item at a time */}
          <div className={styles.viewport}>
            <div 
              className={styles.track}
              style={{ 
                width: `${testimonials.length * 100}%`, 
                transform: `translateX(-${(current * 100) / testimonials.length}%)` 
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className={styles.slide}>
                  <div className={styles.singleCard}>
                    <Quote size={40} className={styles.quoteIcon} />

                    <div className={styles.stars}>
                      {[...Array(t.stars || 5)].map((_, s) => (
                        <Star key={s} size={20} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>

                    <blockquote className={styles.quote}>
                      "{t.quote}"
                    </blockquote>

                    <div className={styles.authorInfo}>
                      <div className={styles.authorName}>{t.author}</div>
                      <div className={styles.authorCompany}>{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={handleNext} 
            aria-label="Next feedback"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to feedback ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
