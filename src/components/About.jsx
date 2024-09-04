import { PiStudentLight } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
const About = () => {
  return (
    <div className="bg-violet-400 pb-52">
     
      <div className="flex flex-col items-center pt-8">
        <h1 className="text-gray-800 text-xl">Get To Know</h1>
        <h1 className="text-gray-800 text-2xl font-semibold mb-4">About Me</h1>
      </div>
      <div className="">
      <div className="md:flex justify-around items-center mt-20">
      <div className="md:w-1/2 text-center "><p className="text-white text-pretty font-medium text-xl mb-4 leading-loose p-4">Hello! I am Kumar Atish Ranjan Student of Guru Jambheshwar University Hisar.
        As a computer science student, i have strong foundation in programming languages,Software Development
       and computer science subject.As a web developer ,I have successfully
        completed over 6 Full stack web development projects. My experience includes web-based Frontend development Backened Development.
        I am always looking to learn new technologies.</p></div>
        <div className="md:flex-row flex justify-evenly flex-row gap-10">
            <div className="w-32 h-40 border-2 rounded-2xl"> 
            <PiStudentLight className="w-10 h-10 bg-white rounded-2xl relative left-10 top-2"/>
            <div className="flex flex-col justify-center m-9">
              <h1 className="text-center text-white">Student</h1>
              <h1 className="text-white text-center">GJUST HISAR</h1></div>
            </div>
            <div  className="w-36 h-40 border-2 rounded-2xl">
            <GrProjects className="w-9 h-9 p-1 relative left-12 top-2 bg-white rounded-xl"/>
            <div className="flex flex-col justify-center mt-12">
            <h1 className="text-center text-white">Projects</h1>
            <h1 className="text-white text-center">6+ Completed</h1></div>
            </div>
        </div>
        </div>
     
      
    </div>
    </div>
  )
}

export default About