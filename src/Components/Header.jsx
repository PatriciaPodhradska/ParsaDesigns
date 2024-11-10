import { LANGUAGES } from "../Constants/index";
import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import useIntro from "./useIntro";
import leoClosed from "../Assets/header_icon.svg";

import { inView, motion } from "framer-motion";


const Header = () => {

  const { i18n } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const aniJustOnce = useIntro();

  return (
    <header className="relative">
      
      <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={ inView && aniJustOnce ? {duration: 1, delay: 29} : {duration: 0, delay: 0}} className="absolute top-2 left-2 flex flex-row gap-2 bg-secondary text-primary rounded-lg p-3">
        <img className="max-w-14" src={leoClosed} alt="logo picture" />
        <div className="">
          <h1 className="text-2xl">ParsaDesigns</h1>
          <p className="text-sm opacity-90">by Patricia Podhradska</p>
        </div>
      </motion.div>
      
      <Nav />

      <motion.select initial={{opacity: 0}} animate={{opacity:1}} transition={ inView && aniJustOnce ? {duration: 1, delay: 29} : {duration: 0, delay: 0}} defaultValue={i18n.language} onChange={onChangeLang} className="bg-secondary text-primary p-3 cursor-pointer rounded-lg absolute top-2 right-2">
        {LANGUAGES.map(({ code, label, picture }) => (
        <option key={code} value={code} className="">
            {label} {picture}
        </option>
        ))}
      </motion.select>

    </header>
  );
};

export default Header;
