import { Link } from 'react-scroll';
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { GoStack } from "react-icons/go";

const BottomNavbar = () => {
  return (
    <div>
        <nav className='flex gap-4 w-full cursor-pointer fixed bottom-0 z-auto items-center justify-center mb-3'>
         <Link to="home" spy={true} smooth={true} duration={500}><IoMdHome className='w-7 h-7'/></Link>
         <Link to="about" spy={true} smooth={true} duration={500}><FcAbout className='w-7 h-7'/></Link>
         <Link to="contact" spy={true} smooth={true} duration={500}><GrContact className='w-7 h-7'/></Link>
         <Link to="work" spy={true} smooth={true} duration={500}><GoProjectSymlink className='w-7 h-7' /></Link>
         <Link to="tech" spy={true} smooth={true} duration={500}><GoStack className='w-7 h-7'/></Link>
        </nav>
      </div>
  )
}

export default BottomNavbar