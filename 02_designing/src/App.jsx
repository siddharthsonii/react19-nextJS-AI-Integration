import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Designing my first component</h1>
      <div className="rounded-lg border-2 border-indigo-600 max-w-70 m-4 bg-white">
        <img
          src="https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A"
          alt="img-food"
          className=""
        />
        <div className="p-2">
          <p className="text-black overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos
            eveniet exercitationem id necessitatibus facilis minima dicta amet
            deserunt sint illo veritatis vero, incidunt, eum quas qui velit
            deleniti mollitia.
          </p>
          <button className="border-2 px-2 my-3 bg-sky-500 hover:bg-sky-700 text-l">
            Buy Me
          </button>
        </div>
      </div>
    </>
  );
}

export default App
