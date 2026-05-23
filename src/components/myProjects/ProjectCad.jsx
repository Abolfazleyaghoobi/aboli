
function ProjectCard({ image, name, used, linkProject, linkRepositorie }) {
  return (
    <>
      <div className=" block     p-2  border border-gray-400   rounded-[9px] overflow-hidden">
        <img className="rounded-base rounded-[9px]" src={image} alt="" />

        <h5 className="mt-6 mb-2 text-gray-300 text-2xl font-semibold tracking-tight text-heading">
          {name}
        </h5>
        {/* _____*/}
        <div className="mb-6 text-body">
          <h2 className="text-gray-300">Used:</h2>
          <div className="mt-2 flex gap-2">
            {used.map((item, index) => {
              return (
                <div key={index}>
                  <span className="bg-gray-500 rounded-[0.3rem] p-[0.2rem] text-[0.6rem]  md:text-[0.7rem] lg:text-[1rem] text-white">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ____ */}
        <div className="flex justify-between">
          <a
            href={linkProject}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading text-gray-300 rounded-[9px] focus:ring-neutral-tertiary w-13 md:w-18 lg:w-24 text-[0.5rem] md:text-[0.7rem] lg:text-[1rem] overflow-hidden shadow-xs font-medium leading-5 rounded-base text-sm px-2 md:px-4 py-2.5 focus:outline-none"
          >
            Visit
            <svg
              className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
          <a
            href={linkRepositorie}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading text-gray-300 rounded-[9px] focus:ring-neutral-tertiary  w-20  text-[0.5rem] md:text-[0.8rem] md:w-27 shadow-xs font-medium leading-5 rounded-base text-sm px-2 py-2.5 focus:outline-none"
          >
            Repositorie
            <svg
              className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
