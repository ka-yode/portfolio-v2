import Image from "next/image";
import Link from "next/link";
import navImage from "../assets/memojilightbulb.webp";

const SECTIONS = [
  { name: "#projects", location: "#projects" },
  { name: "#experience", location: "#exp" },
  { name: "#contact", location: "#contact" },
];
export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="flex items-center justify-between md:mt-10">
      <Link href="/" aria-label="Kayode Babalola home" className="hidden md:block">
        <Image
          src={navImage}
          alt=""
          width={64}
          height={64}
          sizes="64px"
          className="h-16 w-16 hidden md:block"
          placeholder="blur"
        />
      </Link>
      <ul className="items-center gap-4 min-h-full flex">
        {SECTIONS.map((section) => (
          <SectionPointers key={section.name} {...section} />
        ))}
      </ul>
    </nav>
  );
}
export interface SectionPointerProps {
  name: string;
  location: string;
}

export const SectionPointers = ({ name, location }: SectionPointerProps) => {
  return (
    <li className="flex flex-col items-start">
      <a href={location} className="group flex gap-1 items-center">
        <span aria-hidden="true" className="mr-2 hidden h-px w-6 bg-white/50 transition-all group-hover:w-12 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none duration-300 sm:block"></span>
        <p className="text-white/50 group-hover:text-white">{name}</p>
      </a>
    </li>
  );
};
