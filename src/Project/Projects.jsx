
import { Link } from 'react-router-dom';
import './Projects.css'
const Projects = () => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className="container">

       

<div className="card ">

    <div className="slide slide1">

        <div className="content">

            <div className="icon">

               <img className='rounded h-full' src="https://i.ibb.co/xmDr1gt/image.png" alt="" />
            </div>

        </div>

    </div>

    <div className="rounded slide slide2">

        <div className="px-5 content">
          <ul className='list-disc list-inside  '>
            <h1 className='text-orange-800 font-bold'><i>Drawing Garden</i></h1>
            <li>This is Full Stack Website</li>
            <li>Student Can buy the class and Instructor Can post the class.</li>
          </ul>
       
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://assignment12-4aad5.web.app/'>Live site</Link></button>
            <div className='flex gap-3 mt-2 mb-7'>
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://github.com/AfrinAkter1/drawing-garden'>Client github</Link> </button>
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://github.com/AfrinAkter1/drawing-garden-server'>Server github</Link> </button>
          </div>
        </div>
    </div>
</div>
</div>
            <div className="container">

       

<div className="card ">

    <div className="slide slide1">

        <div className="content">

            <div className="icon">

               <img className='rounded h-full' src="https://i.ibb.co/vLMHPkm/image.png" alt="" />
            </div>

        </div>

    </div>

    <div className="rounded slide slide2">

        <div className="px-5 content">
          <ul className='list-disc list-inside  '>
            <h1 className='text-orange-800 font-bold'><i>Toy HUt</i></h1>
            <li>This is Full Stack Website</li>
            <li>There user can buy the toys and add the toys.</li>
          </ul>
       
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://toy-website-1605b.web.app/'>Live site</Link></button>
            <div className='flex gap-3 mt-2 mb-7'>
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://github.com/AfrinAkter1/toy-marketplace'>Client github</Link> </button>
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://github.com/AfrinAkter1/toy-marketplace-server'>Server github</Link> </button>
          </div>
        </div>
    </div>
</div>
</div>
            <div className="container">

       

<div className="card ">

    <div className="slide slide1">

        <div className="content">

            <div className="icon">

               <img className='rounded h-full' src="https://i.ibb.co/PWDP9T8/image.png" alt="" />
            </div>

        </div>

    </div>

    <div className="rounded slide slide2">

        <div className="px-5 content">
          <ul className='list-disc list-inside  '>
            <h1 className='text-orange-800 font-bold'><i>Bengali Foods</i></h1>
            <li>This is Recipe hunter website</li>
            <li>There is user can buy recipe and view details</li>
          </ul>
       
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://assignment10-74579.firebaseapp.com/'>Live site</Link></button>
            <div className='flex gap-3 mt-2 mb-7'>
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://github.com/AfrinAkter1/Bengali-Foods'>Client github</Link> </button>
            <button className='btn btn-sm bg-orange-800 text-white'><Link to='https://github.com/AfrinAkter1/Bengali-Foods-server'>Server github</Link> </button>
          </div>
        </div>
    </div>
</div>
</div>
            
        
        </div>
    );
};

export default Projects;