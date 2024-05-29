import { Suspense, useContext } from "react";

import { Button, Input, Textarea } from "keep-react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import img from "../../../Images/Animation - 1715760264227.json";

const Contect = () => {
  const { setModelMessage, setModelHead, openSuccessModal } =
    useContext(AuthContext);

  return (
    <div className="bg-slate-700 bg-search">
      <div className="min-h-96  container mx-auto mb-5 md:mb-10 lg:mb-20 grid justify-center md:grid-cols-5">
        <div className="  md:flex md:col-span-3    items-center  justify-center w-full  p-3  h-full ">
          <div className=" mx-auto    top-0 md:max-w-28 max-w-72 lg:max-w-72 ">
            <Lottie animationData={img}></Lottie>
          </div>
          <div className="  grid gap-3 ">
            <div className="flex  flex-col  justify-center gap-5">
              {" "}
              <h2 className="text-xl md:text-xl lg:text-3xl font-semibold  capitalize text-slate-200">
                {" "}
                contact us
              </h2>
              <p className="lg:text-base text-xs   capitalize text-slate-400 max-w-lg">
                {" "}
                Message us if you want to know more about shirebite . Feel free
                to reach out with any inquiries or feedback. Were here to assist
                you promptly.
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setModelHead("Message Sent");
            setModelMessage("we will connect you, thank you");
            openSuccessModal();

            e.target.reset();
          }}
          className="  flex flex-col md:col-span-2  justify-center items-center md:p-10 p-3 w-full h-full"
        >
          <div className="p-2  flex w-full  flex-col self-right gap-4 ">
            <Input
              required
              className="max-w-md bg-slate-600"
              placeholder="Enter Your Email"
            ></Input>
            <Textarea
              required
              className="max-w-md bg-slate-600"
              placeholder="Message"
            ></Textarea>
            <Button size="sm" className="max-w-28  bg-slate-300 text-slate-900">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contect;
