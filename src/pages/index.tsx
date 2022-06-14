import PageLayout from "../components/layout";
import Image from "next/image";
import BukunmiMide from "../../public/bukunmi-mide.jpg";
import GetNumberOfDays from "../components/GetNumberOfDays";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const firstSubText = useRef(null);
  const secondSubText = useRef(null);
  const header = useRef(null);
  const img = useRef(null);

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
        delay: 1,
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );

    gsap.fromTo(
      firstSubText.current,
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
          trigger: firstSubText.current,
          toggleActions: "play none none reverse",
          start: "10% bottom",
        },
      }
    );

    gsap.fromTo(
      secondSubText.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        ease: "power2.out",
        y: 0,
        duration: 2,
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: secondSubText.current,
          toggleActions: "play none none reverse",
          start: "10% bottom",
        },
      }
    );
  });

  return (
    <PageLayout title="theBMWedding">
      <div className="bg-darkBrown flex flex-col items-center pt-3 sm:pt-8 text-primary text-center ">
        <p
          ref={header}
          className="font-signika text-3xl sm:text-4xl md:text-5xl mb-5"
        >
          Bukunmi & Mide
        </p>
        <div className="w-full md:w-11/12 lg:w-10/12 " ref={img}>
          <Image src={BukunmiMide} />
        </div>
        <div></div>
        <div className=" flex flex-col md:flex-row mt-16 lg:mt-20  items-center">
          <div
            ref={firstSubText}
            className="md:pr-10 w-10/12 md:w-auto lg:pr-20 border-b-2 md:border-r-2 md:border-b-0 border-dashed border-primary"
          >
            <p className="font-signika text-3xl sm:text-4xl md:text-5xl ">
              SATURDAY
            </p>
            <p className="font-signika text-3xl sm:text-4xl md:text-5xl pt-3 pb-5 md:pb-0">
              JULY 16, 2022
            </p>
            <p className="font-playfair mt-12 sm:text-lg hidden md:block">
              COLOURS OF THE DAY <br /> CHAMPAGNE GOLD & WHITE
            </p>
            <p className="font-playfair mt-5 sm:text-lg hidden md:block">
              {GetNumberOfDays()} DAYS TO GO &#127881;
            </p>
          </div>
          <div ref={secondSubText} className="sm:text-lg md:pl-10 lg:pl-20">
            <p className="font-signika text-3xl sm:text-4xl md:text-5xl pt-5 md:pt-0">
              ONDO CITY
            </p>
            <p className="font-signika text-3xl sm:text-4xl md:text-5xl pt-3">
              NIGERIA
            </p>
            <p className="font-playfair mt-3 sm:mt-5 px-2 md:px-0">
              @ <br /> MOUNTAIN OF FIRE AND MIRACLE MINISTRIES <br /> SOUTHWEST
              12 REGIONAL HEADQUATERS <br /> BRIGADIER ADEMULEGUN ROAD, AJILO
            </p>
            <p className="font-playfair mt-6 sm:mt-12 md:hidden">
              COLOURS OF THE DAY <br /> CHAMPAGNE GOLD & WHITE
            </p>
            <p className="font-playfair mt-5 md:hidden">
              {GetNumberOfDays()} DAYS TO GO &#127881;
            </p>
            <p className="font-playfair mt-5">#BMW&apos;22 #ARainLoveStory</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
