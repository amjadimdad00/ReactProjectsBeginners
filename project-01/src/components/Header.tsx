const Header = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 lg:py-5 flex justify-between items-center">
      <img
        src="/Brand_Logo.png"
        alt="Brand Logo"
        className="w-[60px] h-[33px] lg:w-[68px] lg:h-[36.55px] xl:w-[76px] xl:h-[42.75px]"
      />
      <ul className="gap-4 hidden md:flex md:gap-6 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-[#2E2E2E] font-semibold uppercase poppins">
        <a href="#menu">
          <li>menu</li>
        </a>
        <a href="#location">
          <li>location</li>
        </a>
        <a href="#about">
          <li>about</li>
        </a>
        <a href="#contact">
          <li>contact</li>
        </a>
      </ul>
      <button className="text-xs sm:text-sm md:text-base xl:leading-[19.36px] font-semibold bg-[#D01C28] text-white py-1 px-3 sm:py-1.5 sm:px-4 inter">
        Login
      </button>
    </div>
  );
};

export default Header;
