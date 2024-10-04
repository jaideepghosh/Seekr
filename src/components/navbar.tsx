import Link from "next/link";
import { usePathname } from "next/navigation";

const Links: { name: string; href: string }[] = [];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {Links.length ? (
        Links.map((link) => (
          <li>
            <Link
              href={link.href}
              className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent dark:text-white ${
                isActive(link.href) ? "text-primary-700" : "text-gray-700"
              }`}
              aria-current="page"
            >
              {link.name}
            </Link>
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
}
