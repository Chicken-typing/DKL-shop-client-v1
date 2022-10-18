import React from 'react'

function Advertise({DataInfo}) {
  const [id, imgSrc, title, info] = DataInfo
  
  return (
    <div className='bg-white mb-[150px] '>
      <div className='mx-auto my-auto py-10 px-5 max-w-[80%]'>
        <div className="grid grid-cols-1 gap-y-[20px] sm:grid-cols-2 sm:gap-x-[20px] lg:grid-cols-3 xl:gap-x-8">
          {DataInfo.map((advertise) => (
           <div key={advertise.id} className='min-h-[350px] w-full'>
           <img src={advertise.imgSrc} alt="" className='w-full h-full object-cover object-center lg:h-full lg:w-ful'/>
           <h2 className='mt-[20px] text-sm  font-bold font-sans'>{advertise.title}</h2>
           <p className='mt-1 text-xl antialiased font-normal '>{advertise.info}</p>
          </div>
          ))}

        </div>

      </div>
     

    </div>
  )
}

export default Advertise