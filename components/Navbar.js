import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/aliens.jpg" color='black' width={128} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About us</a>
      </Link>
      <Link href="/aliens">
        <a>Aliens Community</a>
      </Link>
    </nav>
  );
};

export default Navbar;
