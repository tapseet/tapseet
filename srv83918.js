var foxpush_config =
{
  domain:'androidred1.com',
  foxsubdomain:'fazlkahblogspotcomeg',
  icon:'https://4.bp.blogspot.com/-7NKUL21LIyM/WVE9dPcEeQI/AAAAAAAACSI/8EAAz9qN-cArmqcXWlY0GQ4qK9dwGYJHgCLcBGAs/s1600/18699979_449405852073358_3169322173479406133_n.png',
  title:'اشترك الان في تنبيهات اندرويد ريد',
  desc:'ليصلك كل البرامج وكل شي قبل الجميع اشترك الان',
  short_title:'التنبيهات',
  allow_text:'اشترك',
  deny_text:'ليس الان',
  allow_mobile:1,
  allow_firefox:1,
  allow_safari:1,
  popup_style:'box',
  is_cache:'',
};

var foxpush_localstorage_config = {
    foxpush_localstorage:0,
    foxpush_status:'none',
    foxpush_user_token:'',
    foxpush_segmentation:''
};!function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/CrOS/.test(t),a=n(/edge\/(\d+(\.\d+)?)/i),f=n(/version\/(\d+(\.\d+)?)/i),l=/tablet/i.test(t),c=!l&&/[^-]mobi/i.test(t),h;/opera|opr/i.test(t)?h={name:"Opera",opera:e,version:f||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?h={name:"Yandex Browser",yandexbrowser:e,version:f||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?(h={name:"Windows Phone",windowsphone:e},a?(h.msedge=e,h.version=a):(h.msie=e,h.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?h={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?h={name:"Chrome",chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?h={name:"Microsoft Edge",msedge:e,version:a}:/chrome|crios|crmo/i.test(t)?h={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?(h={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},f&&(h.version=f)):/sailfish/i.test(t)?h={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?h={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(h={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(h.firefoxos=e)):/silk/i.test(t)?h={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:o?h={name:"Android",version:f}:/phantom/i.test(t)?h={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?h={name:"BlackBerry",blackberry:e,version:f||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(h={name:"WebOS",webos:e,version:f||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(h.touchpad=e)):/bada/i.test(t)?h={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?h={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||f}:/safari/i.test(t)?h={name:"Safari",safari:e,version:f}:h={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!h.msedge&&/(apple)?webkit/i.test(t)?(h.name=h.name||"Webkit",h.webkit=e,!h.version&&f&&(h.version=f)):!h.opera&&/gecko\//i.test(t)&&(h.name=h.name||"Gecko",h.gecko=e,h.version=h.version||n(/gecko\/(\d+(\.\d+)?)/i)),!h.msedge&&(o||h.silk)?h.android=e:i&&(h[i]=e,h.ios=e);var p="";h.windowsphone?p=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(p=n(/os (\d+([_\s]\d+)*) like mac os x/i),p=p.replace(/[_\s]/g,".")):o?p=n(/android[ \/-](\d+(\.\d+)*)/i):h.webos?p=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):h.blackberry?p=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):h.bada?p=n(/bada\/(\d+(\.\d+)*)/i):h.tizen&&(p=n(/tizen[\/\s](\d+(\.\d+)*)/i)),p&&(h.osversion=p);var d=p.split()[0];if(l||i=="ipad"||o&&(d==3||d==4&&!c)||h.silk)h.tablet=e;else if(c||i=="iphone"||i=="ipod"||o||h.blackberry||h.webos||h.bada)h.mobile=e;return h.msedge||h.msie&&h.version>=10||h.yandexbrowser&&h.version>=15||h.chrome&&h.version>=20||h.firefox&&h.version>=20||h.safari&&h.version>=6||h.opera&&h.version>=10||h.ios&&h.osversion&&h.osversion.split()[0]>=6||h.blackberry&&h.version>=10.1?h.a=e:h.msie&&h.version<10||h.chrome&&h.version<20||h.firefox&&h.version<20||h.safari&&h.version<6||h.opera&&h.version<10||h.ios&&h.osversion&&h.osversion.split()[0]<6?h.c=e:h.x=e,h}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n._detect=t,n});eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 15(16){}5 13(D,q){1 6=4.r(\'6\');6.1i=q;1a(6.B.V>0){D.t(6.B[0]);}}1 j=3.m?"m":"F";1 o=3[j];1 v=j=="F"?"S":"R";o(v,5(e){c(e.d){c(e.d.u!==i){p.T=e.d.u;p.Q=e.d.W;}}},O);1 k=5(){1 l=4.r(\'L\');l.M=\'N\';l.P=\'K://\'+U.1m+\'.1f.1e/1d-1b.1c?1g=\'+1h.1l()+\'\';4.1k(\'1j\')[0].t(l);};1 g=X||19||12||11;c(g)g(k);10 3.m(\'Y\',k);5 Z(y,A,w,h){1 E=3.n!=i?3.n:8.a;1 z=3.x!=i?3.x:8.f;1 9=3.G?3.G:4.7.J?4.7.J:8.9;1 b=3.H?3.H:4.7.I?4.7.I:8.b;1 a=((9/2)-(w/2))+E;1 f=((b/2)-(h/2))+z;1 C=3.14(y,A,\'18=17, 9=\'+w+\', b=\'+h+\', f=\'+f+\', a=\'+a);c(3.s){C.s();}}',62,85,'|var||window|document|function|div|documentElement|screen|width|left|height|if|data||top|raf||undefined|eventMethod|cb||addEventListener|screenLeft|eventer|localStorage|str|createElement|focus|appendChild|status|messageEvent||screenTop|url|dualScreenTop|title|children|newWindow|el|dualScreenLeft|attachEvent|innerWidth|innerHeight|clientHeight|clientWidth|https|link|rel|stylesheet|false|href|foxpush_user_token|message|onmessage|foxpush_status|foxpush_config|length|token|requestAnimationFrame|load|foxpush_window|else|msRequestAnimationFrame|webkitRequestAnimationFrame|fox_appendHtml|open|_foxpush_subscribe|id|yes|scrollbars|mozRequestAnimationFrame|while|peCVw|css|foxpush_a1eum6WfobcGo8r7|net|foxpush|rand|Math|innerHTML|head|getElementsByTagName|random|foxsubdomain'.split('|')))
            function fp_render_deny_box()
            {
                var fp_deny_box = '<div class="foxpush_blocked_box foxpush_blocked_box_left" style="display: none;" id="foxpush_subscribe"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 535.5 535.5" style="enable-background:new 0 0 535.5 535.5;" xml:space="preserve"><g><g id="notifications-on"><path d="M142.8,53.55l-35.7-35.7C45.9,63.75,5.1,135.15,0,216.75h51C56.1,147.9,89.25,89.25,142.8,53.55z M484.5,216.75h51    c-5.1-81.6-43.35-153-104.55-198.9l-35.7,35.7C446.25,89.25,479.4,147.9,484.5,216.75z M433.5,229.5    c0-79.05-53.55-142.8-127.5-160.65V51c0-20.4-17.85-38.25-38.25-38.25c-20.4,0-38.25,17.85-38.25,38.25v17.85    C155.55,86.7,102,150.45,102,229.5v140.25l-51,51v25.5h433.5v-25.5l-51-51V229.5z M267.75,522.75c2.55,0,7.65,0,10.2,0    c17.85-2.55,30.6-15.3,35.7-30.6c2.55-5.101,5.1-12.75,5.1-20.4h-102C216.75,499.8,239.7,522.75,267.75,522.75z"/></g></g></svg>'+ foxpush_config.short_title +'</span>';
                fox_appendHtml(document.body, fp_deny_box);
            }
        eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])}}return p}('i h(){j 6=\'<0 3="k"l="g:f;"1="b 9">\\<0 1="c">\\<d e="\'+ 2.m +\'"n=""/>\\</0>\\<0 1="v">\\<5>\'+ 2.w +\'</5>\\<8>\'+ 2.y +\'</8>\\<a 4="#"3="u"1="7 p">\'+ 2.o +\'</a>\\<a 4="#"3="r"1="7 t">\'+ 2.s +\'</a></0></0>\';q(z.x,6);}',36,36,'div|class|foxpush_config|id|href|h1|fp_box_html|foxpush_btn|h2|fox_dir_rtl||foxpush_postion_top|foxpush_icon|img|src|none|display|fp_render_box|function|var|foxpush_box|style|icon|alt|allow_text|foxpush_allow|fox_appendHtml|foxpush_deny|deny_text|foxpush_block|foxpush_subscribe|foxpush_content|title|body|desc|document'.split('|')))
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('e u(){5.d=\'v\';2(a.q==\'J\'){4.3(\'K\').i.n(\'o\',\'m\',\'l\');}j 2(a.q==\'M\'){4.3(\'I\').i.n(\'o\',\'m\',\'l\');}c 7;}8 g=7;2(!5.r){5.r=p.r;5.d=p.d;5.G=p.G;5.H=p.H;}8 k=6;2(b.P&&b.x>=T){k=7;}j 2(b.N&&b.x>9){k=7;}j 2(b.O&&b.x>S){k=7;}2(U(Z)!==\'10\'&&k==7){5.r=1;2(b.V&&a.W==0){g=6;}2(5.d==\'X\'){g=6;}2(g==7&&5.d!=\'v\'&&a.q==\'J\'){Y();8 w=4.3(\'w\');w.h=e(){u();c 6;};8 t=4.3(\'L\');t.h=e(){u();c 6;};8 f=4.3(\'s\');f.h=e(){4.3(\'K\').i.n(\'o\',\'m\',\'l\');B(\'A://\'+a.z+\'.D.y\',\'F\',E,C);c 6;};}j 2(g==7&&5.d!=\'v\'&&a.q==\'M\'){R();8 t=4.3(\'L\');t.h=e(){u();c 6;};8 f=4.3(\'s\');f.h=e(){4.3(\'I\').i.n(\'o\',\'m\',\'l\');B(\'A://\'+a.z+\'.D.y\',\'F\',E,C);c 6;};}j 2(g==7&&5.d==\'v\'){Q();8 f=4.3(\'s\');f.h=e(){4.3(\'s\').i.n(\'o\',\'m\',\'l\');B(\'A://\'+a.z+\'.D.y\',\'F\',E,C);c 6;};}}',62,63,'||if|getElementById|document|localStorage|false|true|var||foxpush_config|bowser|return|foxpush_status|function|foxpush_subscribe_button|foxpush_popup_allowed|onclick|style|else|supported_browser|important|none|setProperty|display|foxpush_localstorage_config|popup_style|foxpush_localstorage|foxpush_subscribe|foxpush_deny_button|foxpsuh_blocked|blocked|foxpush_close_overlay|version|net|foxsubdomain|https|foxpush_window|500|foxpush|400|foxpsuh_window|foxpush_user_token|foxpush_segmentation|foxpush_box|overlay|foxpush_overlay|foxpush_deny|box|safari|firefox|chrome|fp_render_deny_box|fp_render_box|44|40|typeof|android|allow_mobile|allowed|fp_render_overlay_box|Storage|undefined'.split('|'),0,{}))
