import sailing from "@/assets/sailing.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Stephan Granzow and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>

        <p>
          My name is Stephan Granzow and I am a self-taught software developer
          from Berlin Germany. I started programming in 2020, at the age of 36,
          and since then I have created a lot of cool Projects like{" "}
          <a
            href="https://www.meine-notizen.com/"
            className="text-primary hover:underline"
          >
            Shiftly24.de
          </a>
          .
        </p>
        <p>I&apos;m passionate about building cool apps and websites.</p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web and Flutter App developer specializing in{" "}
          <strong>React</strong>, <strong>Node</strong>, and{" "}
          <strong>Flutter</strong>.
        </p>
        <p>
          I also have experience with Nginx Server, Next.js, Postman and
          Firebase
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://www.meine-notizen.com/"
              className="text-primary hover:underline"
            >
              Shiftly24.de
            </a>{" "}
            - A Shiftplan Software to create Shiftplans and share it with the
            Employees
          </li>
          <li>
            <Link
              href="https://www.manara-ev.de/"
              className="text-primary hover:underline"
            >
              Manara e.V.
            </Link>{" "}
            - Helping homeless people in Berlin
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love doing sports. I lift weights and run a
          lot. I also enjoy learning Chinese and sailing around the world. Last
          year, some friends and I were sailing with a catamaran around the
          Greek Islands. I think having hobbies other than coding is important
          for mental health.
        </p>

        <Image src={sailing} alt="sailing" className="rounded-md" />
      </section>
    </section>
  );
}
