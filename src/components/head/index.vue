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
              <li class="item common"><a>网站首页</a><i class="dot"></i> </li>

              <li class="item common"> <a href="/k67/?gjxw/">国际新闻</a> <i class="dot"></i> </li>

              <li class="item common"> <a href="/k67/?gnxw/">国内新闻</a> <i class="dot"></i> </li>

              <li class="item common"> <a href="/k67/?jsxw/">军事新闻</a> <i class="dot"></i> </li>

              <li class="item common"> <a href="/k67/?shxw/">社会新闻</a> <i class="dot"></i> </li>

              <li class="item common"> <a href="/k67/?ylxw/">娱乐新闻</a> <i class="dot"></i> </li>

              <li class="item common"> <a href="/k67/?cjxw/">财经新闻</a> <i class="dot"></i> </li>


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

export default {
  name:'headTitle',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

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
