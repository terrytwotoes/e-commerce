import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";

function Icon({ id, open }) {
  return (
    <AiOutlinePlus
      color="white"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    />
  );
}

const BigAccordion = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <Accordion
      className="my-16  px-4  max-w-6xl mx-auto shadow-lg"
      open={open === 1}
      icon={<Icon id={1} open={open} />}
    >
      <AccordionHeader
        className="text-sm font-medium text-white flex justify-center items-center text-center bg-[#48100a] rounded-lg  hover:text-white"
        onClick={() => handleOpen(1)}
      >
        Celebrate Who You Are With Colorbar Cosmetics – A Leading Cosmetics &
        Beauty Brand In India
      </AccordionHeader>
      <AccordionBody className="">
        No matter who you are, be head-over-heels in love with yourself! We at
        Colorbar, the 3rd largest Indian cosmetic brand, want to color your
        self-love journey with our range of luxury beauty and makeup products.
        Breaking away from the norm, we are an inclusive and cruelty-free beauty
        brand that celebrates Indian makeup lovers, no matter who they are and
        what their gender is. Our beauty products boast top-notch formulations
        which glide onto your skin effortlessly, wrapping you in their luxurious
        embrace. Get ready to be dazzled by our enthralling range of cosmetics
        online! Colorbar cosmetics range offers a mind-boggling color palette
        that specially caters to every Indian skin type and tone. Our Eye, Lips,
        Nail, Face Makeup Products, and Skincare Essentials are all you need to
        ace your everyday/party looks and skincare routines. Right from
        hydrating primers, satiny foundations, luminous blushes, sculpting
        highlighter/contouring palettes to intense Kajals and Eyeliners,
        oh-so-smooth matte and cream lipsticks, and innovative nail polishes,
        you can buy your favorite cosmetics online and put together a
        sensational makeup kit for yourself, all within a budget! Excited
        already? Stick around as we reveal our best beauty products and some
        astonishing makeup tips that will completely change the beauty game for
        you. Curate Your Everyday Makeup Kit with Colorbar Beauty Range The good
        news is that it doesn’t take more than 5 minutes to get into your Glam
        Avatar if you have your makeup essentials in order, and for that
        Colorbar has your back. Let us run you through our top-selling Face,
        Eye, Nail, and Lip products step by step so that you shop the spot on
        cosmetics online or make the perfect purchase at a Colorbar Cosmetics
        online store: 1) Ace the Base | Shop Face Makeup Products Online Set the
        beginnings right in makeup with a flawless, hydrated, and luminous base.
        Your base makeup essentials should include a Primer, Foundation/BB Cream
        of your shade, Compact Powder, Concealer, Blush, Highlighting + Contour
        Palette, and Setting Spray. Our best-selling face makeup recommendations
        include Amino Skin Radiant Foundation which consists of Lysine and
        boosting Japanese pigments. It’s a high-coverage lightweight foundation
        which fills lines and wrinkles and gives your skin a satin finish and
        youthful glow. It’s available in 5 shades. Next, add a natural sculpted
        effect and depth to your base with Flawless Touch and Contour Highlight
        which is enhanced by advanced optical technology that blurs the
        imperfections and light esters that condition the skin. Its lightweight
        and blendable texture stops the product from settling in wrinkles and
        fine lines. Lastly, add a pop of color to your cheeks with Cheekillusion
        Blush which is not only luminous but also imparts a velvety touch to
        your cheeks. Face Makeup Products sorted. Next comes our Eye Makeup
        Range. 2) Unleash the Drama with Eyes | Order the Best Eye Makeup
        Products Online Bring out the quirk in you with bold, statement, and
        dramatic eyes. To curate your everyday eye makeup kit, pick some
        long-lasting and smudge-proof eyeliners and kajals with high color
        payoff; eyeshadow palette which is a mix of basic
        Prime-Intensify-Smoke-Pop, warm and deep, shimmery and metallic shades;
        volumizing and lengthening mascara, eyebrow shaping kit, and faux
        eyelashes. Shop our highly coveted beauty pick, that is, the Berry Blush
        Eyeshadow palette which is a mind-boggling mix of mattes, metallics, and
        shimmers in pink, peaches, reddish plum, and deep burgundy shades. Next,
        define your eyes with the hyperpigmented Intensely Rich Kajal in Black
        which is long-wearing, waterproof, smudge-proof, and non-flaking. To
        perfect those graphic and winged eyeliners, opt for the All Matte
        Eyeliner which offers an ultra-matte finish with a stay of up to 16
        hours! The smudge-proof eyeliner is available in Black, Brown, Blue, and
        green shades and comes with a pro applicator allowing for an easy
        application. A seductive pair of eyes needs to be rocked with bold lips.
        Know all that you need to flaunt plump, luscious, and stunning lips! 3)
        Get Photo-ready Pout | Check out Sinful Lipsticks & Lip Products Online
        For your lips to be the talk of the gram, curate a lip makeup collection
        that includes sensational matte and cream lipsticks, juicy but
        transfer-proof lip glosses and stains, and easy-to-use lip liners, and
        lip primers to moisturize your lips. When it comes to top cosmetics in
        the lip department, you can’t miss out on our Lip Prime and Care which
        is a fortifying blend of Vitamins E and C and provides hydration and
        nourishment to your lips. You can either use it as a lip balm or lip
        primer to increase the durability of your lip color! For that perfect
        matte bullet lipstick, explore our Sinful Matte Lip Color range which is
        sinful in every sense of the word, for applying it in itself is a rich
        and silky experience. Infused with sea fennel wax, each stroke offers a
        blast of long-lasting color and a luxurious matte finish. Choose from a
        range of over 20 addictive shades. For a natural and tinted effect that
        is long-lasting and transfer-proof, go for our liquid-based Kiss Proof
        Lip Stain which glides on like velvet but turns into a lightweight matte
        upon drying. Apart from your lips, there’s something else too that you
        need to get right to perfect the drama, and that’s your nails! Read on
        to know the top picks from our nails section.
      </AccordionBody>
    </Accordion>
  );
};

export default BigAccordion;
