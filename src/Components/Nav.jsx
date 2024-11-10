import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../Constants/index";
import { inView, motion } from 'framer-motion';
import { useState } from "react";
import { useEffect } from "react";
// import { navlinks } from "../data";
import headerIcon from "../Assets/header_icon.svg";
import headerIconPurple from "../Assets/header_icon_purple.svg";
// import headerIconDark from "../Assets/header_icon_dark.svg";
import useIntro from "./useIntro";



const isActive = ({ isActive, isPending, isTransitioning }) => `${isActive ? "active" : "", isPending ? "pending" : "", isTransitioning ? "transitioning" : ""}`;
const isActivePlus = `${isActive} hover:text-primary hover:scale-110 hover:duration-300 px-5 p-2 select-none relative group duration-700 z-50`;

const activeRectangle = `absolute top-10 left-0 w-32 h-2 bg-secondary group-focus:left-28 duration-1000`;

const variants = {
  open: { 
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
  closed: { opacity: 0 },
}

const shapeVariants = {
  open: { 
    y: 0,
    scale: 200,
    transition: {
      duration: 1,
      type: 'spring',
    }, 

  },

  closed: { 
    scale: 200,
    y: -500
  },
}

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


const Nav = () => {

  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const [isOpen, setIsOpen] = useState(false);

  const aniJustOnce = useIntro();

  useEffect(() => {

    if (inView && aniJustOnce) {
      setTimeout(() => {setIsOpen(true)}, 28000);
    }
    else {
      // 
    }
  }, [])

  return (
    <nav id="navbar" className="p-6 py-32 flex flex-row justify-center overflow-hidden relative">
        
        {/* Closed navbar */}
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={ inView && aniJustOnce ? {duration: 1, delay: 29} : {duration: 0, delay: 0}} className="cursor-pointer z-50" onClick={()=> {setIsOpen(!isOpen)}} whileTap={{scale: 0.80, transition: { duration: 0.2 }}} whileHover={{scale: 1.2, transition: { duration: 0.2 }}}>
          <motion.img src={headerIcon} className="w-20 h-20 min-w-10 bg-primaryVariant rounded-lg p-3 shadow-sm" alt="" draggable="false" />
        </motion.div>
        {(() => {
          if (!isOpen) {
            return (
              <motion.svg className="absolute top-[5.5rem]" width="160" height="160" fill="none" initial="hidden" animate={ inView && aniJustOnce ? "" : "visible" }>

                <defs>
                  <linearGradient id="gradientpath" >
                    <stop offset="10%" stopColor="#B77CCC"/>
                    <stop offset="90%" stopColor="#FFDF5A"/>
                  </linearGradient>
                </defs>

                <motion.rect width="90" height="90" x="30" y="35" rx="10" stroke="url('#gradientpath')" strokeWidth="5" fill="none" variants={draw} custom={-1} />
                <motion.rect width="90" height="90" x="30" y="35" rx="10" stroke="#FFF4DF" strokeWidth="25" fill="none" variants={draw} custom={1} />
    
              </motion.svg>
            )
          } else {
            // 
          }
        })()}


        {/* Open navbar */}
        <motion.div variants={shapeVariants} initial="closed" animate={ isOpen ? "open" : "closed" } className='bg-secondary w-[11px] h-[2px] max-sm:w-[4px] rounded-b-[50%] z-50'></motion.div>

        <motion.div variants={variants} initial="closed" animate={ isOpen ? "open" : "closed" } className={`${isOpen ? "": "-mt-[100rem]"} absolute flex flex-row justify-between w-full z-50`}>

          <div className="absolute -top-28 left-2 flex flex-row gap-2 bg-primary p-3 rounded-lg text-secondary max-sm:order-1">

            <img className="max-w-14" src={headerIcon} alt="logo picture" />
            <div className="">
              <h1 className="text-2xl ">ParsaDesigns</h1>
              <p className="text-sm font-bold">by Patricia Podhradska</p>
            </div>

          </div>

          <div className="flex max-sm:flex-col max-sm:absolute max-sm:-top-28 max-sm:-right-32 max-sm:gap-1 justify-evenly items-center w-full px-3 mx-10 max-sm:mx-0 text-lg">

            <NavLink className={`${isActivePlus} order-1`} to="/" draggable="false">
            {t("home")} <div className={activeRectangle}></div>
            </NavLink>
            <NavLink className={`${isActivePlus} order-2 text-accentp`} to="/portfolio" draggable="false">
            {t("portfolio")} <div className={activeRectangle}></div>
            </NavLink>

            <motion.div className="z-50 cursor-pointer order-3 max-sm:order-first" onClick={()=> {setIsOpen(!isOpen)}} whileTap={{scale: 0.80}} whileHover={{scale: 1.2}}>
              <motion.img src={headerIconPurple} className="w-20 h-20 min-w-10 bg-accenty rounded-lg p-3" alt="" draggable="false" />
            </motion.div>

            {(() => {
              if (isOpen) {
                return (

                  <motion.svg className="absolute -top-9 max-w-full max-2xl:hidden" width="1500" height="160" fill="none" initial="hidden" animate="visible">
                    
                    <defs>
                      <linearGradient id="gradientpathnav" gradientUnits="userSpaceOnUse" >
                        <stop offset="10%" stopColor="#B77CCC"/>
                        <stop offset="90%" stopColor="#FFDF5A"/>
                      </linearGradient>
                    </defs>
                    
                    <motion.rect className="" width="90" height="90" x="700" y="31" rx="10" stroke="url('#gradientpathnav')" strokeWidth="5" fill="none" variants={draw} custom={0} />
                    <motion.rect className="" width="90" height="90" x="700" y="31" rx="10" stroke="#333333" strokeWidth="12" fill="none" variants={draw} custom={2} />

                    <motion.line x1="170" y1="105" x2="90" y2="105" stroke="url('#gradientpathnav')" strokeWidth="2" fill="none" strokeLinecap="round" variants={draw} custom={0} />
                    <motion.line x1="170" y1="105" x2="90" y2="105" stroke="#333333" strokeWidth="3" fill="none" strokeLinecap="round" variants={draw} custom={2} />
                    
                    <motion.line x1="490" y1="105" x2="390" y2="105" stroke="url('#gradientpathnav')" strokeWidth="2" fill="none" strokeLinecap="round" variants={draw} custom={0} />
                    <motion.line x1="490" y1="105" x2="390" y2="105" stroke="#333333" strokeWidth="3" fill="none" strokeLinecap="round" variants={draw} custom={2} />
                    
                    <motion.line x1="1090" y1="105" x2="990" y2="105" stroke="url('#gradientpathnav')" strokeWidth="2" fill="none" strokeLinecap="round" variants={draw} custom={0} />
                    <motion.line x1="1090" y1="105" x2="990" y2="105" stroke="#333333" strokeWidth="3" fill="none" strokeLinecap="round" variants={draw} custom={2} />
                    
                    <motion.line x1="1410" y1="105" x2="1310" y2="105" stroke="url('#gradientpathnav')" strokeWidth="2" fill="none" strokeLinecap="round" variants={draw} custom={0} />
                    <motion.line x1="1410" y1="105" x2="1310" y2="105" stroke="#333333" strokeWidth="3" fill="none" strokeLinecap="round" variants={draw} custom={2} />
                  </motion.svg>
                )
              } else {
                // 
              }
            })()}

            <NavLink className={`${isActivePlus} order-4`} to="/contact" draggable="false">
            {t("contact")} <div className={activeRectangle}></div>
            </NavLink> 
            <NavLink className={`${isActivePlus} order-5`} to="/about" draggable="false">
            {t("about")} <div className={activeRectangle}></div>
            </NavLink>

          </div>

          <select defaultValue={i18n.language} onChange={onChangeLang} className="mx-10 p-3 cursor-pointer bg-primary text-secondary rounded-lg absolute -top-28 -right-8 max-sm:top-0  max-sm:right-52">
            {LANGUAGES.map(({ code, label, picture }) => (
            <option key={code} value={code} className="">
                {label} {picture}
            </option>
            ))}
          </select>


          {(() => {
            if (isOpen) {
              return (
                <motion.svg className="absolute top-24 max-2xl:hidden" width="1850" height="200" initial="hidden" animate="visible">

                  <defs>
                    <linearGradient id="gradientpath">
                      <stop offset="10%" stopColor="#B77CCC"/>
                      <stop offset="90%" stopColor="#FFDF5A"/>
                    </linearGradient>
                  </defs>

                  <motion.path d="M 1850 15 C 1850 68, 750 190, 0 5" stroke="url('#gradientpath')" fill="transparent" strokeWidth="9" strokeLinecap="round" variants={draw} custom={0}/>
                  <motion.path d="M 1850 15 C 1850 68, 750 190, 0 5" stroke="#FFF4DF" fill="transparent" strokeWidth="11" strokeLinecap="round" variants={draw} custom={4}/>
    
                </motion.svg>
              )
            } else {
              // 
            }
          })()}


        </motion.div>

    </nav>
  )
}

export default Nav