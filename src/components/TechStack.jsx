import { MdVerified } from "react-icons/md";
const TechStack = () => {
  return (
    <div className='bg-violet-400 pb-40 pt-5'>
      <div className='flex flex-col justify-center items-center mb-10'>
          <h1 className='text-2xl font-medium bg-gray-300 rounded-lg pl-3 pr-3'>What Skill I have</h1>
          <h1 className='text-xl '>My TechStacks</h1>
      </div>
      <div className='md:flex-row flex justify-around flex-col items-center relative top-10 pt-10'>
        <div className='bg-violet-200 border-violet-500 border-2 h-52 w-72 p-2 rounded-lg mb-5'>
          <h1 className='text-xl font-semibold text-center mb-5'>Frontend Development</h1>
          <div className='flex justify-around mb-5'>
            <div className='flex'><MdVerified className="w-5 h-5"/><p className='ml-2'>HTML</p></div>
          <div className='flex'><MdVerified className="w-5 h-5"/><p className='ml-2'>CSS</p></div>
          </div>
          <div className='flex justify-around mb-5'>
            <div className='flex ml-7'><MdVerified className="w-5 h-5"/><p className='ml-1'>Tailwind-CSS</p></div>
          <div className='flex relative left-2'><MdVerified className="w-5 h-5"/><p className='ml-1'> Javascript</p></div>
          </div>
          <div className='flex justify-around mb-5'>
            <div className='flex ml-2'><MdVerified className="w-5 h-5"/><p className='ml-2'>REACT-JS</p></div>
          </div>
        </div>
        <div className='border-2 border-violet-500 bg-violet-200 h-52 w-80 p-2 rounded-lg mb-5'>
          <h1 className='text-xl font-semibold text-center mb-5'>Programming-Languages</h1>
          <div className='flex justify-around mb-5 '>
            <div className='flex'><MdVerified className="w-5 h-5"/><p className='ml-1'>C/C++</p></div>
          <div className='flex'><MdVerified className="w-5 h-5"/><p className='ml-1'>DSA</p></div>
          </div>
          <div className='flex justify-around mb-5'>
            <div className='flex'><MdVerified className="w-5 h-5 ml-2"/><p className='ml-1'>Oops</p></div>
          <div className='flex'><MdVerified className="w-5 h-5 ml-5"/><p className='ml-1'> DBMS</p></div>
          </div>
          <div className='flex justify-around mb-5'>
            <div className='flex mr-10'><MdVerified className="w-5 h-5"/><p className='ml-1'>SE</p></div>
          <div className='flex'><MdVerified className="w-5 h-5 "/><p className='ml-1'>SQL</p></div>
          </div>
          
        </div>

        {/* <div> */}
          
        <div className='border-2 h-52 w-80 p-2 border-violet-500 bg-violet-200 rounded-lg mb-5'>
          <h1 className='text-xl font-semibold text-center mb-5'>Backened Development</h1>
          <div className='flex justify-around mb-5'>
            <div className='flex'><MdVerified className="w-5 h-5"/><p className='ml-1'> Node-Js</p></div>
          <div className='flex'><MdVerified className="w-5 h-5"/><p className='ml-1'>Express-Js</p></div>
          </div>
          <div className='flex justify-around mb-5'>
            <div className='flex'><MdVerified className="w-5 h-5"/><p className='ml-1'>MongoDb</p></div>
          <div className='flex'><MdVerified className="w-5 h-5 mr-2"/><p className=''>MySQL</p></div>
          </div>
          <div className='flex justify-around mb-5'>
            <div className='flex'><MdVerified className="w-5 h-5"/><p className='ml-1'>Git</p></div>
          <div className='flex ml-8'><MdVerified className="w-5 h-5"/><p className='ml-1'>Postman</p></div>
          </div>
          
        </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default TechStack