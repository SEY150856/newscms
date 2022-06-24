<!--  -->
<template>
  <div class="wrap">
    <div id="content">
      <div id="contentleft">
        <div class="itbox pagenow"> <i class="fa fa-hand-o-right"></i><a href="/k67/">首页</a> &gt;&gt; <a
            href="/k67/?gjxw/">国际新闻</a>
          <div class="csort">
            <p> </p>
          </div>
        </div>
        <ul class="loglist">

          <li class="con" v-for="(item, key) in newsnav" :key="key">
            <div class="des"> <a  class="h2" :title="item.title"><b>{{ item.title }}</b></a> <a
                :title="item.title" class="pic"> <img :src="item.thumb" :data-original="item.thumb" :title="item.title"
                  style="display: inline;"> </a>
              <p class="text">
                {{item.description}}
              </p>
            </div>
          </li>
        </ul>
        <div class="pages">
          <div class="pagination">

            <a class="page-item" href="/k67/?gjxw/">首页</a>
            <a class="page-item" href="javascript:;">上一页</a>
            <a href="/k67/?gjxw/" class="page-num page-num-current">1</a>
            <a class="page-item" href="javascript:;">下一页</a>
            <a class="page-item" href="/k67/?gjxw/">末页</a>

          </div>
        </div>
      </div>
      <!-- end #contentleft-->

      <ul id="sidebar">
        <li class="rlist1">
          <h3><span>搜索</span></h3>
          <div id="logsearch">
            <form name="keyform" method="get" action="/k67/?search/">
              <input type="hidden" name="field" value="title">
              <input name="keyword" class="search" type="text">
              <i class="fa fa-search" onclick="$('form').submit()"></i>
            </form>
          </div>
        </li>
        <li id="blogsort">
          <h3 class="mcolor"><i class="fa fa-folder-open-o"></i><span>分类导航</span></h3>
          <ul>

            <li> <a href="/k67/?gjxw/">国际新闻<i>(11)</i></a> </li>

            <li> <a href="/k67/?gnxw/">国内新闻<i>(5)</i></a> </li>

            <li> <a href="/k67/?jsxw/">军事新闻<i>(6)</i></a> </li>

            <li> <a href="/k67/?shxw/">社会新闻<i>(8)</i></a> </li>

            <li> <a href="/k67/?ylxw/">娱乐新闻<i>(13)</i></a> </li>

            <li> <a href="/k67/?cjxw/">财经新闻<i>(2)</i></a> </li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>最新文章</span></h3>
          <ul id="newlog">

            <li><a href="/k67/?gjxw/21.html" title="测试发布的的第九条新闻标题">测试发布的的第九条新闻标题</a></li>

            <li><a href="/k67/?gjxw/4.html" title="测试发布的的第一条新闻标题">测试发布的的第一条新闻标题</a></li>

            <li><a href="/k67/?gjxw/46.html" title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></li>

            <li><a href="/k67/?gjxw/45.html" title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></li>

            <li><a href="/k67/?gjxw/44.html" title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>热门文章</span></h3>
          <ul id="hotlog">

            <li><i class="mcolor">1</i><a href="/k67/?gjxw/21.html">测试发布的的第九条新闻标题</a></li>

            <li><i class="mcolor">2</i><a href="/k67/?gjxw/4.html">测试发布的的第一条新闻标题</a></li>

            <li><i class="mcolor">3</i><a href="/k67/?gjxw/46.html">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></li>

            <li><i>4</i><a href="/k67/?gjxw/22.html">测试发布的的第十条新闻标题</a></li>

            <li><i>5</i><a href="/k67/?gjxw/45.html">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>随机文章</span></h3>
          <ul id="randlog">

            <li><a href="/k67/?gjxw/18.html" title="测试发布的的第六条新闻标题">测试发布的的第六条新闻标题</a></li>

            <li><a href="/k67/?gjxw/5.html" title="测试发布的的第二条新闻标题">测试发布的的第二条新闻标题</a></li>

            <li><a href="/k67/?gjxw/4.html" title="测试发布的的第一条新闻标题">测试发布的的第一条新闻标题</a></li>

            <li><a href="/k67/?gjxw/19.html" title="测试发布的的第七条新闻标题">测试发布的的第七条新闻标题</a></li>

            <li><a href="/k67/?gjxw/21.html" title="测试发布的的第九条新闻标题">测试发布的的第九条新闻标题</a></li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>友情链接</span></h3>
          <ul class="link">
            <a href="https://www.qq.com" title="腾讯">腾讯</a> <a href="https://www.baidu.com/" title="百度">百度</a> <a
              href="https://www.163.com" title="网页">网页</a>
          </ul>
        </li>
      </ul>

      <!--end #siderbar-->
    </div>
    <!--end #content-->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { newslistcms } from '../../api/userMG'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      id: '',
      newsnav: ''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to, from) {
      this.id = to.params.id;
      return this.newsUpdate();
    }
  },
  //方法集合
  methods: {
    newsUpdate() {
      let url = 's=news&c=search&catid=' + this.id
      newslistcms(url).then((res) => {
        console.log(res)
        this.newsnav = res.data.list
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.id = this.$route.params.id
    this.newsUpdate()
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
