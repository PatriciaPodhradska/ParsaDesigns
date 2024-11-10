import { socials } from '../data'

import useIntro from './useIntro'

import { inView, motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 3.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    }
  }
}

const Footer = () => {

  const aniJustOnce = useIntro();

  return (
    
    <motion.footer initial={{opacity: 0}} animate={{opacity:1}} transition={ inView && aniJustOnce ? {duration: 1, delay: 24} : {duration: 0, delay: 0}} className='bg-secondary'>

      <motion.svg width="1850" height="10" initial="hidden" animate={inView && aniJustOnce ? "visible" : "" } className="max-w-full max-2xl:hidden">
        
        <defs>
          <linearGradient id="gradientpathfooter" gradientUnits='userSpaceOnUse' >
            <stop offset="10%" stopColor="#B77CCC"/>
            <stop offset="90%" stopColor="#FFDF5A"/>
          </linearGradient>
        </defs>

        <motion.line x1="0" y1="0" x2="1850" y2="0" stroke="url('#gradientpathfooter')" strokeWidth="10" variants={draw} custom={48} />
        <motion.line x1="0" y1="0" x2="1850" y2="0" stroke="#333333" strokeWidth="10" variants={draw} custom={55} />

      </motion.svg>


        {/* RAINBOW STRIPE */}
      {/* <motion.svg width="2000" height="42" initial="hidden" animate="visible">
        
        <motion.line className="z-[1]" x1="0" y1="0" x2="2000" y2="0" stroke="#c777ff" strokeWidth="42" variants={draw} custom={2}/>
        <motion.line className="z-[2]" x1="0" y1="0" x2="2000" y2="0" stroke="#7870ff" strokeWidth="36" variants={draw} custom={4}/>
        <motion.line className="z-[3]" x1="0" y1="0" x2="2000" y2="0" stroke="#41aeff" strokeWidth="30" variants={draw} custom={6}/>
        <motion.line className="z-[4]" x1="0" y1="0" x2="2000" y2="0" stroke="#9aff8a" strokeWidth="24" variants={draw} custom={8}/>
        <motion.line className="z-[5]" x1="0" y1="0" x2="2000" y2="0" stroke="#ffe841" strokeWidth="18" variants={draw} custom={10}/>
        <motion.line className="z-[6]" x1="0" y1="0" x2="2000" y2="0" stroke="#ffa041" strokeWidth="12" variants={draw} custom={12}/>
        <motion.line className="z-[7]" x1="0" y1="0" x2="2000" y2="0" stroke="#ff4141" strokeWidth="6" variants={draw} custom={14}/>
        
        <motion.line className="z-[1]" x1="0" y1="10" x2="2000" y2="10" stroke="#333333" strokeWidth="6" variants={draw} custom={26}/>
        <motion.line className="z-[2]" x1="0" y1="0" x2="2000" y2="0" stroke="#333333" strokeWidth="12" variants={draw} custom={28}/>
        <motion.line className="z-[3]" x1="0" y1="0" x2="2000" y2="0" stroke="#333333" strokeWidth="18" variants={draw} custom={30}/>
        <motion.line className="z-[5]" x1="0" y1="0" x2="2000" y2="0" stroke="#333333" strokeWidth="32" variants={draw} custom={32}/>
        <motion.line className="z-[6]" x1="0" y1="0" x2="2000" y2="0" stroke="#333333" strokeWidth="36" variants={draw} custom={34}/>
        <motion.line className="z-[7]" x1="0" y1="0" x2="2000" y2="0" stroke="#333333" strokeWidth="42" variants={draw} custom={36}/>

      </motion.svg> */}
      


      <div className='flex flex-row justify-around items-center'>

          <div className='px-10'>
            <h1 className='font-bold'>&#169; 2024 ParsaDesigns</h1>
          </div>

          <ul className='px-7 flex flex-row'>
            {socials.map((item, index) => {
              return (
                <li className='mx-3 p-2 text-primary hover:text-primaryVariant hover:scale-110 hover:duration-300 cursor-pointer' key={index}>
                  <a href={item.href} target='_blank' aria-label='social media link' className='p-1'>
                    {item.icon}
                  </a>
                </li>
              )
            })}
          </ul>
      </div>
    </motion.footer>
  )
}

export default Footer;