import { useState, useEffect } from 'react';
import logo from '../../assets/logo-chainalysis.webp';
import NavMenu from '../NavMenu/NavMenu';
import Button from '../Button/Button';
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer.jsx";
import { Menu, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()

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
          className={`${isFixed ? 'fixed' : ''} top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 bg-white z-50 transition-transform duration-300 ease-in-out ${
              isFixed && isVisible ? 'translate-y-0' : isFixed && !isVisible ? '-translate-y-full' : 'translate-y-0'
          }`}
      >
        {/* Logo Section */}
        <div className="flex items-center min-w-0 flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
          {/*<img*/}
          {/*    src={logo}*/}
          {/*    alt="Chainalysis Logo"*/}
          {/*    className="h-8 sm:h-10 md:h-12 mr-2 sm:mr-3 flex-shrink-0"*/}
          {/*/>*/}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="#ff6600"
              className="w-10 h-10"
          >
            <path d="M50 0c1.12 0 2.39.14 2.39.14a28.31 28.31 0 00-6.48 15.92 33.76 33.76 0 00-27.86 28.59c-6.47.7-13.79 3.66-18 7.89C-.95 23.52 21.29 0 50 0zm7.2 87.18a27 27 0 01-4 .29 49.17 49.17 0 01-6.9-.57 51.83 51.83 0 01-7 12A50 50 0 011.72 62.82c4.51-5.35 14.93-8.45 21.4-8.45 13.8 0 21.12 7.32 23.66 18.73-8.31-2.25-13.24-6.9-16.48-13.8a16.68 16.68 0 00-5.91-1 16.83 16.83 0 00-5.35.85C22.7 73.1 36.22 83.52 52.69 83.52c15.21 0 21.68-7.74 21.68-7.74V63.94s-7.46 7.75-16.75 9.3A33.74 33.74 0 0028.9 44.65C31.29 32.82 40.3 26.2 52.55 26.2s22.11 8.87 22.11 8.87V23.38s-6.34-5.92-17.6-7.18c.28-5.2 3.66-11.69 7.32-14.09C79.72 6.9 94.51 19.86 98.73 38.73c0 0-6.76 6.76-19.43 6.76-10.42 0-17-5.21-20.7-14.36a17.28 17.28 0 00-6.05-1 15.4 15.4 0 00-5.63 1c4.08 14.65 17 24.5 31.4 24.5 14.08 0 21.68-6.47 21.68-6.47 0 29.29-22.39 50.28-49 50.84 3.1-3 5.49-9.58 6.2-12.82z"/>
          </svg>


          <span className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-bold text-[#ff6600] tracking-wide ml-2 truncate">
          Chainalysis
        </span>
        </div>

        {/* Desktop Navigation */}

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3 xl:gap-4 items-center flex-shrink-0">
        <div className="hidden lg:block">
          <NavMenu />
        </div>
          <Button variant="outline" className="text-sm xl:text-base">
            Log in
          </Button>
          <Button variant="primary" className="text-sm xl:text-base" onClick={() => navigate('/contact')}>
            Request a demo
          </Button>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden">
          <Drawer direction="left" className={'h-full'} open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <button
                  aria-label="Open menu"
                  className="p-2 -mr-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#27346a]" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="p-0 w-4/5 sm:w-3/4 max-w-sm bg-white h-full flex flex-col fixed top-0 left-0 bottom-0 rounded-none border-r border-gray-200">
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200">
                <div className="flex items-center min-w-0">
                  {/*<img*/}
                  {/*    src={logo}*/}
                  {/*    alt="Chainalysis Logo"*/}
                  {/*    className="h-8 sm:h-10 mr-2 flex-shrink-0"*/}
                  {/*/>*/}
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      fill="#ff6600"
                      className="w-10 h-10"
                  >
                    <path d="M50 0c1.12 0 2.39.14 2.39.14a28.31 28.31 0 00-6.48 15.92 33.76 33.76 0 00-27.86 28.59c-6.47.7-13.79 3.66-18 7.89C-.95 23.52 21.29 0 50 0zm7.2 87.18a27 27 0 01-4 .29 49.17 49.17 0 01-6.9-.57 51.83 51.83 0 01-7 12A50 50 0 011.72 62.82c4.51-5.35 14.93-8.45 21.4-8.45 13.8 0 21.12 7.32 23.66 18.73-8.31-2.25-13.24-6.9-16.48-13.8a16.68 16.68 0 00-5.91-1 16.83 16.83 0 00-5.35.85C22.7 73.1 36.22 83.52 52.69 83.52c15.21 0 21.68-7.74 21.68-7.74V63.94s-7.46 7.75-16.75 9.3A33.74 33.74 0 0028.9 44.65C31.29 32.82 40.3 26.2 52.55 26.2s22.11 8.87 22.11 8.87V23.38s-6.34-5.92-17.6-7.18c.28-5.2 3.66-11.69 7.32-14.09C79.72 6.9 94.51 19.86 98.73 38.73c0 0-6.76 6.76-19.43 6.76-10.42 0-17-5.21-20.7-14.36a17.28 17.28 0 00-6.05-1 15.4 15.4 0 00-5.63 1c4.08 14.65 17 24.5 31.4 24.5 14.08 0 21.68-6.47 21.68-6.47 0 29.29-22.39 50.28-49 50.84 3.1-3 5.49-9.58 6.2-12.82z"/>
                  </svg>
                  <span className="text-lg sm:text-xl font-bold text-[#ff6600] tracking-wide truncate">
          Chainalysis
        </span>
                </div>
                <DrawerClose asChild>
                  <button
                      aria-label="Close menu"
                      className="p-2 -mr-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 sm:w-7 sm:h-7 text-[#27346a]" />
                  </button>
                </DrawerClose>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-4 sm:px-6 py-6">
                <NavMenu isMobile={true} onMenuItemClick={() => setDrawerOpen(false)} />
              </nav>

              {/* Mobile Action Buttons */}
              <div className="px-4 sm:px-6 pb-6 pt-4 border-t border-gray-200 flex flex-col gap-3">
                <Button variant="outline" className="w-full justify-center">
                  Log in
                </Button>
                <Button variant="primary" className="w-full justify-center" onClick={() => navigate('/contact')}>
                  Request a demo
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
  );
}