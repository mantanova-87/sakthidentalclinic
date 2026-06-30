import Link from "next/link";
import { Logo } from "./logo";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/common/container";

const socialIconClass =
  "flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:text-primary";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="grid gap-8 py-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Logo & About */}
          <div className="space-y-4">
            <Logo />

            <p className="text-base leading-7 text-muted-foreground">
              {siteConfig.footerDescription}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialIconClass}
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialIconClass}
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={socialIconClass}
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-muted-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Key Treatments
            </h3>

            <ul className="space-y-2">
              {siteConfig.footerTreatments.map((treatment) => (
                <li key={treatment}>
                  <Link
                    href="/treatments"
                    className="text-base text-muted-foreground hover:text-primary"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Contact & Timings
            </h3>

            <div className="space-y-4 text-base text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">📍 Address</p>
                <p>{siteConfig.contact.address}</p>
              </div>

              <div>
                <p className="font-medium text-foreground">📞 Phone</p>

                {siteConfig.contact.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>

              <div>
                <p className="font-medium text-foreground">✉️ Email</p>
                <p>{siteConfig.contact.email}</p>
              </div>

              <div>
                <p className="font-medium text-foreground">🕒 Timings</p>

                {siteConfig.businessHours.map((item) => (
                  <div key={item.days} className="mt-1">
                    <p>{item.days}</p>
                    <p className="font-semibold text-foreground">
                      {item.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-5 text-center text-base text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}