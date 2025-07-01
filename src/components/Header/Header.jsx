import { useState, useEffect } from 'react';
import logo from '../../assets/logo-chainalysis.svg';
import NavMenu from '../NavMenu/NavMenu';
import Button from '../Button/Button';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Make header fixed when scrolling past 100px
      if (currentScrollY > 300) {
        setIsFixed(true);

        // Show header when scrolling up, hide when scrolling down
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        // At top of page - position unset
        setIsFixed(false);
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
      <header
          className={`${isFixed ? 'fixed' : ''} top-0 left-0 w-full flex items-center justify-between px-4 md:px-12 py-4 md:py-8 bg-white z-50 shadow-sm transition-transform duration-300 ease-in-out ${
              isFixed && isVisible ? 'translate-y-0' : isFixed && !isVisible ? '-translate-y-full' : 'translate-y-0'
          }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Chainalysis Logo" className="h-12 mr-3" />
          <span className="text-[2rem] font-bold text-[#ff6600] tracking-wide">Chainalysis</span>
        </div>
        <NavMenu />
        <div className="flex gap-4">
          <Button variant="outline">Log in</Button>
          <Button variant="primary">Request a demo</Button>
        </div>
      </header>
  );
}