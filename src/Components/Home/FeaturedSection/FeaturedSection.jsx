"use client";
import { useQuery } from "@tanstack/react-query";
import { Warning, Layout } from "phosphor-react";
import { Button, Badge, Tooltip, Spinner } from "keep-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCont from "../../Skeleton/Skeleton";

const FeaturedSection = () => {
  const [layout, setLayout] = useState(true);

  const {
    isLoading,
    error,
    data: foods,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const response = await fetch(
        "https://test-tau-green-45.vercel.app/foods"
      );
      return response.json();
    },
  });

  if (isLoading) {
    return <SkeletonCont></SkeletonCont>;
  }

  if (error) {
    return (
      <div className="min-h-40 flex justify-center items-center">
        <Warning size={30} />
      </div>
    );
  }

  const sortedFoods = foods
    ? [...foods].sort((a, b) => b.food_quantity - a.food_quantity)
    : [];
  const featuredFoods = sortedFoods.slice(0, 6);

  return (
    <div className="lg:mb-20 md:mb-10 p-2 mb-5">
      <div className="py-10 container flex justify-between items-center mx-auto bg-white md:text-2xl text-xl lg:text-3xl capitalize">
        <h2>Most Available Foods</h2>
        <div className="hidden lg:block">
          <Tooltip placement="left" className="bg-white ">
            <Tooltip.Action className="bg-transparent text-slate-900">
              <Layout onClick={() => setLayout(!layout)} size={32} />
            </Tooltip.Action>
            <Tooltip.Content>
              <p className="text-body-5 font-medium text-white">Layout</p>
            </Tooltip.Content>
          </Tooltip>
        </div>
      </div>
      <div
        className={`grid ${
          layout ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } md:grid-cols-2 gap-2 md:container mx-auto`}
      >
        {featuredFoods.map((food) => (
          <div
            className="border-2 rounded-lg grid-cols-5 grid text-slate-300 max-h-52 bg-slate-700 border-black relative overflow-hidden"
            key={food._id}
          >
            <div className="bg-black col-span-2 w-full mx-auto overflow-hidden">
              <img
                src={food.photoURL}
                alt={food.food_name}
                className="w-full object-cover h-full"
              />
            </div>

            <div className="info w-full border-green-2  flex flex-col col-span-3 px-2">
              <div className="py-3    w-full flex mb-auto  justify-between items-center pr-2 ">
                <p className="text-base  font-semibold text-slate-200">
                  {food.food_name}
                </p>
                <Badge className="bg-slate-900 text-slate-300" size="sm">
                  {food.status}
                </Badge>
              </div>

              <p className="text-sm  pb-1">
                For:{" "}
                <span className="pl-2 text-green-400 font-semibold">
                  {food.food_quantity}
                </span>{" "}
                Person
              </p>
              <p className="text-sm  pb-2">
                Pickup:{" "}
                <span className="pl-2 text-green-400 font-semibold">
                  {food.pickup_location}
                </span>
              </p>
              <div className="w-full  h-16 flex justify-between  items-center lg:pr-1 mt-auto">
                <div className="grid grid-cols-5 justify-between lg:gap-1 items-center">
                  <img
                    src={food.donator_photoURL}
                    alt={food.donator_username}
                    className="rounded-full w-10 h-10  lg:w-12 lg:h-12 object-cover col-span-2 p-1"
                  />
                  <div className="col-span-3">
                    <h2 className="lg:text-[10px] text-[10px]  ">
                      {food.donator_username}
                    </h2>
                  </div>
                </div>
                <Link to={`/availablefoods/${food._id}`}>
                  <Button
                    color="primary"
                    size="xs"
                    className="max-h-12 text-xs rounded-md"
                  >
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto  min-h-20 grid justify-end items-center">
        <Link className=" " to={`/availablefoods`}>
          <Button
            color="primary"
            size="sm"
            className="max-h-12 rounded-md bg-slate-700 text-xs "
          >
            view all
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
