import {Link} from "react-router-dom";

const menuItems = [
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Services', path: '/services' },
  { label: 'Insights', path: '/insights' },
  { label: 'Company', path: '/company' },
];

export default function NavMenu() {
  return (
    <nav>
      <ul className="flex gap-9 list-none m-0 p-0">
        {menuItems.map(item => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="text-lg text-[#222] cursor-pointer transition-colors duration-200 hover:text-[#ff6600]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 