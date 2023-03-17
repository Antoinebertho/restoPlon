import React from "react";
import "tailwindcss/tailwind.css";

interface BannerProps {}
const Banner: React.FC<BannerProps> = () => {
  return (
    <header aria-label="Page Header" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome to Resto ! 🍽️
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Discover new restaurants around you 📍
            </p>
          </div>
          <div>
            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Favoris  ♥️
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;