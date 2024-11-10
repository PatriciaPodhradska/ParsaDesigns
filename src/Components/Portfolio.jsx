import { useTranslation } from 'react-i18next';

import { projects } from '../data';

// import { swiper_images } from '../data';

import { motion } from "framer-motion";

import { register } from 'swiper/element/bundle';

const Portfolio = () => {

  register();

  const { t } = useTranslation();

  return (
    <section>
      <div className='flex flex-col items-center p-10 min-h-screen'>

        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, y: 10 }} transition={{ duration: 0.7 }} className='p-10 max-lg:p-5 mb-10 flex flex-col items-center'>
          <h1 className='font-bold text-xl mb-5 active'>{t("portfolio-title")}</h1>
          <p className='leading-6 px-24 max-sm:px-5 w-3/4'>{t("portfolio-intro")}</p>
        </motion.div>

        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, y: 10 }} transition={{ duration: 0.7, delay: 0.4 }}  className='w-full grid grid-cols-3 gap-40 max-lg:grid-cols-1 max-xl:grid-cols-2 max-lg:gap-20'>

          {projects.map((project, index) => {
              const { images, images1, images2, images3, images4, images5, images6, images7, images8, title, body } = project;
              return (

                <motion.div layout key={index} transition={{duration: 1}} className="p-6 rounded-lg bg-primaryVariant shadow-md duration-300 hover:shadow-lg whitespace-pre-line">
                  
                    <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true" pagination="true" navigation="true" className="">
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images} className='' alt="portfolio picture" loading='lazy' />
                    
                      </swiper-slide>
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images1} className='' alt="portfolio picture" loading='lazy' />
                      
                      </swiper-slide>
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images2} className='' alt="portfolio picture" loading='lazy' />
                      
                      </swiper-slide>
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images3} className='' alt="portfolio picture" loading='lazy' />
                      
                      </swiper-slide>
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images4} className='' alt="portfolio picture" loading='lazy' />
                      
                      </swiper-slide>
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images5} className='' alt="portfolio picture" loading='lazy' />
                      
                      </swiper-slide>
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images6} className='' alt="portfolio picture" loading='lazy' />
                      
                      </swiper-slide>
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images7} className='' alt="portfolio picture" loading='lazy' />
                      
                      </swiper-slide>
  
                      <swiper-slide className="w-full h-full" lazy="true">
  
                        <img src={images8} className='' alt="portfolio picture" loading='lazy' />
                      
                      </swiper-slide>
  
                    </swiper-container>

                  <h1 className='py-4 text-lg text-secondary'>{t(title)}</h1>
                  <hr className='my-3 border-secondary'/>
                  <p className="font-light">{t(body)}</p>

                  {/* Optioneel: lees meer */}
                  {/* <p className="">{t("pf-rm")}</p> */}
                </motion.div>
                
              )
          })}

        </motion.div>

      </div>
    </section>
  )
}

export default Portfolio;