export default function Footer() {
  return (
    <div className="w-full bg-darkBrown flex flex-col items-center text-primary pt-12 lg:pt-32">
      <p className="mt-4 font-playfair md:hidden w-11/12 text-center pb-3 text-sm">
        For more details, please contact <br /> 09063146381 (WhatsApp only)
      </p>
      <div className=" sm:h-10 w-28 border-b-2 border-dashed border-primary flex justify-center ">
        <p className="font-signika sm:text-lg md:text-xl text-primary mb-1 sm:mb-0">
          B & M
        </p>
      </div>
      <p className="mt-1 sm:mt-2  font-playfair sm:text-lg">16.07.2022</p>
      <p className="mt-4 font-playfair hidden md:block ">
        For more details, please contact 09063146381 (WhatsApp only)
      </p>
      <p className="mt-10 text-sm">
        <span>&#169;</span> 2022 theBMWedding
      </p>
    </div>
  );
}
