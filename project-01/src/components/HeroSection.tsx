const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full px-6 sm:px-10 md:px-16 lg:px-32 py-10 md:py-16 xl:py-20">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-9 lg:w-2/3 xl:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[108px] xl:leading-[102px] font-extrabold poppins">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="text-sm sm:text-base lg:text-sm xl:text-base text-[#5A5959] font-semibold sm:w-3/4 md:w-[350px] xl:w-[404px] mx-auto lg:mx-0 poppins">
          YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH
          OUR SHOES.
        </p>
        <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 md:gap-10">
          <button className="bg-[#D01C28] text-white text-sm sm:text-base md:text-lg xl:text-2xl font-semibold px-4 py-2 inter">
            Shop Now
          </button>
          <button className="border border-[#000000] text-[#5A5959] text-sm sm:text-base md:text-lg xl:text-2xl font-semibold px-4 py-2 inter">
            Category
          </button>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <p className="text-xs sm:text-sm lg:text-sm xl:text-base text-[#5A5959] inter">
            Also Available On
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-3 sm:gap-4">
            <img src="/flipcart.png" alt="Flipcart" className="w-5 sm:w-6 xl:w-8" />
            <img src="/amazon.png" alt="Amazon" className="w-5 sm:w-6 xl:w-8" />
          </div>
        </div>
      </div>
      <img
        src="/hero-image.png"
        alt="Hero Image"
        className="mt-6 lg:mt-0 w-[250px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[350px] md:h-[280px] lg:w-[397.5px] lg:h-[320px] xl:w-[530px] xl:h-[487.06px]"
      />
    </div>
  );
};

export default HeroSection;
