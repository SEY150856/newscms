<!--  -->
<template>
  <div class="cmslist">
    <div class="xyti">
      <h3><i class="fa fa-list-ul"></i><a href="/k67/?gjxw/" class="mcolor">{{ newstitle }}</a></h3>
    </div>
    <ul>

      <li :class="[index == 0 ? 'first' : '']" v-for="(item, index) in newslist.slice(0, 6)" :key="index">
        <a v-if="index == 0" href="/k67/?gjxw/21.html" :title="item.title" class="pic">
          <img :src="item.imgUrl" :alt="item.title" style="display: inline;">
        </a>
        <a v-if="index == 0" href="/k67/?gjxw/21.html" :title="item.title" class="text">{{ item.title }}
        </a>
        <div v-if="index == 0" class="des"> {{ item.more }}...</div>
        <i v-if="index != 0" class="fa fa-caret-right"></i>
        <a v-if="index != 0" href="/k67/?gnxw/50.html" :title="item.title">
          {{ item.title }}
        </a>
      </li>

    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// https://news.cctv.com/2019/07/gaiban/cmsdatainterface/page/china_1.jsonp?cb=china
import { newslist1, newslist2, newslist3 } from '../../api/userMG'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      newslist: [],
      url: ''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  props: {
    api: '',
    newstitle: {
      type: String,
      default: '头部标题'
    }
  },
  //方法集合
  methods: {
    getApicase(num) {
      if (num == 1) {
        newslist1().then((res) => {
          for (let i = 0; i < res.data.list.length; i++) {
            let obj = {
              ids: res.data.list[i]['article_id'],
              title: res.data.list[i]['title'],
              imgUrl: res.data.list[i]['thumb_nail'],
              more: res.data.list[i]['sub_category_cn']
            }
            this.newslist.push(obj)
          }
        })
      } else if (num == 2) {
        newslist2().then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            let obj = {
              ids: res.data[i]['article_id'],
              title: res.data[i]['title'],
              imgUrl: res.data[i]['img_url'],
              more: res.data[i]['description']
            }
            this.newslist.push(obj)
          }
        })
      } else if (num == 3) {
        newslist3().then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i]['article_id'].length > 8) {
              let obj = {
                ids: res.data[i]['article_id'],
                title: res.data[i]['title'],
                imgUrl: res.data[i]['img_url'],
                more: res.data[i]['description']
              }
              this.newslist.push(obj)
            }

          }
        })
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getApicase(this.api)
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped>
</style>
