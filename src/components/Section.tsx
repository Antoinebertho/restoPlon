import React from "react";
import "tailwindcss/tailwind.css";
import { restaurants } from "../data/datas";

interface SectionProps {}
const Section: React.FC<SectionProps> = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            🥩🥦 Bon appetit 🍔🍣
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <a
              key={restaurant.id}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/"
            >
              <img
                src={restaurant.img}
                alt={restaurant.name}
                className="h-32 w-32 mx-auto rounded-xl"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                {restaurant.name}
              </h2>
              <p className="mt-1 text-sm text-gray-300">{restaurant.address}</p>
              <p className="mt-1 text-sm text-gray-300">
                {restaurant.description_short}
              </p>
              <div className="mt-12 text-center">
                <a
                  href="/"
                  className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400  flex-col-reverse"
                >
                  See
                </a>
                <> </>
                <a
                  href="/"
                  className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400  flex-col-reverse"
                >
                  Add
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
