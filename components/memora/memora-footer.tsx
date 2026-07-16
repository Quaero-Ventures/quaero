import Link from "next/link";

import styles from "../../app/memora/memora.module.css";

export function MemoraFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p>Uma experiência Quaero.</p>
        <nav aria-label="Links institucionais" className={styles.footerLinks}>
          <Link href="/politica-de-privacidade" className={styles.footerLink}>
            Política de privacidade
          </Link>
          <a href="mailto:gabrielfpaula@gmail.com" className={styles.footerLink}>
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
