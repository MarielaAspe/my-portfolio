import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link 
            href={href} 
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] font-medium sm:text-lg rounded md:p-0 hover:text-[#00ADB5] transition-colors"
        >
            {title}
        </Link>
    );
};

export default NavLink;