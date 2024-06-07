import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Us from "./us";

export default async function AboutUsPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Us settings={settings} authors={authors} />;
}

// export const revalidate = 60;
