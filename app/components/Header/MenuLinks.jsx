import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLinks = ({ items, toggleMenu = null }) => {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => (
        <li key={item.href} className="w-full">
          <Link
            href={item.href}
            className={`text-lg font-semibold w-full transition-colors ${
              pathname === item.href ? "text-[#39B54A]" : "text-gray-600 hover:text-[#39B54A]"
            }`}
            onClick={toggleMenu}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MenuLinks;
