"use client";
import { Section } from "@/components/common/section";
import { Container } from "@/components/common/container";
import { siteConfig } from "@/config/site";
export function PrivacyPolicy() {
  return (
    <Section className="bg-[#FDF2F8]">
      <Container className="max-w-5xl">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm md:p-10">

          {/* Page Header */}
          <div className="border-b border-[#E2E8F0] pb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Sakthi Dental Clinic
            </p>

            <h1 className="mt-3 text-4xl font-bold text-[#0F172A]">
              Privacy Policy
            </h1>

            <p className="mt-4 text-[#64748B] font-bold">
              Last Updated: 03/07/2026
            </p>
            <p className="mt-4 text-[#000000] font-bold">
              At Sakthi Dental Clinic, we are committed to protecting your privacy. This Privacy Policy
              outlines how we collect, use, store, and disclose information
              from visitors and users of our website.Please read it very carefully.
            </p>

          </div>

          {/* Information we collect */}
          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              1. Information We Collect
            </h2>

            <p className="leading-8 text-[#475569]">
              We may collect personal identification information from users in several ways, including when
              users:<br />
              ● Visit our website<br />
              ● Fill out forms (e.g contact or appointment requests)<br />
              ● Engage with features, services, or resources on our site<br />
              Types of information we may collect include:<br />
              ● Name<br />
              ● Email address<br />
              ● Phone number<br />
              Users can visit our site anonymously. We only collect personal data when it is voluntarily
              submitted by users. Refusing to provide certain personal information may limit access to some
              site features or services.<br />
              We may also gather non-personal identification information, such as:<br />
              ● Browser type<br />
              ● Device details<br />
              ● Operating system<br />
              ● Internet service provider<br />
              ● Technical data related to user interaction with the site<br />
            </p>
          </div>

          {/* Cookies*/}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              2. Cookies
            </h2>

            <p className="leading-8 text-[#475569]">
              Our website may use “cookies” to enhance the user experience. Cookies are small files stored on a user’s
              device for record-keeping purposes and to track preferences or site activity.
              Users can set their browser to refuse cookies or alert them when cookies are being used. Please
              note that disabling cookies may affect some site functionality.
            </p>
          </div>

          {/* How We Use Information */}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              3. How We Use Your Information
            </h2>

            <p className="leading-8 text-[#475569]">
              Collected information may be used for the following purposes:<br />
              ● To operate and manage the website: Ensuring content displays properly and
              services run smoothly.<br />
              ● To improve customer service: Helping us respond to inquiries more efficiently.<br />
              ● To enhance the website experience: Feedback provided may help us improve
              content, usability, and performance.<br />
              ● To communicate via email: We may use the email address to respond to
              inquiries, appointments, or service updates.
            </p>
          </div>

          {/* Data Security */}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              4. Data Security
            </h2>

            <p className="leading-8 text-[#475569]">
              We implement appropriate security measures for data collection, storage, and processing to
              safeguard your personal information from unauthorized access, alteration, or destruction.
            </p>
          </div>

          {/* Information sharing*/}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              5. Information Sharing
            </h2>

            <p className="leading-8 text-[#475569]">
              We do not sell, trade, or rent personal identification information to third parties.<br /><br />
              We may share general demographic data (not linked to any personal information) with trusted
              partners or affiliates to improve service delivery and site performance.
            </p>
          </div>

          {/* Children Privacy */}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              6. Children’s Privacy
            </h2>

            <p className="leading-8 text-[#475569]">
              In compliance with the Children’s Online Privacy Protection Act (COPPA), we do not
              knowingly collect any personal information from children under the age of 13. Our site is not
              intended to attract users below this age group.
            </p>
          </div>

          {/* Policy change */}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              7. Changes to This Policy
            </h2>

            <p className="leading-8 text-[#475569]">
              Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users to
              review this page periodically to stay informed about how we protect your information.
            </p>
          </div>

          {/* ACCEPTANCE OF TERMS */}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              8. Acceptance of Terms
            </h2>

            <p className="leading-8 text-[#475569]">
              By using this website, you agree of accepting and understanding this policy. If you do not accept our Privacy Policy, please do
              not use our website.<br />
              Continued use of the site following any updates will be deemed as your acceptance of aggreing and understanding the revised
              policy
            </p>
          </div>

          {/* CONTACT */}
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-[#EC4899]">
              9. Contact Us
            </h2>

            <div className="leading-8 text-[#475569]">
              If you have any questions about this Privacy Policy or your interactions with our site, please
              contact us:
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
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}