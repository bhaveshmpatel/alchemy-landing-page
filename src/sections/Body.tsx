import Image from "next/image";

export const Body = () => {
  const cards: ICard[] = [
    {
      image: "/card-bg-blue.avif",
      name: "card-bg-blue",
      title: "$150B+",
      description: "in transactions annually",
    },
    {
      image: "/users.avif",
      name: "users",
      title: "$100M+",
      description: "humans using crypto apps",
    },
    {
      image: "/card-1.avif",
      name: "card-1",
      title: "71%+",
      description: "of top apps approved",
    },
  ];

  const appCards: ICard[] = [
    {
      image: "https://www.datocms-assets.com/105223/1753474171-polymarket.svg",
      name: "polymarket",
      title: "$15.5B+ in trading volume",
      description: "Polymarket uses ",
      text: "RPC and Data APIs",
    },
    {
      image: "https://www.datocms-assets.com/105223/1744603735-world-logo.svg",
      name: "world",
      title: "Priority blockspace for 13M humans",
      description: "World app uses ",
      text: "RPC APIs, Rollups, and Smart Wallets",
    },
    {
      image: "https://www.datocms-assets.com/105223/1753371151-robinhood.svg",
      name: "robinhood",
      title: "22M+ funded accounts",
      description: "Robinhood uses ",
      text: "RPC and Data APIs",
    },
  ];

  return (
    <div className="relative px-6 md:px-12 w-full py-12 sm:py-18 md:py-32">
      <div className="absolute inset-0 z-0 w-full md:hidden">
        <Image src="/credibility-bg-mobile.avif" alt="crediblity-bg-mobile" fill className="w-full object-cover" />
      </div>
      <div className="hidden absolute inset-0 z-0 w-full md:block">
        <Image src="/desktop-bg.avif" alt="desktop-bg" height={2383} width={902} className="w-full object-cover" />
      </div>

      <div className="relative flex flex-col w-full max-w-6xl mx-auto gap-32 lg:gap-72">
        <div className="flex flex-col w-full gap-6 lg:gap-12 xl:gap-16">
          <div className="flex flex-col items-between justify-between gap-6 lg:flex-row lg:gap-36">
            <h2 className="text-gray-950 font-[550] leading-snug text-4xl md:text-5xl tracking-normal">The blockchain platform you build everything on</h2>
            <p className="text-gray-500 texl-lg md:text-xl">
              <span className="text-gray-700">Build the fastest, most reliable apps&nbsp;</span>
              for millions of people worldwide—stablecoins, tokenization, real-world assets, and more.
              <br />
              <br />
              The lowest latency for your users anywhere in the world, the best reliability track-record in the industry, and unlimited elastic throughput to scale instantly.
            </p>
          </div>

          <Image src="/cortex_diagram.avif" alt="cortex_diagram" width={652} height={332} className="w-full" />

          <div className="flex flex-col w-full gap-4 md:flex-row">
            {cards.map((card, idx) => (
              <Card key={idx} image={card.image} name={card.name} title={card.title} description={card.description} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="block md:hidden font-medium text-4xl text-gray-950">Powering the best apps in crypto</p>

          <div className="relative flex flex-col gap-4 lg:min-h-[500px]">
            {appCards.map((card, idx) => (
              <AppCard key={idx} image={card.image} name={card.name} title={card.title} description={card.description} text={card.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ICard {
  image: string;
  name: string;
  title: string;
  description: string;
  text?: string;
}

interface ILocationVarient {
  polymarket: string
  world: string
  robinhood: string
}

interface IAppCard extends ICard {
  name: keyof ILocationVarient; // only allow specific names
}

const locationVarient: ILocationVarient = {
  polymarket: "md:top-0 md:left-6",
  world: "md:top-20 md:right-0",
  robinhood: "md:bottom-0 md:left-1/4",
};

function Card({ image, name, title, description }: ICard) {
  return (
    <div className="relative flex w-full h-[284px] flex-col justify-end gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#DEE8FF] to-[#EAF0FF] bg-cover bg-center bg-no-repeat p-6 shadow-lg lg:h-[412px] lg:items-end lg:p-12">
      <Image src={image} alt={name} fill className="absolute w-full object-cover inset-0" />
      {name === "card-bg-blue" ? (
        <>
          <p className="relative w-full font-[550] text-4xl md:text-6xl text-white lg:text-right">{title}</p>
          <p className="relative text-left font-extralight text-2xl text-white lg:ml-auto lg:text-right">{description}</p>
        </>
      ) : (
        <>
          <p className="relative w-full font-[550] text-4xl md:text-6xl text-blue-600 lg:text-left">{title}</p>
          <p className="relative text-left font-extralight text-2xl text-blue-950 lg:mr-auto lg:text-left">{description}</p>
        </>
      )}
    </div>
  );
}

function AppCard({ image, name, title, description, text }: IAppCard) {
  return (
    <div className={`flex flex-col md:absolute md:min-w-[452px] ${locationVarient[name]}`}>
      <div className="bg-white flex flex-col gap-4 rounded-lg border border-gray-200 p-6">
        <div className="relative h-12 w-30">
          <Image src={image} alt={name} fill className="h-18 w-28" />
        </div>
        <div className="text-2xl font-medium text-gray-950">{title}</div>
        <div className="text-xs font-medium text-gray-500 md:text-base">
          {description}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-sky-400">{text}</span>
        </div>
      </div>
    </div>
  );
}
