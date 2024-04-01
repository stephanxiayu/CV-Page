import me from "@/assets/bild.jpeg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Bot } from "lucide-react";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stephan Granzow - My Smart Portfolio",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Stephan Granzow - My Smart Portfolio</title>
        <meta
          name="description"
          content="I'm a Fullstack Web and Flutter App developer from Berlin, Germany who builds cool projects."
        />
        {/* Hier fügst du deine Social Media Meta Tags ein */}
        <meta
          property="og:image"
          content="https://stephan-granzow.com/soical_media.png"
        />
        <meta
          property="og:title"
          content="Stephan Granzow - My Smart Portfolio"
        />
        <meta
          property="og:description"
          content="I'm a Fullstack Web and Flutter App developer from Berlin, Germany who builds cool projects."
        />
        <meta property="og:url" content="www.stephan-granzow.com" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* ...weitere Meta Tags */}
      </Head>
      <section className="space-y-16 bg-[url('/ii.jpeg')] bg-cover bg-center bg-no-repeat px-1 py-8">
        <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <H1 className="text-center text-gray-300 sm:text-start">
              Hi, I&apos;m Stephan 👋
            </H1>
            <p className="text-center text-gray-400 sm:text-start">
              I&apos;m a Fullstack Web and Flutter App developer from Berlin
              Germany who builds cool projects.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={me}
              alt="A photo of me"
              height={300}
              width={300}
              className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
            />
          </div>
        </section>
        <section className="space-y-3 text-center">
          <H1 className="text-gray-300">Ask the chatbot anything about me</H1>
          <H3 className="text-gray-400">
            Click the little{" "}
            <Bot size={35} color="green" className="inline pb-1" /> icon in the
            top bar to activate the AI chat. You can ask the chatbot any
            question about me and it will find the relevant info on this
            website. The bot can even provide links to pages you&apos;re looking
            for.
          </H3>
        </section>
      </section>
    </>
  );
}
