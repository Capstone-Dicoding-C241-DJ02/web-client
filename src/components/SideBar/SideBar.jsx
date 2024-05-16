import { useState, useEffect } from "react";
import jobsImage from "../../assets/jobs.png";
import Chevron from "../../icons/IconChevron";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      closeSidebar();
    }
  };

  // JIka width < 768 setIsMobile jadi true
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-white text-black p-4 shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 md:w-[250px] h-full md:h-[830px] z-40`}
        style={{ height: isOpen ? "100%" : "830px" }}
      >
        <div className="relative z-40">
          <img src={jobsImage} alt="Jobs" className="w-full h-auto mb-4" />
          {/* Sidebar content dibawahsini*/}
          <ul>
            <li className="ml-3 mt-10 ">
              <a
                href="#main-Content"
                className="text-heading2 "
                onClick={handleLinkClick}
              >
                Lowongan Anda
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* tombol sidebar chevron */}
      <button
        className={`md:hidden w-12 h-24 fixed top-1/2 transform -translate-y-1/2 z-50 bg-white text-black ${
          isOpen ? "shadow-none" : "shadow-primary1"
        } rounded-r-lg transition-all duration-300 ease-in-out ${
          isOpen ? "left-64" : "left-0"
        }`}
        onClick={toggleSidebar}
      >
        <span className="transform w-full h-full flex items-center justify-center">
          <Chevron direction={isOpen ? "left" : "right"} />
        </span>
      </button>

      {/* Click diluar sidebar = close sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default SideBar;
