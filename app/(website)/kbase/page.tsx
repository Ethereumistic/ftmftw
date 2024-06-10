import { getSettings } from "@/lib/sanity/client";
import Kbase from "./kbase";

export default async function KbasePage() {
  const settings = await getSettings();
  return <Kbase />;
}

// export const revalidate = 60;
