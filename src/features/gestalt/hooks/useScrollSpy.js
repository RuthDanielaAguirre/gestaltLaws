import { useState, useEffect } from 'react';

export function useScrollSpy(sections) {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id: section.id, top: rect.top, height: rect.height };
        }
        return null;
      }).filter(Boolean);

      const current = sectionElements.find(
        section => section.top <= 100 && section.top + section.height > 100
      );
      
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return { activeSection, scrolled };
}