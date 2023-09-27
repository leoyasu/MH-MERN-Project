import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';
import { Navigation } from 'swiper/modules';
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'typeface-open-sans';
import { Link as LinkRouter } from 'react-router-dom';

function MainSwiper() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="sw">
      
      {/* <SwiperSlide>
        <div className="sw swiper_main_2">

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sw swiper_main_3">

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="sw swiper_main_4">

        </div>
      </SwiperSlide> */}
    </Swiper>
  );
}


export default MainSwiper



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