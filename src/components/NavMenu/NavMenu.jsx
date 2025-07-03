import { Link } from "react-router-dom";

const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'About Us', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
];

export default function NavMenu({ isMobile = false, onMenuItemClick }) {
    return (
        <nav>
            <ul className={`${
                isMobile
                    ? 'flex flex-col gap-4 list-none m-0 p-0'
                    : 'flex gap-6 xl:gap-9 list-none m-0 p-0'
            }`}>
                {menuItems.map(item => (
                    <li key={item.label}>
                        <Link
                            to={item.path}
                            className={`${
                                isMobile
                                    ? 'block text-lg sm:text-xl py-3 px-2 text-[#222] border-b border-gray-100 last:border-b-0 transition-colors duration-200 hover:text-[#ff6600] hover:bg-gray-50 rounded-md'
                                    : 'text-base xl:text-lg text-[#222] cursor-pointer transition-colors duration-200 hover:text-[#ff6600]'
                            } font-medium`}
                            onClick={isMobile && onMenuItemClick ? onMenuItemClick : undefined}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}