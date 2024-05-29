

import BannarSwiper from "./BannarSwiper/BannarSwaper";


const Bannar = () => {
  return (
    <div className="bannar md:pt-36 bg-cover bg-bottom flex bg-gray-800 bannarBG md:min-h-[750px] w-full">
      <div className="content lg:grid  grid-cols-12  mx-auto relative container">
        <div className=" col-span-8 w-full flex flex-col gap-4 order-2 mb-5 md:mb-20  p-3    py-5 mx-auto  ">
          <BannarSwiper></BannarSwiper>
        </div>

        <div className="cards col-span-4 px-4">
          {/* Cards */}
          <div className="Card w-full display-bannar mb-5 right-0 top-96 lg:h-32 md:h-52 grid grid-cols-5 rounded-lg border-2 border-black bg-white">
            <div className="h-full overflow-hidden bg-white bg-center bg-cover url col-span-2">
              <img
                className="object-cover bg-center bg-cover rounded-xl bg-slate-400 w-[100%] h-[100%]"
                src="https://i.ibb.co/6nTNJmb/unnamed-1.jpg"
                alt=""
              />
            </div>
            <div className="info col-span-3 p-3">
              <h2 className=" font-semibold text-slate-700 ab capitalize text-lg mb-1 md:mb-3 md:text-lg">
                Recipient Spotlight
              </h2>
              <p className="capitalize text-slate-600  text-xs md:text-xs">
                Recognizing outstanding contributions. Generosity makes a
                difference!
              </p>
            </div>
          </div>
          <div className="Card w-full display-bannar mb-5 bg-white left-0 top-0 lg:h-32 md:h-52 grid grid-cols-5 rounded-lg border-2 border-black">
            <div className="h-full overflow-hidden bg-white bg-center bg-cover url col-span-2">
              <img
                className="object-cover bg-slate-400 w-[100%] h-[100%]"
                src="https://i.ibb.co/P1JvLrw/images-5.jpg"
                alt=""
              />
            </div>
            <div className="info col-span-3 p-3">
              <h2 className=" font-semibold text-slate-700 ab capitalize text-lg mb-1 md:mb-3 md:text-lg">
                Volunteer Appreciation
              </h2>
              <p className="capitalize text-slate-600  text-xs md:text-xs">
                Celebrating dedicated helpers. Thank you for your kindness and
                support!
              </p>
            </div>
          </div>

          <div className="Card w-full display-bannar mb-5 right-0 bg-white top-32 lg:h-32 md:h-52 grid grid-cols-5 rounded-lg border-2 border-black">
            <div className="h-full overflow-hidden bg-white bg-center bg-cover url col-span-2">
              <img
                className="object-cover bg-slate-400 w-[100%] h-[100%]"
                src="https://i.ibb.co/Lv3kH90/i-Stock-1309008707.jpg"
                alt=""
              />
            </div>
            <div className="info col-span-3 p-3">
              <h2 className=" font-semibold text-slate-700 ab capitalize text-lg mb-1 md:mb-3 md:text-lg">
                Organization Recognition
              </h2>
              <p className="capitalize text-slate-600  text-xs md:text-xs">
                Acknowledging impactful efforts. Fighting hunger with
                dedication!
              </p>
            </div>
          </div>
          <div className="Card w-full display-bannar mb-5 top-64  bg-white left-0 lg:h-32 md:h-52 grid grid-cols-5 rounded-lg border-2 border-black">
            <div className="h-full overflow-hidden bg-white bg-center bg-cover url col-span-2">
              <img
                className="object-cover bg-slate-400 w-[100%] h-[100%]"
                src="https://i.ibb.co/C0XSbfk/i-Stock-1208790371-e1671068949690-500x409.jpg"
                alt=""
              />
            </div>
            <div className="info col-span-3 p-3">
              <h2 className=" font-semibold text-slate-700 ab capitalize text-lg mb-1 md:mb-3 md:text-lg">
                fresh food
              </h2>
              <p className="capitalize text-slate-600  text-xs md:text-xs">
                Expressing gratitude for generosity. Filling empty stomachs,
                lifting spirits!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
