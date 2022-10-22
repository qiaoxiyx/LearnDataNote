import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as i,a as o,b as e,d as r,w as a,e as l,r as n}from"./app.7fbda75a.js";const k={},p=o("p",null,"Docker \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5E94\u7528\u5BB9\u5668\u5F15\u64CE\uFF0C\u53EF\u4EE5\u8BA9\u5F00\u53D1\u8005\u6253\u5305\u4ED6\u4EEC\u7684\u5E94\u7528\u4EE5\u53CA\u4F9D\u8D56\u5305\u5230\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u3001\u53EF\u79FB\u690D\u7684\u5BB9\u5668\u4E2D\uFF0C\u7136\u540E\u53D1\u5E03\u5230\u4EFB\u4F55\u6D41\u884C\u7684 Linux \u673A\u5668\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u865A\u62DF\u5316\u3002\u501F\u52A9 Docker\uFF0C\u60A8\u53EF\u4EE5\u4E0E\u7BA1\u7406\u5E94\u7528\u7A0B\u5E8F\u76F8\u540C\u7684\u65B9\u5F0F\u6765\u7BA1\u7406\u57FA\u7840\u67B6\u6784\u3002\u7B80\u5355\u70B9\u8BF4\uFF0C\u7528 Docker \u4F60\u4E0D\u61C2\u592A\u591A\u4EE3\u7801\u77E5\u8BC6\uFF0C\u76F4\u63A5\u7528\u5176\u4ED6\u4EBA\u7684\u6253\u5305\u5BB9\u5668\uFF0C\u5C0F\u767D\u4E5F\u53EF\u4EE5\u90E8\u7F72\u590D\u6742\u7684\u670D\u52A1\u5E94\u7528\u3002",-1),_=o("h2",{id:"docker-\u547D\u4EE4",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#docker-\u547D\u4EE4","aria-hidden":"true"},"#"),e(" Docker \u547D\u4EE4")],-1),u={href:"https://yeasy.gitbook.io/docker_practice/introduction/what",target:"_blank",rel:"noopener noreferrer"},h=l('<ul><li><p>\u5217\u51FA\u6240\u6709\u5BB9\u5668\uFF1A<code>sudo docker ps -a</code>\u3002</p></li><li><p>\u505C\u6B62\u5BB9\u5668\u8FD0\u884C\uFF1A<code>sudo docker stop &lt;CONTAINER ID/NAME&gt;</code>\u3002\u90E8\u5206\u5BB9\u5668\u540D\u6709\u53EF\u80FD\u65E0\u6CD5\u8BC6\u522B\uFF0C\u6700\u597D\u5728\u5BB9\u5668\u540D\u79F0\u4E2D\u6DFB\u52A0\u6570\u5B57\u3002</p></li><li><p>\u5220\u9664\u6307\u5B9A\u5BB9\u5668\uFF1A<code>sudo docker rm &lt;CONTAINER ID/NAME&gt;</code>\uFF0C\u5220\u9664\u524D\u9700\u5148\u505C\u6B62\u5BB9\u5668\u3002</p></li></ul><h2 id="windows-docker" tabindex="-1"><a class="header-anchor" href="#windows-docker" aria-hidden="true">#</a> Windows Docker</h2>',2),f={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://newzone.top/_posts/2022-09-05-stable_diffusion_ai_painting.html#docker-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},D=o("p",null,[e("WSL \u672C\u5730\u8DEF\u5F84\u4E3A "),o("code",null,"\\\\wsl.localhost\\"),e("\u3002Windows \u672C\u5730\u78C1\u76D8\u6302\u8F7D\u5728 Linux \u7684 mnt \u76EE\u5F55\u4E0B\uFF0C\u56E0\u6B64 WSL \u8C03\u7528 Windows \u6587\u4EF6\u9700\u5148\u6DFB\u52A0 "),o("code",null,"/mnt/"),e(" \u524D\u7F00\uFF0C\u7136\u540E\u628A\u78C1\u76D8\u7B26\u53F7\u6539\u4E3A\u5C0F\u5199\uFF0C\u5E76\u5C06\u53CD\u659C\u625B "),o("code",null,"\\"),e(" \u66FF\u6362\u4E3A "),o("code",null,"/"),e("\u3002\u5047\u8BBE Windows \u6587\u4EF6\u4F4D\u4E8E\u300CD:\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker\u300D\uFF0C\u8F6C\u6362\u4E3A Linux \u8DEF\u5F84\u5219\u662F\u300C/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker\u300D\u3002")],-1);function w(b,E){const c=n("RouterLink"),t=n("ExternalLinkIcon");return d(),i("div",null,[p,o("p",null,[e("Compose \u662F\u7528\u4E8E\u5B9A\u4E49\u548C\u8FD0\u884C\u591A\u5BB9\u5668 Docker \u5E94\u7528\u7A0B\u5E8F\u7684\u5DE5\u5177\u3002\u901A\u8FC7 Compose\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 YML \u6587\u4EF6\u6765\u7BA1\u7406\u591A\u4E2A Docker \u5BB9\u5668\uFF0C\u5E76\u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u7684\u6240\u6709\u670D\u52A1\u3002\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6240\u6709\u7684\u5BB9\u5668\u901A\u8FC7 services \u6765\u5B9A\u4E49\uFF0C\u7136\u540E\u4F7F\u7528 docker-compose \u811A\u672C\u6765\u542F\u52A8\uFF0C\u505C\u6B62\u548C\u91CD\u542F\u5E94\u7528\uFF0C\u548C\u5E94\u7528\u4E2D\u7684\u670D\u52A1\u4EE5\u53CA\u6240\u6709\u4F9D\u8D56\u670D\u52A1\u7684\u5BB9\u5668\uFF0C\u975E\u5E38\u9002\u5408\u7EC4\u5408\u4F7F\u7528\u591A\u4E2A\u5BB9\u5668\u8FDB\u884C\u5F00\u53D1\u7684\u573A\u666F\u3002\u5F3A\u70C8\u63A8\u8350\u4F7F\u7528 Compose \u642D\u5EFA\u6240\u6709 Docker\uFF0C\u6D41\u7A0B\u53C2\u8003 "),r(c,{to:"/services/NAS.html#nas-docker"},{default:a(()=>[e("NAS \u4E0A\u642D\u5EFA Docker")]),_:1}),e("\u3002")]),_,o("p",null,[e("Docker \u4F7F\u7528\u67E5\u770B "),o("a",u,[e("Docker \u2014 \u4ECE\u5165\u95E8\u5230\u5B9E\u8DF5"),r(t)]),e("\u3002")]),h,o("p",null,[e("Windows \u4F7F\u7528 "),o("a",f,[e("Docker Desktop"),r(t)]),e(" \u6765\u7BA1\u7406\u5BB9\u5668\uFF0C\u65B9\u5F0F\u53C2\u8003 "),o("a",m,[e("Windows Docker \u73AF\u5883\u914D\u7F6E"),r(t)]),e("\u3002")]),D])}const N=s(k,[["render",w],["__file","Docker.html.vue"]]);export{N as default};
