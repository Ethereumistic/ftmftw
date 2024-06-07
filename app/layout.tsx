import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora, Ubuntu } from "next/font/google";
import localfont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

const ubu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubu",
  weight: "400",
});

const orbib = localfont(
  {
    src: [
      {
          path: "../public/fonts/Orbitron-Bold.ttf",
          weight: "700",
      },
    ],
    variable: "--font-orbib"
  });

  const orbir = localfont(
    {
      src: [
        {
            path: "../public/fonts/Orbitron-Regular.ttf",
            weight: "700",
        },
      ],
      variable: "--font-orbir"
    });

  const russo = localfont(
    {
      src: [
        {
            path: "../public/fonts/RussoOne-Regular.ttf",
            weight: "700",
        },
      ],
      variable: "--font-russo"
    });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable, russo.variable, orbib.variable, orbir.variable, ubu.variable)}>
      <body className="antialiased ">
      {/* <div className="relative h-full w-full text-gray-800 dark:bg-slate-950 dark:text-gray-400"> */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300 dark:bg-slate-950  dark:text-slate-800 dark:bg-[radial-gradient(#333333_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
