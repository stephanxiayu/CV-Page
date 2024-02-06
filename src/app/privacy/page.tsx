import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <H1>Privacy Policy</H1>
        <p>Last Updated: February 2024</p>
      </div>
      <div className="space-y-3">
        <H2>Introduction</H2>
        <p>
          Welcome to my portfolio website. I respect your privacy and am
          committed to protecting your personal data. This privacy policy will
          inform you how I handle your data when you visit my website.
        </p>
        <H2>Information We Collect</H2>
        <p>
          My website is a static portfolio that does not actively collect
          personal data from visitors. There is no account creation process, and
          I do not use cookies for tracking or data collection purposes.
        </p>
        <H3>ChatGPT Chatbot</H3>
        <p>
          You can interact with a ChatGPT chatbot on this website to ask
          questions about my portfolio. These queries are not stored, and no
          personal data is collected during the interaction.
        </p>

        <H2>Contact Us</H2>
        <p>
          If you have any questions about this Privacy Policy, please contact me
          at Stephan_Granzow@web.de.
        </p>
      </div>
      <div className="space-y-3">
        <H1>Impressum</H1>
        <p>Verantwortlich für den Inhalt dieser Webseite:</p>
        <p>
          Stephan Granzow
          <br />
          Huttenstr. 71
          <br />
          10553 Berlin
          <br />
          E-Mail:{" "}
          <a href="mailto:Stephan_Granzow@web.de">Stephan_Granzow@web.de</a>
        </p>
        <p>
          <strong>Haftungsausschluss:</strong> Trotz sorgfältiger inhaltlicher
          Kontrolle übernehme ich keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren
          Betreiber verantwortlich.
        </p>
      </div>
    </section>
  );
}
