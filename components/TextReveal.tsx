"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextReveal() {
  return (
    <div className="translate-x-[350px] -translate-y-[60px] scale-125 flex items-center justify-center bg-transparent h-[2rem] rounded-2xl w-full ">
                  <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-base sm:text-[3rem] py-10 font-bold dark:text-white bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-300"
          >
            FIX THE
          </p>

      <TextRevealCard
        text="MONEY"
        revealText="WORLD"
        staticText="FIX THE"
      >
        {/* <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle> */}
        {/* <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}
