 import { useState } from "react"
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2"


const Searchbar = () => {

    const [seachTerm, setSearchTerm]= useState("")
    const [isOpen,setIsOpen]= useState("")

    const handlesearchToggle= ()=>{
        setIsOpen(!isOpen)
    }

    const handleSearch= (e)=>{
        e.preventDefault()
        console.log("search Term",seachTerm)
        setIsOpen(false)
    }

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? 
        "absolute top-0 left-0 w-full bg-white h-24 z-50 ":"w-auto"
    }`}>
      {isOpen ? (<form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
        <div className="relative w-1/2">
            <input type="text"
            placeholder="search"
            value={seachTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full" />
            {/**seach icon */}
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900">
                <HiMagnifyingGlass className="h-5 w-5"/>
            </button>
        </div>
        {/**close button */}
        <button type="button" onClick={handlesearchToggle}>
            <HiMiniXMark className="h-5 w-5 text-gray-500 hover:text-gray-800"/>
        </button>
      </form>) :(
        <button onClick={handlesearchToggle}>
            <HiMagnifyingGlass className="h-5 w-5 text-gray-600"/>

        </button>
      )}
    </div>
  )
}

export default Searchbar
