<!--  -->
<template>
  <div class="wrap">
    <div id="content">
      <div id="contentleft">
        <div id="banners" class="ui-banner">
          <ul class="ui-banner-slides">
            <swiper />
          </ul>
          <ul class="ui-banner-slogans">
            <li class="ui-banner-current" v-for="(item, index) in newsTop" :key="index">
              <h3 @click="opennewHtml(item.url)">{{ item.title }}</h3>
              <div class="des"> {{ item.detailed }}...</div>
            </li>
          </ul>

        </div>

        <div class="itbox">
          <h3>今日头条</h3>
          <div id="itscroll" class="titkls">
            <div class="con">
              <headlines />
            </div>
          </div>
        </div>
        <div class="cmsbox">
          <newslistcol :api="item.num" :newstitle="item.title" v-for="(item, index) in classification" :key="index" />
        </div>
        <loglist></loglist>
        <div id="pagenavi"></div>
      </div>
      <!-- end #contentleft-->

      <ul id="sidebar">
        <li class="rlist1">
          <h3><span>搜索</span></h3>
          <div id="logsearch">
            <form name="keyform" method="get" action="/k67/?search/">
              <input type="hidden" name="field" value="title">
              <input name="keyword" class="search" type="text">
              <i class="fa fa-search" @click="$('form').submit()"></i>
            </form>
          </div>
        </li>
        <li id="blogsort">
          <h3 class="mcolor"><i class="fa fa-folder-open-o"></i><span>分类导航</span></h3>
          <ul>

            <li> <a >国际新闻<i>(11)</i></a> </li>

            <li> <a >国内新闻<i>(5)</i></a> </li>

            <li> <a >军事新闻<i>(6)</i></a> </li>

            <li> <a >社会新闻<i>(8)</i></a> </li>

            <li> <a>娱乐新闻<i>(13)</i></a> </li>

            <li> <a >财经新闻<i>(2)</i></a> </li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>最新文章</span></h3>
          <ul id="newlog">

            <li><a  title="测试发布的的第十二条新闻标题">测试发布的的第十二条新闻标题</a></li>

            <li><a title="测试发布的的第九条新闻标题">测试发布的的第九条新闻标题</a></li>

            <li><a  title="测试发布的的第三条新闻标题">测试发布的的第三条新闻标题</a></li>

            <li><a  title="测试发布的的第一条新闻标题">测试发布的的第一条新闻标题</a></li>

            <li><a  title="seo基础入门视频教程">seo基础入门视频教程</a></li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>热门文章</span></h3>
          <ul id="hotlog">

            <li><i class="mcolor">1</i><a >测试发布的的第九条新闻标题</a></li>

            <li><i class="mcolor">2</i><a >测试发布的的第一条新闻标题</a></li>

            <li><i class="mcolor">3</i><a>测试发布的的第十二条新闻标题</a></li>

            <li><i>4</i><a>网站SEO优化不单单是做排名，同时也是做品牌积累！</a></li>

            <li><i>5</i><a >测试发布的的第三条新闻标题</a></li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>随机文章</span></h3>
          <ul id="randlog">

            <li><a  title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></li>

            <li><a title="测试发布的的第三条新闻标题">测试发布的的第三条新闻标题</a></li>

            <li><a  title="深度剖析百度网站优化软件工作原理">深度剖析百度网站优化软件工作原理</a></li>

            <li><a href="/k67/?ylxw/68.html" title="seo基础入门视频教程">seo基础入门视频教程</a></li>

            <li><a href="/k67/?gjxw/43.html" title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></li>

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
    </div>
    <!--end #content-->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import swiper from '../../components/swiper/swiper'
import headlines from '../../components/headlines/index'
import newslistcol from '../../components/indexcom/newslistcol'
import loglist from '../../components/loglist/loglist'


export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    swiper,
    headlines,
    newslistcol,
    loglist
  },
  data() {
    //这里存放数据
    return {
      titksssls: '头部标题1',
      newsTop: [{
        title: "测试发布的的第九条新闻标题",
        url: 'cheshi',
        detailed: '麦收时节，成熟的麦地像一片片金色的沙丘伸向天际，又从天际涌过来。甩开的镰刀和熟了的麦子一句句对话，忙···'
      }, {
        title: "测试发布的的第九条新闻标题",
        url: 'cheshi',
        detailed: '麦收时节，成熟的麦地像一片片金色的沙丘伸向天际，又从天际涌过来。甩开的镰刀和熟了的麦子一句句对话，忙···'
      }, {
        title: "测试发布的的第九条新闻标题",
        url: 'cheshi',
        detailed: '麦收时节，成熟的麦地像一片片金色的沙丘伸向天际，又从天际涌过来。甩开的镰刀和熟了的麦子一句句对话，忙···'
      }, {
        title: "测试发布的的第九条新闻标题",
        url: 'cheshi',
        detailed: '麦收时节，成熟的麦地像一片片金色的沙丘伸向天际，又从天际涌过来。甩开的镰刀和熟了的麦子一句句对话，忙···'
      }],
      classification: [
        {
          title: '热点精选',
          num: '1'
        }, {
          title: '今日要闻',
          num: '2'
        }, {
          title: '今日话题',
          num: '3'
        }],
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
