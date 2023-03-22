import React from "react";
import "tailwindcss/tailwind.css";

const Banner = () => {
  return (
    <header aria-label="Page Header" className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              RestoPlon  🍽️
            </h1>

            <p className="mt-1.5 text-base text-gray-500">
              Découvir de nouveaux restaurants 📍
            </p>
          </div>
          <div>
            <button
              className="inline-block rounded bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 hover:bg-indigo-500 "
            >
              Favoris 💜
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;