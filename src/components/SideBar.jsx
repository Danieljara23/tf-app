import React from 'react'

const SideBar = () => {
  return (

    <div className=' bg-gray-200  shadow border '> 
    {/* Probando el costado y sus colores y tamaños */}
    <button className=' '>Autorizar Transacciones</button>
      <h1>Ultimos Movimientos</h1>
    </div>
  )
  
}

export default SideBar


// import React from 'react'
//visible hover:hidden


// const SideBar = () => {

//   const [Toggle, setToggle] = useState(false)

//     return (
//         <>
//           <header className='bg-blue-500 sm:flex sm:justify-center'>
//                 <div className='flex items-center px-4 py-3 justify-between sm:pt-2'>
//                     <div className=''>
//                         <img className='h-6' src={LOGO} alt='LOGO'/>
//                     </div>
//                     <div className=' text-green-400 sm:hidden cursor-pointer' onClick={()=> setToggle(!Toggle)}>
//                         <GoThreeBars size='2rem'/>
//                     </div>
//                 </div>
//                 {Toggle ? <div className='px-2 pt-2 font-bold  sm:flex'>
//                     <a href='https://www.google.com' className=' flex justify-center px-3 py-1 text-white hover:text-green-500 '>SkillSet</a>
//                     <a href='https://www.google.com' className=' flex justify-center px-3 py-1 text-white hover:text-green-500 '>Curriculum</a>
//                     <a href='https://www.google.com' className=' flex justify-center px-3 py-1 text-white hover:text-green-500 '>Contact Me</a>
//                 </div> : '' }
//             </header>
//         </>

//     )
// }
// export default SideBar