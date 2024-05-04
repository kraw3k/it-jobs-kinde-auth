import { Image } from "@nextui-org/image";
import { Code } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
  return (
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="w-100 lg:w-1/2 h-fit flex content-center items-center">
            <Image
                src={"/space-programmer4.jpeg"}
                alt={"Space programmer"}
                removeWrapper={true}
            />
        </div>
        <div className="w-100 lg:w-1/2">
          <h1 className="text-2xl lg:text-6xl font-bold mb-2 lg:mb-8">Witaj w</h1>
          <h1 className="text-3xl lg:text-7xl font-bold mb-2 lg:mb-8">
            <Code className="text-3xl lg:text-7xl">IT-PRACA</Code> !
          </h1>
          <h2 className="text-2xl lg:text-5xl font-bold mb-8">
            kosmicznym{" "}
            <span className="text-blue-500 text-2xl lg:text-4xl">
            portalu pracy IT<span className="text-black">,</span>
          </span>
          </h2>
          <h2 className="text-xl lg:text-2xl font-bold mb-8">
            gdzie Twoje marzenia o idealnej karierze stają się rzeczywistością!
          </h2>
          <Link href="/offers">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded text-2xl lg:text-4xl">
              Przeglądaj oferty pracy
            </button>
          </Link>
        </div>

      </div>
  );
}
