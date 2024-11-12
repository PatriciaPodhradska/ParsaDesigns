import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import useIntro from './useIntro';
import { inView, motion } from "framer-motion";

import profilePhoto from "../Assets/profilephoto.jpg";

import reactLogo from "../Assets/experience_logos/react_logo.svg"
import dotnetLogo from "../Assets/experience_logos/dotnet_logo.svg"
import jsLogo from "../Assets/experience_logos/js_logo.png"
import tailwindcssLogo from "../Assets/experience_logos/tailwindcss_logo.jpeg"


const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;
const isActivePlus = `${isActive} hover:text-accentp hover:scale-110 hover:duration-300`;

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

const Home = () => {
  
  const { t } = useTranslation();

  const aniJustOnce = useIntro();

  return (
    <section>
      
      <div className="flex flex-col justify-center p-10 min-h-screen relative">

        <div className="flex flex-col items-center gap-2 p-10">
          <motion.h1 initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1 } : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 1, delay: 1.5} : {duration: 0.7, delay: 0}} className="text-base">{t("home-intro")}</motion.h1>
          <motion.h2 initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1 } : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 1, delay: 3.5} : {duration: 0.7, delay: 0}} className="text-xl mb-5">{t("home-intro1")}</motion.h2>
          
          {/* Abilities option 1 */}
          {/* <motion.p initial={ inView && aniJustOnce ? {opacity: 0, y: -30, x: -30} : {opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, y: 0, x: 0} : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 0.3, delay: 7} : {duration: 0.7, delay: 0.4}} className="text-xl text-white font-bold bg-rose-600 rounded-md p-2 w-2/12 max-md:w-3/4">{t("home-intro2")}</motion.p>
          <motion.p initial={ inView && aniJustOnce ? {opacity: 0, y: -30, x: 30} : {opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, y: 0, x: 0} : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 0.3, delay: 7.5} : {duration: 0.7, delay: 0.4}} className="text-xl text-white font-bold bg-purple-600 rounded-md p-2 w-2/12 max-md:w-3/4">{t("home-intro3")}</motion.p>
          <motion.p initial={ inView && aniJustOnce ? {opacity: 0, y: -30, x: -30} : {opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, y: 0, x: 0} : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 0.3, delay: 8} : {duration: 0.7, delay: 0.4}} className="text-xl text-white font-bold bg-amber-400 rounded-md p-2 w-2/12 max-md:w-3/4">{t("home-intro4")}</motion.p> */}
          
          {/* Abilities option 2 */}
          <motion.p initial={ inView && aniJustOnce ? {opacity: 0, y: -50, x: -70} : {opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, y: 0, x: 0} : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 0.3, delay: 7} : {duration: 0.7, delay: 0.4}} className="text-xl text-white font-bold bg-rose-600 rounded-md p-2 w-2/12 max-md:w-3/4 min-w-60">{t("home-intro2")}</motion.p>
          <motion.p initial={ inView && aniJustOnce ? {opacity: 0, y: 60, x: 40} : {opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, y: 0, x: 0} : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 0.3, delay: 7.5} : {duration: 0.7, delay: 0.4}} className="text-xl text-white font-bold bg-purple-600 rounded-md p-2 w-2/12 max-md:w-3/4 min-w-60">{t("home-intro3")}</motion.p>
          <motion.p initial={ inView && aniJustOnce ? {opacity: 0, y: 40, x: -60} : {opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, y: 0, x: 0} : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 0.3, delay: 8} : {duration: 0.7, delay: 0.4}} className="text-xl text-white font-bold bg-amber-400 rounded-md p-2 w-2/12 max-md:w-3/4 min-w-60">{t("home-intro4")}</motion.p>
        </div>
  
        <div className="p-10 flex flex-row max-md:flex-col max-md:items-center max-md:gap-10 justify-center gap-3">
          <motion.p initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1 } : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 1, delay: 14} : {duration: 0.7, delay: 0.7}} className="text-base flex items-center">{t("home-body")}</motion.p>
          <div className="flex flex-row max-md:flex-col max-md:grid max-md:grid-cols-2 gap-4">
            <motion.img initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, x: 10 } : { opacity: 1, x: 5}} transition={ inView && aniJustOnce ? {duration: 1, delay: 14.2} : {duration: 0.7, delay: 0.8}} src={reactLogo} alt="React logo" className="w-14 rounded-xl"/>
            <motion.img initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, x: 20 } : { opacity: 1, x: 10}} transition={ inView && aniJustOnce ? {duration: 1, delay: 14.5} : {duration: 0.7, delay: 0.9}} src={dotnetLogo} alt="Dotnet logo" className="w-14 rounded-xl"/>
            <motion.img initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, x: 30 } : { opacity: 1, x: 15}} transition={ inView && aniJustOnce ? {duration: 1, delay: 14.8} : {duration: 0.7, delay: 1}} src={jsLogo} alt="Javascript logo" className="w-14 rounded-xl"/>
            <motion.img initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, x: 40 } : { opacity: 1, x: 20}} transition={ inView && aniJustOnce ? {duration: 1, delay: 15.1} : {duration: 0.7, delay: 1.1}} src={tailwindcssLogo} alt="Tailwindcss logo" className="w-14 rounded-xl"/>
          </div>
        </div> 
    
        <motion.div initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1 } : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 1, delay: 19} : {duration: 0.7, delay:1.3}} className="p-10 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden flex items-center">
            <img src={profilePhoto} alt="profile photo"/>
          </div>
        </motion.div>

        <div className="p-10">
          <motion.p initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, x: 30 } : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 1, delay: 22 } : {duration: 0.7, delay: 1.5}} className="text-basem mb-1">{t("home-conclusion0")} <NavLink className={isActivePlus} to="/portfolio">{t("portfolio")}</NavLink></motion.p>
          <motion.p initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, x: 90 } : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 1, delay: 22.4 } : {duration: 0.7, delay: 1.5}} className="text-base mb-1">{t("home-conclusion1")} <NavLink className={isActivePlus} to="/contact">{t("contact")}</NavLink></motion.p>
          <motion.p initial={{opacity: 0}} animate={ inView && aniJustOnce ? { opacity: 1, x: 180 } : { opacity: 1, y: 10}} transition={ inView && aniJustOnce ? {duration: 1, delay: 22.8 } : {duration: 0.7, delay: 1.5}} className="text-base mb-1">{t("home-conclusion2")} <NavLink className={isActivePlus} to="/about">{t("about")}</NavLink></motion.p>
        </div>

      </div>

      <motion.svg className="absolute top-80 right-48 max-2xl:hidden" height="900" width="300" initial="hidden" animate={inView && aniJustOnce ? "visible" : "" }>
        
        <defs>
          <linearGradient id="gradientpathhome" gradientTransform="rotate(90)" >
            <stop offset="10%" stopColor="#B77CCC"/>
            <stop offset="90%" stopColor="#FFDF5A"/>
          </linearGradient>
        </defs>

        <motion.path d="M 50 990 Q 110 880 50 710 T 70 550 T 70 450 T 70 250 T 70 0 " stroke="url('#gradientpathhome')" fill="none" strokeWidth="10" strokeLinecap="round" variants={draw} custom={50}/>
        <motion.path d="M 50 990 Q 110 880 50 710 T 70 550 T 70 450 T 70 250 T 70 0 " stroke="#FFF4DF" fill="none" strokeWidth="12" strokeLinecap="round" variants={draw} custom={55} />
        
      </motion.svg>

    </section>
  )

}

export default Home;