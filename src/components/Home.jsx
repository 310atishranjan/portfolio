import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {Link} from "react-scroll";
const Details = () => {
  const handleShow= () => {
    const pdfUrl = '/Atish_Ranjan_Resume.pdf';  
    window.open(pdfUrl, '_blank');
  };
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kumar-atish-ranjan-1249101b6/', '_blank');
  };
  const openGithub = () => {
    window.open('https://github.com/310atishranjan', '_blank');
  };
  return (
    <div className='bg-violet-400 pb-12'>
      <div className='flex flex-col items-center h-80'>
        <div className='mt-16 mb-4'>
          <h1 className='text-center text-white'> Hello I am </h1>
          <h1 className='font-bold text-white text-2xl'>Kumar Atish Ranjan</h1>
          <h1 className='text-center text-white'>Student of B.Tech(IT)</h1>
        </div>
        <div className='mt-5'>
          <button className='rounded-md p-2 text-white border-2 mr-2 ' onClick={handleShow}>Download Resume</button>
          <button className='rounded-md p-2 text-white border-2 bg-violet-300'><Link to="contact" spy={true} smooth={true} duration={500}>Let's Talk</Link></button>
        </div>
      </div>
      <div className='flex justify-center gap-6'>
        <div className='mt-16'>
        <FaLinkedinIn className='w-6 h-6 bg-white p-1 mb-1 cursor-pointer rounded-md' onClick={openLinkedIn}/>
        <IoLogoGithub className='w-6 h-6 bg-white p-1 cursor-pointer rounded-md' onClick={openGithub}/>
        </div>
        <div><img src="/img-self.png" alt="image" className='w-52 h-52 rounded-full'></img></div>
      </div>
    </div>
  )
}

export default Details