import classes from "./index.module.css";

export default function AsoEbi() {
  const asoebiLadies = [
    { name: "opesan", href: "/asoebi/opesan.jpeg" },
    { name: "tofunmi", href: "/asoebi/tofunmi.jpeg" },
    { name: "toyosi", href: "/asoebi/toyosi.jpeg" },
    { name: "tama", href: "/asoebi/tama.jpeg" },
    { name: "taye", href: "/asoebi/taye.jpeg" },
    { name: "mercy", href: "/asoebi/mercy.jpeg" },
    { name: "derin", href: "/asoebi/derin.jpeg" },
    { name: "folahanmi", href: "/asoebi/folahanmi.jpeg" },
    { name: "folakemi", href: "/asoebi/folakemi.jpeg" },
    { name: "oyinkan", href: "/asoebi/oyinkan.jpeg" },
    { name: "temilorun", href: "/asoebi/temilorun.jpeg" },
    { name: "motun", href: "/asoebi/motun.jpeg" },
  ];
  return (
    <div className="bg-darkBrown text-primary">
      <h1 className="text-center py-3 sm:py-6 text-3xl sm:text-4xl">ASO EBI</h1>
      <div className="flex justify-center">
        <div className="md:flex mt-3 sm:mt-6">
          <div className="">
            <img
              src="/asoebi/lace.jpeg"
              className=" w-auto h-auto md:w-[25rem] md:h-[30rem] lg:w-[35rem] lg:h-[40rem]"
            />
          </div>
          <div className="mt-3 md:mt-0">
            <img
              src="/asoebi/gele-fila.jpeg"
              className=" w-auto h-auto md:w-[25rem] md:h-[30rem] lg:w-[35rem] lg:h-[40rem]"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <p className="font-signika text-3xl sm:text-3xl md:text-4xl pb-3 md:pb-6 text-center">
          Asoebi Ladies
        </p>
      </div>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-6 sm:gap-y-10 xl:gap-y-12 sm:px-8 md:pl-5 gap-x-8 lg:px-24 pb-3">
        <div className="px-6 bg-[url('/asoebi/opesan.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover bg-center"></div>
        <div className=" px-6 bg-[url('/asoebi/tama.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
        <div className="px-6 bg-[url('/asoebi/taye.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
        <div className=" px-6 bg-[url('/asoebi/tofunmi.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
        <div className="px-6 bg-[url('/asoebi/toyosi.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
        <div className="px-6 bg-[url('/asoebi/mercy.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover bg-center"></div>
        <div className="px-6 bg-[url('/asoebi/derin.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
        <div className="px-6 bg-[url('/asoebi/folahanmi.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover "></div>
        <div className="px-6 bg-[url('/asoebi/folakemi.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
        <div className="px-6 bg-[url('/asoebi/oyinkan.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
        <div className="px-6 bg-[url('/asoebi/temilorun.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
        <div className="px-6 bg-[url('/asoebi/motun.jpeg')] w-11/12 h-[300px] sm:w-[350px] sm:h-[360px] bg-cover"></div>
      </div>
    </div>
  );
}
