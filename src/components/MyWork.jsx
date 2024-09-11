
const MyWork = () => {
  const medicine = () => {
    window.open('https://github.com/310atishranjan/Medicine-E-order.git', '_blank');
  };
  const event = () => {
    window.open('https://github.com/310atishranjan/Event-Planning.git', '_blank');
  };
  const eventlive = () => {
    window.open('https://event-planning-three.vercel.app/', '_blank');
  };
  const handy = () => {
    window.open('https://github.com/310atishranjan/Handy_Hub_Backened', '_blank');
  };
  const handylive = () => {
    window.open('https://handyhub31.netlify.app/', '_blank');
  };
  const clinic = () => {
    window.open('https://github.com/310atishranjan/Hospital-Management.git', '_blank');
  };
  const client=()=>{
    window.open('https://github.com/310atishranjan/Client_Complaint.git','_blank');
  }
  const clientlive=()=>{
    window.open('https://complaint-m.netlify.app/','_blank');
  }
  return (
    <div className='bg-violet-400 pb-10'>
      <div className='md:flex-col flex items-center bg-violet-400 flex-col justify-center'>
        <h1>My Recent Work</h1>
        <h1 className='text-2xl text-black mb-5'>Portfolio</h1>
      </div>
      <div className='md:grid-cols-3 ml-20 grid flex-col items-center'>
        <div className='border-2 border-violet-500 w-64 h-40 p-5 mb-4 bg-violet-300 rounded-lg'>
          <div><img src=""></img></div>
          <div>
            <h1>Web Portal of E-commerce Pharma Shop Medicine E-order.</h1>
            <div className='mt-2'>
              <button className='border-2 border-purple-600 p-2 rounded-lg text-purple-800 font-bold'  onClick={medicine}>Github</button>
              <button className='bg-purple-600 p-2 rounded-lg ml-4 text-white' onClick={medicine}>Live Demo</button>
              </div>
          </div>
        </div>
        <div className='border-2 border-violet-500 w-64 h-40 p-5 mb-4 bg-violet-300 rounded-lg'>
          <div><img src=""></img></div>
          <div>
            <h1>Web Portal for Event Planning Company on Different Occassion.</h1>
            <div className='mt-2'>
              <button className='border-2 border-purple-600 p-2 rounded-lg text-purple-800 font-bold' onClick={event}>Github</button>
              <button className='bg-purple-600 p-2 rounded-lg ml-4 text-white' onClick={eventlive}>Live Demo</button>
              </div>
          </div>
        </div>
        <div className='border-2 border-violet-500 w-64 h-40 p-5 mb-4 bg-violet-300 rounded-lg'>
          <div><img src=""></img></div>
          <div>
            <h1>MERN Project Handy-Hub PlatForm Provide for all Daily Wage Worker.</h1>
            <div className='mt-2'>
              <button className='border-2 border-purple-600 p-2 rounded-lg text-purple-800 font-bold' onClick={handy}>Github</button>
              <button className='bg-purple-600 p-2 rounded-lg ml-4 text-white' onClick={handylive}>Live Demo</button>
              </div>
          </div>
        </div>
        <div className='border-2 border-violet-500 w-64 h-50 p-5 mb-4 bg-violet-300 rounded-lg'>
          <div><img src=""></img></div>
          <div>
            <h1>MERN Project ClinicFlow a Hospital Management Web Portal including Online Appointment.</h1>
            <div className='mt-2'>
              <button className='border-2 border-purple-600 p-2 rounded-lg text-purple-800 font-bold' onClick={clinic}>Github</button>
              <button className='bg-purple-600 p-2 rounded-lg ml-4 text-white' onClick={clinic}>Live Demo</button>
              </div>
          </div>
        </div>
        {/* <div className='border-2 border-violet-500 w-64 h-40 p-5 mb-4 bg-violet-300 rounded-lg'>
          <div><img src=""></img></div>
          <div>
            <h1>Live Conversation chat app using Html css socket.io</h1>
            <div className='mt-2'>
              <button className='border-2 border-purple-600 p-2 rounded-lg text-purple-800 font-bold'>Github</button>
              <button className='bg-purple-600 p-2 rounded-lg ml-4 text-white'>Live Demo</button>
              </div>
          </div>
        </div> */}
        <div className='border-2 border-violet-500 w-64 h-48 p-5 mb-4 bg-violet-300 rounded-lg'>
          <div><img src=""></img></div>
          <div>
            <h1>Created a Full Stack Web Application which helps in registering and managing complaints.</h1>
            <div className='mt-2'>
              <button className='border-2 border-purple-600 p-2 rounded-lg text-purple-800 font-bold' onClick={client}>Github</button>
              <button className='bg-purple-600 p-2 rounded-lg ml-4 text-white' onClick={clientlive}>Live Demo</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork