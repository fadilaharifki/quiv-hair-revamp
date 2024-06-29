export interface BlogPost {
  url: string;
  date: string;
  title: string;
  slug: string;
  createdBy: string;
  content: string;
}

export const dataBlog: BlogPost[] = [
  {
    url: "/image/blog/imageBlog1.png",
    date: "30 June 2025",
    title: "Three tips for getting perfect vacation hair",
    slug: "three-tips-for-getting-perfect-vacation-hair",
    createdBy: "By QUIV",
    content: `
    <div style="text-align: center">
        <p style="font-size: 16px; color: #333;">Navigating the vast array of hair products can feel like deciphering a complex code. What exactly is wax? Is pomade too sticky? Will clay leave my hair dry? Finding the right product can be daunting.</p>

        <p style="font-size: 16px; color: #333;">At Hanz de Fuko, we've created an easy-to-follow guide to help unravel the mystery behind three essential styling products: Wax, Clay, & Pomade.</p>

        <h2 style="font-size: 24px; color: #000; margin-top: 20px;">CLAY</h2>
        <p style="font-size: 16px; color: #333;">Ever wondered about that earthy-smelling product resembling wet sand? Surprisingly, clay is a hair hero! Packed with natural goodness like bentonite clay, it's absorbent, volumizing, and purifying. Perfect for building volume, absorbing excess oil, and preventing hair loss. Barbers love clay for its clean, dense texture and its ability to sculpt flexible hairstyles without any sticky residue.</p>
        <p style="font-size: 16px; color: #333;"><strong>How to Cocktail:</strong> Use clay as a pre-styler for added volume, then layer with wax or pomade for hold and shine.</p>

        <h2 style="font-size: 24px; color: #000; margin-top: 20px;">WAX</h2>
        <p style="font-size: 16px; color: #333;">Wax - it's more than just a name! Providing a thick, waxy grip, it's ideal for edgy hairstyles with texture and definition. Whether you're aiming for exaggerated lines or sleek pompadours, wax delivers a natural matte finish with a touch of shine. Hanz de Fuko's Hybridized Wax offers medium hold and satin shine, perfect for modern finishes. For flexible, long-lasting hold, try our Sponge Wax for effortless styling.</p>

        <h2 style="font-size: 24px; color: #000; margin-top: 20px;">POMADE</h2>
        <p style="font-size: 16px; color: #333;">Get ready for a glossy finish with pomade, also known as "hair grease." Traditionally oil-based and challenging to wash out, Hanz de Fuko's Modify Pomade offers the same high shine with a water-based formula that's easy to wash out. Looking for extreme hold and shine? Our Heavymade delivers a clean, heavy finish without the grease.</p>
    </div>
`,
  },
  {
    url: "/image/blog/imageBlog2.png",
    date: "30 June 2025",
    title: "I’m putting what in my hair?",
    slug: "im-putting-what-in-my-hair",
    createdBy: "By QUIV",
    content: `
    <div style="text-align: center">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit pharetra finibus. Donec et mauris tempus, euismod massa ultrices, interdum turpis. Donec lacinia erat quis velit consectetur, eu blandit mauris gravida. Donec tristique nulla nec ex convallis fermentum quis a neque. Aliquam ullamcorper justo eu urna pulvinar dapibus sit amet eget arcu. In ullamcorper tempor efficitur. Maecenas placerat mattis tortor, vitae facilisis magna. Suspendisse finibus risus quis justo sodales, eget blandit ex rhoncus. Ut fermentum nec nulla a euismod.
      </p>
      <br/>
      <p>
        Sed cursus sollicitudin dui, et pellentesque leo suscipit ac. In pretium malesuada sapien. Nunc sodales, purus non consequat tincidunt, sapien urna imperdiet lorem, lacinia vulputate enim mauris et est. Ut in quam sit amet neque vulputate porta ut sed leo. Phasellus quis risus ac augue sollicitudin vehicula sed sit amet tellus. Duis consequat nisl et sapien fermentum aliquam. Etiam ut ligula pellentesque neque cursus congue.
      </p>
      <br/>
      <p>
        Nam tempor cursus justo eget pretium. Vivamus bibendum commodo neque, et vulputate tellus lacinia vitae. Aliquam erat volutpat. Aliquam imperdiet lacus at odio sagittis, quis eleifend tellus ultrices. Praesent fringilla purus non ligula aliquet pretium. Nullam ornare pharetra faucibus. Nulla tristique felis velit, eget tincidunt sapien aliquet nec. Vivamus semper velit at venenatis dignissim. Curabitur eleifend massa a augue volutpat ullamcorper. Sed non ligula vel massa pretium ullamcorper id vitae lorem. Vestibulum eu felis a libero dapibus sodales. Nulla et volutpat leo, non congue massa. Nulla ut consequat orci, semper dapibus nulla. Pellentesque sit amet pharetra ex, porttitor scelerisque lectus. Integer sit amet luctus enim.
      </p>
      <br/>
      <p>
        Integer euismod rhoncus diam. Suspendisse felis nisi, volutpat vel erat sed, suscipit tincidunt turpis. Integer quam velit, tempor faucibus lacus eu, lacinia faucibus sem. Suspendisse dolor mi, molestie vitae orci et, euismod pulvinar massa. Vivamus convallis, nisi eget gravida vestibulum, nisi mi placerat augue, convallis ullamcorper purus orci interdum nisi. Mauris sollicitudin, eros sit amet pharetra sagittis, tellus turpis ullamcorper sapien, non blandit metus lectus vel lorem. Pellentesque massa mauris, iaculis ut ipsum eget, malesuada gravida turpis. Morbi metus nisl, hendrerit eu hendrerit volutpat, suscipit eget massa. Sed finibus pharetra posuere. Maecenas laoreet tincidunt felis vitae volutpat. Praesent ipsum enim, ultricies eget eros non, pulvinar molestie eros. Aliquam semper et massa ac condimentum. Donec at rutrum enim. Morbi nisi dui, vestibulum vitae molestie ac, ullamcorper at diam.
      </p>
      <br/>
      <p>
        Ut et diam lorem. Integer egestas eget dui non euismod. Proin elementum tortor sed facilisis ultrices. Aliquam erat volutpat. Cras accumsan ipsum mauris, ac blandit ligula lacinia eget. Nullam ipsum felis, lacinia vel diam at, porta accumsan lacus. Aliquam consequat aliquam cursus.
      </p>
    </div>
`,
  },
];
