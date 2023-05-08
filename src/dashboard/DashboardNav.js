/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { FaFileWord } from 'react-icons/fa'

function DashboardNav() {

    const [activeItem, setActiveItem] = useState("Summary");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
      };

  return (
    <div>

<header aria-label="Site Header" className="shadow-sm bg-white">
  <div
    className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
  >
    <div className="flex w-0 flex-1 lg:hidden">
        <button className="rounded-full bg-gray-100 p-2 text-blue-600" type="button">
        <span className="sr-only">Logo</span>
        <FaFileWord className=' text-blue-600 h-5 w-5' />
      </button>
    </div>

    <div className="flex items-center gap-4">

      <form className="mb-0 hidden lg:flex">
        <div className="relative">
        <FaFileWord className=' text-blue-600 lg:w-[35px] lg:h-[35px]'/>
        </div>
      </form>
    </div>

    <div className="flex w-0 flex-1 justify-end lg:hidden">
    <a
        href="#"
        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
      >
        Connect Wallet
      </a>
    </div>

    <nav
      aria-label="Site Nav"
      className="hidden bg-blue-50 rounded mx-80 items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
    >
      <a className={`text-blue-600 p-4 hover:rounded hover:bg-blue-200 ${activeItem === "Summary" && "font-bold text-white bg-blue-600 rounded hover:bg-blue-600"}`} onClick={() => handleItemClick("Summary")} href="/summary">Dashboard</a>
      <a className={`text-blue-600 p-4 hover:rounded hover:bg-blue-200 ${activeItem === "Word" && "font-bold text-white bg-blue-600 rounded hover:bg-blue-600"}`} onClick={() => handleItemClick("Word")} href="/word">Words</a>
      <a className="text-blue-600 p-4 hover:rounded hover:bg-blue-200" href="/earnings">Earnings</a>
      <a className="text-blue-600 p-4 hover:rounded hover:bg-blue-200" href="/history">History</a>
    </nav>

    <div className="hidden items-center gap-4 lg:flex">

      <a
        href="#"
        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
      >
        Connect Wallet
      </a>
    </div>
  </div>

  <div className="border-t border-gray-100 lg:hidden">
    <nav
      className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
    >
      <a className="shrink-0 px-4 text-gray-900" href="/summary">Dashboard</a>
      <a className="shrink-0 px-4 text-gray-900" href="/word">Words</a>
      <a className="shrink-0 px-4 text-gray-900" href="/earnings">Earnings</a>
      <a className="shrink-0 px-4 text-gray-900" href="/history">History</a>
    </nav>
  </div>
</header>
    </div>
  )
}

export default DashboardNav