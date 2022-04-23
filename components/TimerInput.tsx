import React from 'react'


interface inputProps {
    value:number,
    handleClick() : void,
    handleChange(e:any) : void,
}

export const TimerInput = ({value , handleClick ,handleChange}: inputProps) => {
  return (
    <div className="z-6 mx-auto space-y-4 flex flex-col md:flex-row justify-center items-center md:space-y-0">
        <input 
        className="text-xl md:text-2xl font-redhat outline-none px-2 py-1 w-40 rounded-lg mr-4 "
        name="Timer Input"
        type="number" 
        placeholder="Enter No. of Days" 
        value={value}
        onChange={handleChange}
        min={0}
        />

      <button onClick={handleClick} className="bg-rose-300 text-xl font-semibold font-redhat px-4 py-2 md:text-xl rounded-xl text-rose-500 hover:bg-rose-500 hover:text-rose-100 transition duration-300 ease-in"> Set Value</button>
    </div>
  )
}
