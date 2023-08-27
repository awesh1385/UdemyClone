

const LearningCard = () => {
  return (
    <div className="max-w-[350px] flex border cursor-pointer">
      <div className=" ">
        <img
          className="h-[100%] w-[120px]"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--1AE0BLOa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/i1sxwhy2qap4amz4hxpo.png"
          alt="LearnigImg"
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex flex-col items-center ">
          <p className="text-xs text-gray-600 font-medium">
            The complete 2023 Web Devlopment Boo..
          </p>
          <h4 className="font-bold text-black text-sm">
            346. How does the Blockchain actually work?
          </h4>
        </div>
        <p className="text-gray-600 font-medium text-xs mt-8">
          Lecture. <span className="text-gray-400">25m</span>
        </p>
      </div>
    </div>
  )
}

export default LearningCard