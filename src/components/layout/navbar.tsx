import { Container } from "@/components/common/container";
import { DesktopNav } from "./desktop-nav";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 transition-all duration-300 ease-in-out">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNav />

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}