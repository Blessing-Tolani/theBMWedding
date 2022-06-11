import PageLayout from "../components/layout";
import GetNumberOfDays from "../components/GetNumberOfDays";
import Gallery from "../components/photos";

export default function Photos() {
  return (
    <PageLayout title="Photos - theBMWedding">
      <div className="bg-darkBrown text-primary">
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
        <div className=" py-3 sm:py-10 ">
          <Gallery />
        </div>
      </div>
    </PageLayout>
  );
}
