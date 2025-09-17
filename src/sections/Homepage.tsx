import Image from "next/image";

export const Homepage = () => {
  return (
    <div className="relative h-[3091]">
      <div className="absolute inset-0 z-0">
        <Image src="/homepage-bg.avif" alt="homepage-bg" fill className="object-cover" />
      </div>
      <div className="relative flex flex-col items-center px-6 md:px-12 xl:px-0 pt-12 sm:pt-16 md:pt-24">
        <div className="relative z-10 flex flex-col max-w-4xl items-center text-gray-950 gap-6">
          <h3 className="text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-blue-800 via-blue-600 to-sky-300">Introducing Cortex</h3>
          <h2 className="text-black text-center text-4xl sm:text-5xl md:text-6xl font-[550] -tracking-normal">
            The blockchain engine supercharging all our products
          </h2>
          <p className="text-center text-base md:text-2xl text-gray-500">
            Now 2.5x faster, 5x more reliable, with 500x more throughput
          </p>
        </div>
      </div>
      <div className="relative px-6 md:px-12 xl:px-0 py-12 sm:py-16 md:pt-14 md:pb-24">

      </div>
    </div>
  );
};
