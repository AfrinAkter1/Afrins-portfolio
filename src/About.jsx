
import { BiDownload } from "react-icons/bi"
import mypdf from '../public/Afrin Akter      resume                                             01846661353 (2).pdf'


const About = () => {
   

   
   
    return (
        <div className="md:flex  gap-10 mx-40">
           <div>
            <h3 className="text-2xl  my-4"><i>About Me</i></h3>
            <p className="text-orange-600 text-3xl font-bold">I am available for your Project</p>
            <p className=" my-4">Hello! I'm Afrin Akter, from Chandpur, Bangladesh.
I am dedicated to learning and mastering new technologies, and coding has become my true passion.
I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I'm all ears! Feel free to explore my resume below to gain a better understanding of my skills and experience. Let's connect and bring your project to life together!</p>
<a href={mypdf} download
className='btn text-white bg-orange-800' ><BiDownload className="text-xl"></BiDownload> Download Resume</a>
           </div>
           <div>
            <img className="h-80 w-[900px] rounded  shadow-lg shadow-gray-600" src="https://i.ibb.co/jJm3x18/IMG-20230701-110126.jpg" alt="" />
           </div>
        </div>
    );
};

export default About;