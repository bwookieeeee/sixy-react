(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),c=n(2),r=n(3),i=n(5),s=n(4),l=n(6),u=n(33),m=n(0),d=n.n(m),p=n(34),h=n.n(p),b=(n(44),n(35)),v={chat:{domain:"https://www.letsrobot.tv/chat/",channel:"jill"},sliders:{volume:{min:"0",max:"100",step:"5",value:"80"},speed:{min:"-1.0",max:"1.0",step:"0.1",value:"1.0"}},checkboxes:{table:{checked:"false"},mic:{checked:"true"}},socket:{server:"wss://letsrobot.tv",port:"8000",robotName:"sixy",robotID:"80459902"}},f=n.n(b).a.connect(v.socket.server+":"+v.socket.port);function k(e){console.log("Got message",e),f.emit("chat_message",{message:"["+v.socket.robotName+"] ."+e,robot_name:v.socket.robotName,robot_id:v.socket.robotID,room:v.chat.channel,secret:"iknowyourelookingatthisthatsfine"})}function E(e){return new Promise(function(t){return setTimeout(t,e)})}function O(){return(O=Object(u.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("got update event"),t=document.getElementById("volumeSlider"),n=document.getElementById("speedSlider"),k("vol "+t.value),e.next=6,E(1e3);case 6:k("speed "+n.value);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={value:void 0},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"slidecontainer"},d.a.createElement("p",null,this.props.name),d.a.createElement("input",{type:"range",className:"slider",min:this.props.min,max:this.props.max,value:this.state.value,step:this.props.step,id:this.props.inputId}))}}]),t}(d.a.Component),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={checked:e.checked},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",{id:this.props.divId},d.a.createElement("p",null,this.props.name),d.a.createElement("button",{className:"btn onButton",onClick:function(){return t=e.props.identifier,console.log("Got on state for",t),void k(t+("mic"===t?" unmute":" on"));var t}},"On"),d.a.createElement("button",{className:"btn offButton",onClick:function(){return t=e.props.identifier,console.log("Got off state for",t),void k(t+("mic"===t?" mute":" off"));var t}},"Off"))}}]),t}(d.a.Component),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).src=v.chat.domain+v.chat.channel,n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("iframe",{src:this.src,title:"chatbox",height:"800"})}}]),t}(d.a.Component),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).vol=v.sliders.volume,n.speed=v.sliders.speed,n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"ButtonPanel"},d.a.createElement(j,{name:"Volume",min:this.vol.min,max:this.vol.max,step:this.vol.step,inputId:"volumeSlider"}),d.a.createElement(j,{name:"Speed",min:this.speed.min,max:this.speed.max,step:this.speed.step,inputId:"speedSlider"}),d.a.createElement(w,{divId:"tableMode",name:"Table Mode",inputId:"tableButton",identifier:"table",checked:v.checkboxes.table.checked}),d.a.createElement(w,{divId:"micEnable",name:"Microphone",inputId:"micButton",identifier:"mic",checked:v.checkboxes.mic.checked}),d.a.createElement("button",{className:"btn",onClick:function(){return function(){return O.apply(this,arguments)}()},id:"updateButton"},"Update"),d.a.createElement("button",{className:"btn",onClick:function(){return console.log("Got reboot request"),void(window.confirm("Are you sure you want to reboot?")&&k("reboot"))},id:"rebootButton"},"Reboot"))}}]),t}(d.a.Component);h.a.render(d.a.createElement("div",{className:"content"},d.a.createElement("div",{className:"controls"},d.a.createElement(g,null)),d.a.createElement(y,null)),document.getElementById("root"))},44:function(e,t,n){},71:function(e,t){}},[[36,1,2]]]);
//# sourceMappingURL=main.eb4201e4.chunk.js.map