import { Link } from 'react-scroll';
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
const Footer = () => {
  return (
    <div className='flex-col flex items-center bg-violet-300 pt-5 pb-8'>
      <div><img src="/img-self.png" alt="image" className='w-28 h-28 rounded-full'></img></div>
      <div className='text-2xl font white'>Atish Ranjan</div>
      <div>
        <nav className='md:flex-row flex gap-4 cursor-pointer flex-col items-center mt-5'>
         <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
         <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
         <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
         <Link to="work" spy={true} smooth={true} duration={500}>MyWork</Link>
         <Link to="tech" spy={true} smooth={true} duration={500}>My TechStack</Link>
        </nav>
      </div>
      <div className='md:flex justify-center gap-6'>
        <div className='md:flex gap-5 mt-5'>
        <FaLinkedinIn className='w-8 h-8 bg-white p-1 mb-2 cursor-pointer rounded-lg'/>
        <IoLogoGithub className='w-8 h-8 bg-white p-1 cursor-pointer rounded-lg'/>
      </div>
      </div>
      <div className='text-xl mt-5'>Thanks!</div>
    </div>
  )
}

export default Footer