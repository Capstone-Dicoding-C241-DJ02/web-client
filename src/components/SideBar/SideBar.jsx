import { useState } from "react";
import jobsImage from "../../assets/jobs.png";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-white text-black p-4 shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 md:w-[250px] h-full md:h-[830px] z-40`}
        style={{ height: isOpen ? "100%" : "830px" }}
      >
        <div className="relative z-40">
          <img src={jobsImage} alt="Jobs" className="w-full h-auto mb-4" />
          {/* ul dan li masuk dibawah sini */}
          <ul>
            <li className="ml-8 mt-10">
              <a href="#main-Content" onClick={handleLinkClick}>
                Lowongan Anda
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Button to toggle sidebar */}
      <button
        className={`md:hidden w-12 h-24 fixed top-1/2 transform -translate-y-1/2 z-50 bg-white text-black shadow-primary rounded-r-lg ${
          isOpen ? "left-64" : "left-0"
        }`}
        onClick={toggleSidebar}
      >
        <span className="transform -rotate-90 w-full h-full flex items-center justify-center">
          {isOpen ? "Close" : "Open"}
        </span>
      </button>

      {/* Click outside the sidebar to close */}
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
