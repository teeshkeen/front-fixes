import React from 'react'
import FeedbackSlider from '../../../../features/feedback/ui/FeedbackSlider'
import BlockTitle from '../../../../shared/ui/BlockTitle'

const Feedback = () => {
  return (
    <div id='feedback' className='768:mb-24'>
      <div className='mb-5'>
        <BlockTitle>Отзывы клиентов</BlockTitle>
      </div>
      <div className="">
        <FeedbackSlider />
      </div>
    </div>
  )
}

export default Feedback