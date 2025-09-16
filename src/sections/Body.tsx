import Image from "next/image";

export const Body = () => {
  return (
    <div className="relative px-6 md:px-12 w-full py-12 sm:py-18 md:py-32">
      <div className="absolute inset-0 z-0 w-full md:hidden">
        <Image src="/credibility-bg-mobile.avif" alt="crediblity-bg-mobile" height={2360} width={386} className="w-full object-cover" />
      </div>
      <div className="hidden absolute inset-0 z-0 w-full md:block">
        <Image src="/desktop-bg.avif" alt="desktop-bg" height={2383} width={902} className="w-full object-cover" />
      </div>

      <div className="relative flex flex-col w-full max-w-6xl mx-auto gap-32 lg:gap-72">
        <div className="flex flex-col w-full gap-6 lg:gap-12 xl:gap-16">

        </div>
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
      </div>
    </div>
  );
};
