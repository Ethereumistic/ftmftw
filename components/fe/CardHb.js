import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";

export default function CardHb(props) {
  return (
    <Container className="">
    <div className="max-w-lg mx-auto  rounded-lg shadow-md overflow-hidden
                  dark:bg-slate-700 bg-slate-400  dark:text-slate-800 
                    dark:bg-[radial-gradient(#4d4d4d_1px,transparent_1px)] 
                    bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="px-6 py-4">
        <h2 className="text-4xl font-orbib italic font-black text-gray-800 dark:text-gray-200">ADVANCING HYPER<span className="text-3xl text-borange font-outline-1b">₿</span>ITCOINIZATION</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400"></p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">#tag1</span>
        <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">#tag2</span>
        <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">#tag3</span> */}
        <h1 className="text-xl font-russo font-semibold text-slate-800 dark:text-slate-200">Bitcoin is a revolutionary technology that empowers people worldwide to save money, 
            helps businesses grow, and enables countries to succeed. FTMFTW provides the tools 
            to help everyone adopt Bitcoin and build a brighter future.</h1>
      </div>
    </div>
      <Backlink />
    </Container>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
      target="_blank"
      rel="noopener"
      className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          width="30"
          height="29.5385"
          rx="2.76923"
          fill="#362F78"
        />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span> Purchase Pro ↗</span>
    </a>
  );
};
