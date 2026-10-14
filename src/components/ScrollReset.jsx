'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Force immediate scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Use instant so there is no layout jump during page transition
    });
  }, [pathname]);

  return null;
}