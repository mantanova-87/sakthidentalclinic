"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function RouteGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const consent = sessionStorage.getItem("privacy-consent");

    if (
      consent !== "accepted" &&
      pathname !== "/privacy-policy"
    ) {
      router.replace("/privacy-policy");
    }
  }, [pathname, router]);

  return <>{children}</>;
}