import{_ as t,o as s,c as n,e as a}from"./app-c85abeb1.js";const e={},d=a(`<h1 id="大会员操作" tabindex="-1"><a class="header-anchor" href="#大会员操作" aria-hidden="true">#</a> 大会员操作</h1><h2 id="兑换卡券" tabindex="-1"><a class="header-anchor" href="#兑换卡券" aria-hidden="true">#</a> 兑换卡券</h2><blockquote><p>https://api.bilibili.com/x/vip/privilege/receive</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie (SESSDATA)</p><p><strong>正文参数 (application/x-www-form-urlencoded)：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>兑换类型</td><td>必要</td><td>1：B币券<br>2：会员购优惠券<br>3：漫画福利券<br>4：会员购包邮券<br>5：漫画商城优惠券<br>6：装扮体验卡<br>7：课堂优惠券</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token (位于cookie)</td><td>Cookie 方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>-101：账号未登录<br>-111：csrf 校验失败<br>-400：请求错误<br>69800：网络繁忙 请稍后再试<br>69801：你已领取过该权益<br>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/vip/privilege/receive&#39;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
	--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
	--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="大会员每日经验" tabindex="-1"><a class="header-anchor" href="#大会员每日经验" aria-hidden="true">#</a> 大会员每日经验</h2><blockquote><p>https://api.bilibili.com/x/vip/experience/add</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie (SESSDATA)</p><p><strong>正文参数 (application/x-www-form-urlencoded)：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>CSRF Token (位于cookie)</td><td>Cookie 方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>-101：账号未登录<br>-111：csrf 校验失败<br>69198：用户经验已经领取<br>6034007：请求频繁,请稍后再试<br>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>\`</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td></td><td>信息本体</td></tr></tbody></table><p><strong><code>data</code>对象：</strong></p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>0</td><td></td></tr><tr><td>is_grant</td><td>bool</td><td></td><td>暂时发现 code 为 0 时为 <code>true</code></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/vip/experience/add&#39;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
	--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">69198</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户经验已经领取&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_grant&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,27),o=[d];function r(p,i){return s(),n("div",null,o)}const c=t(e,[["render",r],["__file","action.html.vue"]]);export{c as default};
