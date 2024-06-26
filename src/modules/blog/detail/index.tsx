"use client";

import Image from "next/image";

const BlogDetailPageModules = () => {
  const data = {
    url: "/image/blog/image1.png",
    date: "30 June 2025",
    title: "Three tips for getting perfect vacation hair",
    createdBy: "By QUIV",
    content: `
    <div style="text-align: center">
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">Navigating the vast array of hair products can feel like deciphering a complex code. What exactly is wax? Is pomade too sticky? Will clay leave my hair dry? Finding the right product can be daunting.</p>

        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">At Hanz de Fuko, we've created an easy-to-follow guide to help unravel the mystery behind three essential styling products: Wax, Clay, & Pomade.</p>

        <h2 style="font-family: Arial, sans-serif; font-size: 24px; color: #000; margin-top: 20px;">CLAY</h2>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">Ever wondered about that earthy-smelling product resembling wet sand? Surprisingly, clay is a hair hero! Packed with natural goodness like bentonite clay, it's absorbent, volumizing, and purifying. Perfect for building volume, absorbing excess oil, and preventing hair loss. Barbers love clay for its clean, dense texture and its ability to sculpt flexible hairstyles without any sticky residue.</p>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;"><strong>How to Cocktail:</strong> Use clay as a pre-styler for added volume, then layer with wax or pomade for hold and shine.</p>

        <h2 style="font-family: Arial, sans-serif; font-size: 24px; color: #000; margin-top: 20px;">WAX</h2>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">Wax - it's more than just a name! Providing a thick, waxy grip, it's ideal for edgy hairstyles with texture and definition. Whether you're aiming for exaggerated lines or sleek pompadours, wax delivers a natural matte finish with a touch of shine. Hanz de Fuko's Hybridized Wax offers medium hold and satin shine, perfect for modern finishes. For flexible, long-lasting hold, try our Sponge Wax for effortless styling.</p>

        <h2 style="font-family: Arial, sans-serif; font-size: 24px; color: #000; margin-top: 20px;">POMADE</h2>
        <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">Get ready for a glossy finish with pomade, also known as "hair grease." Traditionally oil-based and challenging to wash out, Hanz de Fuko's Modify Pomade offers the same high shine with a water-based formula that's easy to wash out. Looking for extreme hold and shine? Our Heavymade delivers a clean, heavy finish without the grease.</p>
    </div>
`,
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:min-h-screen mx-5 sm:mx-20 text-center mt-24 sm:mt-28 gap-2 sm:gap-5">
        <div className="font-inter italic text-sm sm:text-xl font-light text-gray-400">
          {data.date}
        </div>
        <h1 className="font-montserrat text-xl sm:text-[40px] font-bold">
          {data.title}
        </h1>
        <div className="font-inter text-base sm:text-2xl font-light">
          {data.createdBy}
        </div>
        <div>
          <Image
            className="flex rounded-lg object-contain w-full"
            width={286}
            height={286}
            objectFit="cover"
            src={"/image/blog/image1.png"}
            alt={"story about us"}
          />
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
        className="m-5 sm:m-20"
      />
    </div>
  );
};

export default BlogDetailPageModules;
