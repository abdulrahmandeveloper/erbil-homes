import { Button } from "@heroui/react";

const CallToAction = () => {
  return (
    <section className="relative   flex flex-row items-center justify-center  h-[75vh] bg-[url('/images/landing-call-to-action.jpg')]  bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className=" flex items-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-neutral-600">
          Find Your Dream Rental Property
        </h1>
        <div className="flex flex-col items-center justify-center h-full text-white ml-10">
          <p className="text-lg mb-8 text-center">
            Discover a wide range of rental properties in your desired location.
          </p>
          <div className="flex gap-4">
            <Button className="px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-white hover:text-black transition hover:cursor-pointer">
              Learn More
            </Button>
            <Button className="hover:cursor-pointer px-6 py-3 bg-white text-black rounded-lg hover:bg-none transition ">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
