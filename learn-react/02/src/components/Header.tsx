import styles from "./Header.module.css";
import classNames from "classnames/bind";

export default function Header() {
  const cx = classNames.bind(styles);
  return (
    <>
      <header>
        <h1 className={styles.title}>내 웹사이트</h1>
        <h1 className={cx("title")}>내 웹사이트</h1>
      </header>
    </>
  );
}
