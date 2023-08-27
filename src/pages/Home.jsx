import { Link } from "react-router-dom";
import LearningRow from "../components/LearningSection/LearningRow";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import CourseRow from "../components/CourseRow/CourseRow";

const Home = () => {
  return (
    <main className="m-auto max-w-[1200px] h-fit">
      <section className="">
        <div className="relative ">
          <img
            src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/3c888f12-25a9-484f-a92e-6c6834574b8d.jpg"
            alt="HeroImage"
          />
          <div className="absolute top-16 ml-10 p-5 bg-white w-[400px] shadow-2xl hidden lg:block">
            <h2 className="font-bold text-3xl">A sale as big as your drems</h2>
            <p className="mt-2 font-medium">
              Course start at ₹389 through Aug 31. Opportunities like this only
              come once in a season.
            </p>
          </div>
        </div>
      </section>

      {/*NOTE Start Learning Section */}
      <section className=" overflow-hidden ">
        <div className="">
          <div className="flex justify-between items-center p-5 mt-3">
            <h1 className="font-bold text-lg lg:text-3xl">
              Lets start learning, User
            </h1>
            <Link className="font-medium text-sm lg:text-lg  border-b border-blue-700 text-blue-700">
              My learning
            </Link>
          </div>
          <div className="">
            <LearningRow rowID={1} />
          </div>
        </div>
      </section>

      {/* What to learn next */}
      <section>
        <div className="felx flex-col ">
          <div className="">
            <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">
              What to learn next
            </h1>
            <p className="font-bold text-sm md:text-lg lg:text-xl mt-3">
              Our top pick for you
            </p>
          </div>
          <div className="border p-5 mt-4 flex flex-col md:flex-row   gap-5 cursor-pointer shadow-lg">
            <img
              src="https://img-c.udemycdn.com/course/480x270/4889434_7c85_4.jpg"
              alt="NextLearnIMG"
            />
            <div className="">
              <h1 className="font-bold text-lg md:text-xl lg:text-3xl">
                React Mega Course: Build 50 Real World Projects in 50 Days
              </h1>
              <p className="text-gray-600 font-medium text-sm lg:text-lg ">
                Learn React Programming: Develop Web Applications Using Socket,
                Rest APIs, Firebase,React Hooks , Bootstrap , React.js.
              </p>
              <p className="text-gray-400 text-sm lg:text-lg">
                By Sufa Digital
              </p>
              <p className="text-sm lg:text-lg text-gray-400">
                Updated{" "}
                <span className="text-black font-medium">November 2022</span> 74
                total hours : 600 lectures : All level
              </p>
              <p className="flex items-center font-bold">
                4.1 <BsStarFill className="text-yellow-400 ml-1" />{" "}
                <BsStarFill className="text-yellow-400" />{" "}
                <BsStarFill className="text-yellow-400" />{" "}
                <BsStarHalf className="text-yellow-400" />{" "}
                <BsStar className="text-yellow-400" />{" "}
                <span className="text-gray-400 font-medium">(316)</span>
              </p>
              <p className="text-black font-bold mt-24 md:text-xl lg:text-2xl">
                ₹3,399
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section  */}
      <section className="mt-10">
        <CourseRow rowID={2} />
      </section>
      <section className="mt-10">
        <CourseRow rowID={3} />
      </section>
      <section className="mt-10">
        <CourseRow rowID={4} />
      </section>
    </main>
  );
};

export default Home;
