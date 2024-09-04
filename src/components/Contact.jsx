import { MdEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import emailjs from 'emailjs-com'
const Contact = () => {
  function sendMessage(e){
    e.preventDefault();
    emailjs.sendForm('service_7j5i84p','template_9u3o6i9',e.target,'ANIR0B2x1WchsHeyo').then(res=>{
      console.log(res);
    }).catch(error=>
      console.log(error)
    )
    e.target.reset();
  }
  return (
   <div className='bg-violet-400 pb-20'>
    <div className='flex flex-col justify-center items-center pt-4 '>
    <h1>Get in Touch</h1>
    <h1 className='text-2xl '>Contact ME</h1>
    </div>
    <div className='md:flex-row flex justify-center gap-16 mt-24 flex-col '>
    <div className=''>
      <div className='border-violet-500 border-2 bg-violet-300 text-center mb-10 rounded-2xl text-xl p-4'>
        <h1 className="flex justify-center items-center"><MdEmail className="w-8 h-8 mb-1"/></h1>
        <h1>Email</h1>
        <h1>atishranjan31@gmail.com</h1>
      </div>
      <div className='border-violet-500 bg-violet-300 border-2 text-center rounded-2xl text-xl p-4'>
        <h1 className="flex justify-center items-center"><SiWhatsapp className="w-8 h-8 mb-1"/></h1>
        <h1>Whats App</h1>
        <h1>7645082061</h1>
        <h1> send a message</h1>
      </div>
    </div>
    <form onSubmit={sendMessage}>
    <div className='flex-col flex items-center gap-5 mt-7'>
      <input placeholder='Your Full Name' className="w-64 h-16 text-center border-2 border-violet-400 rounded-lg"/>
      <input placeholder='Your Email'  className="w-64 h-16 text-center border-2 border-violet-400 rounded-lg"/>
      <textarea placeholder='Your Messages' className="w-64 h-16 text-center border-2 border-violet-400 rounded-lg"/>
      <button className="border-violet-400 bg-violet-200 rounded-lg w-24 h-8 text-xl text-black" type="submit">Send</button>
    </div>
    </form>
   </div>
   </div>
  )
}

export default Contact;