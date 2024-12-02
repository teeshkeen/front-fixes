import React from 'react'

const NomenclatureCard = ({ title, desc, countType, typeCostFirst, typeCostSecond, costFirst, costSecond, image}) => {
  return (
    <div className="">
    <div className='mb-5 768:flex 768:flex-row 768:gap-5 768:items-start 1440:hidden
     '>
      <img className='rounded-lg mb-5 w-80 h-52 
      768:w-[344px] 768:h-[231px]
      960:w-[450px] 960:h-[300px] 1280:w-[260px] 1280:h-[175px]' src={image} alt="" />
      <div className="space-y-1 1920:flex ">
        <div className="mb-2">
          <div className="font-gilroyMedium text-lg mb-2
                          768:text-xl 1920:hidden">Наименование</div>
          <div className="font-gilroyLight text-base
                          768:text-lg">{title}</div>
           <div className="font-gilroyLight text-base
                          768:text-base">{desc}</div>               
        </div>
        <div className="flex flex-row space-x-2 items-center mb-2">
          <div className="font-gilroyMedium text-lg 768:text-xl 1440:hidden">Ед. Изм.</div>
          <div className="font-gilroyLight text-base 768:text-lg">{countType}</div>
        </div>
        <div className="flex flex-row space-x-2 items-center mb-2">
          <div className="font-gilroyMedium text-lg 768:text-xl 1440:hidden">{typeCostFirst}</div>
          <div className="font-gilroyLight text-base 768:text-lg">{costFirst} руб.</div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div className="font-gilroyMedium text-lg 768:text-xl 1440:hidden">{typeCostSecond}</div>
          <div className="font-gilroyLight text-base 768:text-lg">{costSecond} руб.</div>
        </div>
      </div>
    </div>


{/*  */}

<div className="hidden self-stretch justify-start items-start gap-[60px] 1440:inline-flex">
      <img className="w-[260px] h-[174px] rounded-[10px]" src={image} alt='pic of product'/>
      <div className="h-[78px] justify-start items-start gap-5 flex">
        <div className="w-[380px] flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="self-stretch text-[#212121] text-lg font-gilroyLight">{title}</div>
          <div className="self-stretch text-[#212121] text-lg font-gilroyLight">{desc}</div>
        </div>
        <div className="w-[220px] text-[#212121] text-lg font-gilroyLight">{countType}</div>
        <div className="w-[220px] text-[#212121] text-lg font-gilroyLight">{costFirst} руб.</div>
        <div className="w-[220px] text-[#212121] text-lg font-gilroyLight">{costSecond} руб.</div>
      </div>
    </div>

{/*  */}
    </div>
  )
}

export default NomenclatureCard