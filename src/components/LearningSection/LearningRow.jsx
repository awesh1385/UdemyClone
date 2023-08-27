import LearningCard from "./LearningCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const LearningRow = ({ rowID }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div
        id={"slider" + rowID}
        className="flex gap-4 p-5 w-full overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide relative"
      >
        <LearningCard />
        <LearningCard />
        <LearningCard />
        <LearningCard />
        <LearningCard />
        <LearningCard />
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <div className="">
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className=" rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hover:bg-gray-800 hover:text-white"
          />
        </div>
        <div className="">
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="bg-white hover:bg-gray-800 hover:text-white    rounded-full  opacity-50 hover:opacity-100 cursor-pointer z-10  "
          />
        </div>
      </div>
    </>
  );
};

export default LearningRow;
