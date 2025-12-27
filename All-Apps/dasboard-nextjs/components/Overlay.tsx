import { ReactNode } from "react";
import styles from "../styles/overlay.module.css";
type OverlayProps = {
  children?: ReactNode;
};
const Overlay = ({ children }: OverlayProps) => {
  return <div className={styles.overlay}>{children}</div>;
};
export default Overlay;
