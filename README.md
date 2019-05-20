##原起：
    在做跨境电商平台时，特别是东南亚平台，有些国家的货币数字太大，不能方便的看出来是
    多少人民币，比如100万越南盾约为￥296人民币，100万啊。
    于是制作了此插件，可以在页面上显示商品价格对应的人民币数字。多说无益，直接上图:

    

######亚马逊英国站:
![亚马逊英国站](https://i.loli.net/2019/05/20/5ce2a0c77134317620.png)

######Lazada印尼站:
![Lazada印尼站](https://i.loli.net/2019/05/20/5ce2a139de10c84000.png)

######Aliexpress速卖通:
![未命名1558356422.png](https://i.loli.net/2019/05/20/5ce2a1d457ae453174.png)

######57国货币自由转换:
![汇率转换.jpg](https://i.loli.net/2019/05/20/5ce2a2ff7fdea76635.jpg)


    此插件海淘用户可以使用，特别是喜欢在美亚，日亚上淘宝的朋友。

## Rate

> 这是一个跨境平台前端价格转化为人民币的插件,目前支持的平台有：    
Lazada    
Shopee    
Amazon   
Aliexpress 
Wish



### 下载

##### [chrome扩展](https://chrome.google.com/webstore/detail/%E6%B1%87%E7%8E%87%E8%BD%AC%E6%8D%A2/bcpgdpedphodjcjlminjbdeejccjbimp?hl=zh-CN)

##### [360安全浏览器](https://ext.se.360.cn/webstore/detail/hijccaodmbcgjodgoalekjnnnbpkpfch)

>不提供crx安装方式，因为最新版本的Chrome已经禁止离线安装。
从Chrome商店安装需要梯子，安装之后使用时不用梯子。

### 源代码：

>开源发布于github上。以址如下:

[Github](https://github.com/jy00566722/rate)

##### 目前支持的平台连接:

lazada:

- 马来西亚：https://www.lazada.com.my/
- 菲 律 宾：https://www.lazada.com.ph/
- 新 加 坡：https://www.lazada.sg/
- 印    尼：https://www.lazada.co.id/
- 越    南：https://www.lazada.vn/
- 泰    国：https://www.lazada.co.th/

Shopee:
- 马来西亚：https://shopee.com.my/
- 菲律宾  ：https://shopee.ph/
- 新加坡  ：https://shopee.sg/
- 印  尼  ：https://shopee.co.id/
- 越  南  ：https://shopee.vn/
- 泰  国  ：https://shopee.co.th/
- 台  湾  ：https://shopee.tw/

Amazon:  (请注意切换为本地货币:如美国站，切换为美元货币。日本站切换为日元货币。如已经切换为人民币，可能造成价格不准确，后续版本会解决.)
- 美  国 ：https://www.amazon.com/
- 日  本 : https://www.amazon.co.jp/ 
- 英  国 ：https://www.amazon.co.uk/
- 德  国 ：https://www.amazon.de/

速卖通:
- https://www.aliexpress.com/    (使用时注意切换货币单位为美元，后续会支持更多货币)

Wish:
- https://www.wish.com/  (支持57种货币汇率转换，需要前台登陆)


### 介绍：

>此插件为lzada/shopee/Amazon/Wish/Aliexpress卖家设计，用于显示各站点前台页面上商品价格对应的人民币价格(在原价格右下方显示一个绿色的人民币价格，部分带有深色底色的地方会采用红色字),也方便卖家观察竞争对手的价格。

>PS:Lazada/Shopee买家也是可以用的，但使用场景感觉不多，海淘用户可以用。

>对于跨境卖家，在网站前台查看商品时，印尼币、越南币动则十万百万的价格数字，不能直观的看出对应的人民币价格是多少，这个插件可以完美解决此问题。
同时也提供手动输入数字转换货币的功能，可以互转货币的国家为:中国，马来西亚，新加坡，菲律宾，印尼，越南，泰国,台湾。

### 关于汇率：
         汇率是每20分钟更新一次。

### 关于效率：
         插件不会持续操作页面造成卡顿，只有在页面内容有更新时才启动，放心使用。

### 关于安全：
       插件不会记录用户的任何数据，有google/360审查。

### 可能存在的问题：
        由于Lazada/Shopee/Amazon前端页面，可能会更新，网页结构会变化，造成不能正常显示对应的人民币价格，会定期针对更新。
        如果在使用中发现哪个页面没有显示人民币价格，欢迎邮件联系反馈，感谢。ideey88@gmail.com
        由于需要维护的站点较多，时常会有更新。在不能显示价格时，可以先看是否为最新版本。如果不是，可以删除后再安装新版本。（或是等Chrome自动插件更新）



### 更新记录

```
- 1.9.0.0    2019年5月20日 修复Aliexpress详情页价格显示
- 1.8.0.0    2019年5月09日 按钮页面增加57国汇率自由转换
- 1.7.0.0    2019年4月30日 修复Wish价格问题(页面元素变化)
- 1.6.0.0    2019年4月19日 支持Wish平台57种货币汇率的转换。
- 1.5.0.0    2019年4月16日 完全重写Amazon美国/日本/英国/德国站的价格转换，兼容性更强
- 1.4.0.0    2019年4月13日 完全重写Lazada价格转换插件，更通用，更流畅,兼容性更强
- 1.3.0.0    2019年4月10日 增加速卖通美元货币支持(另外的货币价格，后续支持，所以使用时请切换为美元货币)
- 1.2.5.0    2019年4月10日 修复Shopee列表页价格显示
- 1.2.4.0    2019年4月10日 修复Amazon美国/日本/英国/德国 详情页主价显示，及德国搜索列表商品价格显示
- 1.2.3.1    2019年4月10日 修复美国Amazon详情页主价格显示
- 1.2.3.0    2019年1月9日 增加德国亚马逊站点支持
- 1.2.2.0    2019年1月8日 增加英国亚马逊站点支持
- 1.2.1.0    2019年1月5日 增加日本亚马逊站点支持
- 1.2.0.0:   2019年1月4日 增加美国亚马逊站点支持
- 1.1.0.0:   12月30日晚上9点更新 增加shopee平台的支持			
- 1.0.0.0:   Lazada平台适配成功
```

