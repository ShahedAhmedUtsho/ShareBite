"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, Badge, Tooltip, Spinner } from "keep-react";
import { Layout, ArrowClockwise, Warning, Share } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UnstyledSelectIntroduction from "./Sort";
import SocialMediaShare from "../SocialShare/SocialShare";

const AbalableFoods = () => {
  const [layout, setLayout] = useState(true);
  const [searchResult, setSearchResult] = useState(null);
  const [heading, setHeading] = useState("Available Foods");
  const [shortFoods, setShortFoods] = useState([]);

  useEffect(() => {
    document.title = "ShareBite | Available Food";
  }, []);

  const {
    isLoading,
    error,
    data: foods,
    refetch,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const response = await fetch(
        "https://test-tau-green-45.vercel.app/foods",
        { credentials: "include" }
      );

      return response.json();
    },
  });

  if (isLoading)
    return (
      <div className="   h-[90vh]  flex justify-center">
        <div className=" absolute  top-[40vh]">
          <Spinner size="xl"></Spinner>
        </div>
      </div>
    );
  if (error)
    return (
      <div className=" min-h-40  flex justify-center items-center">
        <Warning size={30}></Warning>
      </div>
    );

  const a =
    searchResult !== null
      ? searchResult
      : foods?.length > 0
      ? foods.filter((item) => item?.status === "available")
      : [];

  const available_Foods = shortFoods?.length > 0 ? shortFoods : a;

  const ShortEX = () => {
    if (foods) {
      // Sorting the food items by expired_date
      const sortedFoodItems = foods.sort((a, b) => {
        const dateA = new Date(
          a.expired_date.replace(/(\d+)(st|nd|rd|th)/, "$1")
        );
        const dateB = new Date(
          b.expired_date.replace(/(\d+)(st|nd|rd|th)/, "$1")
        );
        return dateA - dateB;
      });

      setShortFoods(sortedFoodItems);
      setHeading("sort by Expiry date");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    axios
      .get(`https://test-tau-green-45.vercel.app/search/${search}`)
      .then((data) => {
        setShortFoods([]);
        setSearchResult(data.data);
        const headingCreating =
          data.data.length > 0
            ? `Search result for ${search} `
            : `No result for ${search}`;
        setHeading(headingCreating);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const reset = () => {
    setSearchResult(null);
    setHeading("Available Foods");
    setShortFoods([]);
    refetch();
  };
  return (
    <div className=" relative h-full">
      <SocialMediaShare></SocialMediaShare>
      <div>
        <div className="bg-slate-700 w-full h-52 bg-search flex flex-col justify-center items-center">
          
          <form
            onSubmit={handleSubmit}
            className="h-16 flex justify-center items-center p-3 lg:w-[450px] bg-slate-400 rounded-full"
          >
            <input
              name="search"
              type="text"
              placeholder="Search"
              className="rounded-l-full pl-4 text-base text-slate-800 w-full h-full active:!border-none"
            />
            <Button
              type="submit"
              color="primary"
              size="sm"
              className="rounded-r-full w-28"
            >
              search
            </Button>
          </form>
        </div>
        <div className=" bg-slate-0 bg-[#0E233D] min-h-20 w-full flex justify-center items-center">
          <UnstyledSelectIntroduction
            reset={reset}
            ShortEX={ShortEX}
          ></UnstyledSelectIntroduction>
        </div>
        <div className="py-10 container flex justify-between items-center mx-auto bg-white md:text-2xl text-xl ab lg:text-3xl capitalize">
          <div className="flex  items-center gap-5">
            <h2 className=" capitalize">{heading}</h2>
            {searchResult ? (
              <ArrowClockwise onClick={reset} size={30} />
            ) : (
              <></>
            )}
          </div>
          <Tooltip placement="left" className="bg-white">
            <Tooltip.Action className="bg-transparent text-slate-900">
              <Layout onClick={() => setLayout(!layout)} size={32} />
            </Tooltip.Action>
            <Tooltip.Content>
              <p className="text-body-5 font-medium text-white">layout</p>
            </Tooltip.Content>
          </Tooltip>
        </div>

        <div
          className={`grid ${
            layout ? "md:grid-cols-3" : "md:grid-cols-2"
          } gap-2 md:container mx-auto`}
        >
          {available_Foods &&
            available_Foods?.map((food) => (
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
      </div>
    </div>
  );
};

export default AbalableFoods;
