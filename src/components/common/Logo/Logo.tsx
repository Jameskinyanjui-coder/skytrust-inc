import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizeMap = {
  sm: { imgHeight: 36, imgWidth: 36 },
  md: { imgHeight: 46, imgWidth: 46 },
  lg: { imgHeight: 58, imgWidth: 58 },
};

export default function Logo({ className, size = 'md', showText = true }: LogoProps) {
  const { imgHeight, imgWidth } = sizeMap[size];

  return (
    <Link href="/" className={`${styles.logo} ${styles[size]} ${className || ''}`} aria-label="SkyTrust Global Services Inc Home">
      <div className={styles.imageWrap}>
        <Image
          src="/logo.png"
          alt="SkyTrust Global Services Inc"
          width={imgWidth}
          height={imgHeight}
          priority
          className={styles.logoImage}
          style={{ objectFit: 'contain', width: 'auto', height: imgHeight }}
        />
      </div>
      {showText && (
        <div className={styles.textGroup}>
          <span className={styles.brandMain}>
            Sky<span className={styles.brandAccent}>Trust</span>
          </span>
          <span className={styles.brandSub}>
            Global Services Inc.
          </span>
        </div>
      )}
    </Link>
  );
}
