export default function Footer(props: { text: string }) {
  return (
    <div className="w-full bg-darkBrown flex flex-col items-center text-primary pt-12 lg:pt-32">
      <div className=" sm:h-10 w-28 border-b-2 border-dashed border-primary flex justify-center ">
        <p className="font-signika sm:text-lg md:text-xl text-primary mb-1 sm:mb-0">
          B & M
        </p>
      </div>
      <p className="mt-1 sm:mt-2  font-playfair sm:text-lg">16.07.2022</p>
      <p className="mt-4 font-playfair w-11/12 text-center text-sm md:text-base md:w-auto">
        {props.text}
        {/* For more details, please contact 09063146381 (WhatsApp only) */}
      </p>
      <p className="mt-6 md:mt-10 text-sm">
        <span>&#169;</span> 2022 theBMWedding
      </p>
    </div>
  );
}
