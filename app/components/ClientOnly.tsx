import { useEffect, useState } from "react";

/**
 * Componente para envolver contenido que solo debe ejecutarse en el cliente (como WebGL/Three.js).
 * Evita errores de hidratación y fallos de SSR en entornos como Vercel.
 */
export function ClientOnly({ children, fallback = null }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
