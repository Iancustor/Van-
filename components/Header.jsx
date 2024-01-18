import Link from "next/link";

export default function Header() {
  const navLinks = [
    {
      link: "/",
      linkName: "Home",
    },
    {
      link: "/about",
      linkName: "About",
    },
    {
      link: "/services",
      linkName: "Services",
    },
    {
      link: "/contacts",
      linkName: "Contacts",
    },
  ];
  return (
    <>
      <nav className="nav">
        <Link href="/" className="alpine">
          Alpine
        </Link>
        <ul className="navList">
          {navLinks.map((item, i) => {
            return (
              <Link className="nav__item" key={i} href={item.link}>
                {item.linkName}
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
