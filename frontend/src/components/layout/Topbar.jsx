

import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"
/*
const Topbar=()=>{
    return (
        <div className=" container mx-auto bg-red-500 text-white ">
            <div className="flex justify-between item-center ml-0 ">
               <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="hover:text-gray-300">
                    <TbBrandMeta className="h-4 w-4"/>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <IoLogoInstagram className="h-4 w-4"/>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <RiTwitterXLine className="h-3 w-3"/>
                </a>
            </div>
            </div>
        </div>
    )
}
export default Topbar

*/
const Topbar = () => {
  return (
    <div className="bg-red-500 text-white">
        <div className="container mx-auto flex justify-between items-center ">
            <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="hover:text-gray-300">
                    <TbBrandMeta className="h-4 w-4"/>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <IoLogoInstagram className="h-4 w-4"/>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <RiTwitterXLine className="h-3 w-3"/>
                </a>
            </div>
            <div className="text-sm text-center grow">
                <span>we ship world wide</span>
            </div>
            <div className="text-sm hidden md:block">
                <a href="tel:+0794494797" className="hover:text-gray-300">
                    0794494797
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar

/*
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"


const Topbar = () => {
  return (
    <div className='container mx-auto bg-red-500 text-white flex justify-between'>
        <div className=' hidden md:flex items-center hover:text-gray-700 '>
            <a href="#"><TbBrandMeta className='h-5 w-5'/></a>
            
               <a href="#">   <toLogoInstagram className='h-5 w-5'/></a>
         
               <a href="#"> <RiTwitterXLine className='h-5 w-5'/></a>
           
        </div>
        <div className='text-center grow text-sm'>
            <p>we ship worldwide</p>
        </div>
        <div className='text:sm'>
            <a href="o794494797">
                 <p>0794494797</p>
            </a>
          
        </div>
      
    </div>
  )
}

export default Topbar
*/