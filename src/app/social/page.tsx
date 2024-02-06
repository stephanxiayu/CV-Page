import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>
          For more insights about me or to get in touch, please visit my
          Instagram or LinkedIn profiles. For all inquiries, please contact me
          through LinkedIn. You can view my code on my GitHub account.
        </p>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.instagram.com/sommerregen_in_china/"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              href="https://github.com/stephanxiayu"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/stephan-granzow-780016b4/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
    </section>
  );
}
