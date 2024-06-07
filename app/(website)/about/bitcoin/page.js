import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Bitcoin from "./bitcoin";

export default async function AboutBitcoinPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Bitcoin settings={settings} authors={authors} />;
}

// export const revalidate = 60;