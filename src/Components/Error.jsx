import { useTranslation } from 'react-i18next';

import errorIcon from '../Assets/404error.png'

import { Link } from 'react-router-dom';

const Error = () => {

  const { t } = useTranslation();

  return (
    
    <section className=''>

      <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>

        <div>        
          <img src={errorIcon} alt="error image" className='' />
        </div>

        <div className='flex flex-col gap-3 items-center whitespace-pre-line'>
          <h1 className='text-3xl text-secondary'>Oops!</h1>
          <p className='text-xl font-bold'>{t('404error')}</p>
          <hr className='border-1 border-secondary w-1/2'/>
          <p className='font-bold w-3/4 text-center'>{t('404error1')}.</p>
          <p className='mt-5 bg-primaryVariant p-3 rounded-lg text-secondary'><Link to='/'>{t('404error2')}</Link></p>
        </div>
        
      </div>
      
    </section>
  )
}

export default Error