"use client";

import FullScreenDrawer from "@/components/drawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
const quiz = [
  {
    id: 1,
    question: "What’s your hair type?",
    type: "select_one",
    multiple_choice: [
      "Thick & Straight",
      "Fine & Straight",
      "Wavy",
      "Coiled (Curly)",
    ],
  },
  {
    id: 2,
    question: "What hairstyle finish do you prefer?",
    type: "select_one",
    multiple_choice: ["Natural Shine", "Dry Matte", "Clay Matte", "High Shine"],
  },
  {
    id: 3,
    question: "What's your hair length on top?",
    type: "select_one",
    multiple_choice: [
      "Less than 2.5 cm",
      "Between 2.5 - 5 cm",
      "Between 5 - 7.5 cm",
      "Greater than 7.5 cm",
    ],
  },
];
const QuizPageModules = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (idx: number) => {
    const element = document.getElementById(`${idx}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const resultProduct = {
    title: "QUIV - FLEX",
    type: "flex",
    image_url: "/image/general/image1_flex.png",
    content: `
    <div style="text-align: center">
      <p>
       Touted as the world's most unique "Elastic Hair Compound", GRAVITY PASTE provides the malleable feel of a natural wax combined with fiber. This paste/wax hybrid is perfect for chunky, finger combed looks with high hold and low gloss (think Robert Pattinson, "Twilight"). QUICK TIP: This product dries and sets quickly! Be sure to apply aggressively to dry hair then finger style immediately. </p>
      <br/>
      <p>
     For an extra boost, we highly recommend you try our STYLE LOCK HAIRSPRAY to further lock your hairstyle into place all day and night. </p>
    </div>
`,
  };

  return (
    <div className="flex flex-col">
      {quiz.map((item, idx) => {
        return (
          <div id={idx.toString()} key={idx}>
            <div className="flex mx-5 flex-row h-screen justify-center items-center sm:justify-start sm:items-start sm:mt-[250px] sm:ml-[300px] gap-5">
              <div className="flex flex-row gap-5">
                <div className="flex">
                  <div className="flex flex-row gap-2 font-bold text-2xl">
                    {idx + 1}.
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row gap-2 font-bold text-2xl">
                    <div>{item.question}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {item.multiple_choice.map((e, i) => {
                      return (
                        <div
                          key={i}
                          className="hover:bg-navy-blue p-2 rounded-lg hover:text-white bg-white border-navy-blue text-navy-blue text-sm sm:text-lg w-60 border-[1px]"
                        >
                          {String.fromCharCode(65 + i)}. {e}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        if (quiz.length - 1 === idx) setIsOpen(true);
                        else handleScroll(idx + 1);
                      }}
                      className={twMerge(
                        "bg-navy-blue text-white hover:bg-white hover:border-navy-blue hover:text-navy-blue text-sm sm:text-lg border-2",
                        quiz.length - 1 === idx ? "w-28" : "w-20 "
                      )}
                    >
                      {quiz.length - 1 === idx ? "Submit" : "OK"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <FullScreenDrawer isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <div className="flex bg-navy-blue min-h-screen p-4 text-white justify-center item-center flex-col gap-10 pb-32">
          <div className="flex justify-center">
            <Image
              className="h-[350px] w-[300px] sm:h-[595px] sm:w-[595px] object-obtain rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
              width={286}
              height={286}
              src={resultProduct.image_url}
              alt={resultProduct.title}
            ></Image>
          </div>
          <div className="flex justify-center text-lg text-center sm:text-2xl">
            Our Recommendation Product for you is:
          </div>
          <div className="flex justify-center text-2xl sm:text-[40px] font-bold">
            {resultProduct.title}
          </div>
          <div className="flex justify-center">
            <div
              dangerouslySetInnerHTML={{ __html: resultProduct.content }}
              className="m-5"
            />
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                router.push(`/products/${resultProduct.type}`);
              }}
              variant="outline"
              className="bg-transparent text-white hover:text-navy-blue text-sm sm:text-lg w-40 sm:w-52 border-white hover:border-none"
            >
              See product
            </Button>
          </div>
        </div>
      </FullScreenDrawer>
    </div>
  );
};

export default QuizPageModules;
