import { GradientButton } from "@/components/GradientButton";
import Image from "next/image";

export const Hero = () => {
  const sliderImages: ISlider[] = [
    {
      title: "Gensyn",
      link: "https://www.datocms-assets.com/105223/1753930017-gensyn.svg",
    },
    {
      title: "Circle",
      link: "https://www.datocms-assets.com/105223/1753930131-circle.svg",
    },
    {
      title: "World",
      link: "https://www.datocms-assets.com/105223/1753930232-world.svg",
    },
    {
      title: "Polymarket",
      link: "https://www.datocms-assets.com/105223/1753930241-polymarket.svg",
    },
    {
      title: "OpenSea",
      link: "https://www.datocms-assets.com/105223/1753930293-opensea.svg",
    },
    {
      title: "Uniswap",
      link: "https://www.datocms-assets.com/105223/1753759631-uniswap.svg",
    },
    {
      title: "Avara",
      link: "https://www.datocms-assets.com/105223/1753929792-avara.svg",
    },
    {
      title: "Visa",
      link: "https://www.datocms-assets.com/105223/1753929841-visa.svg",
    },
    {
      title: "Stripe",
      link: "https://www.datocms-assets.com/105223/1753929891-stripe.svg",
    },
    {
      title: "Chainlink",
      link: "https://www.datocms-assets.com/105223/1753929949-chainlink.svg",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute h-212 inset-0 z-0 md:hidden block">
        <Image src="/mobile-hero.png" alt="moblie-hero" fill className="inset-0 object-cover" />
      </div>
      <div className="hidden md:block absolute h-270 inset-0 z-0">
        <Image src="/hero.png" alt="hero" fill className="inset-0 object-cover object-center h- w-full" />
      </div>
      <div className="relative px-6 z-30">
        <div className="pt-12 sm:pt-16 md:pt-24 max-w-4xl mx-auto flex flex-col justify-between items-center gap-8">
          <div className="flex flex-col gap-6 items-center md:items-center">
            <div className="flex items-center w-fit gap-3 rounded-full shadow-xs bg-white/20 max-w-192 mx-auto border border-gray-200 py-2 px-2">
              <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 md:text-lg">New</div>
              <div className="text-sm font-medium text-blue-950 md:text-lg">
                <a href="https://www.alchemy.com/cortex">Introducing Cortex, the world's first intelligent blockchain engine</a>
              </div>
            </div>

            <div className="flex h-full w-full flex-col items-center justify-between gap-8 md:gap-24">
              <div className="flex flex-col gap-6 md:gap-8 md:items-center">
                <div className="flex flex-col items-center gap-6 text-left md:text-center">
                  <span className="text-blue-950 font-normal text-5xl sm:text-6xl  md:text-7xl tracking-tight ">
                    Build <em className="font-bold">anything</em> onchain
                  </span>
                  <span className="text-gray-500 text-lg md:text-2xl">The full developer platform for apps, wallets, rollups, and more.</span>
                </div>
                <div className="flex w-full flex-col gap-4 sm:w-fit sm:flex-row sm:gap-2">
                  <GradientButton title="Start building" size="md" />
                  <button className="bg-gray-100 px-4 py-3 rounded-lg text-gray-700 hover:text-gray-500 font-semibold">View docs</button>
                </div>
              </div>

              <Image src="/logos_mobile.avif" alt="logos_mobile" width={1170} height={928} className="block md:hidden" />
              <div className="w-full">
                <Image src="/logos_desktop.png" alt="logos_desktop" height={928} width={1170} className="hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-6 md:px-12 xl:px-0 bg-transparent">
        <div className="z-10 flex flex-col items-center justify-center overflow-hidden w-full md:gap-8 md:px-6 xl:px-0 md:py-10 mx-auto max-w-4xl">
          <h2 className="flex w-full items-center gap-4 text-gray-950 md:justify-center md:text-center text-nowrap text-[10px] md:text-sm tracking-wider">
            <span>Powering the best</span>
            <div className="block h-[1px] w-full bg-gradient-to-r from-gray-300 to-transparent md:hidden" />
          </h2>
          <div className="relative m-auto overflow-hidden select-none before:absolute before:top-0 before:left-0 before:z-2 before:h-full before:w-[100px] md:hidden">
            <ul className="flex gap-10 py-2 animate-infinite-slider w-[calc(500px*2)] whitespace-nowrap">
              {sliderImages.map((image, idx) => (
                <Slider key={idx} title={image.title} link={image.link} />
              ))}
            </ul>
          </div>

          <ul className="relative hidden flex-row flex-wrap gap-8 py-2 select-none md:flex md:justify-center lg-gap-13">
              {sliderImages.map((image, idx) => (
                <Slider key={idx} title={image.title} link={image.link} />
              ))}
          </ul>

          
        </div>
      </div>
    </div>
  );
};

interface ISlider {
  title: string;
  link: string;
}

function Slider({ link, title }: ISlider) {
  return (
    <li className="flex items-center justify-center">
      <Image src={link} alt={title} height={24} width={24} className="h-10 w-auto object-contain" />
    </li>
  );
}
