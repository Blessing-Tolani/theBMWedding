import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AsoEbi() {
  const lace = useRef(null);
  const gele = useRef(null);
  const header = useRef(null);
  const subTitle = useRef(null);
  const asoebiLadies = useRef([]);
  asoebiLadies.current = [];

  const asoebiLady = (lady) => {
    if (lady && !asoebiLadies.current.includes(lady)) {
      asoebiLadies.current.push(lady);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      header.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        ease: "power2.out",
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );

    gsap.fromTo(
      lace.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        ease: "power2.out",
        delay: 1,
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );

    gsap.fromTo(
      gele.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        ease: "power2.out",
        y: 0,
        duration: 2,
        delay: 1,
        opacity: 1,
      }
    );

    gsap.fromTo(
      subTitle.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        ease: "power2.out",

        y: 0,
        duration: 2,

        opacity: 1,
        scrollTrigger: {
          trigger: subTitle.current,
          toggleActions: "play none none reverse",
          start: "20% bottom",
        },
      }
    );

    asoebiLadies.current.forEach((lady, index) => {
      gsap.fromTo(
        lady,
        {
          opacity: 0,
          y: 40,
        },
        {
          ease: "power2.out",
          y: 0,
          duration: 2,
          opacity: 1,
          scrollTrigger: {
            trigger: lady,
            toggleActions: "play none none reverse",
            start: "30% bottom",
          },
        }
      );
    });
  });

  return (
    <div className="bg-darkBrown text-primary">
      <h1 className="text-center py-3 sm:py-6 text-xl sm:text-4xl" ref={header}>
        ASO EBI
      </h1>
      <div className="flex justify-center">
        <div className="md:flex mt-3 sm:mt-6">
          <div ref={lace}>
            <img
              src="/asoebi/lace.jpeg"
              className=" w-auto h-auto md:w-[25rem] md:h-[30rem] lg:w-[35rem] lg:h-[40rem]"
            />
          </div>
          <div className="mt-3 md:mt-0" ref={gele}>
            <img
              src="/asoebi/gele-fila.jpeg"
              className=" w-auto h-auto md:w-[25rem] md:h-[30rem] lg:w-[35rem] lg:h-[40rem]"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <p
          className="font-signika text-2xl md:text-4xl pb-8 text-center "
          ref={subTitle}
        >
          Asoebi Ladies
        </p>
      </div>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-12 xl:gap-y-16 sm:px-8 md:pl-5 gap-x-8 lg:px-24 pb-3">
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/opesan.jpg')] w-full h-[300px] sm:h-[360px] bg-cover bg-center rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Titilope
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/tama.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Feyikemi
          </p>
        </div>

        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/taye.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Tayelolu
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/tofunmi.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Tofunmi
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/toyosi.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Toyosi
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/mercy.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover bg-center rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Mercy
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/derin.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Derin
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/folahanmi.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Folahanmi
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/ife.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Ifeoluwa
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/folakemi.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Folakemi
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/oyinkan.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Oyinkan
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/ire.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Ireoluwa
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/motun.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Motunrayo
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/damola.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Damola
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/joke.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Joke
          </p>
        </div>
        <div
          ref={asoebiLady}
          className="rounded-lg bg-primary w-11/12  sm:w-[350px]"
        >
          <div className="px-6 bg-[url('/asoebi/hannah.jpeg')] w-full h-[300px] sm:h-[360px] bg-cover rounded-t-lg"></div>
          <p className="py-4 text-darkBrown text-center font-signika text-lg">
            Hannah
          </p>
        </div>
      </div>
    </div>
  );
}
