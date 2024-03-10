import JobsTable from "@/components/JobsTable";
import { Image } from "@nextui-org/image";
import { Code } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-row ">
      <div className=" lg:basis-2/4">
        <h1 className="text-6xl font-bold mb-8">Witaj w</h1>
        <h1 className="text-8xl font-bold mb-8">
          <Code className="text-8xl">IT-JOBS</Code> !
        </h1>
        <h2 className="text-5xl font-bold mb-8">
          kosmicznym{" "}
          <span className="text-blue-500 text-4xl">
            portalu pracy IT<span className="text-black">,</span>
          </span>
        </h2>
        <h2 className="text-2xl font-bold mb-8">
          gdzie Twoje marzenia o idealnej karierze stają się rzeczywistością!
        </h2>
        <Link href="/offers">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded text-4xl">
            Przeglądaj oferty pracy
          </button>
        </Link>
      </div>
      <div className="hidden lg:flex lg:basis-2/4">
        <div className={"h-fit "}>
          <Image
            src={"/space-programmer.webp"}
            alt={"Space programmer"}
            removeWrapper={true}
          />
        </div>
      </div>
    </div>
  );
}
