(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":0,"name":"Cow","image":"./cow.gif","ispicked":false},{"id":1,"name":"Ren","image":"./ren.png","ispicked":false},{"id":2,"name":"Stimpy","image":"./stimpy.png","ispicked":false},{"id":3,"name":"Daria","image":"./daria.png","ispicked":false},{"id":4,"name":"The Brain","image":"./brain.png","ispicked":false},{"id":5,"name":"Pinky","image":"./pinky.gif","ispicked":false},{"id":6,"name":"Darkwing Duck","image":"./darkwing.png","ispicked":false},{"id":7,"name":"Baloo","image":"./baloo.gif","ispicked":false},{"id":8,"name":"Launchpad McQuack","image":"./launchpad.png","ispicked":false},{"id":9,"name":"Inspector Gadget","image":"./inspector_gadget.png","ispicked":false},{"id":10,"name":"Bananaman","image":"./bananaman.png","ispicked":false},{"id":12,"name":"Beavis and Butthead","image":"beavis_and_butthead.png","ispicked":false}]')},function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(7),s=t.n(c),r=t(1),m=t(2),o=t(4),l=t(3),d=t(5),u=t(8),g=t.n(u),p=(t(15),function(e){return i.a.createElement("div",{className:e.shake?"container shake":"container"},i.a.createElement("div",{className:"row"},e.children))}),f=(t(16),function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"nav-item"},e.message),i.a.createElement("div",{className:"nav-item"},i.a.createElement("p",{className:"card-text"},"Score: ",e.counter," | Top Score: ",e.topScore)))}),k=(t(17),function(){return i.a.createElement("div",{className:"jumbotron"},i.a.createElement("div",{className:"banner"},i.a.createElement("h1",{className:"title"},"MEMORY GAME"),i.a.createElement("p",{className:"lead"},"Click an image below to earn points, but don't click on any more than once!")))}),h=(t(18),function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"text-center-align",id:"copyright"},"\xa9 bohdecoded 2019"))}),b=(t(19),function(e){return i.a.createElement("div",{className:"col-sm-4 card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{className:"img-responsive character",alt:e.name,src:e.image,id:e.id,ispicked:e.isPicked,onClick:e.handleChoice})))}),E=t(9),v=(t(20),function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(o.a)(this,Object(l.a)(a).call(this))).handleChoice=function(a){var t=a.target,n=a.target.getAttribute("ispicked"),i=e.state,c=i.count,s=i.topScore;if(e.setState({shake:!1}),"false"===n)t.setAttribute("ispicked","true"),e.setState({message:"You guessed correct!",count:c+1}),c>=s&&(e.setState({topScore:c+1}),10===c&&e.setState({isPicked:!1,message:"You Win!",count:0}));else if("true"===n)return t.setAttribute("ispicked","false"),e.setState({shake:!0,isPicked:!1,message:"Sorry, Play Again!",count:0})},e.state={count:0,topScore:0,newcharacters:E,message:"Click an image to begin!",shake:!1,isPicked:!1},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.newcharacters.map((function(a){return i.a.createElement(b,{handleChoice:e.handleChoice.bind(e),id:a.id,key:a.id,name:a.name,image:a.image,isPicked:a.ispicked.toString()})}));return i.a.createElement("div",{className:"game"},i.a.createElement(f,{message:this.state.message,counter:this.state.count,topScore:this.state.topScore}),i.a.createElement("div",{className:"game-body"},i.a.createElement(k,null),i.a.createElement(p,{shake:this.state.shake},g.a.randomizeArray(a))),i.a.createElement(h,null))}}]),a}(n.Component)),N=(t(21),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null))}}]),a}(n.Component));t(22);s.a.render(i.a.createElement(N,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.593da52d.chunk.js.map