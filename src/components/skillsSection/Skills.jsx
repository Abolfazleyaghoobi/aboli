function Skills() {
  return (
    <div className=" grid lg:grid-cols-4 grid-cols-2  gap-3">
      {/* icons */}
      <div className=" bg-[#181829] rounded-[9px]">
        <div className=" justify-center flex">
          <img
            className="md:w-25 w-19"
            src="/public/icons/icons8_html_5_3.svg"
            alt=""
          />
          <img className="md:w-25 w-19" src="/public/icons/icons8_css3_2.svg" alt="" />
        </div>
        <span className="ml-2 md:mt-0 mt-6 block text-[#b5b5b5]">
          <p>HTML: <span className="text-green-400">advance </span></p>
          <p>CSS: <span className="text-green-400">advance </span></p>
        </span>
      </div>

      {/* ___________ */}
      <div className=" bg-[#181829] rounded-[9px]">
        <div className="flex justify-center">
          <img
            className="md:w-20 w-13"
            src="/public/icons/icons8_js_3.svg"
            alt=""
          />
          <img className="md:w-25 w-17" src="/public/icons/icons8_react_1.svg" alt="" />
        </div>
        <span className="ml-2 md:mt-0 mt-5 block text-[#b5b5b5]">
          <p>JavaScript: <span className="text-green-400">advance </span></p>
          <p>React: <span className="text-green-400">advance </span></p>
        </span>
      </div>

      {/* ___________ */}
      <div className=" bg-[#181829] rounded-[9px]">
        <div className="  flex justify-center">
          <img
            className="md:w-22 w-17"
            src="/public/icons/icons8_nodejs_4.svg"
            alt=""
          />
          <img className="md:w-22 w-17" src="/public/icons/expressjs.svg" alt="" />
        </div>
        <span className="ml-2 md:mt-0 mt-7 block text-[#b5b5b5]">
          <p>Nodejs:  <span className="text-green-400">advance </span></p>
          <p>expressJS: <span className="text-green-400">advance </span></p>
        </span>
      </div>

      {/* ___________ */}
      <div className=" bg-[#181829] rounded-[9px]">
        <div className=" justify-center flex">
          <img
            className="md:w-25 w-16"
            src="/public/icons/icons8_git_1.svg"
            alt=""
          />
          <img className="md:w-25 w-16" src="/public/icons/icons8_mongodb_2.svg" alt="" />
        </div>
        <span className="ml-2 md:mt-0 mt-8 block text-[#b5b5b5]">
          <p>git:  <span className="text-green-400">advance </span></p>
          <p>MongoDB:  <span className="text-orange-400">intermediate </span></p>
        </span>
      </div>

      {/* ___________ */}


    </div>
  );
}

export default Skills;
