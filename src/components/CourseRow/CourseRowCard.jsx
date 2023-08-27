/* eslint-disable react/prop-types */
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const CourseRowCard = ({ data }) => {
  return (
    <div className=" flex flex-col min-w-[250px] ">
      <div className="">
        <img className=" h-40 w-full " src={data.img} alt="" />
      </div>
      <h3 className="font-bold text-md md:text-md lg:text-lg">
        {data.courseName}
      </h3>
      <p className="text-sm md:text-md lg:text-md text-gray-400 font-medium ">
        {data.authorName}
      </p>
      <p className="flex items-center font-bold text-sm md:text-md lg:text-md">
        4.1 <BsStarFill className="text-yellow-400 ml-1" />{" "}
        <BsStarFill className="text-yellow-400" />{" "}
        <BsStarFill className="text-yellow-400" />{" "}
        <BsStarHalf className="text-yellow-400" />{" "}
        <BsStar className="text-yellow-400" />{" "}
        <span className="text-gray-400 font-medium">(316)</span>
      </p>
      <p className="text-black font-bold text-sm md:text-md lg:text-md h-full">
        ₹{data.price}
      </p>
    </div>
  );
};

export default CourseRowCard;
