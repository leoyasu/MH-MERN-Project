import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import * as React from 'react';
import 'typeface-open-sans';
import Typography from '@mui/material/Typography';

function MainSwiper1() {
  return (
    <Swiper spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2650,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}  className="sw">
      <SwiperSlide>
        <div className="sw swiper_main_1">
          <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Cardiology</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}>is the medical specialty that focuses on
            the heart and the cardiovascular system. Cardiologists are experts in caring for your vital engine,
            ensuring your heart beats strong and healthy, and helping you maintain an active and healthy lifestyle.
          </Typography>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sw swiper_main_2">
        <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Pediatrics</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}>is dedicated to caring for the youngest patients. 
          Pediatricians are like superheroes of child health, tirelessly working to keep children and teenagers 
          happy and healthy as they grow and explore the world.
          </Typography>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sw swiper_main_3">
        <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Internal Medicine</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}>also known as clinical medicine, forms
           the backbone of healthcare. Internists are the detectives of medicine, solving the mysteries of 
           symptoms and providing accurate diagnoses to treat a wide range of medical conditions.
          </Typography>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}


export default MainSwiper1



// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
// import SwiperCore, { Navigation, Pagination } from 'swiper';

// SwiperCore.use([Navigation, Pagination]);
// import '../styles/swiper.css';

// SwiperCore.use([Navigation, Pagination]);
// const MainSwiper = () => {
//   const modules = [Navigation, Pagination];
//   return (
//     <Swiper
//       spaceBetween={50}
//       effect={"fade"}
//       navigation={true}
//       pagination={{
//         clickable: true
//       }}
//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//         <div className="sw swiper_main_1"></div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="sw swiper_main_2"></div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="sw swiper_main_3"></div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="sw swiper_main_4"></div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default MainSwiper;