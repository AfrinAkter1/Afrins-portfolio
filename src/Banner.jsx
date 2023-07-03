import { BiLogoFacebookCircle, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
<script>
AOS.init();
</script>
const Banner = () => {
    return (
        <div id='wellcome' className="mx-16 lg:flex gap-9 w-full">
            <div>
                <img className="h-80 rounded  shadow-lg shadow-gray-600" src="https://i.ibb.co/mbZgTnw/IMG-20230424-WA0052-1.jpg" alt="" />
            </div>
            <div>
            <h1 className="text-3xl font-bold ">Hi ✋ I'm Afrin Akter</h1>
            <small className='text-4xl font-bold '>I am a </small>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Web developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Front-end developer',
        1000,
        ' Mern stack developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em',fontWeight: 'bold',  display: 'inline-block' }}
      className='text-orange-700'
      repeat={Infinity}
    />
            <p className='my-10 '>I have a strong set of technical skills, <br /> a problem-solving mindset, great teamwork abilities, <br /> a love for learning, keen attention to detail, <br /> and a strong commitment to my work.</p>
            <p className='text-slate-300'>FIND WITH ME</p>
            <ul className='flex text-3xl space-x-3 my-5 text-white'>
                <li className='bg-orange-800 shadow-lg shadow-gray-500 rounded-full p-1'>
                    <Link to='https://web.facebook.com/profile.php?id=100064052524167'><BiLogoFacebookCircle></BiLogoFacebookCircle></Link>
                   </li>
                <li className='bg-orange-800 shadow-lg shadow-gray-500 rounded-full p-1'><Link to='https://github.com/AfrinAkter1'><BiLogoGithub></BiLogoGithub></Link></li>
                <li className='bg-orange-800 shadow-lg shadow-gray-500 rounded-full p-1'><BiLogoInstagram></BiLogoInstagram></li>
                <li className='bg-orange-800 shadow-lg shadow-gray-500 rounded-full p-1'><BiLogoLinkedin></BiLogoLinkedin></li>
            </ul>
            </div>
        </div>
    );
};

export default Banner;