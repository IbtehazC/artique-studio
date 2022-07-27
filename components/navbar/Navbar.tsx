import Link from "next/link";
import React, { useState } from "react";

export default function Navbar({}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2 rounded sticky top-0 left-0 z-50 shadow-sm">
      <div className="flex flex-wrap justify-between md:justify-center items-center px-4">
        <img src="./logo.svg" alt="logo" className="h-10 w-10 md:hidden" />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className=" p-2 ml-3 text-sm text-black md:hidden hover:bg-gray-100"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="sr-only">Open main menu</span>
          {isExpanded ? (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0659 8.99469C16.3588 8.70179 16.3588 8.22692 16.0659 7.93403C15.773 7.64113 15.2981 7.64113 15.0052 7.93403L12 10.9392L8.99482 7.93403C8.70192 7.64113 8.22705 7.64113 7.93416 7.93403C7.64126 8.22692 7.64126 8.70179 7.93416 8.99469L10.9394 11.9999L7.93415 15.0051C7.64125 15.298 7.64125 15.7729 7.93415 16.0658C8.22704 16.3586 8.70191 16.3586 8.99481 16.0658L12 13.0605L15.0052 16.0658C15.2981 16.3586 15.773 16.3586 16.0659 16.0658C16.3588 15.7729 16.3588 15.298 16.0659 15.0051L13.0607 11.9999L16.0659 8.99469Z"
                  fill="black"
                />
              </svg>
            </>
          ) : (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col justify-center items-center p-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link href="/">
                <a
                  className="block py-2 pr-4 pl-3 text-black font-bold rounded md:bg-transparent text-xl"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent text-xl"
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent text-xl"
                >
                  Contacts
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isExpanded && (
        <div className="w-full flex flex-col text-right pr-4">
          <Link href="/">
            <a
              className="block py-2 pr-4 pl-3 text-black font-bold rounded md:bg-transparent text-xl"
              aria-current="page"
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent text-xl"
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent text-xl"
            >
              Contacts
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
}
