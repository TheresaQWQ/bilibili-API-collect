import{_ as d,r as l,o as a,c as e,a as t,b as n,d as o,w as u,e as i}from"./app-c85abeb1.js";const r={},c=t("h1",{id:"笔记操作",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#笔记操作","aria-hidden":"true"},"#"),n(" 笔记操作")],-1),p=t("h2",{id:"保存视频笔记",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#保存视频笔记","aria-hidden":"true"},"#"),n(" 保存视频笔记")],-1),h=t("blockquote",null,[t("p",null,"https://api.bilibili.com/x/note/add")],-1),b=t("p",null,[t("em",null,"请求方式：POST")],-1),m=t("p",null,"认证方式：Cookie（SESSDATA）",-1),v=t("p",null,[t("strong",null,"正文参数（ application/x-www-form-urlencoded ）：")],-1),_=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),k=t("tr",null,[t("td",null,"oid"),t("td",null,"num"),t("td",null,"目标id"),t("td",null,"必要"),t("td")],-1),g=t("tr",null,[t("td",null,"oid_type"),t("td",null,"num"),t("td",null,"目标id类型"),t("td",null,"必要"),t("td",null,[t("code",null,"0"),n("视频(oid=avid)")])],-1),q=t("tr",null,[t("td",null,"note_id"),t("td",null,"num"),t("td",null,"笔记id"),t("td",null,"非必要"),t("td",null,"创建时无需此项")],-1),x=t("tr",null,[t("td",null,"title"),t("td",null,"str"),t("td",null,"笔记标题"),t("td",null,"必要"),t("td")],-1),y=t("tr",null,[t("td",null,"summary"),t("td",null,"str"),t("td",null,"笔记预览文本"),t("td",null,"必要"),t("td")],-1),f=t("td",null,"content",-1),S=t("td",null,"str",-1),A=t("td",null,"笔记正文json序列",-1),E=t("td",null,"必要",-1),T=t("tr",null,[t("td",null,"tags"),t("td",null,"str"),t("td",null,"笔记跳转标签列表"),t("td",null,"非必要"),t("td")],-1),j=t("tr",null,[t("td",null,"cls"),t("td",null,"num"),t("td",null,"1"),t("td",null,"非必要"),t("td",null,"作用尚不明确")],-1),w=t("tr",null,[t("td",null,"from"),t("td",null,"str"),t("td",null,"提交类型"),t("td",null,"非必要"),t("td",null,[t("code",null,"auto"),n("自动提交"),t("br"),t("code",null,"save"),n("手动提交"),t("br"),t("code",null,"close"),n("关闭时自动提交")])],-1),C=t("tr",null,[t("td",null,"cont_len"),t("td",null,"num"),t("td",null,"正文字数"),t("td",null,"非必要"),t("td")],-1),B=t("tr",null,[t("td",null,"platform"),t("td",null,"str"),t("td",null,"平台"),t("td",null,"非必要"),t("td",null,[n("可为"),t("code",null,"web")])],-1),N=t("tr",null,[t("td",null,"publish"),t("td",null,"num"),t("td",null,"是否公开笔记"),t("td",null,"非必要"),t("td",null,[t("code",null,"0"),n("不公开"),t("br"),t("code",null,"1"),n("公开")])],-1),R=t("tr",null,[t("td",null,"auto_comment"),t("td",null,"num"),t("td",null,"是否添加到评论区"),t("td",null,"非必要"),t("td",null,[t("code",null,"0"),n("不添加"),t("br"),t("code",null,"1"),n("添加")])],-1),D=t("tr",null,[t("td",null,"csrf"),t("td",null,"str"),t("td",null,"CSRF Token（位于cookie）"),t("td",null,"必要"),t("td")],-1),O=i(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td><code>0</code>成功 <br><code>-101</code>账号未登录<br><code>-111</code>csrf校验失败<br><code>-400</code>请求错误<br><code>79508</code>该稿件已存在笔记，无法新增<br><code>79513</code>笔记所属视频不合法</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>note_id</td><td>num</td><td>笔记id</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>保存内容为加粗的STRONG的笔记<code>3809605586518023</code>于<code>av970322090</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/note/add&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=970322090&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid_type=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;note_id=3809605586518023&#39;</span>
--data-urlencode <span class="token string">&#39;title=周刊哔哩哔哩排行榜#543&#39;</span>
--data-urlencode <span class="token string">&#39;summary=STRONG&#39;</span>
--data-urlencode <span class="token string">&#39;content=[{&quot;attributes&quot;:{&quot;bold&quot;:true},&quot;insert&quot;:&quot;STRONG&quot;},{&quot;insert&quot;:&quot;\\n&quot;}]&#39;</span>
--data-urlencode <span class="token string">&#39;tags=&#39;</span>
--data-urlencode <span class="token string">&#39;cls=1&#39;</span>
--data-urlencode <span class="token string">&#39;from=save&#39;</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;note_id&quot;</span><span class="token operator">:</span> <span class="token number">3809605586518023</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="删除视频笔记" tabindex="-1"><a class="header-anchor" href="#删除视频笔记" aria-hidden="true">#</a> 删除视频笔记</h2><blockquote><p>https://api.bilibili.com/x/note/del</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>oid</td><td>num</td><td>目标稿件avid</td><td>必要</td><td></td></tr><tr><td>note_id</td><td>num</td><td>笔记id</td><td>非必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>删除稿件<code>av457253380</code>下的笔记<code>4075968478576647</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/note/del&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=457253380&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;note_id=4075968478576647&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,22);function F(V,G){const s=l("RouterLink");return a(),e("div",null,[c,p,h,b,m,v,t("table",null,[_,t("tbody",null,[k,g,q,x,y,t("tr",null,[f,S,A,E,t("td",null,[n("格式见"),o(s,{to:"/docs/note/#%E9%99%84%E8%A1%A8-%E7%AC%94%E8%AE%B0%E6%AD%A3%E6%96%87%E5%BA%8F%E5%88%97%E6%A0%BC%E5%BC%8F"},{default:u(()=>[n("附表")]),_:1})])]),T,j,w,C,B,N,R,D])]),O])}const P=d(r,[["render",F],["__file","action.html.vue"]]);export{P as default};
