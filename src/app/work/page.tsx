import sailing from "@/assets/sailing.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Learn more about Stephan Granzow and his work experience.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Work Experience</H1>
      <section className="space-y-3">
        {/* <H2>Who am I?</H2>
        <p>
          My name is Stephan Granzow and I am a Flutter Developer based in
          Berlin, Germany. With a passion for clean code and extensive
          experience in mobile app development, I have contributed to numerous
          projects that demonstrate my ability to deliver high-quality software
          solutions.
        </p> */}
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Professional Coding Experience</H2>
        <div>
          <h3>Shiftly24.de - Co-Founder, CTO and Lead Dev</h3>
          <p>December 2023 - today | Berlin, Germany</p>
          <p>
            Develop the Landing-Page and Frontend in React, Backend in Node and
            the Mobileapp in Flutter.
          </p>
        </div>
        <div>
          <h3>OneCode - Senior Flutter Developer</h3>
          <p>October 2023 - December 2023 (3 months) | Berlin, Germany</p>
          <p>
            Contributed to advanced Flutter projects, emphasizing modular design
            and maintainable code.
          </p>
        </div>
        <div>
          <h3>planhero | Der Ausfallmanager - Flutter Software Developer</h3>
          <p>March 2022 - September 2023 (1 year 7 months) | Berlin, Germany</p>
          <ul>
            <li>Developed and designed features for Planhero apps.</li>
            <li>Managed app deployments to Apple and Google Play stores.</li>
            <li>Specialized in debugging to ensure app quality.</li>
          </ul>
        </div>
        <div>
          <h3>Manara e.V. - Co-Founder & Flutter Developer</h3>
          <p>August 2020 - January 2023 (2 years 6 months) | Berlin, Germany</p>
          <ul>
            <li>
              Directed efforts towards creating digital solutions for the
              homeless.
            </li>
            <li>Developed user-friendly apps to aid needy individuals.</li>
          </ul>
        </div>
        {/* Weitere berufliche Erfahrungen hier einfügen */}
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Work Experience</H2>
        <div>
          <h3>Caya - Customer Experience Manager</h3>
          <p>March 2021 - February 2022 (1 year) | Berlin, Germany</p>
          <p>
            Optimized customer experience and increased customer satisfaction
            through effective communication strategies and feedback analysis.
          </p>
        </div>
        <div>
          <h3>PAIR Finance - Collections Advisor</h3>
          <p>March 2019 - February 2021 (2 years) | Berlin, Germany</p>
          <p>
            Advised and supported customers on payment solutions, improving
            collections strategies.
          </p>
        </div>
        <div>
          <h3>Arvato Financial Solutions - Accounts Payable Clerk</h3>
          <p>
            February 2018 - February 2019 (1 year 1 month) | Berlin and
            surrounding area, Germany
          </p>
          <p>
            Responsible for managing payables and ensuring payment efficiency.
          </p>
        </div>
        <div>
          <h3>Rhein-Frühling German Institute Beijing - German Teacher</h3>
          <p>June 2017 - November 2017 (6 months) | Beijing, China</p>
          <p>
            Taught German language, preparing Chinese students for their studies
            in Germany.
          </p>
        </div>
        <div>
          <h3>BERLIN CITY MISSION - Deputy Shift Leader</h3>
          <p>
            October 2016 - February 2017 (5 months) | Berlin and surrounding
            area, Germany
          </p>
          <p>
            Co-responsible for the operation of a refugee shelter, assisting in
            the coordination of daily routines and ensuring the well-being of
            residents.
          </p>
        </div>
        <div>
          <h3>Capita Customer Management - Customer Relations Manager</h3>
          <p>
            February 2008 - September 2016 (8 years 8 months) | Berlin, Germany
          </p>
          <p>
            Led the customer relations team to ensure high customer satisfaction
            and effective resolution of customer inquiries.
          </p>
        </div>
      </section>
      <hr className="border-muted" />

      <section className="space-y-3">
        <H2>Education</H2>
        <p>
          University of International Business and Economics - Chinese Language,
          Economics, and Culture (2017 - 2018)
        </p>
        <p>University of Potsdam - Economics, Business Law (2015 - 2019)</p>
        <p>
          Technical University of Berlin - Business Mathematics (2014 - 2015)
        </p>
        <p>Berlin Kolleg - Abitur (2011 - 2014)</p>
        <p>Bildungszentrum des Handels - Fachverkäufer (2001 - 2003)</p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I'm a full-stack web and Flutter App developer specializing in{" "}
          <strong>React</strong>, <strong>Node</strong>, and{" "}
          <strong>Flutter</strong>.
        </p>
        <p>
          I also have experience with Nginx Server, Next.js, Postman, and
          Firebase.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Volunteer Work</H2>
        <p>Manara - Street Worker & Managing Director (2020 - 2024)</p>
        <p>Emergency Shelter Worker - Berliner Stadtmission (2012 - 2018)</p>
        <p>
          City Mission Cold Bus Driver (Kältebusfahrer) - Berliner Stadtmission
          (2011 - 2014)
        </p>

        <p>City Station Volunteer - Berliner Stadtmission (2012 - 2014)</p>
        <p>Child Care Worker - Berliner Stadtmission (2013)</p>
      </section>
      <hr className="border-muted" />
      {/* Weitere Abschnitte wie Seitenprojekte, Hobbys usw. */}
    </section>
  );
}
