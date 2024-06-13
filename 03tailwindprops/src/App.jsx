import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ravi Kumawat",
    age: 17
  }

  let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-200 text-black mb-4'>Tailwind</h1>
     <Card username ="Ravi Kumawat" btnText = "Click me"/>
     <Card username="Ravi Kumawat" />
   
     {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media.licdn.com/dms/image/D5603AQFulkKQRHSrLQ/profile-displayphoto-shrink_800_800/0/1707306290201?e=1723680000&v=beta&t=r2AbEN7LPk8bxadLz-yQExJH9Wc3x8_CTp_jMWvYRDw" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Ravi Kumawat
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Software Engineer, Jaipur (Raj)
      </div>
    </figcaption>
  </div>
</figure> */}


    </>
  )
}

export default App
