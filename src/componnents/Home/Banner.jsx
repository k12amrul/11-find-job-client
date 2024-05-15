
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '/styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


<SwiperSlide data-aos="fade-up"

>
    <img src="https://media.istockphoto.com/id/819810922/photo/male-executive-working-over-laptop-at-his-desk.jpg?s=612x612&w=0&k=20&c=_Gj917gWZ6CqTjI0nAByLEzdS4Z3uZP6HihIdykNGjA=" alt="" /> </SwiperSlide>

<SwiperSlide

>
     <img src="https://media.istockphoto.com/id/928080694/photo/businessman-filling-application-for-employment-form-on-laptop.jpg?s=612x612&w=0&k=20&c=OYi4Y7DTQh55Wg673M5WrpK8NSOBtb_2OwL5pInxmfk=" alt="" /></SwiperSlide>
<SwiperSlide
//  data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
><img src="https://media.istockphoto.com/id/819817312/photo/executives-using-laptop-at-their-desk.jpg?s=612x612&w=0&k=20&c=dNFB3OAugIX94vmerUIZgSBdzsyl8Raq8nA8ffZ6jPo=" alt="" /> </SwiperSlide>



</Swiper>
        </div>
    );
};

export default Banner;