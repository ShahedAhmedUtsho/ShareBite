"use client";
import { Skeleton } from "keep-react";

const SkeletonCont = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className=" container mx-auto min-h-96 mb-28 w-full">
      <Skeleton className="min-h-10 mt-20 mb-10 ">
        <div className="flex justify-between px-3 ">
          <Skeleton.Line className="w-80 h-10 "></Skeleton.Line>
          <Skeleton.Line className="w-10 h-10 mr-5"> </Skeleton.Line>
        </div>
      </Skeleton>
      <Skeleton className=" w-full h-full grid gap-2 px-3 my-5  md:grid-cols-2  lg:grid-cols-3 ">
        {arr.map((i, index) => (
          <div
            key={index}
            className=" grid  grid-cols-5 w-full gap-2  rounded-xl"
          >
            <Skeleton.Line className="   h-full col-span-2 border-2 " />
            <div className=" flex flex-col col-span-3  ">
              <Skeleton.Line className=" bg-slate-200 border-2  h-8 w-52" />
              <Skeleton.Line className=" bg-slate-200 border-2 h-8 mt-5 mb-2  w-52" />
              <Skeleton.Line className=" bg-slate-200 border-2 h-8  mt-auto mb-4  w-20" />
            </div>
          </div>
        ))}
      </Skeleton>
    </div>
  );
};

export default SkeletonCont;
