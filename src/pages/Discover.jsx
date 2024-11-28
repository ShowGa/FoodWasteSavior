import React from "react";
// react router
import { Link } from "react-router-dom";
// components
import DiscoverListCard from "../components/DiscoverListCard";
// icons
import { FaLocationDot } from "react-icons/fa6";
const Discover = () => {
  return (
    <main>
      <div className="flex flex-col gap-8 mx-8 my-2">
        {/* positioning */}
        <div className="flex justify-center w-full">
          <button className="border border-gray-300 rounded-lg p-2">
            <FaLocationDot className="text-3xl" />
          </button>
        </div>

        <div>
          <div className="my-4">
            <h2 className="text-2xl font-bold">Collect Today</h2>
            <Link className="text-sm">View all</Link>
          </div>

          <div className="c-discover-card-container">
            <Link to="/package/123">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>
          </div>
        </div>

        <div>
          <div className="my-4">
            <h2 className="text-2xl font-bold">Collect Tomorrow</h2>
            <Link className="text-sm">View all</Link>
          </div>

          <div className="c-discover-card-container">
            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>
          </div>
        </div>

        <div>
          <div className="my-4">
            <h2 className="text-2xl font-bold">Vegetarian</h2>
            <Link className="text-sm">View all</Link>
          </div>

          <div className="c-discover-card-container">
            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>
          </div>
        </div>

        <div>
          <div className="my-4">
            <h2 className="text-2xl font-bold">Meals</h2>
            <Link className="text-sm">View all</Link>
          </div>

          <div className="c-discover-card-container">
            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>
          </div>
        </div>

        <div>
          <div className="my-4">
            <h2 className="text-2xl font-bold">Groceries</h2>
            <Link className="text-sm">View all</Link>
          </div>

          <div className="c-discover-card-container">
            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>
          </div>
        </div>

        <div>
          <div className="my-4">
            <h2 className="text-2xl font-bold">The Popular</h2>
            <Link className="text-sm">View all</Link>
          </div>

          <div className="c-discover-card-container">
            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>

            <Link to="/">
              <DiscoverListCard />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Discover;
