import PageLayout from "../components/layout";
import GetNumberOfDays from "../components/GetNumberOfDays";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Gift = () => {
  const header = useRef(null);
  const img = useRef(null);
  const text = useRef(null);

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
      img.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        ease: "power2.out",
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );
    gsap.fromTo(
      text.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        ease: "power2.out",
        delay: 0.5,
        y: 0,
        duration: 2,

        opacity: 1,
        scrollTrigger: {
          trigger: text.current,
          toggleActions: "play none none reverse",
          start: "10% bottom",
        },
      }
    );
  });

  return (
    <PageLayout title="Tit Bit - theBMWedding">
      <div className="bg-darkBrown text-primary">
        <div ref={header}>
          <p className="font-signika text-3xl sm:text-4xl md:text-5xl pb-3 text-center hidden md:block">
            Bukunmi & Mide
          </p>
          <div className="font-playfair text-lg text-center hidden md:block">
            <div className="md:flex justify-center items-center md:text-2xl">
              <p>SATURDAY, JULY 16 2022</p>
              <p className="text-4xl px-1 hidden md:block">&#183;</p>
              <p>ONDO CITY, NIGERIA</p>
            </div>
            <p className="  text-sm sm:text-lg">
              {GetNumberOfDays()} DAYS TO GO &#127881;
            </p>
          </div>
        </div>

        <div className="md:flex  px-4 sm:px-8 md:px-16 lg:px-24 w-full items-center">
          <div className="flex justify-center md:w-2/5" ref={img}>
            <img
              src="/Tolu-mide.png "
              className=" w-auto h-auto md:w-[25rem] md:h-[30rem] lg:w-[25rem] lg:h-[35rem]"
            />
          </div>
          <div
            ref={text}
            className="md:w-1/2 font-playfair text-justify tracking-wider md:ml-6 lg:ml-10 text-sm sm:text-base"
          >
            <p className="pt-10 md:pt-0">Dear Family and Friends,</p>
            <p className="pt-4">
              Having you celebrate with us on our special day would be
              beautiful. Your presence, prayers and support is enough of a gift
              to us!
            </p>
            <p className="pt-4">
              However, if you do wish to send us cash gifts, we would also
              appreciate. Kindly use the account details below:
            </p>
            <p className="pt-1 font-medium text-base">
              2370500252 <br /> Tolu Akomolafe <br /> Zenith Bank
            </p>
            <p className="pt-4">We appreciate you!</p>
            <p className="pt-4">Love</p>
            <p>
              Bukunmi<span className="text-red-700">&#10084;</span>Mide
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Gift;
