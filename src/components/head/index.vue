<!--  -->
<template>
  <div class='head_title'>
    <div id="topnav">
      <div class="wrap">
        <div class="tnlt">欢迎进入访问本站！</div>
      </div>
    </div>
    <div id="mainav">
      <div class="navbox">
        <div class="wrap">
          <div class="mlogo"> <a class="lvxv--logowz"> <img src="../../assets/1636440424885425.png"> </a> </div>
          <div class="topmenu">
            <ul class="bar">
              <li class="item common">
                <router-link to="/">网站首页</router-link><i class="dot"></i>
              </li>
              <li v-for="(item, key) in headTitle" :key="key" class="item common"> <a
                  @click="goTOpath(item)">{{ item.name }}</a> <i class="dot"></i> </li>
            </ul>
          </div>
          <i class="fa fa-navicon"></i>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { newslistcms } from '../../api/userMG'

export default {
  name: 'headTitle',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      headTitle: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goTOpath(item) {
      this.$router.push({ name: 'newslist', params: { id: item.childids } })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    var url = 's=httpapi&m=category&mid=share&pid=1'
    newslistcms(url).then((res) => {
      this.headTitle = res.data
      console.log(this.headTitle)
    })
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
