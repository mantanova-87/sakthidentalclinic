"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function PrivacyConsent() {
  const pathname = usePathname();

  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = sessionStorage.getItem("privacy-consent");

    setAccepted(consent === "accepted");
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("privacy-consent", "accepted");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <>
      {/* Block the whole website except Privacy Policy */}
      {pathname !== "/privacy-policy" && (
        <div className="fixed inset-0 z-[9998] bg-white/60 backdrop-blur-sm" />
      )}

      {/* Consent Bar */}
      <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-[#E2E8F0] bg-white shadow-2xl">
        <div className="mx-auto flex max-w-8xl flex-col gap-6 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Sakthi Dental Clinic
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#0F172A]">
              Privacy Notice
            </h2>

            <p className="mt-2 max-w-4xl leading-7 text-[#475569]">
              Before using this website, please read and accept our Privacy
              Policy. Until you agree, access to the website is restricted.
              Click on the link given below to read our complete privacy-policy 
              and other terms and conditions for visiting and accessing this website.
              Clicking on "Agree and Continue" will imply that you have "Read" and "Accept" 
              all the terms and conditions mentioned on our privacy-policy page.Thank You for visiting us.
            </p>

            <Link
              href="/privacy-policy"
              className="mt-3 inline-flex font-semibold text-[#2563EB] transition-colors duration-300 hover:text-[#1D4ED8]"
            >
              Read Privacy Policy →
            </Link>
          </div>

          <Button
            onClick={handleAccept}
            className="h-12 bg-[#EC4899] px-8 hover:bg-[#DB2777]"
          >
            Agree & Continue
          </Button>

        </div>
      </div>
    </>
  );
}