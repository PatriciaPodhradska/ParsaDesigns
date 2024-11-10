import { useTranslation } from 'react-i18next';

import { contacts } from '../data';

import { motion } from 'framer-motion';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <section>

      <div className='flex flex-col items-center p-10 min-h-screen'>

        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, y: 10 }} transition={{ duration: 0.7 }} className='p-10 max-lg:p-5 flex flex-col items-center'>
          <h1 className='font-bold text-xl mb-5 active'>{t("contact-title")}</h1>
  
          <p className='leading-6'>{t("contact-intro")}</p>
        </motion.div>

        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, y: 10 }} transition={{ duration: 0.7, delay: 0.4 }} className='p-10 max-lg:p-5 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20'>
          {contacts.map((contact, index) => {
            const { icon, title, href } = contact;
            return (
              <div key={index} className='relative group shadow-md rounded-lg bg-primaryVariant hover:border-accenty hover:shadow-lg duration-500 p-10 flex flex-col items-center'>
                <div className='w-16 h-16 text-5xl group-hover:text-accenty duration-500 flex justify-center'>{icon}</div>
                <h1 className='text-lg p-3'>{t(title)}</h1>
                <a href={href} className='absolute top-0 h-48 w-56'></a>
              </div>
            )
          })}
        </motion.div>

      </div>
      
    </section>
  )
}

export default Contact;