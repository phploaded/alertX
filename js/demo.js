function demo_alert_1(){
$.alertX('This is the message area that will contain your content. Its interesting to know that this alert <u>supports html content</u> in <i>message area</i>, enabling you to <b style="color:red;">customize</b> it as you want to. You may click on close button to close this alert.');
}

function demo_alert_2(){
$.alertX({
title:'My own title here',
message:'This is the message.'
});
}

function demo_alert_anim(anim){
$.alertX({
message:'This alert opened with <b>'+anim+'</b> animation. Same animation will apply in reverse mode when closing the alertX.',
title:anim+' animation example',
animation:anim
});
}


function demo_alert_theme(themex){
$.alertX({
message:'This alert opened with <b>'+themex+'</b> theme. You may develop your own theme or download more from our website.',
title:themex+' theme example',
theme:themex
});
}


function demo_alert_icon(iconx){
$.alertX({
message:'This alert opened with <b>'+iconx+'</b> icon. These may come handy to represent various situations.',
title:iconx+' icon example',
icon:iconx
});
}

function demo_alert_color(color){
$.alertX({
message:'This alertX have <b>'+color+'</b> colored title and backdrop color. Please note that backdrop and title color can be different if you wanted them to.',
title:color+' color class example',
titleClass:color,
bgClass:color
});
}

function demo_alert_bg(a,b,c){
$.alertX({
message:'Backdrop : '+a+'<br>\
Backdrop image: '+b+'<br>\
Blur effect: '+c+'<br>\
',
title:'Backdrop options example',
bg:a,
bgpic:b,
bgblur:c
});
}

function demo_confirm(msg){
$.alertX({
message:msg,
title:'Please confirm...',
type:'confirm',
confirmed:function(){ $.alertX('You confirmed it!'); },
cancelled:function(){ $.alertX('You cancelled it!'); }
});
}


function demo_position(Yalignx, Xalignx){
$.alertX({
message:'This box should be aligned as per the link you had clicked.',
title:'Alignment preview',
Yalign:Yalignx,
Xalign:Xalignx
});
}

function demo_alert_buttons(){
var btns = '<a href="javascript:void(0)" class="alertx-btn red">Red</a>\
<a href="javascript:void(0)" class="alertx-btn green">Green</a>\
<a href="javascript:void(0)" class="alertx-btn teal">Teal</a>\
<a href="javascript:void(0)" class="alertx-btn black">Black</a>\
<a href="javascript:void(0)" class="alertx-btn gray">Gray</a>\
<a href="javascript:void(0)" class="alertx-btn blue">Blue</a>\
<a href="javascript:void(0)" class="alertx-btn purple">Purple</a>\
<a href="javascript:void(0)" class="alertx-btn gold">Gold</a>\
<a href="javascript:void(0)" class="alertx-btn orange">Orange</a>'; 
$.alertX({
message:'Here we have shown many buttons which can be useful on various places.<br><br>'+btns,
title:'Example of various css buttons'
});
}


function demo_multiple(){
$.alertX({
message:'First message box.',
Yalign:'start',
Xalign:'start',
bgClass:'teal',
titleClass:'teal',
bgblur:true
});


setTimeout(function(){
$.alertX({
message:'Second message box.',
Yalign:'center',
Xalign:'start',
bgClass:'red',
titleClass:'red',
bgblur:false
});
}, 1000);

setTimeout(function(){
$.alertX({
message:'Third message box.',
Yalign:'end',
Xalign:'start',
bgClass:'gold',
titleClass:'gold',
bgblur:false
});
}, 2000);

setTimeout(function(){
$.alertX({
message:'Fourth message box.',
Yalign:'start',
Xalign:'end',
bgClass:'green',
titleClass:'green',
bgblur:false
});
}, 3000);

setTimeout(function(){
$.alertX({
message:'Fifth message box. This is last box.',
Yalign:'center',
Xalign:'center',
bgClass:'purple',
titleClass:'purple',
bgblur:false
});
}, 4000);

}


function demo_notification(){
$.alertX({
message:'This is a notification message. It disappears in 5 seconds. You may click on it to close immediately.',
Yalign:'start',
Xalign:'start',
theme:'dark',
timeout:5000,
bgblur:false,
type:'notify'
});

$.alertX({
message:'This is a notification message. It disappears in 10 seconds. You may click on it to close immediately.',
Yalign:'start',
Xalign:'end',
theme:'glass',
timeout:10000,
bgblur:false,
type:'notify'
});

$.alertX({
message:'This is a notification message. It disappears in 15 seconds. You may click on it to close immediately.',
Yalign:'center',
Xalign:'center',
theme:'neon',
timeout:15000,
bgblur:false,
type:'notify'
});

$.alertX({
message:'This is a notification message. It disappears in 20 seconds. You may click on it to close immediately.',
Yalign:'end',
Xalign:'end',
theme:'simple',
timeout:20000,
bgblur:false,
type:'notify'
});


$.alertX({
message:'This is a notification message. It disappears in 25 seconds. You may click on it to close immediately.',
Yalign:'end',
Xalign:'start',
theme:'letter',
timeout:25000,
bgblur:false,
type:'notify'
});
}


function demo_footer_text(){
$.alertX({
message:'Can you see my name in footer near button area?',
title:'Footer text example...',
footer:'Satish Kumar Sharma'
});
}


function demo_footer_btns(){
$.alertX({
message:'You can add HTML same way as you added text in previous example. You should see multiple buttons in footer.',
title:'Footer HTML example...',
footer:'<a href="javascript:void(0)" onclick="demo_alert_color2(\'red\')" class="alertx-btn red">red</a>\
<a href="javascript:void(0)" onclick="demo_alert_color2(\'green\')" class="alertx-btn green">green</a>\
<a href="javascript:void(0)" onclick="demo_alert_color2(\'teal\')" class="alertx-btn teal">teal</a>\
<a href="javascript:void(0)" onclick="demo_alert_color2(\'pink\')" class="alertx-btn pink">pink</a>\
<a href="javascript:void(0)" onclick="demo_alert_color2(\'brown\')" class="alertx-btn brown">brown</a>'
});
}


function demo_alert_color2(xcolor){
$('.alertx-head').attr('class', 'alertx-head '+xcolor);
$('.alertx-bg').attr('class', 'alertx-bg '+xcolor);
}