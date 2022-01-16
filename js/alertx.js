(function($) {

    'use strict';

    $.alertX = function() {

// so you can tell the version number even if all you have is the minified source
this.version = '1.0';

// default global values
this.alert_def_animation = 'none';
this.alert_def_theme = 'simple';
this.alert_def_icon = 'none';
this.alert_close_anim = true;

this.anims = new Array("none", "fade", "zoomin", "zoomout", "fall", "rise", "bounce", "shake");
this.themes = new Array("simple", "letter", "glass", "dark", "neon");
this.icons = new Array("question", "info", "warning", "success", "danger");

$('body').on('click', '.alertx-close, .alertx-notify .alertx-content', function(e) {
plugin.alertx_close(this);
});

$('body').on('click', '.alertx-confirm', function(e) {
plugin.alertx_close(this);
plugin.alertx_confirmed(this);
});

$('body').on('click', '.alertx-cancel', function(e) {
plugin.alertx_close(this);
plugin.alertx_cancelled(this);
});

// default options
var defaults = {
title : 'Message from server',
message : '<i>Nothing to display!</i>',
theme:'random', 
close_anim:true,
bg:true,
bgpic:true,
bgblur:true,
icon:'none',
footer:'',
titleClass:'',
bgClass:'',
Yalign:'center',
Xalign:'center',
type:'alert', // alert, confirm, toast
confirmed:function() {},
cancelled:function() {},
onClose:function() {},
timeout:10000,
animation:'random'
},

            // to avoid confusions, we use "plugin" to reference the current instance of the object
            plugin = this,

            // by default, we assume there are no custom options provided
            options = {};

        // this will hold the merged default, and user-provided options
        plugin.settings = {};
        // if plugin is initialized so that first argument is a string
        // that string is the message to be shown in the dialog box
        if (typeof arguments[0] === 'string') options.message = arguments[0];

        // if plugin is initialized so that first or second argument is an object
        if (typeof arguments[0] === 'object' || typeof arguments[1] === 'object')

            // extend the options object with the user-provided options
            options = $.extend(options, (typeof arguments[0] === 'object' ? arguments[0] : arguments[1]));

        /**
         *  Constructor method
         *
         *  @return object  Returns a reference to the plugin
         */
        plugin.init = function() {
        // the plugin's final properties are the merged default and user-provided options (if any)
        plugin.settings = $.extend({}, defaults, options);
		plugin.alertx(options);
        return plugin;
        };

plugin.alertx = function(options) {
//alert(this.alert_def_animation);
var alert_animation = plugin.alertx_choose(options.animation, this.anims, this.alert_def_animation);
var alert_theme = plugin.alertx_choose(options.theme, this.themes, this.alert_def_theme);
var alert_icon = plugin.alertx_choose(options.icon, this.icons, this.alert_def_icon);
var ct = $('.alertx-ctr').length + 1;

if(plugin.settings.bgblur==true){
$('.alertx-ctr').addClass('blurbox');
}

var xid = 'alertx-' + ct;

if(plugin.settings.bgpic==false){
var xbgpic = 'background-image:none;';
} else {
var xbgpic = '';
}

if(plugin.settings.bg==true){
var xbg = '<div style="'+xbgpic+'" class="alertx-bg '+plugin.settings.bgClass+'"></div>';
} else {
var xbg = '';
}

if(plugin.settings.type == 'confirm'){
var xfooter = '<div class="alertx-btn alertx-cancel red">Cancel</div><div class="alertx-btn alertx-confirm green">Confirm</div>';
} else {
var xfooter = '<div class="alertx-btn alertx-close blue">Okay</div>'+plugin.settings.footer;
}


if(plugin.settings.type == 'notify'){
var notifyClass = 'alertx-notify';
setTimeout(function(){
var ele = $('#'+xid+' .alertx-content');
plugin.alertx_close(ele);
}, plugin.settings.timeout);
} else {
var notifyClass = '';
}

var ui = '<div style="justify-content:'+plugin.settings.Yalign+';align-items:'+plugin.settings.Xalign+';" class="alertx-ctr alertx-theme-'+alert_theme+' '+notifyClass+'" data-anim="alertx-anim-'+alert_animation+'-out" id="'+xid+'">\
'+xbg+'\
<div class="alertx-border">\
<div class="alertx-out">\
<div class="alertx-head '+plugin.settings.titleClass+'">'+plugin.settings.title+'</div>\
<div class="alertx-content"><b class="alertx-icon alertx-icon-'+alert_icon+'"></b>'+plugin.settings.message+'</div>\
<div class="alertx-foot">\
'+xfooter+'\
</div>\
</div>\
</div>\
</div>';

$('body').append(ui);


if(plugin.settings.bgblur == true && plugin.settings.type != 'notify'){
$('.body-ctr').addClass('blurred');
}


setTimeout(function(){
plugin.alertx_animate(xid, alert_animation);
}, 10);
};

plugin.alertx_choose = function(xval, arr, def){
if(xval!==undefined){
var val = xval;
} else {
var val = def;
}
if(val=='random'){
val = arr[Math.floor(Math.random()*arr.length)];
}

return val;
};


plugin.alertx_animate = function(xid, alert_animation){
$('#'+xid).attr('data-anim', 'alertx-anim-'+alert_animation+'-in');
};


plugin.alertx_run = function(xthis, xid){
$('#'+xid).remove();

// if a callback function exists for when closing the dialog box
if (plugin.settings.onClose && typeof plugin.settings.onClose === 'function'){

// execute the callback function
plugin.settings.onClose(xid);
}
};


plugin.alertx_confirmed = function(xthis){
if (plugin.settings.confirmed && typeof plugin.settings.confirmed === 'function'){
plugin.settings.confirmed(xthis);
}
};

plugin.alertx_cancelled = function(xthis){
if (plugin.settings.cancelled && typeof plugin.settings.cancelled === 'function'){
plugin.settings.cancelled(xthis);
}
};


plugin.alertx_close = function(xthis){
var xid = $(xthis).closest('.alertx-ctr').attr('id');
if(xid !== undefined){
if($('.alertx-ctr').length==1){
$('.blurred').removeClass('blurred');
} else {
var prev_id = parseInt(xid.replace('alertx-',''))-1;
$('#alertx-'+prev_id).removeClass('blurbox');
}
if(plugin.settings.close_anim==false){
$('#'+xid).remove();
} else {
var anim = $('#'+xid).attr('data-anim');
anim = anim.replace('-in','-out');
$('#'+xid).attr('data-anim', anim);
if(anim == 'alertx-anim-none-out'){
setTimeout(function(){ plugin.alertx_run(xthis, xid); }, 10);
} else {
setTimeout(function(){ plugin.alertx_run(xthis, xid); }, 500);
}
}
} // endif undefined
};

        // fire up the plugin!
        // call the "constructor" method
       return plugin.init();
    };

})(jQuery);