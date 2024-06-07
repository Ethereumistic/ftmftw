import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Bitcoin({ authors, settings }) {
  return (
    <Container>
    <div className="flex ml-8">
      <h1 className="mb-3 mt-2  text-3xl font-orbib italic font-bold tracking-tight dark:text-white lg:text-4xl lg:leading-snug bg-borange rounded-full px-8 py-2">
      ₿itcoin 
      </h1>
      <h1 className="ml-4 mb-3 mt-4  text-3xl font-orbib italic font-bold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">and why it will change the world</h1>
    </div>
    </Container>
  );
}
