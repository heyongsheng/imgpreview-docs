(function(e){function t(t){for(var i,o,u=t[0],l=t[1],c=t[2],m=0,d=[];m<u.length;m++)o=u[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);r&&r(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,u=1;u<s.length;u++){var l=s[u];0!==n[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var i={},n={app:0},a=[];function o(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=i,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/game/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var r=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"29df":function(e,t,s){e.exports=s.p+"img/paozhu.4e23437f.png"},"36bd":function(e){e.exports=JSON.parse('[{"name":"作者","value":"祝你新的一年，心想事成，身体健康，幸福快乐！"},{"name":"作者","value":"愿你新的一年，下雨有伞，天黑有灯！"},{"name":"作者","value":"如果你能看到这一条，说明你新的一年要发财了！"}]')},3718:function(e,t,s){e.exports=s.p+"media/emit.edbf9643.mp3"},"376a":function(e,t,s){e.exports=s.p+"media/click.14d2045a.wav"},"3ebf":function(e,t,s){e.exports=s.p+"media/back.adb88244.mp3"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("img",{staticClass:"issue-skin",attrs:{src:s("8962")}}),e.$store.state.setting.showBulletChat?i("bullet-chat"):e._e(),i("menu-module",{directives:[{name:"show",rawName:"v-show",value:!e.gameIng,expression:"!gameIng"}],on:{gameBegin:e.gameBegin}}),i("game",{directives:[{name:"show",rawName:"v-show",value:e.gameIng,expression:"gameIng"}],ref:"game",on:{backToHome:function(t){e.gameIng=!1}}})],1)},a=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menu-wrap"},[i("div",{staticClass:"title"},[i("img",{attrs:{src:s("f773"),alt:""}})]),i("div",{staticClass:"menu-box"},e._l(e.menuList,(function(t,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(),expression:"item.show()"}],key:s,staticClass:"menu-item",on:{mouseover:function(t){return e.$store.commit("playAudio",e.hoverMusic)},click:function(s){e.$store.commit("playAudio",e.clickMusic),t.clickHandle()}}},[e._v(" "+e._s(t.name)+" ")])})),0),i("transition",{attrs:{name:"fadeUp"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"support"===e.dialog,expression:"dialog === 'support'"}],staticClass:"dialog"},[i("p",[e._v(" 感谢您的支持，本游戏正在参加掘金新春征文活动，如果您愿意对作者表示支持，可以点击链接("),i("a",{attrs:{href:"https://juejin.cn/user/2911162523723566/posts",target:"_blank"}},[e._v("https://juejin.cn/user/2911162523723566/posts")]),e._v(")前往活动文章，然后点赞评论即可，感谢您的支持，作者在这里提前给您拜年了，祝您身体健康，阖家欢乐！ ")]),i("div",{staticClass:"dialog-footer"},[i("div",{staticClass:"footer-btn close-btn",on:{click:function(t){e.dialog=!1,e.$store.commit("playAudio",e.clickMusic)}}},[e._v("关闭")])])])]),i("transition",{attrs:{name:"fadeUp"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"comment"===e.dialog,expression:"dialog === 'comment'"}],staticClass:"dialog"},[i("p",[e._v(" 小游戏简陋，未接入接口，如果您想您的祝福出现在弹幕中，请您点击链接("),i("a",{attrs:{href:"https://juejin.cn/user/2911162523723566/posts",target:"_blank"}},[e._v("https://juejin.cn/user/2911162523723566/posts")]),e._v(")前往活动文章，把您的称呼及祝福写在评论区即可！ ")]),i("div",{staticClass:"dialog-footer"},[i("div",{staticClass:"footer-btn close-btn",on:{click:function(t){e.dialog=!1,e.$store.commit("playAudio",e.clickMusic)}}},[e._v("关闭")])])])]),i("transition",{attrs:{name:"fadeUp"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"sound"===e.dialog,expression:"dialog === 'sound'"}],staticClass:"dialog"},[i("p",[e._v(" 网站配乐较为喜庆，请确认您的耳机已经插入，音量已经调好，否则容易造成社死！ ")]),i("div",{staticClass:"dialog-footer"},[i("div",{staticClass:"footer-btn",on:{click:function(t){e.dialog=!1}}},[e._v("取消")]),i("div",{staticClass:"footer-btn close-btn",on:{click:function(t){e.dialog=!1,e.$store.commit("tooglePlay",!0),e.$store.commit("playAudio",e.clickMusic)}}},[e._v(" 确认 ")])])])])],1)},u=[],l={name:"",data:function(){var e=this;return{menuList:[{name:"开始游戏",clickHandle:function(){e.gameBegin()},show:function(){return!0}},{name:"打开声音(强烈建议)",clickHandle:function(){e.$store.commit("tooglePlay",!0)},show:function(){return!e.$store.state.setting.isPlay}},{name:"关闭声音",clickHandle:function(){e.$store.commit("tooglePlay",!1)},show:function(){return e.$store.state.setting.isPlay}},{name:"打开弹幕",clickHandle:function(){e.$store.commit("toggleBulletChat")},show:function(){return!e.$store.state.setting.showBulletChat}},{name:"关闭弹幕",clickHandle:function(){e.$store.commit("toggleBulletChat")},show:function(){return e.$store.state.setting.showBulletChat}},{name:"发送弹幕",clickHandle:function(){e.dialog="comment"},show:function(){return!0}},{name:"支持作者",clickHandle:function(){e.dialog="support"},show:function(){return!0}}],dialog:!1,sound:!1,backMusic:s("3ebf"),hoverMusic:s("dc78"),clickMusic:s("376a")}},methods:{gameBegin:function(){this.$emit("gameBegin")}}},c=l,r=(s("d41d"),s("2877")),m=Object(r["a"])(c,o,u,!1,null,"11cafa76",null),d=m.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"gemeWrap",staticClass:"game-wrap",on:{mouseup:e.removeMove}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.nianshouHP,expression:"nianshouHP"}],staticClass:"nianshou",style:"marginLeft:"+e.nianshouLeft+"px"},[i("p",[e._v("HP: "+e._s(e.nianshouHP))]),i("img",{staticClass:"nianshou-img",attrs:{src:s("adcc")}})]),i("div",{ref:"paozhu",staticClass:"paozhu",style:"marginLeft:"+e.paozhuLeft+"px",on:{mousedown:e.addMove}},[i("img",{attrs:{src:s("29df"),alt:""}})]),i("div",{staticClass:"panel-wrap"},[i("div",{staticClass:"game-panel panel-item"},[i("p",{staticClass:"game-title"},[e._v("年兽大作战")]),i("div",{staticClass:"game-data-wrap"},[i("div",{staticClass:"game-data-item"},[i("p",{staticClass:"game-data-title"},[e._v("时间：")]),i("p",{staticClass:"game-data-value"},[e._v(e._s(e.formatTime(e.gameDuration)))])]),i("div",{staticClass:"game-data-item"},[i("p",{staticClass:"game-data-title"},[e._v("攻速：")]),i("p",{staticClass:"game-data-value"},[e._v(e._s(e.frequency))])]),i("div",{staticClass:"game-data-item"},[i("p",{staticClass:"game-data-title"},[e._v("射速：")]),i("p",{staticClass:"game-data-value"},[e._v(e._s(e.bulletSpeed))])]),i("div",{staticClass:"game-data-item"},[i("p",{staticClass:"game-data-title"},[e._v("伤害：")]),i("p",{staticClass:"game-data-value"},[e._v(e._s(e.damage))])])])]),e._l(e.questionList,(function(t,s){return i("div",{key:s,staticClass:"question-panel panel-item",class:{clientCenter:t.answerTime>0}},[t.showTime>0?i("p",{staticClass:"show-count-down"},[e._v(" "+e._s(t.showTime)+" ")]):i("div",{staticClass:"question-wrap"},[t.answerTime>0?i("div",{staticClass:"count-down"},[i("p",[e._v("请在"+e._s(t.answerTime)+"秒内点击正确答案")])]):e._e(),i("div",{staticClass:"question-panel-title"},[e._v("问题 "+e._s(s+1))]),i("div",{staticClass:"question-container"},[i("div",{staticClass:"question-title"},[e._v(e._s(t.question.title))]),t.result?i("div",{staticClass:"answer-wrap result"},e._l(t.question.option,(function(s){return i("div",{key:s.key,staticClass:"answer-item",class:{result:t.question.answer===s.key}},[e._v(" "+e._s(s.key)+"："+e._s(s.value)+" "),t.result===s.key?i("span",{staticClass:"check"},[e._v("◇")]):e._e()])})),0):i("div",{staticClass:"answer-wrap show"},e._l(t.question.option,(function(s){return i("div",{key:s.key,staticClass:"answer-item",on:{mouseover:function(t){return e.$store.commit("playAudio",e.hoverMusic)},click:function(i){return e.answerQuestion(s.key,t)}}},[e._v(" "+e._s(s.key)+"："+e._s(s.value)+" ")])})),0),t.result===t.question.answer?i("div",{staticClass:"buff"},[e._v(" 攻速+1 射速+1 伤害+1 ")]):e._e(),t.result&&t.result!==t.question.answer?i("div",{staticClass:"desc"},[e._v(" "+e._s(t.question.desc)+" ")]):e._e()])])])}))],2),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.nianshouHP,expression:"!nianshouHP"}],staticClass:"result-box"},[i("div",{staticClass:"result-title"},[e._v("你好，2022")]),i("div",{staticClass:"result-content"},[i("div",{staticClass:"result-titme result-block"},[e._v(" "+e._s(e.formatTime(e.gameDuration))+" ")]),i("div",{staticClass:"result-desc result-block"},[e._v(" 您共花费了"+e._s(e.formatTime(e.gameDuration))+"的时间击败了2021年的年兽，恭喜您获得了最终的胜利！也希望您所有的烦恼都随着这只年兽一起烟消云散，祝您新的一年心想事成，万事如意！ ")]),i("div",{staticClass:"userBlessing"},[i("div",{staticClass:"blessing-username result-block"},[e._v(" 恭喜你获得了 "),i("b",[e._v(e._s(e.userBlessing.name))]),e._v(" 对你送出的祝福： ")]),i("div",{staticClass:"blessing-content result-block"},[e._v(" "+e._s(e.userBlessing.value)+" ")])]),i("div",{staticClass:"btn-wrap"},e._l(e.resultBtnData,(function(t){return i("div",{key:t.name,staticClass:"btn-item result-block",on:{mouseover:function(t){return e.$store.commit("playAudio",e.hoverMusic)},click:function(s){e.$store.commit("playAudio",e.clickMusic),t.clickHandle()}}},[e._v(" "+e._s(t.name)+" ")])})),0)])])])},f=[],v=(s("e9c4"),s("99af"),s("a434"),{name:"game",data:function(){var e=this;return{hoverMusic:s("dc78"),clickMusic:s("376a"),successMusic:s("ffa1"),successMusicAudio:null,questionJson:s("f2d5"),questionData:[],userBlessingData:s("36bd"),userBlessing:{},questionList:[],gameBeginTime:0,gameDuration:0,clientX:0,paozhuLeft:document.documentElement.clientWidth/2,nianshouLeft:0,nianshouInterval:null,nianshouHP:2021,screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight,nianshouMoveDir:4,createBulletInterval:null,frequency:5,bulletSpeed:10,damage:2,lastBulletTime:0,resultBtnData:[{name:"再来一次",clickHandle:function(){e.successMusicAudio.pause(),e.gameBegin()}},{name:"返回首页",clickHandle:function(){e.successMusicAudio.pause(),window.backMusic.currentTime=127.2,e.$emit("backToHome")}},{name:"学习教程",clickHandle:function(){window.open("https://www.baidu.com/")}},{name:"gitee",clickHandle:function(){window.open("https://www.baidu.com/")}},{name:"github",clickHandle:function(){window.open("https://www.baidu.com/")}}]}},mounted:function(){this.successMusicAudio=new Audio(this.successMusic),this.successMusicAudio.loop=!0,this.successMusicAudio.volume=.5,this.successMusicAudio.load()},methods:{gameBegin:function(){this.gameBeginTime=(new Date).getTime(),this.paozhuLeft=document.documentElement.clientWidth/2,this.nianshouLeft=0,this.clientX=0,cancelAnimationFrame(this.nianshouInterval),this.questionList=[],this.questionData=JSON.parse(JSON.stringify(this.questionJson)),this.frequency=this.$options.data().frequency,this.damage=this.$options.data().damage,this.bulletSpeed=this.$options.data().bulletSpeed,this.nianshouHP=2021,this.nianshouMove(),this.createBullet(),this.addQuestion();var e=this.userBlessingData.length,t=Math.floor(Math.random()*e);this.userBlessing=this.userBlessingData[t]},gameOver:function(){this.successMusicAudio.play(),cancelAnimationFrame(this.nianshouInterval),cancelAnimationFrame(this.createBulletInterval)},addMove:function(e){e=e||window.event,this.clientX=e.clientX,this.clientY=e.clientY,this.$refs.gemeWrap.onmousemove=this.moveFunc},moveFunc:function(e){e=e||window.event,e.preventDefault();var t=e.clientX-this.clientX;this.paozhuLeft+=t,this.clientX=e.clientX},removeMove:function(){this.$refs.gemeWrap.onmousemove=null},nianshouMove:function(){this.gameDuration=(new Date).getTime()-this.gameBeginTime,this.nianshouLeft+200>=this.screenWidth?this.nianshouMoveDir=-4:this.nianshouLeft<0&&(this.nianshouMoveDir=4),this.nianshouLeft+=this.nianshouMoveDir,this.nianshouInterval=requestAnimationFrame(this.nianshouMove)},createBullet:function(){var e=this,t=(new Date).getTime();if(t-this.lastBulletTime>1e3/this.frequency){var i=document.createElement("div");i.className="bullet",i.style.left=this.paozhuLeft+25+"px",i.style.top=this.screenHeight-123+"px",this.$refs.gemeWrap.appendChild(i),this.$store.commit("playAudio",s("3718"));var n=function t(){i.style.top=i.offsetTop-e.bulletSpeed+"px",i.offsetTop<=250&&i.offsetLeft>=e.nianshouLeft&&i.offsetLeft<=e.nianshouLeft+200?(e.nianshouHP-=e.damage,e.$store.commit("playAudio",s("8770")),e.nianshouHP<=0&&(e.nianshouHP=0,e.gameOver()),e.$refs.gemeWrap.removeChild(i)):i.offsetTop<=0?e.$refs.gemeWrap.removeChild(i):requestAnimationFrame(t)};n(),this.lastBulletTime=t}this.createBulletInterval=requestAnimationFrame(this.createBullet)},formatTime:function(e){var t=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3),i=e%1e3;return"".concat(t,"分").concat(s,"秒").concat(i)},addQuestion:function(){var e=this,t=this.questionData.length,s=Math.floor(Math.random()*t),i=this.questionData.splice(s,1)[0],n={question:i,answerTime:9,showTime:6},a=function e(){n.showTime--,n.showTime>0?setTimeout(e,1e3):o()},o=function(){n.answerTime--,n.answerTime>0?setTimeout((function(){a()}),1e3):(n.result||(n.result="2021"),e.questionList.length<5&&e.addQuestion())};a(),this.questionList.push(n)},answerQuestion:function(e,t){this.$store.commit("playAudio",this.clickMusic),t.result=e,e===t.question.answer&&(this.frequency++,this.bulletSpeed+=2,this.damage+=1)}}}),p=v,g=(s("886f"),Object(r["a"])(p,h,f,!1,null,null,null)),w=g.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"bulletChat",staticClass:"bullet-chat-wrap"})},_=[],C=(s("d81d"),s("cb29"),s("b0c0"),{name:"bullet-chat",data:function(){return{blessingData:s("cf79"),ballistic:0,bulletSpeed:2,bulletInterval:[300,500],screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight,bulletHeight:document.documentElement.clientHeight/10}},mounted:function(){this.showBullet()},methods:{showBullet:function(){var e=this,t=this.screenHeight,s=Math.floor(t/this.bulletHeight),i=Array(s).fill(1).map((function(e,t){return t})),n=function t(){var s=Math.floor(Math.random()*i.length),n=i.splice(s,1)[0];console.log(n),e.createBullet(n),i.length>0&&setTimeout(t,1e3*Math.random())};n()},createBullet:function(e){var t=this,s=document.createElement("div");s.className="bullet-chat",s.style.left=this.screenWidth+"px",s.style.top=e*this.bulletHeight+"px",s.createNext=!1,s.nextSpace=Math.random()*(this.bulletInterval[1]-this.bulletInterval[0])+this.bulletInterval[0];var i=this.blessingData.length,n=Math.floor(Math.random()*i),a=this.blessingData[n];s.innerText=a.name+"："+a.value,this.$refs.bulletChat.appendChild(s);var o=function i(){s.style.left=s.offsetLeft-t.bulletSpeed+"px",s.createNext||s.offsetLeft<t.screenWidth-s.offsetWidth-s.nextSpace&&(t.createBullet(e),s.createNext=!0),s.offsetLeft<-s.offsetWidth?t.$refs.bulletChat.removeChild(s):requestAnimationFrame(i)};o()}}}),k=C,y=(s("b516"),Object(r["a"])(k,b,_,!1,null,null,null)),M=y.exports,B={name:"App",data:function(){return{gameIng:!1}},components:{game:w,menuModule:d,bulletChat:M},methods:{gameBegin:function(){window.backMusic.currentTime=1,this.gameIng=!0,this.$refs.game.gameBegin()}}},x=B,A=(s("034f"),Object(r["a"])(x,n,a,!1,null,null,null)),T=A.exports,$=s("2f62");i["a"].use($["a"]),window.backMusic=new Audio,window.backMusic.src=s("3ebf"),window.backMusic.loop=!0,window.backMusic.load(),window.backMusic.currentTime=127.2;var H=new $["a"].Store({state:{setting:{isPlay:!1,showBulletChat:!0,backMusic:new Audio}},mutations:{toggleBulletChat:function(e){e.setting.showBulletChat=!e.setting.showBulletChat},tooglePlay:function(e,t){t?window.backMusic.play():window.backMusic.pause(),e.setting.isPlay=t},playAudio:function(e,t){if(e.setting.isPlay){var s=new Audio;s.src=t,s.load(),s.volume=.5,s.play()}}},actions:{increment:function(e){var t=e.commit;t("increment")}}});i["a"].config.productionTip=!1,new i["a"]({store:H,render:function(e){return e(T)}}).$mount("#app")},"814e":function(e,t,s){},"85ec":function(e,t,s){},8770:function(e,t,s){e.exports=s.p+"media/boom.201a538b.wav"},"886f":function(e,t,s){"use strict";s("814e")},8962:function(e,t,s){e.exports=s.p+"img/issue-skin.336641c7.png"},adcc:function(e,t,s){e.exports=s.p+"img/nianshou.c910f7db.png"},b3b5:function(e,t,s){},b516:function(e,t,s){"use strict";s("b3b5")},cf79:function(e){e.exports=JSON.parse('[{"name":"许昌人民","value":"祝全国人民新春快乐，万事如意"},{"name":"河南人民","value":"祝全国华人新年快乐"},{"name":"贺永胜","value":"祝您身体健康，万事如意"},{"name":"十里青山","value":"祝所有的朋友心想事成"},{"name":"濠","value":"🎆除夕夜，星空璀璨，你比烟花更耀眼"},{"name":"千","value":"祝大家新的一年心想事成发大财"},{"name":"飞帅","value":"祝大家万事如意心想事成身体健康"},{"name":"😈👿","value":"祝贺叔新的一年，早日脱单！！！哈哈哈"}]')},cfe6:function(e,t,s){},d41d:function(e,t,s){"use strict";s("cfe6")},dc78:function(e,t,s){e.exports=s.p+"media/hover.d7b64a17.wav"},f2d5:function(e){e.exports=JSON.parse('[{"title":"神舟十二号是否返航？","option":[{"key":"A","value":"是"},{"key":"B","value":"否"}],"answer":"A","desc":"现在在天上的是十三哟"},{"title":"以下哪位是神舟十三号航天员？","option":[{"key":"A","value":"翟志刚"},{"key":"B","value":"刘伯明"},{"key":"C","value":"聂海胜"}],"answer":"A","desc":"神舟十三号航天员是翟志刚、王亚平、叶光富"},{"title":"神舟十三号于几月份发射？","option":[{"key":"A","value":"九月"},{"key":"B","value":"十月"},{"key":"C","value":"十一月"}],"answer":"B","desc":"十三是10月16日0时23分上天的哦"},{"title":"以下哪位不是神舟十二号航天员？","option":[{"key":"A","value":"景海鹏"},{"key":"B","value":"刘伯明"},{"key":"C","value":"聂海胜"}],"answer":"A","desc":"神舟十二号航天员是聂海胜、刘伯明、汤红波"},{"title":"神舟十二号于几月份发射？","option":[{"key":"A","value":"四月"},{"key":"B","value":"五月"},{"key":"C","value":"六月"}],"answer":"C","desc":"十二是6月17日9时22分上天的哦"}]')},f773:function(e,t,s){e.exports=s.p+"img/title.798047f5.png"},ffa1:function(e,t,s){e.exports=s.p+"media/success.48b845e1.wav"}});