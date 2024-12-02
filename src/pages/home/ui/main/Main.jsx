import React from 'react'
import Button from '../../../../shared/ui/Button'

const Lead = () => {
  return (
    <div className='relative mb-10 max-h-[460px]
                                  768:mb-20 768:max-h-[840px]'>
      <div className="bg-full-w"></div>
        <div className='relative pt-14 pb-36
                        768:pl-10 768:pr-24 768:pt-40 768:pb-64
                        960:pr-32 960:pb-80
                        1440:pr-600px
                        1920:pr-[650px] 1920:pl-0 1920:pb-72
                        2560:pr-[1200px]'>
            <div className='text-4xl mb-3
                            768:text-6xl 768:mb-5
                            '>Скупка радиодеталей и радиолома</div>
            <p className='text-lg font-gilroyLight mb-5 
                            768:text-3xl 768:mb-10
                            '>Принимаем любые радиодетали
            и приборы, содержащие драгоценные металлы <span className='font-gilroyMedium'>в Челябинске</span></p>
            <Button styles={``} href="/#getintouch" text='Обратный звонок'/>
        </div>
    </div>
  )
}

export default Lead