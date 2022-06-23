<template>
  <div>
    <swiper class="banner" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in imglist" :key="index">
        <img :src="item.imgurl" alt="">
      </swiper-slide>
    </swiper>
  </div>

</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      imglist: [
        { imgurl: 'http://demo.92wailian.com/k67/static/upload/image/20211109/1636440994267050.jpg' },
        { imgurl: 'http://demo.92wailian.com/k67/static/upload/image/20211109/1636440994267050.jpg' },
        { imgurl: 'http://demo.92wailian.com/k67/static/upload/image/20211109/1636440994267050.jpg' },
        { imgurl: 'http://demo.92wailian.com/k67/static/upload/image/20211109/1636440994267050.jpg' }
      ],
      swiperOption: {
        autoplay: true,
        speed: 300,
        loop: true,
        pagination: {
          el: ".swiper-pagination", //分页器
          clickable: true,
        },
      },
    }
  }

}
</script>
