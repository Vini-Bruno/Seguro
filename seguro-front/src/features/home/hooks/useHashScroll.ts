import { useEffect } from 'react';

export function useHashScroll() {
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    let attempts = 0;
    let timeoutId: number;

    if (!anchor) {
      return undefined;
    }

    const scrollToAnchor = () => {
      const element = document.getElementById(anchor);

      if (element) {
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;

        document.documentElement.style.scrollBehavior = 'auto';
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
        window.requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = originalScrollBehavior;
        });
        return;
      }

      attempts += 1;

      if (attempts < 12) {
        timeoutId = window.setTimeout(scrollToAnchor, 120);
      }
    };

    timeoutId = window.setTimeout(scrollToAnchor, 80);

    return () => window.clearTimeout(timeoutId);
  }, []);
}
