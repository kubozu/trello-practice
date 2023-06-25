"use client";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Avatar from "react-avatar";
// import TrelloIcon from "../static/trello-logo.svg";

function Header() {
  return (
    <header className="">
      <div className="flex flex-col items-center bg-gray-500/10 p-5 md:flex-row">
        <div className="flex flex-row items-center pb-10 ">
          <div
            className="
            absolute
            left-0
            top-0 -z-50 h-96 w-full rounded-md bg-gradient-to-br
            from-pink-400
            to-[#0055D1] opacity-50 blur-3xl
            filter
            "
          />
          <Image
            src="../static/trello-logo.svg"
            alt="trello icon"
            width={100}
            height={100}
            className="w-10 object-contain md:w-20 md:pb-0"
          />
          {/* <TrelloIcon
            width={100}
            height={100}
            className="pb-30 w-10 object-contain md:w-20 md:pb-0"
          /> */}
          <p className="ml-3 text-4xl md:text-8xl">Trello</p>
        </div>
        <div className="flex w-full flex-1 items-center justify-end space-x-5 ">
          {/** Search Box */}
          <form
            action=""
            className="flex flex-1 items-center space-x-5 rounded-md bg-white p-2 shadow-md md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-2 outline-none"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/** Avatar */}
          <Avatar name="Test User" round color="#0055D1" size="50" />
        </div>
      </div>
      <div className="flex justify-center px-5 py-2 md:py-5 ">
        <p className="flex w-fit max-w-3xl items-center rounded-xl bg-white p-5 pr-5 text-sm font-light italic text-[#0055D1] shadow-xl">
          <UserCircleIcon className="mr-1 inline-block h-10 w-10 text-[#0055D1]" />
          GPT is Summarising your tasks for the day
        </p>
      </div>
    </header>
  );
}

export default Header;
