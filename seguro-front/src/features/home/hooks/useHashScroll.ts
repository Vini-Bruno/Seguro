import { useEffect } from 'react';

export function useHashScroll() {
  useEffect(() => {
    const anchor = window.location.hash.slice(1);

    if (!anchor) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      document.getElementById(anchor)?.scrollIntoView({ block: 'start' });
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, []);
}
