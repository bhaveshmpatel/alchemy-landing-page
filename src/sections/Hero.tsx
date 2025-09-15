import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 md:hidden block h-100vh w-100vw">
        <Image src="/mobile-hero.png" alt="moblie-hero" width={343} height={863} />
      </div>
    </div>
  );
};
