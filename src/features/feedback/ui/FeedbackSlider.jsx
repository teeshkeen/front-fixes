import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import FeedbackSlide from './FeedbackSlide';
import feedbackData from '../api/feedbackData';
import Modal from '../../feedback/ui/FeedbackModal'; // Импортируйте ваше модальное окно

import 'swiper/css';
import 'swiper/css/pagination';

const FeedbackSlider = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (feedback) => {
    setSelectedFeedback(feedback);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFeedback(null);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false,
          }
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Pagination]}
        className='mb-16'
      >
        <div className="feedback-slider flex justify-center items-center">
          {feedbackData.map((feedback, id) => (
            <SwiperSlide key={id}>
              <FeedbackSlide 
                  avatar={feedback.avatar}
                  name={feedback.name}
                  date={feedback.date}
                  text={feedback.text}
                  onOpenModal={() => handleOpenModal(feedback)} // Передаем функцию для открытия модала
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {/* Модальное окно для полного текста отзыва */}
      {isModalOpen && selectedFeedback && (
        <Modal onClose={handleCloseModal}>
          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
            <h2 className="text-lg font-bold">{selectedFeedback.name}</h2>
            <h2 className='text-gray-500'>{selectedFeedback.date}</h2></div>
            <p className="font-gilroyLight text-base leading-5">{selectedFeedback.text}</p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default FeedbackSlider;