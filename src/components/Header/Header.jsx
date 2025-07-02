// import { useState, useEffect } from 'react';
// import logo from '../../assets/logo-chainalysis.svg';
// import NavMenu from '../NavMenu/NavMenu';
// import Button from '../Button/Button';
// import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer.jsx";
// import { Menu, X } from "lucide-react";
//
// export default function Header() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isFixed, setIsFixed] = useState(false);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//
//       // Make header fixed when scrolling past 100px
//       if (currentScrollY > 300) {
//         setIsFixed(true);
//
//         // Show header when scrolling up, hide when scrolling down
//         if (currentScrollY > lastScrollY) {
//           setIsVisible(false);
//         } else {
//           setIsVisible(true);
//         }
//       } else {
//         // At top of page - position unset
//         setIsFixed(false);
//         setIsVisible(true);
//       }
//
//       setLastScrollY(currentScrollY);
//     };
//
//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll, { passive: true });
//
//     // Cleanup
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);
//
//   return (
//     <header
//       className={`${isFixed ? 'fixed' : ''} top-0 left-0 w-full flex items-center justify-between px-4 md:px-12 py-4 md:py-8 bg-white z-50 shadow-sm transition-transform duration-300 ease-in-out ${
//         isFixed && isVisible ? 'translate-y-0' : isFixed && !isVisible ? '-translate-y-full' : 'translate-y-0'
//       }`}
//     >
//       <div className="flex items-center">
//         <img src={logo} alt="Chainalysis Logo" className="h-12 mr-3" />
//         <span className="text-[2rem] font-bold text-[#ff6600] tracking-wide">Chainalysis</span>
//       </div>
//       {/* Desktop Nav */}
//       <div className="hidden md:block">
//         <NavMenu />
//       </div>
//       {/* Mobile Nav */}
//       <div className="md:hidden flex items-center">
//         <Drawer>
//           <DrawerTrigger asChild>
//             <button aria-label="Open menu">
//               <Menu className="w-8 h-8 text-[#27346a]" />
//             </button>
//           </DrawerTrigger>
//           <DrawerContent className="p-0 w-3/4 max-w-xs bg-white h-full flex flex-col">
//             <div className="flex items-center justify-between px-4 py-4 border-b">
//               <div className="flex items-center">
//                 <img src={logo} alt="Chainalysis Logo" className="h-10 mr-2" />
//                 <span className="text-xl font-bold text-[#ff6600] tracking-wide">Chainalysis</span>
//               </div>
//               <DrawerClose asChild>
//                 <button aria-label="Close menu">
//                   <X className="w-7 h-7 text-[#27346a]" />
//                 </button>
//               </DrawerClose>
//             </div>
//             <nav className="flex-1 px-4 py-6">
//               <NavMenu />
//             </nav>
//             <div className="px-4 pb-6 flex flex-col gap-3">
//               <Button variant="outline">Log in</Button>
//               <Button variant="primary">Request a demo</Button>
//             </div>
//           </DrawerContent>
//         </Drawer>
//       </div>
//       {/* Desktop Buttons */}
//       <div className="hidden md:flex gap-4">
//         <Button variant="outline">Log in</Button>
//         <Button variant="primary">Request a demo</Button>
//       </div>
//     </header>
//   );
// }

import { useState, useEffect } from 'react';
import logo from '../../assets/logo-chainalysis.svg';
import NavMenu from '../NavMenu/NavMenu';
import Button from '../Button/Button';
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer.jsx";
import { Menu, X } from "lucide-react";

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
          className={`${isFixed ? 'fixed' : ''} top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 bg-white z-50 shadow-sm transition-transform duration-300 ease-in-out ${
              isFixed && isVisible ? 'translate-y-0' : isFixed && !isVisible ? '-translate-y-full' : 'translate-y-0'
          }`}
      >
        {/* Logo Section */}
        <div className="flex items-center min-w-0 flex-shrink-0">
          <img
              src={logo}
              alt="Chainalysis Logo"
              className="h-8 sm:h-10 md:h-12 mr-2 sm:mr-3 flex-shrink-0"
          />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-bold text-[#ff6600] tracking-wide truncate">
          Chainalysis
        </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavMenu />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3 xl:gap-4 flex-shrink-0">
          <Button variant="outline" className="text-sm xl:text-base">
            Log in
          </Button>
          <Button variant="primary" className="text-sm xl:text-base">
            Request a demo
          </Button>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden">
          <Drawer direction="left" className={'h-full'}>
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
                  <img
                      src={logo}
                      alt="Chainalysis Logo"
                      className="h-8 sm:h-10 mr-2 flex-shrink-0"
                  />
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
                <NavMenu isMobile={true} />
              </nav>

              {/* Mobile Action Buttons */}
              <div className="px-4 sm:px-6 pb-6 pt-4 border-t border-gray-200 flex flex-col gap-3">
                <Button variant="outline" className="w-full justify-center">
                  Log in
                </Button>
                <Button variant="primary" className="w-full justify-center">
                  Request a demo
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
  );
}