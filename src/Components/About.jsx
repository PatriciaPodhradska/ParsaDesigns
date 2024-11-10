import { useTranslation } from 'react-i18next';

import overmijPhoto from '../Assets/overmij.jpg';

import { motion } from 'framer-motion';

const About = () => {
  
  const { t } = useTranslation();

  return (
    <section>

      <div className='flex flex-row max-lg:flex-col justify-center p-10 min-h-screen'>
        
        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, y: 10 }} transition={{ duration: 0.7 }} className='p-10 max-lg:p-5 m-10 flex-1 whitespace-pre-line'>
          <h1 className='font-bold text-xl mb-5 active'>{t("overmij-title")}</h1>
  
          <p className='leading-7'>{t("overmij-body")}</p>
        </motion.div>

        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, y: 10 }} transition={{ duration: 0.7, delay: 0.4 }} className='p-10 max-lg:p-5 m-10 flex flex-col flex-1 justify-start'>
          <img src={overmijPhoto} alt="about me picture" className='w-4/5' />
          <p>{t("overmij-foto")}: Patricia</p>
        </motion.div>

      </div>

    </section>
  )
}

export default About;