import { useState } from 'react';
import { CheckIcon, CopyIcon } from './Icons';
import styles from './CodeBlock.module.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export const CodeBlock = ({ code, language = 'bash', className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${styles.wrapper}${className ? ` ${className}` : ''}`}>
      <div className={styles.header}>
        <div className={styles.trafficLights}>
          <span className={styles.redDot}></span>
          <span className={styles.yellowDot}></span>
          <span className={styles.greenDot}></span>
        </div>
        <span className={styles.lang}>{language}</span>
        <button onClick={copy} className={styles.copyBtn} aria-label="Copy commands">
          {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
          <span className={styles.copyText}>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <div className={styles.content}>
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
};
