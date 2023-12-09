import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap animate-bounce bg-[#161921]">
      <p className="font-extrabold text-xl text-white"><span className="font-extrabold text-2xl">AmineX </span><span className="text-xl text-teal-500"> Made with ♥ by <Link className="text-teal-300" href={"https://www.linkedin.com/in/ramanand-rv/"}>Ramanand Thakur</Link></span></p>
      <Link href={"https://github.com/ramanand-rv"}>
        <Image
          src="./logo.svg"
          alt="logo"
          width={47}
          height={44}
          className="object-contain transition duration-150 cursor-pointer hover:scale-150"
        />
      </Link>

      <div className="flex items-center gap-6">
        <Link href={'https://www.linkedin.com/in/ramanand-rv/'}>
          <Image
            src="./linkedin.svg"
            alt="logo"
            width={25}
            height={25}
            className="object-contain hover:scale-150 transition duration-150"
          />
        </Link>

        <Link href={"https://www.instagram.com/ramanand_rv/"}>
          <Image
            src="./instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain hover:scale-150 transition duration-150"
          />
        </Link>

        <Link href={"https://twitter.com/pyaracetamol0mg"}>
          <Image
            src="./twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain hover:scale-150 transition duration-150"
          />
        </Link>

        <Link href={"https://github.com/ramanand-rv"}>
          <Image
            src="./github.svg"
            alt="logo"
            width={25}
            height={25}
            className="object-contain hover:scale-150 transition duration-150"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
