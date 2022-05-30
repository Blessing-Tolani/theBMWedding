import PageLayout from "../components/layout";
import Image from "next/image";
import BukunmiMide from "../../public/bukunmi-mide.jpg";

export default function Home() {
  let currentDate = new Date();
  let weddingDate = Date.parse("16 July 2022 00:00:00 GMT");
  let differenceInTime = weddingDate - currentDate.getTime();

  let differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  console.log(weddingDate);

  return (
    <PageLayout>
      <div className="bg-darkBrown flex flex-col items-center pt-8 text-primary text-center">
        <p className="font-signika text-3xl sm:text-4xl md:text-5xl pb-3 mb-5">
          Bukunmi & Mide
        </p>
        <div className="w-full md:w-11/12 lg:w-10/12 ">
          <Image src={BukunmiMide} />
        </div>
        <div></div>
        <div className=" flex flex-col md:flex-row mt-16 lg:mt-20  items-center">
          <div className="md:pr-10 w-10/12 md:w-auto lg:pr-20 border-b-2 md:border-r-2 md:border-b-0 border-dashed border-primary">
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
              {differenceInDays} DAYS TO GO &#127881;
            </p>
          </div>
          <div className="sm:text-lg md:pl-10 lg:pl-20">
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
              {differenceInDays} DAYS TO GO &#127881;
            </p>
            <p className="font-playfair mt-5">#BMW&apos;22</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
