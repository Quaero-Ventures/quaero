import styles from "../../app/memora/memora.module.css";

export function MemoraHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <span className={styles.brandMark} aria-hidden="true">M</span>
        <span className={styles.wordmark}>Memora Presentes</span>
      </div>
    </header>
  );
}
