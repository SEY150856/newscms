<template>
  <ul class="swiepr">
    <swiper class="banner" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in 55" :key="index">
        <li><i class="fa fa-caret-left"></i><a href="/k67/?gjxw/21.html">测试发布的的第九条新闻标题</a></li>
      </swiper-slide>
    </swiper>
  </ul>

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
        slidesPerView: 3.5,
        spaceBetween: 0,
        autoplay: {
          delay: 0,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        speed: 8000,
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

<style scoped>
.swiepr {
  width: 100%;
}


</style>
