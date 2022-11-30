import React from 'react'

const Buttons = ({calculate}) => {
  return (
    <div className='text-white bg-gray-800 w-full grid grid-cols-4'>
        <button onClick={(e) => calculate('C', e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> C</button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> (</button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> )</button>
        <button onClick={(e) => calculate('AC', e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> AC</button>

        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 1</button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 2</button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 3</button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> + </button>

        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 4 </button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 5 </button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 6 </button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> - </button>

        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 7</button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 8 </button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 9 </button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'>  *</button>

        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> .</button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 0 </button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> 00 </button>
        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> &divide; </button>

        <button onClick={(e) => calculate('default',e.target.innerText)} className='p-4 border border-gray-300 transition duration-300 hover:bg-gray-500'> % </button>
        <button onClick={(e) => calculate('=', e.target.innerText)} className='p-4 border border-gray-300 bg-amber-700 col-span-3'> = </button>
    </div>
  )
}

export default Buttons
