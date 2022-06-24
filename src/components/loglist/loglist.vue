<!--  -->
<template>
  <ul class="loglist">
    <li class="con" v-for="(list, key) in newsIndexList" :key="key">
      <div class="info"> <span class="sn"> <a href="/k67/?shxw/" class="mcolor">{{ list.catname }}</a> </span> </div>
      <div class="des"> <a href="/k67/?shxw/24.html" class="h2">{{ list.title }}</a> <a href="/k67/?shxw/24.html"
          class="pic"> <img :src="list.thumb" :data-original="list.thumb" :title="list.title" style="display: inline;">
        </a>
        <p class="text">
          {{ list.description }}
        </p>
        <p class="tags">发布于：{{ list.updatetime }}</p>
      </div>
      <a href="/k67/?shxw/24.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
    </li>
  </ul>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { newslistcms } from '../../api/userMG'

export default {
  name: 'loglist',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      newsIndexList: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  props: {

  },
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let indexurl = 's=news&c=search&api_call_function=module_list'
    newslistcms(indexurl).then((res) => {
      this.newsIndexList = res.data
      console.log(this.newsIndexList)
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
