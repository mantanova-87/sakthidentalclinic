import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`Go to ${siteConfig.name} homepage`}
      className="inline-flex transition-opacity duration-200 hover:opacity-90"
    >
      <Image
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={240}
        height={80}
        priority
        className="h-14 w-auto object-contain"
      />
    </Link>
  );
}