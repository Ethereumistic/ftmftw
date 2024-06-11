import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { TextReveal } from "./TextReveal";

export default function Mainland(props) {
  return (
        <>
        <div className="xl:scale-150 my-auto translate-x-16">
        {/* <div className="text-center text-black dark:text-gray-200 font-ubu text-6xl font-extrabold italic mb-4">
        FIX THE <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)] text-borange">MONEY</span>
        </div>

        <div className="text-center text-black dark:text-gray-200 font-ubu text-6xl font-extrabold italic  ">
        FIX THE <span className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)] text-borange">WORLD</span>
        </div> */}
        <TextReveal className=""/>
        </div>
        </>  
  );
}