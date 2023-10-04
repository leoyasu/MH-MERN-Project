import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import * as React from 'react';
import 'typeface-open-sans';
import Typography from '@mui/material/Typography';


function MainSwiper2() {
  return (
    <Swiper spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}  className="sw">
      <SwiperSlide>
        <div className="sw swiper_main_1">
          <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Oncology</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}>is the specialty that focuses on
            the diagnosis and treatment of cancer. Oncologists are warriors against cancer, working to eliminate
            this disease and offer hope to those facing it.
          </Typography>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sw swiper_main_2">
          <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Diabetology</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}>it focuses on managing diabetes,
            a chronic condition that affects how your body handles blood sugar. Diabetologists will help you keep your
            glucose under control and live a full life despite diabetes.
          </Typography>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sw swiper_main_3">
          <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Ophthalmology</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}>Ophthalmology is dedicated to caring for your eyes.
            Ophthalmologists are guardians of vision, ensuring eye health and helping you maintain clear and bright vision
            throughout the years.
          </Typography>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}


export default MainSwiper2
