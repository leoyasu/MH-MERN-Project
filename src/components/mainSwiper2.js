import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';
import { Navigation } from 'swiper/modules';
import * as React from 'react';
import 'typeface-open-sans';

function MainSwiper2() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="sw">
      <SwiperSlide>
        <div className="sw swiper_main_2">
          <h1>oncologia</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sw swiper_main_3">
        <h1>diabetologia</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sw swiper_main_4">
        <h1>oftalmologia</h1>
        </div>
      </SwiperSlide> 
    </Swiper>
  );
}


export default MainSwiper2
