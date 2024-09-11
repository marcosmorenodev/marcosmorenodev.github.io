import './App.css';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from 'react-lottie-player';
import pfp from "../src/resources/pfp.jpeg";
import working from "../src/resources/working.json";
import projects from "../src/resources/projects.json";
import contact from "../src/resources/contact.json";

import japanese from "../src/resources/kana-learning.json";
import finances from "../src/resources/budget-tracker.json";
import calculator from "../src/resources/calculator.json";
import pomodoro from "../src/resources/pomodoro-timer.json";
import qrCode from "../src/resources/qr-code.json";
import quotes from "../src/resources/quotes.json";

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function App() {
  const cards = [
    {
      url: "Budget Tracker",
      svg: finances,
      description: "Administre sus finanzas como un profesional con esta app.",
      id: 1
    },
    {
      url: "Japanese Alphabet Learning Flashcards",
      svg: japanese,
      description: "Aprenda mediante flashcards interactivas.",
      id: 2
    },
    {
      url: "Pomodoro Timer",
      svg: pomodoro,
      description: "Administre mejor su tiempo con esta app.",
      id: 3
    },
    {
      url: "Simple Calculator",
      svg: calculator,
      description: "Realize operaciones básicas, así de sencillo.",
      id: 4
    },
    {
      url: "Quotes Generator",
      svg: quotes,
      description: "Genere una frase aleatoria de entre multiples categorías para su vida diaria.",
      id: 5
    },
    {
      url: "QR Code Generator",
      svg: qrCode,
      description: "Cree sus codigos QR listos para imprimir o pegar en algún documento.",
      id: 6
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <main className="flex flex-col items-center">
      <div className='grid grid-cols-2 bg-black py-1.5 lg:px-32 lg:py-2.5'>
        <div className='w-full'>
          <img 
            className='h-[250px] w-[250px] object-cover rounded-full lg:h-[300px] lg:w-[300px]'
            loading="eager"
            src = {pfp}
            alt="It's a me, Marcos!"
          />
        </div>

        <div 
          className='text-white text-4xl font-bold w-full flex justify-between flex-wrap'
        >
          <h1 className='lg:text-6xl'>¡Buenas!</h1>
          <h1 className='lg:text-6xl'>Soy Marcos, tratando de mejorar la web desde 2023.</h1>
        </div>
      </div>


      <div className='w-full text-center bg-black text-white border-b-4 border-t-4 border-blue-400 p-2 shadow-md shadow-gray-300 lg:p3'>
        <h1 className="text-3xl font-semibold lg:text-4xl">Acerca de Mi</h1>
      </div>

      <div className='flex justify-between items-center w-full px-2'>
        <div className='w-full flex justify-center'>
          <Lottie
            loop
            animationData={working}
            play
            style={{ width: 350, height: 350}}
          />
        </div>

        <div className='w-full'>
          <h1 className='font-semibold text-2xl lg:text-3xl'>
            Empecé mi apasionante viaje en el mundo de la programacion en <span className='text-blue-400'>2023</span>. Al principio, probé suerte con <span className='text-blue-400'>C#</span>, más, al ver de lo que eran capaces la aplicaciones web, me enamore del <span className='text-blue-400'>desarrollo front-end</span> y sus respectivas tecnologías.
          </h1>
        </div>
      </div>

      <div className='w-full text-center bg-white text-black border-b-4 border-t-4 border-blue-400 p-2 lg:p-3'>
        <h1 className="text-3xl font-semibold lg:text-4xl">Mis Proyectos</h1>
      </div>

      <div className='bg-black w-full flex justify-between items-center px-2'>
        <div className='w-full sm:ml-4'>
          <h1 className='text-white font-semibold text-2xl lg:text-3xl'>Los proyectos de <span className='text-blue-400'>Javascript</span> fueron hechos en <span className='text-blue-400'>2023</span> y revisados y mejorados en <span className='text-blue-400'>2024</span>.</h1>
          <h1 className='text-white font-semibold text-2xl mt-2 lg:text-3xl'>Los de <span className='text-blue-400'>React</span> fueron hechos durante <span className='text-blue-400'>2024</span>.</h1>
        </div>

        <div className='w-full flex justify-center'>
          <Lottie
            loop
            animationData={projects}
            play
            style={{ width: 450, height: 350}}
          />
        </div>
      </div>

      <div className='w-full gap-1.5 px-3 bg-black'>
        <p
          className='text-white text-xl text-center font-bold rounded-md transition-all underline underline-offset-2 p-2 bg-gray-800 cursor-default'
        >
          REACT & JAVASCRIPT
        </p>
      </div>

      <div className='bg-black w-full flex justify-center'>
        <Slider 
          className='h-fit w-5/6 my-10 sm:w-5/6 md:w-8/12 xl:w-5/12 lg:4/12 lg:my-7 md:my-10 sm:my-10'
          {...settings}
        >
          {
            cards.map(card => 
              (
                <div
                  className='bg-white text-blue-500 flex flex-col items-center gap-2.5 rounded-xl' 
                  key={card.id}
                >
                  <div className="flex justify-center">
                    <Lottie
                      loop
                      animationData={card.svg}
                      play
                      style={{ width: 250, height: 250 }}
                    />
                  </div>

                  <div className='bg-blue-600 p-1 rounded-b-xl text-white w-full text-center sm:h-[145px] lg:h-[175px]'>
                    <h1 className='my-1.5 font-medium cursor-pointer lg:text-2xl transition-all hover:underline hover:underline-offset-2 sm:text-lg md:text-xl'> {card.url} </h1>

                    <div className='p-1 h-full'>
                      <h1 className='my-0.5 sm:text-lg lg:text-2xl md:text-xl'> {card.description} </h1>
                    </div>
                  </div>
                  
                </div>  
              )
            )
          }
        </Slider>
      </div>

      <div className='w-full text-center bg-black text-white border-b-4 border-t-4 border-blue-400 p-2 shadow-md shadow-gray-300 lg:p-3'>
        <h1 className="text-3xl font-semibold lg:text-4xl">¿Interesado/a? Contacte conmigo</h1>
      </div>

      <div className='grid grid-cols-3 gap-12 py-2.5 lg:my-12 sm:my-16'>
          <button className='border-4 rounded-xl border-black p-5 transition-all hover:text-[#0072b1]'>
            <a href="https://www.linkedin.com/in/marcos-moreno-webdev/" target="_blank">
              <FaLinkedin className="text-7xl lg:text-8xl" />
            </a>
          </button>

          <button className='border-4 rounded-xl border-black p-5 text-xl transition-all hover:text-[#28CB60]'>
              <a href="https://wa.link/13uanv" target="_blank">
                <FaWhatsapp className="text-7xl lg:text-8xl" />
              </a>
          </button>

          <button className='border-4 rounded-xl border-black p-5 text-xl transition-all hover:text-slate-900'>
              <a href="https://github.com/marcosmorenodev" target="_blank">
                <FaGithub className="text-7xl lg:text-8xl" />
              </a>
          </button>
      </div>
    </main>
  );
}

export default App;
