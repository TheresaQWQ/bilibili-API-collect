import{_ as t,o as n,c as s,e as a}from"./app-c85abeb1.js";const e={},d=a(`<h1 id="app主题" tabindex="-1"><a class="header-anchor" href="#app主题" aria-hidden="true">#</a> APP主题</h1><h2 id="获取主题及加载动画" tabindex="-1"><a class="header-anchor" href="#获取主题及加载动画" aria-hidden="true">#</a> 获取主题及加载动画</h2><blockquote><p>https://app.bilibili.com/x/resource/show/skin</p></blockquote><p><em>请求方式：GET</em></p><p>鉴权方式：appkey</p><p>认证方式：仅可APP</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>appkey</td><td>str</td><td>APP密钥</td><td>APP方式必要</td><td></td></tr><tr><td>build</td><td>num</td><td>版本</td><td>APP方式必要</td><td>可为<code>6082000</code></td></tr><tr><td>ts</td><td>num</td><td>当前时间戳</td><td>APP方式必要</td><td>可为<code>0</code></td></tr><tr><td>sign</td><td>str</td><td>APP签名</td><td>APP方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-3：API校验密匙错误<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>user_equip</td><td>obj</td><td>个性主题信息</td><td>有效时有此项</td></tr><tr><td>skin_colors</td><td>array</td><td>主题颜色列表</td><td></td></tr><tr><td>load_equip</td><td>obj</td><td>加载动画信息</td><td>有效时有此项</td></tr></tbody></table><p><code>data</code>中的<code>user_equip</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>装扮id</td><td></td></tr><tr><td>name</td><td>str</td><td>装扮名称</td><td></td></tr><tr><td>preview</td><td>str</td><td>装扮封面url</td><td></td></tr><tr><td>ver</td><td>num</td><td>装扮版本</td><td>时间戳</td></tr><tr><td>package_url</td><td>str</td><td>装扮包url</td><td></td></tr><tr><td>package_md5</td><td>str</td><td>装扮包md5校验值</td><td></td></tr><tr><td>data</td><td>obj</td><td>装扮配置</td><td></td></tr></tbody></table><p><code>user_equip</code>中的<code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>color_mode</td><td>str</td><td>颜色模式</td><td>必要</td><td>light：亮色<br>dark：暗色</td></tr><tr><td>color</td><td>str</td><td>前景色？</td><td>必要</td><td>颜色<br>1. 使用十六进制颜色值<br>2. 颜色值的大小写不限，下同<br>3. 例：#ffffff</td></tr><tr><td>color_second_page</td><td>str</td><td>背景色？</td><td>必要</td><td>颜色</td></tr><tr><td>tail_color</td><td>str</td><td>底边栏颜色</td><td>必要</td><td>颜色</td></tr><tr><td>tail_color_selected</td><td>str</td><td>底边栏颜色(选择时)</td><td>必要</td><td>颜色</td></tr><tr><td>tail_icon_ani</td><td>bool</td><td>有无底边栏动画</td><td>必要</td><td>false：无<br>true：有</td></tr><tr><td>tail_icon_ani_mode</td><td>str</td><td>底边栏动画循环播放</td><td>必要</td><td>once：播放一次</td></tr><tr><td>head_myself_mp4_play</td><td>str</td><td>我的页面头图（视频）循环</td><td>必要</td><td>once：播放一次<br>loop：循环播放</td></tr><tr><td>tail_icon_mode</td><td>str</td><td>底栏改图标或改颜色</td><td>必要</td><td>img：图标<br>color：颜色</td></tr><tr><td>side_bg_color</td><td>str</td><td>侧边栏颜色</td><td>非必要</td><td>颜色<br>5.x 版本客户端的侧边栏</td></tr><tr><td>side_line_color</td><td>str</td><td>侧边栏线条颜色？</td><td>非必要</td><td>颜色<br>5.x 版本客户端的侧边栏</td></tr><tr><td>tail_icon_color</td><td>str</td><td>底栏图标颜色</td><td>可能必要</td><td>颜色<br>若 tail_icon_mode = &quot;color&quot;，则必要</td></tr><tr><td>tail_icon_color_dark</td><td>str</td><td>底栏图标颜色(夜间模式)</td><td>可能必要</td><td>颜色<br>若 tail_icon_mode = &quot;color&quot;，则必要</td></tr><tr><td>tail_icon_color_selected</td><td>str</td><td>底栏图标颜色(选择时)</td><td>可能必要</td><td>颜色<br>若 tail_icon_mode = &quot;color&quot;，则必要</td></tr><tr><td>tail_icon_color_selected_dark</td><td>str</td><td>底栏图标颜色(选择时)(夜间模式)</td><td>可能必要</td><td>颜色<br>若 tail_icon_mode = &quot;color&quot;，则必要</td></tr></tbody></table><p><code>skin_colors</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>主题颜色1</td><td></td></tr><tr><td>n</td><td>obj</td><td>主题颜色(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>skin_colors</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>颜色id</td><td></td></tr><tr><td>name</td><td>str</td><td>颜色名称</td><td></td></tr><tr><td>is_free</td><td>bool</td><td>是否免费</td><td>false：收费<br>true：免费</td></tr><tr><td>price</td><td>num</td><td>价格</td><td>单位为硬币</td></tr><tr><td>is_bought</td><td>bool</td><td>是否已购买</td><td>false：未购买<br>true：已购买</td></tr><tr><td>status</td><td>num</td><td>状态</td><td>1：自动续费<br>4：已退订</td></tr><tr><td>buy_time</td><td>num</td><td>购买时间</td><td>毫秒时间戳</td></tr><tr><td>due_time</td><td>num</td><td>到期时间</td><td>毫秒时间戳</td></tr><tr><td>color_name</td><td>str</td><td>颜色类型名称</td><td></td></tr><tr><td>is_overdue</td><td>bool</td><td>是否已到期</td><td>false：未到期<br>true：已到期</td></tr></tbody></table><p><code>data</code>中的<code>load_equip</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>装扮id</td><td></td></tr><tr><td>name</td><td>str</td><td>装扮名称</td><td></td></tr><tr><td>ver</td><td>num</td><td>装扮版本</td><td>时间戳</td></tr><tr><td>loading_url</td><td>str</td><td>加载动画图标url</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://app.bilibili.com/x/resource/show/skin&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;appkey=1d8b6e7d45233436&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;build=6082000&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ts=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;sign=ea212fea5b00a6278ea6d9938b4c500e&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;user_equip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2529</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;初音未来-日版&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/garb/item/2fa16380b31b3cee6c889d645f2699de8e9d9faf.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ver&quot;</span><span class="token operator">:</span> <span class="token number">1598600025</span><span class="token punctuation">,</span>
            <span class="token property">&quot;package_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/garb/zip/9c393edea0c7b7b59685a20cd655363ef573a325.zip&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;package_md5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7b6d20d998ad543c6a275948a6a1a5fe&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;color_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#212121&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color_second_page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff2d2&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;side_bg_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffe7ae&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tail_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#996c00&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tail_color_selected&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0d6872&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tail_icon_ani&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tail_icon_ani_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;once&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skin_colors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;少女粉&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;夜间模式&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;姨妈红&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;咸蛋黄&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yellow&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;早苗绿&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">1599219782000</span><span class="token punctuation">,</span>
                <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">1601811782000</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;胖次蓝&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;基佬紫&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;purple&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;load_equip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2531</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;初音未来13周年&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ver&quot;</span><span class="token operator">:</span> <span class="token number">1598602035</span><span class="token punctuation">,</span>
            <span class="token property">&quot;loading_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/garb/item/9b12e8b5cc16a4c2e71e91c43796f09d5e132847.webp&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="主题包结构" tabindex="-1"><a class="header-anchor" href="#主题包结构" aria-hidden="true">#</a> 主题包结构</h2><p>主题包为app端付费主题（套装）的整合包，以zip格式通过url分发</p><p>包内的图片文件为app对应的资源替换，替换时可随意修改后缀 jpg 或 png</p><p>必要性：head_bg 及 head_tab_bg 为必要，其他非必要</p><table><thead><tr><th>文件名</th><th>说明</th></tr></thead><tbody><tr><td>head_bg.jpg</td><td>首页顶部栏背景</td></tr><tr><td>head_tab_bg.jpg</td><td>顶部栏背景</td></tr><tr><td>head_myself_bg.jpg</td><td>【我的】页面头图（小）</td></tr><tr><td>head_myself_squared_bg.jpg</td><td>【我的】页面头图（大）</td></tr><tr><td>head_myself_mp4_bg.mp4</td><td>【我的】页面头图（视频）<br>格式参考：后缀必须 mp4、分辨率 1242 x 1074、60 FPS、去掉音轨(音频)</td></tr><tr><td>side_bg.jpg</td><td>侧边栏背景</td></tr><tr><td>side_bg_bottom.jpg</td><td>侧边栏底部背景</td></tr><tr><td>tail_bg.png</td><td>底部栏背景</td></tr><tr><td>tail_icon_main.png</td><td>【首页】按钮</td></tr><tr><td>tail_icon_channel.png</td><td>【频道】按钮</td></tr><tr><td>tail_icon_dynamic.png</td><td>【动态】按钮</td></tr><tr><td>tail_icon_shop.png</td><td>【会员购】按钮</td></tr><tr><td>tail_icon_myself.png</td><td>【我的】按钮</td></tr><tr><td>tail_icon_pub_btn_bg.png</td><td>【发布】按钮</td></tr><tr><td>tail_icon_selected_main.png</td><td>【首页】按钮（选中状态）</td></tr><tr><td>tail_icon_selected_channel.png</td><td>【频道】按钮（选中状态）</td></tr><tr><td>tail_icon_selected_dynamic.png</td><td>【动态】按钮（选中状态）</td></tr><tr><td>tail_icon_selected_shop.png</td><td>【会员购】按钮（选中状态）</td></tr><tr><td>tail_icon_selected_myself.png</td><td>【我的】按钮（选中状态）</td></tr><tr><td>tail_icon_selected_pub_btn_bg.png</td><td>【发布】按钮（选中状态）</td></tr></tbody></table><p>以<code>id=2529（初音未来-日版）</code>的资源为例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://i0.hdslb.com/bfs/garb/zip/9c393edea0c7b7b59685a20cd655363ef573a325.zip
<span class="token function">unzip</span> <span class="token parameter variable">-l</span> 9c393edea0c7b7b59685a20cd655363ef573a325.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Archive:  9c393edea0c7b7b59685a20cd655363ef573a325.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
    22995  1980-00-00 00:00   tail_icon_selected_myself.png
    18444  1980-00-00 00:00   head_bg.jpg
     3061  1980-00-00 00:00   head_tab_bg.jpg
   188898  1980-00-00 00:00   side_bg.jpg
     2842  1980-00-00 00:00   side_bg_bottom.jpg
   203134  1980-00-00 00:00   tail_bg.png
    27539  1980-00-00 00:00   tail_icon_main.png
    25632  1980-00-00 00:00   tail_icon_selected_main.png
    27415  1980-00-00 00:00   tail_icon_selected_channel.png
   191706  1980-00-00 00:00   head_myself_squared_bg.jpg
    27919  1980-00-00 00:00   tail_icon_channel.png
    27262  1980-00-00 00:00   tail_icon_selected_dynamic.png
   147738  1980-00-00 00:00   head_myself_bg.jpg
    28182  1980-00-00 00:00   tail_icon_dynamic.png
    25878  1980-00-00 00:00   tail_icon_shop.png
    26487  1980-00-00 00:00   tail_icon_selected_shop.png
    21831  1980-00-00 00:00   tail_icon_myself.png
---------                     -------
  1016963                     17 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[d];function p(r,l){return n(),s("div",null,o)}const c=t(e,[["render",p],["__file","skin.html.vue"]]);export{c as default};
