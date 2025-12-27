import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
type PortalProps = {
  children?: ReactNode;
};
const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const modalContainer = document.getElementById("modal_portal");
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  if (!modalContainer) {
    return null;
  }
  return mounted ? createPortal(children, modalContainer) : null;
};
export default Portal;
