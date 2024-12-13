import MenuLinks from "./MenuLinks";
import { menuItems } from "./menuItems";

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div
    className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50 transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-2 border-b">
        <span className="text-lg font-bold text-gray-800">Menu</span>
        <button aria-label="Close menu" className="p-2 text-gray-800 focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col items-start gap-6 mt-8" role="menu">
        <MenuLinks items={menuItems} />
      </ul>
    </div>
  </div>
);

export default MobileMenu;
