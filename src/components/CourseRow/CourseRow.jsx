import CourseRowCard from "./CourseRowCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { CourseList } from "../../data/Data.js";
// eslint-disable-next-line react/prop-types
const CourseRow = ({ rowID }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="flex flex-col gap-5  p-5  relative">
      <div className="relative">
        <h1 className="font-bold md:text-2xl lg:text-3xl">
          Beacuse you viewed{" "}
          <span className="font-bold  text-blue-600  border-blue-600 border-b-2">
            &quot;BUILD THE BEST ECOMMERCE WEBSITE EVER WITH REACT JS NEWXT
            JS&quot;
          </span>
        </h1>
      </div>

      {/* card */}
      <MdChevronLeft
        onClick={slideLeft}
        size={40}
        className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 top-40 left-0 hover:bg-gray-800 hover:text-white  absolute"
      />
      <div
        id={"slider" + rowID}
        className="flex  gap-8 w-full overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide relative"
      >
        {CourseList.map((data) => <CourseRowCard data={data} key={data.id}/>
        )}
      </div>
      <MdChevronRight
        onClick={slideRight}
        size={40}
        className="bg-white hover:bg-gray-800 hover:text-white   rounded-full opacity-50 hover:opacity-100 cursor-pointer  absolute right-0 top-40"
      />
    </div>
  );
};

export default CourseRow;
