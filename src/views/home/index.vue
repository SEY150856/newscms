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
          <newslistcol :api="item.num" :newstitle="item.title" v-for="(item,index) in classification" :key="index"/>
        </div>
        <ul class="loglist">

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?shxw/" class="mcolor">社会新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?shxw/24.html" class="h2">测试发布的的第十二条新闻标题</a> <a href="/k67/?shxw/24.html"
                class="pic"> <img src="/k67/static/upload/image/20201225/1608889194795933.jpg"
                  data-original="/k67/static/upload/image/20201225/1608889194795933.jpg" title="测试发布的的第十二条新闻标题"
                  style="display: inline;"> </a>
              <p class="text">
                荷塘里的莲蓬熟了，我想，何不把它们早早地摘下来，拿到街上去卖，也好换些钱花，免得村子里那些孩子天天祸害。母亲不依，反倒教训了我一顿，她种这些荷可不是为了钱，图的就是让大家吃起来方便。我只好由着母亲的心意。燕林大清早就下到荷塘里采莲蓬，他专挑又嫩又饱的莲蓬剥着吃，等我起床时，他已掐了一大把，头顶着荷叶，正坐在塘埂上剥莲蓬，见我冲他走过来，抓起地上的莲蓬就逃，头顶上的荷叶掉下来也全然不顾。我没有追他，···...
              </p>
              <p class="tags">发布于：2020-12-25</p>
            </div>
            <a href="/k67/?shxw/24.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?gjxw/" class="mcolor">国际新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?gjxw/21.html" class="h2">测试发布的的第九条新闻标题</a> <a href="/k67/?gjxw/21.html"
                class="pic"> <img src="/k67/static/upload/image/20211109/1636440786576531.jpg"
                  data-original="/k67/static/upload/image/20211109/1636440786576531.jpg" title="测试发布的的第九条新闻标题"
                  style="display: inline;"> </a>
              <p class="text">
                麦收时节，成熟的麦地像一片片金色的沙丘伸向天际，又从天际涌过来。甩开的镰刀和熟了的麦子一句句对话，忙碌的农人在金黄色的麦浪里，意味深长地说着成熟。麦子收割了，打场脱粒把农忙推向了高潮。过去的年月里，每个村都有一处打麦场，一二十亩地大小。成车的麦子拉过来，站成一个个高大的麦草垛，像是在期待着一场繁忙的“脱胎”与“换骨”。打麦场又称场院，简称场，场是麦收前就碾好的。一场细雨过后，人们用镢头浅浅地刨一刨···...
              </p>
              <p class="tags">发布于：2020-12-25</p>
            </div>
            <a href="/k67/?gjxw/21.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?jsxw/" class="mcolor">军事新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?jsxw/6.html" class="h2">测试发布的的第三条新闻标题</a> <a href="/k67/?jsxw/6.html"
                class="pic"> <img src="/k67/static/upload/image/20211109/1636440810335134.jpg"
                  data-original="/k67/static/upload/image/20211109/1636440810335134.jpg" title="测试发布的的第三条新闻标题"
                  style="display: inline;"> </a>
              <p class="text">
                人的一生有很多的机会，也有不同的机遇，就像是命中注定似得，而爱情就是一种神奇的感觉，是人们最强烈的感觉，也是一种长久的感情，我们因为爱情，遇到了对的人，和他一起天长地久，开花结果，一生一世，永不分离！因为爱情，
                我愿意心甘情愿地为你付出，我愿意牺牲自已的时间来陪伴你，我愿意宁可自已辛苦一点，也要让你开心，快乐，这就是爱，爱的深了，如果有一天，失去了你，我会难过好几天。人和人之间的相处是互相的，如果···...</p>
              <p class="tags">发布于：2020-12-25</p>
            </div>
            <a href="/k67/?jsxw/6.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?gjxw/" class="mcolor">国际新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?gjxw/4.html" class="h2">测试发布的的第一条新闻标题</a> <a href="/k67/?gjxw/4.html"
                class="pic"> <img src="/k67/static/upload/image/20211109/1636440994267050.jpg"
                  data-original="/k67/static/upload/image/20211109/1636440994267050.jpg" title="测试发布的的第一条新闻标题"
                  style="display: inline;"> </a>
              <p class="text">
                清晨的太阳悄悄的爬上了山岭，那晨晖散布，光环夺目，真是一个明媚的早上，经过一夜雨的洗刷，你能感受到，清新的空气轻轻地在皮肤上滑过，微微还带点凉意，衣杉在清风中拂动，心情爽到了极点，装着昨夜的梦靥，信步走在街头，只让脚步轻轻，免得打破迷茫的意境，向这广漠地天空做心灵的絮语，感觉像这心情般飘了起来。打开的电脑里传出悠扬的乐曲，我并不是刻意要离开网络，它曾经带给我很多的快乐、激动和期盼，很多的时候，当我···...
              </p>
              <p class="tags">发布于：2020-12-25</p>
            </div>
            <a href="/k67/?gjxw/4.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?ylxw/71.html" class="h2">seo基础入门视频教程</a> <a href="/k67/?ylxw/71.html"
                class="pic"> <img src="/k67/static/upload/image/20211109/1636467471685744.jpg"
                  data-original="/k67/static/upload/image/20211109/1636467471685744.jpg" title="seo基础入门视频教程"
                  style="display: inline;"> </a>
              <p class="text">
                本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请注意甄别其质量与权威度。本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请···...
              </p>
              <p class="tags">发布于：2021-11-09</p>
            </div>
            <a href="/k67/?ylxw/71.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?ylxw/70.html" class="h2">seo基础入门视频教程</a> <a href="/k67/?ylxw/70.html"
                class="pic"> <img src="/k67/static/upload/image/20211109/1636467471685744.jpg"
                  data-original="/k67/static/upload/image/20211109/1636467471685744.jpg" title="seo基础入门视频教程"
                  style="display: inline;"> </a>
              <p class="text">
                本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请注意甄别其质量与权威度。本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请···...
              </p>
              <p class="tags">发布于：2021-11-09</p>
            </div>
            <a href="/k67/?ylxw/70.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?ylxw/69.html" class="h2">seo基础入门视频教程</a> <a href="/k67/?ylxw/69.html"
                class="pic"> <img src="/k67/static/upload/image/20211109/1636467471685744.jpg"
                  data-original="/k67/static/upload/image/20211109/1636467471685744.jpg" title="seo基础入门视频教程"
                  style="display: inline;"> </a>
              <p class="text">
                本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请注意甄别其质量与权威度。本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请···...
              </p>
              <p class="tags">发布于：2021-11-09</p>
            </div>
            <a href="/k67/?ylxw/69.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?ylxw/68.html" class="h2">seo基础入门视频教程</a> <a href="/k67/?ylxw/68.html"
                class="pic"> <img src="/k67/static/upload/image/20211109/1636467471685744.jpg"
                  data-original="/k67/static/upload/image/20211109/1636467471685744.jpg" title="seo基础入门视频教程"
                  style="display: inline;"> </a>
              <p class="text">
                本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请注意甄别其质量与权威度。本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请···...
              </p>
              <p class="tags">发布于：2021-11-09</p>
            </div>
            <a href="/k67/?ylxw/68.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?ylxw/67.html" class="h2">seo基础入门视频教程</a> <a href="/k67/?ylxw/67.html"
                class="pic"> <img src="/k67/static/upload/image/20211109/1636467471685744.jpg"
                  data-original="/k67/static/upload/image/20211109/1636467471685744.jpg" title="seo基础入门视频教程"
                  style="display: inline;"> </a>
              <p class="text">
                本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请注意甄别其质量与权威度。本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会逐步进阶。视频教程良莠不齐，本视频来源于网络，请···...
              </p>
              <p class="tags">发布于：2021-11-09</p>
            </div>
            <a href="/k67/?ylxw/67.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

          <li class="con">
            <div class="info"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> </div>
            <div class="des"> <a href="/k67/?ylxw/66.html" class="h2">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a> <a
                href="/k67/?ylxw/66.html" class="pic"> <img src="/k67/static/upload/image/20211109/1636467435658230.jpg"
                  data-original="/k67/static/upload/image/20211109/1636467435658230.jpg"
                  title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！" style="display: inline;"> </a>
              <p class="text">
                我一般不去讲所谓的理论，首先这个理论知识肯定是通过附子老师自己去实战过的，否则这个SEO优化怎么讲也是讲不通，毕竟没有论证。尽管很多时候我们做优化看到的都是表象，起码这个排名不是表象，包括我今年的SEO培训实战课程里面就重点讲解了关于秒排的不稳定因素操作，而这个文章我是带着案例给大家重点分析以下，为什么附子老师做的网站秒排效果好，并且持续性强，有些朋友反倒连秒排都做不起来呢，包括很多人做了秒排，然···...
              </p>
              <p class="tags">发布于：2021-11-09</p>
            </div>
            <a href="/k67/?ylxw/66.html" class="more">详细阅读<i class="fa fa-angle-right"></i></a>
          </li>

        </ul>

        <div id="ajax-more" class="masonry" style="position: relative; height: 1969px;">
          <div class="wapost masonry-brick" style="position: absolute; top: 0px; left: 0px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?shxw/" class="mcolor">社会新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2021-11-09</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?shxw/56.html">利于SEO排名稳定的站点大揭秘！</a></h2>
            <p class="img"> <a href="/k67/?shxw/56.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636467379269778.jpg" title="利于SEO排名稳定的站点大揭秘！"> </a>
            </p>
            <p class="text">有没有思考过这样的一个问题，什么样的网站利于SEO稳定排名。有些人可能会说网站速度快，内容质量高的，也有人可能会说外链多的。但是这种话题实际···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>35</span> <span class="edit"><i
                  class="fa fa-user"></i>管理员</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 0px; left: 327px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?gjxw/" class="mcolor">国际新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2020-12-25</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?gjxw/22.html">测试发布的的第十条新闻标题</a></h2>
            <p class="img"> <a href="/k67/?gjxw/22.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20201225/1608876937141098.jpg" title="测试发布的的第十条新闻标题"> </a>
            </p>
            <p class="text">园子里，几株栀子树挨在一起，打着满满一片翠绿的花骨朵，一个接着一个缱绻在枝叶丛中。远远看去，像一颗颗绿宝石，镶嵌其中。每天清晨，路过花坛，总···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>52</span> <span class="edit"><i
                  class="fa fa-user"></i>admin</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 0px; left: 654px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2021-11-09</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?ylxw/70.html">seo基础入门视频教程</a></h2>
            <p class="img"> <a href="/k67/?ylxw/70.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636467471685744.jpg" title="seo基础入门视频教程"> </a> </p>
            <p class="text">本seo视频教程适用于新手，零基础入门学员。课程内容是做seo所必备的。无论是什么样的高手，都有过这样的阶段，基础打牢，结合经验与总结，才会···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>60</span> <span class="edit"><i
                  class="fa fa-user"></i>管理员</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 472px; left: 327px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?jsxw/" class="mcolor">军事新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2021-11-09</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?jsxw/53.html">深度剖析百度网站优化软件工作原理</a></h2>
            <p class="img"> <a href="/k67/?jsxw/53.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636467344834301.jpg" title="深度剖析百度网站优化软件工作原理"> </a>
            </p>
            <p class="text">近几年号称3-7天上首页的百度网站优化软件层出不穷，很多用户使用之后网站的排名确实上升了。甚至很多公司就是靠一款或者几款软件来开展业务。有的···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>40</span> <span class="edit"><i
                  class="fa fa-user"></i>管理员</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 472px; left: 654px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?jsxw/" class="mcolor">军事新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2021-11-09</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?jsxw/51.html">深度剖析百度网站优化软件工作原理</a></h2>
            <p class="img"> <a href="/k67/?jsxw/51.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636467344834301.jpg" title="深度剖析百度网站优化软件工作原理"> </a>
            </p>
            <p class="text">近几年号称3-7天上首页的百度网站优化软件层出不穷，很多用户使用之后网站的排名确实上升了。甚至很多公司就是靠一款或者几款软件来开展业务。有的···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>33</span> <span class="edit"><i
                  class="fa fa-user"></i>管理员</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 499px; left: 0px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2021-11-09</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a
                href="/k67/?ylxw/64.html">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></h2>
            <p class="img"> <a href="/k67/?ylxw/64.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636467435658230.jpg"
                  title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！"> </a> </p>
            <p class="text">我一般不去讲所谓的理论，首先这个理论知识肯定是通过附子老师自己去实战过的，否则这个SEO优化怎么讲也是讲不通，毕竟没有论证。尽管很多时候我们···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>32</span> <span class="edit"><i
                  class="fa fa-user"></i>管理员</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 971px; left: 327px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2020-12-25</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?ylxw/39.html">测试发布的的第六条新闻标题</a></h2>
            <p class="img"> <a href="/k67/?ylxw/39.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20201225/1608876769709821.jpg" title="测试发布的的第六条新闻标题"> </a>
            </p>
            <p class="text">端坐在九月的门槛，初秋的阳光，静美旖旎，从河面上射来的暖暖波光，映透着秋叶的微黄，同时也把人的心映醉。那树梢尖上飘落下来的片片秋叶，随着阵阵···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>29</span> <span class="edit"><i
                  class="fa fa-user"></i>admin</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 971px; left: 654px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?ylxw/" class="mcolor">娱乐新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2021-11-09</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a
                href="/k67/?ylxw/63.html">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></h2>
            <p class="img"> <a href="/k67/?ylxw/63.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636467435658230.jpg"
                  title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！"> </a> </p>
            <p class="text">我一般不去讲所谓的理论，首先这个理论知识肯定是通过附子老师自己去实战过的，否则这个SEO优化怎么讲也是讲不通，毕竟没有论证。尽管很多时候我们···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>33</span> <span class="edit"><i
                  class="fa fa-user"></i>管理员</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 998px; left: 0px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?gnxw/" class="mcolor">国内新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2021-11-09</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a
                href="/k67/?gnxw/49.html">网站SEO优化不单单是做排名，同时也是做品牌积累！</a></h2>
            <p class="img"> <a href="/k67/?gnxw/49.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636467314862585.jpg"
                  title="网站SEO优化不单单是做排名，同时也是做品牌积累！"> </a> </p>
            <p class="text">可以这么讲，国内所有的大型网站能够做大基本上都是靠SEO初期流量所带来的威力，包括我们经常看到的58同城也好，携程也好，或者汽车之家也好。基···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>74</span> <span class="edit"><i
                  class="fa fa-user"></i>管理员</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 1443px; left: 327px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?gjxw/" class="mcolor">国际新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2020-12-25</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?gjxw/4.html">测试发布的的第一条新闻标题</a></h2>
            <p class="img"> <a href="/k67/?gjxw/4.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636440994267050.jpg" title="测试发布的的第一条新闻标题"> </a>
            </p>
            <p class="text">清晨的太阳悄悄的爬上了山岭，那晨晖散布，光环夺目，真是一个明媚的早上，经过一夜雨的洗刷，你能感受到，清新的空气轻轻地在皮肤上滑过，微微还带点···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>207</span> <span class="edit"><i
                  class="fa fa-user"></i>admin</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 1470px; left: 654px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?jsxw/" class="mcolor">军事新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2021-11-09</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?jsxw/54.html">深度剖析百度网站优化软件工作原理</a></h2>
            <p class="img"> <a href="/k67/?jsxw/54.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20211109/1636467344834301.jpg" title="深度剖析百度网站优化软件工作原理"> </a>
            </p>
            <p class="text">近几年号称3-7天上首页的百度网站优化软件层出不穷，很多用户使用之后网站的排名确实上升了。甚至很多公司就是靠一款或者几款软件来开展业务。有的···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>62</span> <span class="edit"><i
                  class="fa fa-user"></i>AB模板网</span> </div>
          </div>

          <div class="wapost masonry-brick" style="position: absolute; top: 1497px; left: 0px;">
            <div class="aptop"> <span class="sn"> <a href="/k67/?gnxw/" class="mcolor">国内新闻</a> </span> <span
                class="pi"><i class="fa fa-clock-o"></i><span>2020-12-25</span></span> </div>
            <h2><i title="首页" class="fa fa-arrow-circle-o-up"></i><a href="/k67/?gnxw/8.html">测试发布的的第五条新闻标题</a></h2>
            <p class="img"> <a href="/k67/?gnxw/8.html"> <img
                  src="http://demo.92wailian.com/k67/skin/images/loading.gif"
                  data-original="/k67/static/upload/image/20201225/1608876678214356.jpg" title="测试发布的的第五条新闻标题"> </a>
            </p>
            <p class="text">又是寒风吹雨，呼呼叫个不停，又是细雨敲打窗棂，淅淅沥沥，一转眼，不知不觉中就这样迎来了冬季。季节的轮转，又将人生向前推进了一岁，草木也走入一···...</p>
            <div class="count"> <span><i class="fa fa-eye"></i>39</span> <span class="edit"><i
                  class="fa fa-user"></i>admin</span> </div>
          </div>
        </div>
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

            <li><a href="/k67/?shxw/24.html" title="测试发布的的第十二条新闻标题">测试发布的的第十二条新闻标题</a></li>

            <li><a href="/k67/?gjxw/21.html" title="测试发布的的第九条新闻标题">测试发布的的第九条新闻标题</a></li>

            <li><a href="/k67/?jsxw/6.html" title="测试发布的的第三条新闻标题">测试发布的的第三条新闻标题</a></li>

            <li><a href="/k67/?gjxw/4.html" title="测试发布的的第一条新闻标题">测试发布的的第一条新闻标题</a></li>

            <li><a href="/k67/?ylxw/71.html" title="seo基础入门视频教程">seo基础入门视频教程</a></li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>热门文章</span></h3>
          <ul id="hotlog">

            <li><i class="mcolor">1</i><a href="/k67/?gjxw/21.html">测试发布的的第九条新闻标题</a></li>

            <li><i class="mcolor">2</i><a href="/k67/?gjxw/4.html">测试发布的的第一条新闻标题</a></li>

            <li><i class="mcolor">3</i><a href="/k67/?shxw/24.html">测试发布的的第十二条新闻标题</a></li>

            <li><i>4</i><a href="/k67/?gnxw/50.html">网站SEO优化不单单是做排名，同时也是做品牌积累！</a></li>

            <li><i>5</i><a href="/k67/?jsxw/6.html">测试发布的的第三条新闻标题</a></li>

          </ul>
        </li>
        <li class="rlist1">
          <h3><span>随机文章</span></h3>
          <ul id="randlog">

            <li><a href="/k67/?ylxw/61.html" title="秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！">秒排SEO容易掉排名怎么办，稳定关键词排名的细节策略！</a></li>

            <li><a href="/k67/?jsxw/6.html" title="测试发布的的第三条新闻标题">测试发布的的第三条新闻标题</a></li>

            <li><a href="/k67/?jsxw/54.html" title="深度剖析百度网站优化软件工作原理">深度剖析百度网站优化软件工作原理</a></li>

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

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    swiper,
    headlines,
    newslistcol
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
        }, {
          title: '4',
          num: '4'
        }, {
          title: '5',
          num: '5'
        }, {
          title: '6',
          num: '6'
        }]
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
