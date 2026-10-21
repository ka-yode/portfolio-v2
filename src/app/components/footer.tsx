import Link from "next/link";
import { GithubIcon } from "../assets/icons/github-icon";
import { LinkedInIcon } from "../assets/icons/linkedin-icon";
import { GITHUB_URL } from "@/lib/site";

const date = new Date();
const year = date.getFullYear();
export const Footer = () => {
  return (
    <footer className="flex text-neutral-500 justify-between place-self-end w-full border-t-2 border-neutral-500 min-h-16 mt-6 items-center md:text-lg">
      <p>&copy; kayode.app {year}</p>
      <div className="flex items-center gap-6">
        <Link href={GITHUB_URL} aria-label="Kayode on GitHub">
          <GithubIcon className="size-5 md:size-6 fill-neutral-500" aria-hidden="true" />
        </Link>
        <Link href="https://www.linkedin.com/in/kayodedev/" aria-label="Kayode on LinkedIn">
          <LinkedInIcon className="size-5 md:size-6 fill-neutral-500" aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
};
