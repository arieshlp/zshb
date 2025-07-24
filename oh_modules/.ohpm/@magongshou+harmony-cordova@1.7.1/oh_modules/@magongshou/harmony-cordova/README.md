<div align="center">
    <h2 align="center">Cordova HarmonyOS</h2>
    <div align="center">遵守Cordova（<a href="https://cordova.apache.org">https://cordova.apache.org</a>）官方插件接口规范</div>
</div>

## 优势
Cordova HarmonyOS 所有插件遵守cordova（<a href="https://cordova.apache.org">https://cordova.apache.org</a>）官方接口规范，<font color="red">原android和Ios项目在几分钟内就可以生成原生纯血鸿蒙APP，无需做任何研发，节省大量时间和人力成本</font>。

## 支持框架
支持移动端跨平台框架：
<ul style="list-style-type: none;">
<li>（1）vue.js </li>
<li>（2）ionic+angular.js </li>
<li>（3）ionic React </li>
<li>（4）jquery.js框架</li>
</ul>

## 开发说明
Cordova，包含sdk和插件，并支持自定义插件研发，Cordova sdk采用C/C++研发，底层采用自研Socket TCP/IP通讯，SSL/TLS连接强制使用session复用技术和本地文件缓存，大大提高应用层https网络请求效率，另外cordova HarmonyOS遵守cordova（<a href="https://cordova.apache.org">https://cordova.apache.org</a>）官方标准，除了提供鸿蒙版cordova sdk外，也提供了大量的插件，并且仍在持续新增插件，同时支持自定义插件研发，所有插件遵守cordova官方接口规范，因此开发者可以参考cordova官方插件的开发文档开发鸿蒙版app。

## 附加说明
鸿蒙cordova除了完全支持cordova（<a href="https://cordova.apache.org">https://cordova.apache.org</a>）官方标准外，鸿蒙cordova在官方的标准上开发了cordova复用功能，在鸿蒙APP中，开发者可以创建多个cordova，每个cordova都可以独立拥有自己的插件列表，并且各个cordova之间可以互相通讯，特别适用于平板、大屏幕的混合式研发。

## 技术方案
点击查看技术方案视频说明：<a href="https://www.bilibili.com/video/BV1z86yYaEzz/?vd_source=ec966efde4d36f357c9b3abf3aa2c5a8">https://www.bilibili.com/video/BV1z86yYaEzz/?vd_source=ec966efde4d36f357c9b3abf3aa2c5a8</a>

## 开发背景
cordova是Apache基金会的开源项目，官方网站：<a href="https://cordova.apache.org">https://cordova.apache.org</a>，是<font color="red">移动端跨平台框架，地位不可撼动，大量厂商直接或间接采用此框架开发APP</font>；但是目前不支持HarmonyOS Next版本，开发者将原Android和Ios项目移植到HarmonyOS Next版，无法适配，为此我们公司研发了cordova HarmonyOS，遵守cordova官方标准，使适配纯血鸿蒙在几分钟内就可以完成，无需投入任何研发，新开发的项目，一次研发就适用于Android、Ios和HarmonyOS三大平台，也节省了大量的时间和人力成本。

## demo说明
harmony-cordova的调用使用demo，请查看仓库代码<a href="https://gitee.com/magongshou/harmony-cordova">https://gitee.com/magongshou/harmony-cordova</a>,仓库调用代码仍在更新中。


---
## 自带插件
<table width="100%">
    <tr>
      <th width="30%">插件ID</th>
      <th width="70%">接口说明</th>
    </tr>
<tr>
    <tr>
      <td>cordova-plugin-device</td>
      <td>
            <div>名称：设备信息</div>
            <hr>
            <div>文档地址：<a href="https://github.com/apache/cordova-plugin-device">https://github.com/apache/cordova-plugin-device</a></div>
            <hr style="height:1px;border:0px;" >
            所有接口遵守官方文档，uuid和serial读取是鸿蒙系统的ODID,鸿蒙只允许系统应用读取uuid和serial，普通应用无权读取，具体文档参考华为官方文档：<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-device-info-V5">https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-device-info-V5</a>
            <div>鸿蒙在该插件的基础上增加两个设置web字体大小的接口：</div>
<pre>
    //设置web字体放大缩小倍数
    //scale是放大倍数，例如1.1放大1.1倍
    cordova.exec(function(){
        //设置成功后回调
    }, null, "Device", "setScaleFont", [scale]);
</pre>
<pre>
    //获取web字体放大缩小倍数
    cordova.exec(function(scale){
      //scale获取到的放大倍数，默认是1，保持默认字体
     },null, "Device", "getScaleFont", []);
</pre>
        </td>
    </tr>
    <tr>
      <td>cordova-plugin-whitelist</td>
      <td>
            <div>名称：网络访问白名单</div>
            <hr>
            <div>文档地址：<a href="https://github.com/apache/cordova-plugin-whitelist">https://github.com/apache/cordova-plugin-whitelist</a></div>
            <hr>
            <font color="red">使用cordova HarmonyOS不存在跨域访问问题</font>，任何域名都可以访问网络，因此为了安全性，需要配置网络访问白名单，使用方法保持和原接口一致外，做了一些修改如下:
            <ul style="list-style-type: none;">
            <li>（1）自动识别http和https，http是80端口，https是443端口,支持自定义端口，但无需在config.xml里面配置</li>
            <li>（2）不支持目录配置，就是直接配置域名就可以了，域名支持二级域名通配符</li>
            <li>（3）举例1：在config.xml里面添加< allow-intent href="*.magongshou.com" />支持maongshou.com的所有二级域名</li>
            <li>（4）举例2：在config.xml里面添加< allow-intent href="*" /> 支持所有域名></li>
            </ul>
        </td>
    </tr>
    <tr>
      <td>cordova-hot-code-push-plugin</td>
      <td >
        <div>名称：热更新插件</div>
        <hr>
        <div>文档地址:<a href="https://github.com/nordnet/cordova-hot-code-push">https://github.com/nordnet/cordova-hot-code-push</a></div>
        <hr>
        <div>
            热更新部分js和css文件，无需升级整个app，主要是解决紧急情况下的bug，升级app还是建议上架应用市场。调用方法如下：
            <ul style="list-style-type: none;">
            <li>（1）修改插件两处bug，在rawfile/plugins/cordova-hot-code-push-plugin/www/chcp.js文件
                  <pre>
第60行: var resultObj = JSON.parse(msg);
   改为:var resultObj = msg; 
第83行:callback(resultObj.error, resultObj.data);
   改为:callback(resultObj.action, resultObj.error, resultObj.data);
                  </pre>
            </li>
            <li>（2）js调用接口initPlugin初始化插件,插件自动调用，无需手动调用</li>
            <li>（3）js调用接口chcp.fetchUpdate检查是否有更新,调用此函数可以传入新的升级url地址，如果有更新回调action返回chcp_updateIsReadyToInstall,没有更新返回chcp_nothingToUpdate</li>
            <li>（4）js调用接口chcp.installUpdate立即启用更新，然后app会自动重启</li>
            <li>（5）如果不调用步骤3，下次app重启也会自动启用更新</li>
            </ul>
        </div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-network-information</td>
      <td>
        <div>名称：网络管理</div>
        <hr>
        <div>文档地址：<a href="https://github.com/apache/cordova-plugin-network-information">https://github.com/apache/cordova-plugin-network-information</a></div>
        <hr>
        <div>cordova网络管理，查看网络连接状态，wifi,4G和5G等连接类型,需申请网络权限，才可以正常使用，见<a href="#permission">声明权限部分</a></div>
     </td>
    </tr>
    <tr>
      <td>cordova-plugin-bd-geolocation</td>
      <td >
        <div>名称：百度地理位置定位</div>
        <hr>
        <div>文档地址:<a href="https://github.com/nordnet/cordova-hot-code-push">https://github.com/laixiangran/cordova-plugin-bd-geolocation</a></div>
        <hr>
        <div>
            百度地理位置定位，支持wgs84、gcj02和bd09ll坐标,需申请位置权限，才可以正常使用，见<a href="#permission">声明权限部分</a><br/>
            特别说明：<br/>
            百度地理位置定位定位插件和cordova地理位置定位插件，不能同时使用，插件有冲突只能选其一
        </div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-geolocation</td>
      <td >
        <div>名称：cordova地理位置定位官方插件</div>
        <hr>
        <div>文档地址:<a href="https://github.com/laixiangran/cordova-plugin-bd-geolocation">https://github.com/apache/cordova-plugin-geolocation</a></div>
        <hr>
        <div>
            cordova官方地理位置定位插件，仅支持wgs84坐标,需申请位置权限，才可以正常使用，见<a href="#permission">声明权限部分</a><br/>
            特别说明：<br/>
            cordova官方定位插件和百度地理位置定位插件，不能同时使用，插件有冲突只能选其一
        </div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-inappbrowser</td>
      <td>
        <div>名称：内置浏览器</div>
        <hr>
        <div>文档地址:<a href="https://github.com/apache/cordova-plugin-inappbrowser">https://github.com/apache/cordova-plugin-inappbrowser</a></div>
        <hr>
        <div>cordova的app的内置浏览器，所有API遵守cordova官方标准，参考官方文档。</div>
        <div>调用方法如下：</div>
<pre>
var ref = cordova.InAppBrowser.open(url, target, options);
//或者如下：
var ref = window.open(url, target, options);
</pre>
        <div>url:打开的网址，必须指定http(s)，不指定http(s)默认打开本地网页，支持file协议打开沙箱路径</div>
        <div>target:支持_blank, _self, _system，特别说明：鸿蒙_blank和_self都在InAppBrowser打开，主要是为了兼容InAppBrowser的消息事件和监听的相关方法，如果要在cordova webview打开，可以直接在cordova webview中使用< a href="https://*.*.com" ></a>打开，如果指定target="_blank"，cordova会自动打开内置浏览器，打开页面</div>
        <div>options:鸿蒙支持如下说明</div>
            <ul style="list-style-type: none;">
            <li>location:设置 yes 或者 no显示导航工具栏，默认是yes</li>
            <li>hidden：设置 yes 或者 no显示或者隐藏内置浏览器，默认是no</li>
            <li>beforeload:当URL将要加载到当前Web中时，让宿主应用程序有机会获得控制权，加载非HTTP(s)协议的跳转可以触发，其他情况下无法触发</li>
            <li>clearcache:设置yes 或者 no 清除缓存，默认no</li>
            <li>clearsessioncache:设置yes 或者 no 清除session cookie 默认 no</li>
            <li>closebuttoncaption:设置一个字符串，代替X的关闭图标，默认是空字符串</li>
            <li>closebuttoncolor:设置关闭图标或者字符串的颜色，例如closebuttoncolor=#ff0000,默认是空字符串</li>
            <li>fullscreen:设置yes或者no是否全屏，默认no</li>
            </ul>
        <div>鸿蒙内置浏览器的函数完全按照cordova的官方标准研发，主要如下：</div>
            <ul style="list-style-type: none;">
            <li>addEventListener</li>
            <li>removeEventListener</li>
            <li>close</li>
            <li>show</li>
            <li>hide</li>
            <li>executeScript</li>
            <li>insertCSS</li>
            </ul>
        <div>调用示例代码如下，使用方法</div>
<pre>
var ref = window.open("https://www.chuzhitong.com", 
    '_blank', 
    'location=yes,hidden=no,closebuttoncolor=#ff0000,fullscreen=yes');
//加载非HTTP(s)协议的跳转可以触发，其他情况下无法触发
ref.addEventListener("beforeload", function(url){
    alert("beforeload function:"+url);
});
ref.addEventListener("loadstart", function(){
    console.log("loadstart function");
});
ref.addEventListener("loadstop", function(){
    //执行js返回arrayBuffer数据
    ref.executeScript({code:"function test(){console.log('execute function');\
        let buffer = new ArrayBuffer(1);\
        let view = new Uint8Array(buffer);\
        view[0] = 255; return buffer;} test();"},function(message){
        //message js执行结果的返回值支持string/number/bool/array/arrayBuffer
        function stringToUint8Array(str){
            var arr = [];
            for (var i = 0, j = str.length; i < j; ++i) {
                arr.push(str.charCodeAt(i));
            }
            var tmpUint8Array = new Uint8Array(arr);
            return tmpUint8Array
        }
        var temp = stringToUint8Array(atob(message));
        console.log("execute callback:"+temp[0]);
    });
    //执行js并调用postMessage通知主浏览器
    //消息函数例如cordova_iab.postMessage("")
    ref.executeScript({ code: "\
        var message = 'this is the message';\
        var messageObj = {my_message: message};\
        var stringifiedMessageObj = JSON.stringify(messageObj);\
        cordova_iab.postMessage(stringifiedMessageObj);"
    });
    //加载rawfile/www/js/test.js,关于虚拟域名https://www.example.com请参考最后面的问题说明
    ref.executeScript({ file: "https://www.example.com/www/js/test.js" }, function(){
        ref.executeScript({code:"test();"});//加载成功后，执行test.js文件里面的函数
        console.log("execute callback:");
    });
    //加载在线js，支持跨域加载
    ref.executeScript({ file: "https://www.chuzhitong.com/js/test.js" });
    //加载rawfile/www/js/test.css,关于虚拟域名https://www.example.com请参考最后面的问题说明
    ref.insertCSS({ file: "https://www.example.com/css/test.css" });
    //加载在线css
    ref.insertCSS({ file: "https://www.chuzhitong.com/css/test.css" }, function(){
        console.log("css execute callback");
    });
    //插入css代码，无回调函数
    ref.insertCSS({ code: "body{font-size:200px;}" });
    //插入css代码，有回调函数
    ref.insertCSS({ code: "body{font-size:200px;}" }, function(){
        console.log("css execute callback");
    });
    console.log("loadstop function");
});
ref.addEventListener("message", function(message){
    console.log("message function:"+message);
});
ref.addEventListener("exit", function(){
    console.log("exit function");
});
ref.addEventListener("download", function(paras){
    //应用可以根据下载的url，设定保存的文件名
    console.log("download:"+JSON.stringify(paras));
    function downloadInAppBrowser(uri, fileName) {
        function onErrorReadFile(error) {
        }
        function successFun(fileEntry) {
        }
        function failFun(error) {
            console.log("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        }
        function progressFun(progressEvent) {
            var progress = progressEvent.loaded / progressEvent.total * 100;
            console.log("download:"+progress);
        }
        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, 
            function(dirEntry) {
            var targetPath = dirEntry.toURL() + fileName;
            var fileTransfer = new FileTransfer();
            fileTransfer.onprogress = progressFun;
            fileTransfer.download(
                uri,
                targetPath,
                successFun,
                failFun,
                false,
                {}
            );
        });
    }
    downloadInAppBrowser(paras.url, "chuzhitong.apk");
});
ref.addEventListener("customscheme", function(para){
    console.log("customscheme function:"+JSON.stringify(para));
});
</pre>
        <div>加载网页示例代码</div>
<pre>
//加载rawfile/local-url.html
var ref = cordova.InAppBrowser.open('/local-url.html');
//加载沙箱路径文件/data/storage/el2/base/files/local-url.html
cordova.InAppBrowser.open('/data/storage/el2/base/files/index.html', '_blank');
//使用file协议加载沙箱路径文件/data/storage/el2/base/files/local-url.html
cordova.InAppBrowser.open('file:///data/storage/el2/base/files/index.html', '_blank');
//加载在线网页
var ref = cordova.InAppBrowser.open('https://cn.bing.com', '_blank');
//在系统浏览器中加载在线网页
var ref = cordova.InAppBrowser.open('https://cn.bing.com', '_system');
</pre>
    </td>
    </tr>
    <tr>
      <td>cordova-sqlite-storage</td>
      <td >
        <div>名称：数据库插件</div>
        <hr>
        <div>文档地址:<a href="https://github.com/storesafe/cordova-sqlite-storage">https://github.com/storesafe/cordova-sqlite-storage</a></div>
        <hr>
        <div>
            cordova官方数据库插件，缓存本地数据，支持sql语句
        </div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-camera</td>
      <td>
        <div>名称：相机功能</div>
        <hr>
        <div>文档地址:<a href="https://github.com/apache/cordova-plugin-camera">https://github.com/apache/cordova-plugin-camera</a></div>
        <hr>
        <div>cordova相机功能，调用相机拍摄照片，无需权限申请</div>
        <div>config.xml增加配置，显示压缩图片的提示框，showToastText为空，不显示提示框，maxCompressSize为压缩图片最后的大小，单位M，例如2M，压缩无限接近2M的图片</div>
        <div>例如：< preference name="CameraImageCompress" value="true" maxCompressSize="2" showToastText="处理中..." /></div>
      </td>
    </tr>
     <tr>
      <td>cordova-plugin-file</td>
      <td>
        <div>名称：本地文件管理</div>
        <hr>
        <div>文档地址:<a href="https://github.com/apache/cordova-plugin-file">https://github.com/apache/cordova-plugin-file</a></div>
        <hr>
        <div>鸿蒙file插件的使用完全遵守cordova-plugin-file官方文档，请大家参考官方文档使用该插件，但是鸿蒙的目录结构和Android、Ios不同，鸿蒙App目录结构说明参考<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/app-sandbox-directory-V5#%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E4%B8%8E%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84">https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/app-sandbox-directory-V5</a>,cordova file文件目录和鸿蒙目录对应关系如下表，和Anroid、Ios一样，app启动后cordova会自动初始化目录，目录是动态的生成的，有可能HarmonyOS升级会改变目录结构（鸿蒙官方文档明确说明禁止直接使用目录结构）。</div>
        <table>
            <tr>
            <td>cordova目录</td>       
            <td>鸿蒙目录</td>
            </tr>
            <tr>
            <td>cordova.file.applicationDirectory</td>       
            <td>/data/storage/el2</td>
            </tr>
            <tr>
            <td>cordova.file.applicationStorageDirectory</td>       
            <td>/data/storage/el2/base/files</td>
            </tr>
            <tr>
            <td>cordova.file.dataDirectory</td>       
            <td>/data/storage/el2/base/files</td>
            </tr>
            <tr>
            <td>cordova.file.cacheDirectory</td>       
            <td>/data/storage/el2/base/cache</td>
            </tr>
            <tr>
            <td>cordova.file.externalApplicationStorageDirectory</td>       
            <td>/data/storage/el2/base/files</td>
            </tr>
            <tr>
            <td>cordova.file.externalDataDirectory</td>       
            <td>/data/storage/el2/base/files</td>
            </tr>
            <tr>
            <td>cordova.file.externalRootDirectory</td>       
            <td>/data/storage/el2</td>
            </tr>
            <tr>
            <td>cordova.file.tempDirectory</td>       
            <td>/data/storage/el2/base/temp</td>
            </tr>
            <tr>
            <td>cordova.file.syncedDataDirectory</td>       
            <td>/data/storage/el2/base/files</td>
            </tr>
            <tr>
            <td>cordova.file.documentsDirectory</td>       
            <td>/data/storage/el2/base/files</td>
            </tr>
            <tr>
            <td>cordova.file.sharedDirectory</td>       
            <td>/data/storage/el2/base/files</td>
            </tr>
         </table>
        <table>
            <tr>
            <td>LocalFileSystem.TEMPORARY</td>       
            <td>/data/storage/el2/base/temp</td>
            </tr>
            <tr>
            <td>LocalFileSystem.PERSISTENT</td>       
            <td>/data/storage/el2/base/files</td>
            </tr>
         </table>
         <p>cdvfile和Android、Ios不同，说明如下：</p>
            <p>（1）cdvfile文件路径的生成，举例如下：</p>
                  <pre>
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    fs.root.getFile("newPersistent.png", { create: true, exclusive: false }, 
        function (fileEntry) {
        var path1 = "cdvfile://"+dirEntry.nativeURL;
        var path2 = "cdvfile://"+"localhost/"+dirEntry.name+dirEntry.nativeURL;
        //path1和path2都为cdvfile的文件路径,系统兼容两种路径格式
        //该路径属于动态路径，有可能随着HarmonyOS升级而改变。
    }, onErrorCreateFile);
}, onErrorLoadFs);
                  </pre>
<pre>
cdvfile路径也可无需程序动态生成，App缓存的文件，可以直接使用静态路径，例如：
LocalFileSystem.PERSISTENT的cdvfile路径，如下：
cdvfile://localhost/persistent/newPersistent.png
LocalFileSystem.TEMPORARY的cdvfile路径，如下：
cdvfile://localhost/temporary/newPersistent.png
保持和Andriod、Ios一致，此路径是安全路径，不会随着harmonyOS的升级而改变
</pre>
            <p>（2）cdvfile文件路径的使用</p>
            <pre>
window.resolveLocalFileSystemURL("cdvfile://localhost/temporary/newPersistent.png", 
    function(fileEntry) {
    //获取fileEntry，然后读取文件内容,文件必须存在
});
            </pre>
            <pre>
webview中直接引用cdvfile文件
< img src="cdvfile://localhost/temporary/newPersistent.png"/>
            </pre>
            <p>（3）https(http)://localhost的使用<p>
            <p>App缓存的文件，也可以直接使用http(s):使用，路径的生成为：直接将cdvfile路径的cdvfile改为http或https即可</p>    
            <pre>
window.resolveLocalFileSystemURL("https://localhost/temporary/newPersistent.png", 
    function(fileEntry) {
    //获取fileEntry，然后读取文件内容,文件必须存在
});
            </pre>
           <pre>
webview中直接通过https或http访问文件
< img src="https://localhost/temporary/newPersistent.png"/>
            </pre>
            <p>（4）鸿蒙路径、cdvfile和http(s)对应关系如下表。</p>
                <table>
                <tr>
                <td>目录名称</td>
                <td>鸿蒙目录</td>
                <td>访问路径</td>
                </tr>
                <tr>
                <td>temporary</td>
                <td>/data/storage/el2/base/temp</td>
                <td>
                <div>cdvfile://localhost/temporary</div>
                <div>http(s)://localhost/temporary</div>
                </td>
                </tr>
                <tr>
                <td>persistent</td>
                <td>/data/storage/el2/base/files</td>
                <td>
                <div>cdvfile://localhost/persistent</div>
                <div>http(s)://localhost/persistent</div>
                </td>
                </tr>
                <tr>
                <td>content</td>
                <td>/data/storage/el2/base/files</td>
                <td>
                <div>cdvfile://localhost/content</div>
                <div>http(s)://localhost/content</div>
                </td>
                </tr>
                <tr>
                <td>assets</td>
                <td>/data/storage/el2/base/files</td>
                <td>
                <div>cdvfile://localhost/assets</div>
                <div>http(s)://localhost/assets</div>
                </td>
                </tr>
                <tr>
                <td>files</td>
                <td>/data/storage/el2/base/files</td>
                <td>
                <div>cdvfile://localhost/files</div>
                <div>http(s)://localhost/files</div>
                </td>
                </tr>
                <tr>
                <td>files-external</td>
                <td>/data/storage/el2/base/files</td>
                <td>
                <div>cdvfile://localhost/files-external</div>
                <div>http(s)://localhost/files-external</div>
                </td>
                </tr>
                <tr>
                <td>documents</td>
                <td>/data/storage/el2/base/files</td>
                <td>
                <div>cdvfile://localhost/documents</div>
                <div>http(s)://localhost/documents</div>
                </td>
                </tr>
                <tr>
                <td>sdcard</td>
                <td>/data/storage/el2/base/files</td>
                <td>
                <div>cdvfile://localhost/sdcard</div>
                <div>http(s)://localhost/sdcard</div>
                </td>
                </tr>
                <tr>
                <td>cache</td>
                <td>/data/storage/el2/base/cache</td>
                <td>
                <div>cdvfile://localhost/cache</div>
                <div>http(s)://localhost/cache</div>
                </td>
                </tr>
                <tr>
                <td>cache-external</td>
                <td>/data/storage/el2/base/cache</td>
                <td>
                <div>cdvfile://localhost/cache-external</div>
                <div>http(s)://localhost/cache-external</div>
                </td>
                </tr>
                <tr>
                <td>root</td>
                <td>/data/storage/el2/base/files</td>
                <td>
                <div>cdvfile://localhost/root</div>
                <div>http(s)://localhost/root</div>
                </td>
                </tr>
                </table>
              <p>说明：只要鸿蒙目录的相同，无论通过cdvfile还是http(s)访问，都是访问的同一个文件。</p>  
            <p>(5) 也可以通过file://访问文件，具体参考最后的file协议说明</p>
      </td>
    </tr>
     <tr>
      <td>cordova-plugin-file-transfer</td>
      <td>
        <div>名称：网络文件传输</div>
        <hr>
        <div>文档地址:<a href="https://github.com/apache/cordova-plugin-file-transfer">https://github.com/apache/cordova-plugin-file-transfer</a></div>
        <hr>
        <div>cordova上传和下载文件</div>
        <div>上传文件使用文件的原生路径，如果是拍照或者选择的图片返回的路径，配合cordova-plugin-file插件使用，获取fileEntry，然后获取到原生路径再上传,上传下载当前仅支持https,不支持http</div>
<pre>
window.resolveLocalFileSystemURL(filePath, function(fileEntry){
//使用fileEntry.toUrl()或toNativeURL()获取原生路径再上传
});
</pre>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-dialogs</td>
      <td>
        <div>名称：dialog弹窗</div>
        <hr>
        <div>文档地址:<a href="https://github.com/apache/cordova-plugin-dialogs">https://github.com/apache/cordova-plugin-dialogs</a></div>
        <hr>
        <div>cordova接口，弹出鸿蒙系统弹窗</div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-datepicker</td>
      <td>
        <div>名称：日期时间控件选择</div>
        <hr>
        <div>文档地址:<a href="https://github.com/VitaliiBlagodir/cordova-plugin-datepicker">https://github.com/VitaliiBlagodir/cordova-plugin-datepicker</a></div>
        <hr>
        <div>cordova接口，调用鸿蒙系统原生日期和时间选择窗口</div>
      </td>
    </tr>
    <tr>
      <td>phonegap-plugin-barcodescanner</td>
      <td>
        <div>名称：扫码</div>
        <hr>
        <div>文档地址:<a href="https://github.com/phonegap/phonegap-plugin-barcodescanner">https://github.com/phonegap/phonegap-plugin-barcodescanner</a></div>
        <hr>
        <div>调用摄像头扫码，也可从相册选择图片扫码</div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-mlkit-barcode-scanner</td>
      <td>
        <div>名称：扫码</div>
        <hr>
        <div>文档地址:<a href="https://github.com/MobisysGmbH/cordova-plugin-mlkit-barcode-scanner">https://github.com/MobisysGmbH/cordova-plugin-mlkit-barcode-scanner</a></div>
        <hr>
        <div>调用摄像头扫码，也可从相册选择图片扫码</div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-statusbar</td>
      <td>
        <div>名称：状态栏设置</div>
        <hr>
        <div>文档地址:<a href="https://github.com/apache/cordova-plugin-statusbar">https://github.com/apache/cordova-plugin-statusbar</a></div>
        <hr>
        <div>设置和管理状态栏,请参考安卓部分研发文档研发</div>
        <div>在安卓原有config.xml配置的基础上，有所调整示例如下：</div>
        <pre>
< !--配置是否沉浸式布局,系统模式是非沉浸式布局 -->
<  preference name="StatusBarOverlaysWebView" value="true" />
< !--配置状态栏颜色 -->
< preference name="StatusBarBackgroundColor" value="#000000" />
< !--配置状态栏文字颜色,在鸿蒙中新增加的属性，安卓和ios不具备 -->
< preference name="StatusBarTextColor" value="#ffffff" />
< !--配置状态栏是否高亮度显示,在鸿蒙中，默认是非高亮度的，所以不是高亮度的不要配置 -->
< preference name="StatusBarStyle" value="lightcontent" />
        </pre>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-media-capture</td>
      <td>
        <div>名称：录制视频和音频</div>
        <hr>
        <div>文档地址:<a href="https://github.com/apache/cordova-plugin-media-capture">https://github.com/apache/cordova-plugin-media-capture</a></div>
        <hr>
        <div>cordova调用摄像头拍摄视频，和阿里云oss插件或者网络传输插件相结合实现拍摄视频后上传服务器功能</div>
      </td>
    </tr>
    <tr>
      <td>aliyun.uploadvod</td>
      <td>
        <div>名称：阿里云OSS插件</div>
        <hr>
        暂无文档，需联系开发者
        <hr>
        <div>阿里云OSS插件，实现移动端直接上传文件到阿里云OSS</div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-android-permissions</td>
      <td>
        <div>名称：权限申请插件</div>
        <hr>
        <div>文档地址:<a href="https://github.com/NeoLSN/cordova-plugin-android-permissions">https://github.com/NeoLSN/cordova-plugin-android-permissions</a></div>
        <hr>
        <div>cordova授权插件，接口永远返回为拥有权限，主要为兼容android移植到harmony使用的，避免修改Android端的代码，harmong授权已下放到各个插件，无需单独编写代码</div>
      </td>
    </tr>
    <tr>
      <td>phonegap-bluetooth-plugin</td>
      <td>
        <div>名称：经典蓝牙插件</div>
        <hr>
        <div>文档地址:<a href="https://github.com/tanelih/phonegap-bluetooth-plugin">https://github.com/tanelih/phonegap-bluetooth-plugin</a></div>
        <hr>
        <div>cordova官方经典蓝牙插件,需申请蓝牙权限，才可以正常使用，见<a href="#permission">声明权限部分</a></div>
    </td>
    </tr>
    <tr>
      <td>cordova-plugin-ble-central</td>
      <td>
        <div>名称：低功耗蓝牙</div>
        <hr>
        <div>文档地址:<a href="https://github.com/tanelih/phonegap-bluetooth-plugin">https://github.com/tanelih/phonegap-bluetooth-plugin</a></div>
         <hr>
        <div>蓝牙4.0版本，蓝牙打印更稳定、安全；cordova支持多款低功耗插件，主要是方便android和ios项目移植,需申请蓝牙权限，才可以正常使用，见<a href="#permission">声明权限部分</a></div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-bluetooth-serial</td>
      <td>
        <div>名称：低功耗蓝牙</div>
        <hr>
        <div>文档地址:<a href="https://github.com/don/BluetoothSerial">https://github.com/don/BluetoothSerial</a></div>
        <hr>
        <div>蓝牙4.0版本，蓝牙打印更稳定、安全；cordova支持多款低功耗插件，主要是方便android和ios项目移植,需申请蓝牙权限，才可以正常使用，见<a href="#permission">声明权限部分</a></div>
      </td>
    </tr>
    <tr>
      <td>cordova-base64-to-gallery</td>
      <td >
        <div>名称：保存图片到相册</div>
        <hr>
        <div>文档地址:<a href="https://github.com/goiarlabs/cordova-base64-to-gallery">https://github.com/goiarlabs/cordova-base64-to-gallery</a></div>
        <hr>
        <div>cordova实现保存图片到相册</div>
      </td>
    </tr>
    <tr>
      <td>cordova-save-image-gallery</td>
      <td >
        <div>名称：保存图片到相册</div>
        <hr>
        <div>文档地址:<a href="https://github.com/agomezmoron/cordova-save-image-gallery">https://github.com/agomezmoron/cordova-save-image-gallery</a></div>
        <hr>
        <div>cordova实现保存图片到相册</div>
      </td>
    </tr>
    <tr>
      <td>cordova-plugin-huawei-push</td>
      <td >
        <div>名称：华为推送</div>
        <hr>
        <div>文档地址:<a href="https://github.com/waitaction/cordova-plugin-huawei-push">https://github.com/waitaction/cordova-plugin-huawei-push</a></div>
        <hr>
        <div>cordova鸿蒙推送</div>
    </td>
    </tr>
   <tr>
      <td>cordova-plugin-alipay-v2</td>
      <td>
        <div>名称：支付宝支付插件</div>
        <hr>
        <div>文档地址:<a href="https://github.com/hhjjj1010/cordova-plugin-alipay-v2">https://github.com/hhjjj1010/cordova-plugin-alipay-v2</a></div>
        <div>依赖插件:<a href="https://ohpm.HarmonyOS.cn/#/cn/detail/@cashier_alipay%2Fcashiersdk">https://ohpm.HarmonyOS.cn/#/cn/detail/@cashier_alipay%2Fcashiersdk</a></div>
        <hr>
        <div>
         使用方法如下：
            <ul style="list-style-type: none;">
            <li>（1）打开Terminal终端，进入工程目录，执行 ohpm i @cashier_alipay/cashiersdk安装支付宝SDK</li>
            <li>（2）打开entry/src/main/module.json5,增加如下配置：
               <pre>
"querySchemes": [
    "alipays"
],
               </pre>
            </li>
            <li>（3）打开entry/build-profile.json5,增加如下配置：
               <pre>
"buildOption": {
    "arkOptions": {
      "runtimeOnly": {
        "packages": [
          "@cashier_alipay/cashiersdk"
        ]
      }
    }
}
               </pre>
            </li>
            </ul>
      </div>
      </td>
    </tr>
   <tr>
      <td>cordova-plugin-wechat</td>
      <td >
        <div>名称：微信插件</div>
        <hr>
        <div>文档地址:<a href="https://github.com/xu-li/cordova-plugin-wechat">https://github.com/xu-li/cordova-plugin-wechat</a></div>
        <div>依赖插件:<a href="https://ohpm.HarmonyOS.cn/#/cn/detail/@tencent%2Fwechat_open_sdk">https://ohpm.HarmonyOS.cn/#/cn/detail/@tencent%2Fwechat_open_sdk</a></div>
        <hr>
        <div>
            使用方法如下：
            <ul style="list-style-type: none;">
            <li>（1）打开Terminal终端，进入工程目录，执行 ohpm i @tencent/wechat_open_sdk安装微信OpenSDK</li>
            <li>（2）打开entry/build-profile.json5,增加如下配置：
               <pre>
"buildOption": {
    "arkOptions": {
      "runtimeOnly": {
        "packages": [
          "@tencent/wechat_open_sdk"
        ]
      }
    }
  }
               </pre>
            </li>
            </ul>
        </div>
    </td>
    </tr>
    <tr>
      <td>cordova-plugin-zip</td>
      <td >
        <div>名称：解压缩插件</div>
        <hr>
        <div>文档地址:<a href="https://github.com/MobileChromeApps/cordova-plugin-zip">https://github.com/MobileChromeApps/cordova-plugin-zip</a></div>
        <hr>
        <div>按照原文档直接调用即可</div>
    </td>
    </tr>
    <tr>
      <td>cordova-plugin-media</td>
      <td >
        <div>名称：录音和音频播放插件</div>
        <hr>
        <div>文档地址:<a href="https://www.npmjs.com/package/cordova-plugin-media">https://www.npmjs.com/package/cordova-plugin-media</a></div>
        <div>文档地址:<a href="https://github.com/apache/cordova-plugin-media">https://github.com/apache/cordova-plugin-media</a></div>
        <hr>
        <div>按照原文档直接调用即可</div>
    </td>
    </tr>
</table>

---

## Android移植鸿蒙步骤
1，打开DevEco创建项目，选择Empty Ability进入下一步，填写必要信息，这里要注意，bundle name 先填写com.example.myapplication，也就是保持默认不变，因为在没有cordova.crt证书的情况下，cordova鸿蒙版要求bundle name必须为com.example.myapplication，主要用于研发测试，如果开发测试完成要修改bundle name上架鸿蒙应用市场，请联系开发者申请cordova.crt证书，或者事先联系开发者提供技术服务。

2，项目创建成功后，复制原有Android studio的工程assets目录下面的所有文件到鸿蒙工程entry/src/main/resources/rawfile目录下，原Android工程的assets目录必须包含www目录，www目录包含index.html（必须）、cordova.js（必须）、cordova_plugins.js（必须）、plugins目录（必须）、css目录、js目录等（早期版本只复制www目录内容，新版本仍兼容旧版本目录结构，推荐使用新版本目录结构），如果要指定加载页面，不使用默认页面，请查看不常用的高级功能部分说明。

3，复制原android工程res/xml目录下的config.xml文件到鸿蒙工程entry/src/main/resources/rawfile目录下。

4，打开DevEco studio的Terminal终端，进入工程目录，执行 ohpm install @magongshou/harmony-cordova 安装本插件。

5，打开鸿蒙工程文件entry/src/main/etx/pages/Index.ets文件，修改代码如下：
  <pre>
      import { MainPage, pageBackPress, pageHideEvent, pageShowEvent, PluginEntry} from '@magongshou/harmony-cordova/Index';
      //import { TestPlugin } from "../plugins/TestPlugin" //自定义插件TestPlugin，根据实际情况导入自己的自定义插件
      @Entry
      @Component
      struct Index {
        //ArkTs侧的自定义插件：配置插件名称和对象,请查看自定义查看开发部分
        cordovaPlugs:Array< PluginEntry> = []; 
        /*
        cordovaPlugs:Array< PluginEntry> =
        [
            {
              pluginName: 'TestPlugin', //插件名称
              pluginObject:new TestPlugin() //实例化插件对象供cordova调用
            }
        ];
        */
        onPageShow(){
          pageShowEvent(); //页面显示通知cordova
        }
        onBackPress() {
          pageBackPress(); //拦截返回键由cordova处理
          return true;
        }
        onPageHide() {
          pageHideEvent(); //页面隐藏通知cordova
        }
        build() {
          RelativeContainer() {
            //默认加载rawfile/index.html 或者 rawfile/www/index.html
            //如果要指定加载页面参考不常用的高级功能部分
            MainPage({isWebDebug:false,cordovaPlugs:this.cordovaPlugs}); 
          }
          .height('100%')
          .width('100%')
        }
      }
  </pre>
6，打开鸿蒙工程文件/entry/src/main/ets/entryAbility/EntryAbility.ets文件,修改onCreate函数如下
<pre>
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';
import { webview } from '@kit.ArkWeb';  //引入webview 
import { pagePushNotify, setSchemeHandler } from '@magongshou/harmony-cordova/Index';  //引入cordova sdk

... //省略部分代码
onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
   hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
   webview.WebviewController.initializeWebEngine();//webview引擎初始化
   pagePushNotify(want.parameters);//点击通知消息传送数据给cordova，如果app没有鸿蒙推送功能，此行代码可以不加
}

//增加onNewWant，app没有推送功能，可以不添加此函数
onNewWant(want: Want): void {
   hilog.info(0x0000, 'testTag', 'Succeeded in getting message data');
   pagePushNotify(want.parameters);//点击通知消息传送数据给cordova
}
</pre>
7，鸿蒙混合研发，也许您会增加其他page页面，不一定应用的首页为cordova webview（index.html)的首页，例如应用增加了鸿蒙的原生的启动页面，包含首页弹窗，同意隐私政策后，然后再从启动页面进入cordova的页面，这样避免在用户没有同意隐私政策的情况下，初始化cordova sdk，因为初始化cordova sdk，系统读取了设备的网络状态，因为国内相关法律规定，在用户没有同意隐私政策的情况下，不允许读取设备的网络标识。

8，做以上代码修改后，鸿蒙的移植已经完毕，可以使用模拟器或者真机进行编译和测试了。

---

## vue移植说明
1，vue开发完成后，需要发布的生产环境，鸿蒙的开发环境就是vue的生产环境，vue打包后生成dist目录，该目录的内容包含js、css和index.html文件

2，创建鸿蒙工程，参考Android移植步骤的创建方式，创建方式一样

3，将dist目录的内容复制到鸿蒙工程entry/src/main/resources/rawfile目录下

4，其他移植和Android移植步骤一样。


## Ios移植鸿蒙步骤
如果您的项目有android和Ios的工程，请参考android项目移植项目的鸿蒙下，如果您的项目没有andriod工程，只有Ios工程，请使用如下方法移植，移植时大部分内容和安卓一样，只是复制的文件的路径不一致，以下只介绍不同部分，相同部分请参考android移植步骤。

1，复制Xcode的Ios工程目录下的Staging目录下的所有文件到鸿蒙工程entry/src/main/resources/rawfile目录下。

2，Xcode工程的config.xml文件在Staging目录下，Xcode工程的该文件不能直接被鸿蒙版cordova使用，需要进行转换，该文件主要记录的是插件的名称和初始化的类，因为鸿蒙版是根据android的config.xml进行插件初始化的，因此需要将Xcode工程config.xml转为安卓的config.xml，请将Xcode工程使用node加入安卓平台，系统会自动生成android版的config.xml。然后将文件复制到鸿蒙版工程的entry/src/main/resources/rawfile下。

附加说明：本人认为使用cordova跨平台研发，一般至少都会包含android和ios两大平台，很少只有ios平台，没有android平台的，所以大部分移植鸿蒙参考android移植步骤，后续升级SDK会兼容Ios工程的config.xml，无需转换就可以使用。

---

## 不常用的高级用法
1，自定义webview打开路径页面路径，支持rawfile资源文件、沙箱路径、在线网页

2，自定义用户scheme，用于cordova内部拦截scheme的请求

3，拦截自定义的scheme，在webview端并处理

4，在原生层，直接设置cordovaWebview属性和注入新的js代码，不通过插件实现，用于原生组件和webview组件显示在同一视图界面

5，多webview界面，即多页面视图，自定义webId，使用自定义插件各webview之间通讯，可用于平板等大屏幕研发需求

6，多webview之间的通讯，参考自定义插件研发示例代码说明

7，动态创建组件，在webview和NodeController相结合实现动态创建和显示组件时，切记一定要设定webId参数，避免重复创建webview

8，父组件感知MainPage子组件的所有生命周期，在不同的周期执行相应的操作

9，在同一个webview中加载在线网页，也可以本地页面和在线网页混合开发

10,加载不包含cordova.js页面，父组件控制webview的返回键，或者自己控制路由

11，MainPage的路由开关控制，便于MainPage嵌套使用，路由子页面内再嵌套使用MainPage

12,自定义cookie，传入cookie键值对

13,自定义webview字体大小缩放百分比，支持适老化，屏蔽跟随系统字体大小变化

示例代码如下：
<pre>
import { MainPage, pageBackPress, pageHideEvent, pageShowEvent} from '@magongshou/harmony-cordova/Index';
import { CordovaWebView, PluginEntry, MainPageCycle } from '@magongshou/harmony-cordova/Index';
import { SetResourceReplace} from '@magongshou/harmony-cordova/Index';
import { TestPlugin } from '../plugins/TestPlugin';
import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';

//动态创建MainPage的示例代码，主要用于原生界面和webview界面显示在同一个视图里面的混合式研发
//如果要传入其他参数，参考此文档详细了解
//https://developer.huawei.com/consumer/cn/doc/best-practices-V5/bpta-ui-dynamic-operations-V5
@Builder
function buildMainPage() {
  Column() {
    //直接加载在线网站
    MainPage({webId:"123456", indexPage:"https://cn.bing.com", cordovaPlugs:[
      {
        pluginName: 'TestPlugin', //插件名称
        pluginObject:new TestPlugin() //实例化插件对象供cordova调用
      }
    ]});
  }.width("100%").height("100%")
}

class TextNodeController extends NodeController {
  private textNode: BuilderNode<[]> | null = null;

  constructor() {
    super();
  }

  makeNode(context: UIContext): FrameNode | null {
    // 创建BuilderNode实例
    this.textNode = new BuilderNode(context);
    this.textNode.build(wrapBuilder<[]>(buildMainPage));
    // 返回需要显示的节点
    return this.textNode.getFrameNode();
  }
}

@Entry
@Component
export struct Index {
  @State indexPage:string = "/www/index.html";
  @State isShow: boolean = true;
  @State textZoomRatio:number = 100;

   /*
   *控制mainPage的页面返回，需将此对象传入MainPage
   *如果加载的页面不包含cordova.js,使用pageBackPress无法通知cordova返回，必须使用此对象控制页面返回
   *也可以通过此对象控制webview的路由
   */
  mainPageOnBackPress:MainPageOnBackPress = new MainPageOnBackPress();

  //手动添加cookie,在发送POST或者Get请求时携带cookie,https的session cookie无需手动设置，cordova会自动处理
  //http的非https的session cookie参考最后的https的cookie说明
  this.cookies.set("https://mem.tongecn.com", ["key1=value1; path=/; Domain=.tongecn.com", "key2=value2"]);

  //MainPage的生命周期的各回调函数，根据业务需要设置单个或多个生命周期回调函数添加业务功能
  //生命周期的说明参考：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/web-event-sequence-V5
  mainPageCycle?:MainPageCycle;
  aboutToAppear() {
    this.mainPageCycle = new MainPageCycle()
    .setOnAboutToAppear((webviewController: webview.WebviewController,parentPage?:object)=>{
      //page为当前页面对象，相当于当前页面的this指针，使用该对象，必须将this指针通过parentPage参数传入mainPage中 
      let page = parentPage as Index;
      console.log("exec onAboutToAppear");
    })
    .setOnControllerAttached((webviewController: webview.WebviewController,parentPage?:object)=>{
      console.log("exec onControllerAttached");
    })
    .setOnLoadIntercept((webResourceRequest: WebResourceRequest,parentPage?:object):boolean=>{
      console.log("exec onLoadIntercept");
      return false;
    })
    .setOnOverrideUrlLoading((webResourceRequest: WebResourceRequest,parentPage?:object):boolean=>{
      console.log("exec onOverrideUrlLoading");
      return false;
    })
    .setOnInterceptRequest((request: WebResourceRequest, webTag:string,parentPage?:object):WebResourceResponse|null=>{
      console.log("exec setOnInterceptRequest");
      return null;
    })
    .setOnPageBegin((url:string,parentPage?:object):void=>{
      console.log("exec onPageBegin");
    })
    .setOnProgressChange((newProgress: number,parentPage?:object):void=>{
      console.log("exec onProgressChange");
    })
    .setOnPageEnd((url:string, webviewController: webview.WebviewController,parentPage?:object):void=>{
      console.log("exec onPageEnd");
    })
    .setOnPageVisible((url:string,parentPage?:object):void=>{
      console.log("exec onPageVisible");
    })
    .setOnRenderExited((renderExitReason:RenderExitReason,parentPage?:object):void=>{
      console.log("exec onRenderExited");
    })
    .setOnDisAppear((parentPage?:object):void=>{
      console.log("exec onDisAppear");
    });

    //设置cookies，session cookie无需手动设置，cordova会自动处理
    //http的非https的session cookie参考最后的https的cookie说明
    this.cookies.set("https://ceshi.tongecn.com", "key1=value1;key2=value2");
  }

  onPageShow(){
    pageShowEvent();
  }

  onBackPress() {
    pageBackPress();
    /*
     *如果加载的页面没有包含cordova.js，例如加载https://cn.bing.com，
     * 返回值
     *  true:已经到了页面等层
     *  false:返回了上一页
     */
   // return this.mainPageOnBackPress.backPress();
    return true;
  }
  onPageHide() {
    pageHideEvent();
  }

  /*
  * 这个MainPage父组件的测试函数，主要演示在插件中调用父组件的函数，以满足业务需求
  * 请参考自定义插件研发示例代码  
  */
  DoTest() {
    console.log("fjdkfjdkf");
  }

  /*
  *拦截请求函数，根据需要拦截相应请求，一般用于自定义scheme，如果存在自定义scheme的必须使用此函数拦截处理
  *使用此函数拦截自己的scheme进行处理，也可以在MainPage生命周期回调函数中拦截处理，二选一，不能同时拦截处理。
  *拦截后处理有两种方式,推荐使用第一种方式
  *   1，cordova webview内核处理，返回null，cordova可以处理替换所有资源，例如在线资源，本地资源，js、img、css等
  *   2，自己处理，返回WebResourceRequest
  *说明如下：
  *   1，子组件的回调函数不能使用this指针，如果要使用this，请参考parentPage参数
  *   2，采用第一种方式，写法简单，且效率高，推荐第一种方式
  */
  onInterceptWebRequest(request: WebResourceRequest, webTag:string):ESObject {
    let url= request.getRequestUrl();
    //cordova webview内核处理替换
    if(url == "cmp://v1.1.1/temp/test2.png") {
      /*
      *替换资源说明如下：
      *本地资源请使用https://www.example.com的虚拟域名作为访问本地资源的标记
      *详细了解www.example.com内置虚拟域名规则，查看最后面的常见问题说明
      *被替换和替换内容可以是图片、css、js等
      *替换资源举例如下：
      *1，沙箱路径
      *   https://www.example.com/data/storage/el2/base/files/test.png
      *2，rawfile目录的下的资源文件
      *   https://www.example.com/www/test.png
      *3，网络在线资源
      *   https://www.chuzhitong.com/images/logo.png
      *4，cdvfile协议的沙箱路径的文件,绝对路径
      *   cdvfile:///data/storage/el2/base/files/test.png
      *此函数是通知cordova webview内核，后续加载页面实施资源替换  
      */
      SetResourceReplace(webTag, url, "https://www.chuzhitong.com/images/logo.png");
    }
    //cordova webview内核处理替换
    if(url == "https://www.ext.com/v1.1.1/temp/test3.png") {
      SetResourceReplace(webTag, url, "https://www.chuzhitong.com/images/logo.png");
    }

    //自己处理资源返回webview
    if(url == "https://www.ext.com/v1.1.1/temp/test3.png") {
      let response = new WebResourceResponse();
      response.setResponseData($rawfile("www/picture/bao.png"));
      response.setResponseEncoding('utf-8');
      response.setResponseMimeType("image/png");
      response.setResponseCode(200);
      response.setReasonMessage('OK');
      response.setResponseIsReady(true);
      return response;
    }
    return null;
  }

  /*
  *在原生层页面加载后，网页面中注入新的js，可以不通过插件来实现
  *子组件的回调函数不能使用this指针
  */
  onSetCordovaWebAttribute(cordovaWebView:CordovaWebView) {
    if(cordovaWebView) {
      //获取webview属性变量，用于动态修改webview属性,具体参考如下连接,页面加载完成后触发
      //鸿蒙并不支持WebAttribute组件属性的动态设置,但是可以设置部分属性，不支持的属性会抛出"Method not implemented."、"is not callable"等异常信息
      //如果要设置cordova没有开放的web属性，请于开发者联系以满足您的技术要求
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V5
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier
      cordovaWebView!.getWebAttribute()?.height('50%');
      //获取webview的控制变量，用于实现具体的功能，示例代码实现在webviw执行js或者注入新的js,具体参考如下连接
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-basic-components-web-V5
      cordovaWebView!.getWebviewController().runJavaScript("alert(1);");
    }
  }

  build() {
    Column() {
      RelativeContainer() {
        /*
          *webId:自定义webId,用于多webview，各webview之间通讯，参考自定义插件研发示例代码  
          *indexPage:默认启动首页，举例如下:
          *    "/www/index.html"：rawfile目录下的文件
          *    "/data/storage/el2/base/files/www/index.html"：使用虚拟域名www.example.com加载沙箱路径下的文件，
          *    "https://cn.bing.com":加载在线网页，必须指定https或者http  
          *    "file:///data/storage/el2/base/files/www/index.html":file协议加载el2级别沙箱路径文件
          *    "file:///data/storage/el1/bundle/entry/resources/resfile/www/index.html":file协议加载el1级别沙箱路径文件
          *    "file://"+getContext().resourceDir+"/www/index.html":file协议加载el1级别沙箱路径文件
          *    cordova支持使用虚拟域名www.example.com加载本地文件，也支持使用file协议加载本地文件
          *    改变this.indexPage的值，webview会重新加载页面
          *customSchemes:自定义scheme,多个scheme用“，”分隔
          *onInterceptWebRequest 返回null放行，返回具体的WebResourceResponse
          *    参考https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/web-cross-origin-V5 说明
          *onSetCordovaWebAttribute 设置webview属性和注入新的js代码
          *parentPage:传入this，就是webview父组件对象，也就是当前组件的对象，可以在插件里面调用
          *lifeCycle:传入生命周期对象，让父组件感知MainPage的生命周期，进行相应业务处理
          *backPress:传入控制webview路由的对象,加载的页面不包含cordova.js时控制webview路由
          *isNavPath：true使用MainPage组件内的路由，默认是true，false:不使用MainPage内的路由，
          *     特别是MainPage嵌套使用时，父组件要打开路由，子组件关闭路由，否则会路由冲突
          *cookies:如果ArkTs侧有自定义的cookie，可以通过此参数传入
          *     一般情况下cookie都是cordova自动处理的，无需ArkTS侧手动设置，不过ArkTS侧通过此参数可以手动设置cookie
          *     如果您的请求是采用的http协议非https，分为跨域请求和非跨域请求，请查看最后的常见问题说明
          *textZoomRatio:webview字体放大缩小百分比，默认是100保持默认
          *     设置webview不跟随系统字体大小、并且屏蔽跟随显示大小缩放后
          *     可以通过此参数统一设置webview字体大小变化百分比，避免页面错乱
          *     也可以通过鸿蒙Device插件增加的字体大小百分比接口函数，在js侧设置，参考Device插件
          *     参考常见问题屏蔽跟随系统字体大小和屏蔽跟随显示大小缩放
          *webKeyboardAvoidMode:避让键盘模式，默认：WebKeyboardAvoidMode.RESIZE_VISUAL
          *customHttpHeaders:自定义http头
          *     前端withCredentials为true时添加自定义http头，没有自定义http头不用添加
          *     参考常见问题的跨域说明   
          *isAllowCredentials:默认是false
          *     前端请求设置withCredentials为true，要传入参数isAllowCredentials:true
          *     参考常见问题的跨域说明   
          */
        MainPage({
            webId:"123456", 
            isWebDebug:true, 
            indexPage:this.indexPage, 
            customSchemes:"cmp,xmp,xxx", 
            onInterceptWebRequest:this.onInterceptWebRequest, 
            onSetCordovaWebAttribute:this.onSetCordovaWebAttribute, 
            parentPage:this,
            lifeCycle:this.mainPageCycle,
            backPress:this.mainPageOnBackPress,
            cookies:this.cookies,
            textZoomRatio:this.textZoomRatio,
            webKeyboardAvoidMode:WebKeyboardAvoidMode.RESIZE_VISUAL,
            customHttpHeaders:"",
            isAllowCredentials:false
        });
        //MainPage();//所有参数都不是必填项，根据需要自主设定
      }
      .height('80%')
      .width('100%')
      
      RelativeContainer() {
        if (this.isShow) {
          NodeContainer(this.textNodeController)
            .width('100%')
            .height("100%")
            .backgroundColor('#FFF0F0F0')
        }
      }
      .height('30%')
      .width('100%')

     //测试按钮，在webview不是全屏的时候，控制webview显示的页面实现原生控件和webiew的交互
      Button("修改沙箱路径").onClick(()=>{
          //这个是测试的示例路径，将页面直接加载沙箱路径
          this.indexPage = "/data/storage/el2/base/haps/entry/cache/index.html";
          //也可以直接加载在线网页，  
          //this.indexPage = "https://cn.bing.com";  
      })

      Button("删除组件").onClick(()=>{
        this.isShow = false;
      })
    }
  }
}
</pre>

## 自定义插件研发
自定义插件研发，需具备cordova插件研发和鸿蒙原生研发能力，自定义插件接口遵守cordova sdk官方规范，以自定义插件TestPlugin、为例：

（1）新建ArkTs文件，取名字为TestPlugin，示例代码如下，具体功能参考示例代码注释说明。
<pre>
import { CordovaPlugin,CordovaInterface, CallbackContext} from '@magongshou/harmony-cordova/Index';
import { CordovaWebView, MessageStatus, PluginResult} from '@magongshou/harmony-cordova/Index';
import { PromptAction } from '@kit.ArkUI';
import { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Index as Page } from '../pages/Index';

export class TestPlugin extends CordovaPlugin {
  protected cordovaInterface?: CordovaInterface;
  protected cordovaWebView?: CordovaWebView;

  //插件初始化函数，初始化函数在页面显示前调用，因此在初始化中不能进行UI的相关操作。
  initialize(cordovaInterface: CordovaInterface, cordovaWebView:CordovaWebView):void {
    this.cordovaInterface = cordovaInterface;
    this.cordovaWebView = cordovaWebView;
    return;
  }

  execute(action: string, args: ESObject[], callbackContext: CallbackContext):boolean {
    if(action == "eayHello") {
      return this.eayHello(args, callbackContext);
    }

    if(action == "openSystemBrowser") {
      return this.openSystemBrowser(args, callbackContext);
    }

    if(action == "openOtherPage") {
      //系统路由功能，webview是根页面，跳转到原生的其他页面，具体使用参考如下连接
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/arkts-navigation-navigation-V5
      let pathStack:NavPathStack = this.cordovaInterface!.getPageStack();
      pathStack.pushPathByName("TestPage", "{test:10}");
    }

    if(action == "otherFunction") {
      //获取webview属性变量，用于动态修改webview属性,具体参考如下连接
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V5
      this.cordovaWebView!.getWebAttribute()?.height('50%');
      //获取webview的控制变量，用于实现具体的功能，示例代码实现在webviw执行js,具体参考如下连接
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-basic-components-web-V5
      this.cordovaWebView!.getWebviewController().runJavaScript("alert(1);");
      //多次执行js侧回调函数，例如在显示执行进度时，需要多次调用
      let pluginResult:PluginResult = PluginResult.createByString(MessageStatus.OK, "success");
      pluginResult.setKeepCallback(true);
      callbackContext.sendPluginResult(pluginResult);
      let pluginResult2:PluginResult = PluginResult.createByString(MessageStatus.OK, "success2");
      callbackContext.sendPluginResult(pluginResult2);

      //多次调用也可以采用如下写法
      //callbackContext.successByString("success1", true);//第一次调用
      //callbackContext.successByString("success2", true);//第二次调用
      //callbackContext.successByString("success3");//最后一次调用
    }

    if(action == "resetPageInfo") {
      return this.resetPageInfo(args, callbackContext);
    }

    if(action == "otherWebviewController") {
      return this.otherWebviewController(args, callbackContext);
    }
    return true;
  }

  eayHello(args: ESObject[], callbackContext: CallbackContext):boolean {
    //获取UI上下文，用于原生UI交互
    let uiContext:UIContext = this.cordovaWebView!.getUIContext();
    let promptAction: PromptAction = uiContext?.getPromptAction();
    try {
      //弹出系统原生窗口
      promptAction.showDialog({
        title: 'Title',
        message: 'eay hello',
        buttons: [
          {
            text: '确定',
            color: '#000000'
          }
        ]
      }, (err, data) => {
        if (err) {
          return;
        }
        //执行成功通知js侧回调函数，通知函数有多个具体查看CallbackContext封装函数
        callbackContext.success();
      });
    } catch (error) {
    }
    return true;
  }

  openSystemBrowser(args: ESObject[], callbackContext: CallbackContext):boolean {
    if(args.length > 0) {
      let url:string = args[0];
      //获取UIAbilityContext
      let context = getContext(this) as common.UIAbilityContext
      let wantInfo: Want = {
        action: 'ohos.want.action.viewData',
        entities: ['entity.system.browsable'],
        uri: url
      }
      //跳转一个新的ability
      context.startAbility(wantInfo).then(() => {
        console.log('[跳转至外部浏览器] - success')
      }).catch((err: BusinessError) => {
        console.error('[跳转至外部浏览器] - Failed to startAbility. Code: ' + err.code + 'message:' + err.message);
      })
    }
    return true;
  }

  //获取父组件对象（定义为Page）通过父组件调用相关方法或设置属性
  resetPageInfo(args: ESObject[], callbackContext: CallbackContext):boolean {
    if(this.cordovaInterface) {
      if(this.cordovaInterface.getPage()) {
        let page:Page  = this.cordovaInterface!.getPage() as Page;
        page.indexPage = "/www2/index.html"; //加载其他页面
        page.DoTest();//调用父组件方法
      }
    }
    callbackContext.success();
    return true;
  }
  /*
   * 多Webview模式，一个webview和其他webview通讯，在多页面情况下使用，单页面视图的APP不需要
   * 1，查询其他webview的插件
   * 2，设置其他webview的属性
   * 3，其他webview注入js
   * 4, 在其他webview打开原生界面
   * 5，在其他webview控制路由
   * 6，可以灵活使用，需要技术支持联系开发者
   */
  otherWebviewController(args: ESObject[], callbackContext: CallbackContext):boolean {
    if(args.length > 0) {
      let webId: string = args[0];
      let cmd:string = args[1];

      //打印所有webId
      if(cmd == "printWebId" && this.mapWebIdToWebTag) {
        this.mapWebIdToWebTag.forEach((value, key) => {
          let pluginResult:PluginResult = PluginResult.createByString(MessageStatus.OK, key!);
          pluginResult.setKeepCallback(true);
          callbackContext.sendPluginResult(pluginResult);
        });
      }

      //打印webId对应的webview自带的所有自定义ArkTS插件,不包含cordova（c++)内核自带插件
      if(cmd == "printPlugins" && this.mapWebIdToWebTag) {
          if(this.mapWebIdToWebTag.hasKey(webId)) {
            let webTag:string = this.mapWebIdToWebTag.get(webId);
            if(this.mapWebIdToCustomPlugins?.hasKey(webTag)) {
              this.mapWebIdToCustomPlugins.get(webTag).forEach((value, key) => {
                let pluginResult: PluginResult = PluginResult.createByString(MessageStatus.OK, key!);
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
              });
            }
          }
      }

      //指定webId对应webview,设置属性
      if(cmd == "setAttr" && this.mapWebIdToWebView) {
        if(this.mapWebIdToWebView.hasKey(webId)) {
          this.mapWebIdToWebView.get(webId).getWebAttribute()?.height('20%');
        }
        callbackContext.success();
      }

      //指定webId对应webview执行注入新的js代码
      if(cmd == "injectJs" && this.mapWebIdToWebView) {
        if(this.mapWebIdToWebView.hasKey(webId)) {
          this.mapWebIdToWebView.get(webId).getWebviewController().runJavaScript("alert(1);");
        }
        callbackContext.successByString("OK");
      }

      //指定webId对应的webview打开原生界面，并使用指定webId的webview的路由
      if(cmd == "openPage" && this.mapWebIdToInterface) {
        if(this.mapWebIdToInterface.hasKey(webId)) {
          let pathStack:NavPathStack = this.mapWebIdToInterface.get(webId).getPageStack();
          pathStack.pushPathByName("TestPage", "{test:10}");
        }
        callbackContext.success();
      }

      //指定webId对应的webview弹窗
      if(cmd == "openAlert"  && this.mapWebIdToWebView) {
        if(this.mapWebIdToWebView.hasKey(webId)) {
          this.mapWebIdToWebView.get(webId).getWebviewController().runJavaScript("alert(1);");
          let cordovaWebView:CordovaWebView = this.mapWebIdToWebView.get(webId);
          //获取UI上下文，用于原生UI交互
          let uiContext:UIContext = cordovaWebView!.getUIContext();
          let promptAction: PromptAction = uiContext?.getPromptAction();
          try {
            //弹出系统原生窗口
            promptAction.showDialog({
              title: 'Title',
              message: 'eay hello',
              buttons: [
                {
                  text: '确定',
                  color: '#000000'
                }
              ]
            }, (err, data) => {
              if (err) {
                return;
              }
              //执行成功通知js侧回调函数，通知函数有多个具体查看CallbackContext封装函数
              callbackContext.success();
            });
          } catch (error) {
          }
          return true;
        }
        callbackContext.success();
      }

    }
    return true;
  }
}
</pre>
（2）插件的配置：ArkTs侧插件写好以后，在entry/src/main/ets/pages/index.ets文件中配置，支持多页面视图，各个视图拥有自己的插件，以及各视图之间通讯
<pre>
import { MainPage, pageBackPress, pageHideEvent, pageShowEvent, PluginEntry} from '@magongshou/harmony-cordova/Index';
import { TestPlugin } from "../plugins/TestPlugin"//引入插件
struct Index {
    /*
    *ArkTs侧的自定义插件键值对：插件名称和实现对象,自定义插件开发，请查看自定义查看开发部分
    *如果一个插件传入多个MainPage，务必单独定义对象传入，不可多MainPage使用一个对象，否则会使窗口操作串联
    */
    cordovaPlugs:Array< PluginEntry> =
    [
      {
        pluginName: 'TestPlugin', //插件名称
        pluginObject:new TestPlugin() //实例化插件对象供cordova调用
      }
    ];

    cordovaPlugs2:Array< PluginEntry> =
    [
      {
        pluginName: 'TestPlugin', //插件名称
        pluginObject:new TestPlugin() //实例化插件对象供cordova调用
      }
    ];

    //省略其他代码
 
    build() {
        RelativeContainer() {
          //isWebDebug:DevTools工具调试开关，cordovaPlugs：自定义插件列表，启动首页index.html
          MainPage({isWebDebug:false,cordovaPlugs:this.cordovaPlugs}); 
        }
        .height('50%')
        .width('100%')

        RelativeContainer() {
          //isWebDebug:DevTools工具调试开关，cordovaPlugs：自定义插件列表，指定加载rawfile资源目录下文件
          MainPage({isWebDebug:false,indexPage:"/www2/index.html", cordovaPlugs:this.cordovaPlugs2}); 
        }
        .height('50%')
        .width('100%')
    }
}
</pre>
(3)js侧插件调用完全遵守cordova官方调用规范，主要有如下两种方式：
<div>1,直接调用,无需做任何配置，代码如下</div>
<pre>
cordova.exec(function(result){
    console.log(result);
},function(error){
    console.log(error);
},"TestPlugin", "openOtherPage", [{name:'chenlh'},{name:'magongshou'}]);
</pre>

<div>
2,根据官方文档，对插件进行二次封装plugins/***/www/***.js，封装完毕后，在config.xml和codova_plugins.js文件中配置，具体配置可以在线查找cordova sdk自定义插件研发相关知识,这里不做详细解释，请参考<a href="https://cordova.apache.org/docs/en/12.x/guide/hybrid/plugins/index.html">https://cordova.apache.org/docs/en/12.x/guide/hybrid/plugins/index.html</a>
</div>

(4)自定义插件实现原理简述，由于HarmonyOS提供ArkTS和C/C++ API，Cordova sdk是使用C/C++研发，自定义插件是跨语言调用，调用顺序为：js侧->C/C++侧->ArkTs侧，回调是相反顺序，不过ArkTS侧的插件也可以直接调用JS侧。自定义插件的研发根据具体实现的功能，可以选择使用ArkTS开发，也可选择C/C++开发。目前开放的只有使用ArkTs研发自定义插件，只有本开发者才可以使用C/C++研发插件，如果您在研发自定义插件时，如果觉得插件本身使用C/C++研发更为合适，请和本开发者联系以提供技术支持，当然您在使用ArkTS研发自定义插件时遇到什么问题也可以联系本开发者提供技术支持。

---

## 应用权限声明
<span id="permission">有些插件需要设置相应的权限才可以正常使用</span>，不使用插件，不配置声明，因此需要配置声明权限，配置方法官方文档地址：<div><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/declare-permissions-V5">https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/declare-permissions-V5</a></div>
特别说明：声明权限，有个reason的配置，需要在以下三个三件中配置
<div>entry/src/main/resources/base/element/string.json</div>
<div>entry/src/main/resources/en_US/element/string.json</div>
<div>entry/src/main/resources/zh_CN/element/string.json</div>

1，网络权限声明，否则发送post、get请求会失败
<pre>
     {
        "name": "ohos.permission.INTERNET"
      },
      {
        "name": "ohos.permission.GET_NETWORK_INFO",
        "reason": "$string:netWorkInfo",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when": "always"
        }
      }       
</pre>
2，蓝牙权限声明
<pre>
       {
        "name": "ohos.permission.ACCESS_BLUETOOTH",
        "reason": "$string:accessBleInfo",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when": "always"
        }
      },
      {
        "name": "ohos.permission.DISCOVER_BLUETOOTH",
        "reason": "$string:accessBleInfo",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when": "always"
        }
      },
      {
        "name": "ohos.permission.USE_BLUETOOTH",
        "reason": "$string:accessBleInfo",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when": "always"
        }
      }
</pre>
3，地理位置权限
<pre>
      {
        "name": "ohos.permission.APPROXIMATELY_LOCATION",
        "reason": "$string:locationInfo",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when": "always"
        }
      },
      {
        "name": "ohos.permission.LOCATION",
        "reason": "$string:locationInfo",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when": "always"
        }
      }
</pre>
## 新项目，一次开发适用于andriod、Ios和Harmony三大平台
由于cordova官方当前并不支持HarmonyOS平台，使用node无法直接将HarmonyOS加入到cordova，也无法直接安装插件到HarmonyOS，因此对于新项目要一次开发满足三大平台的话，建议先通过node加入Android和Ios平台和安装插件，后续研发可以使用Android studio研发和调试，待研发成功后，然后再在Xcode和DevEco做跨平台适配。Xcode适配请参考cordova的官方文档，HarmonyOS适配请参考以上Android的移植步骤。

---

## 特别说明
使用鸿蒙版cordova sdk在开发测试阶段务必将bundle name修改为com.example.myapplication，如果将bunlde name改为正式的Id，鸿蒙版cordova sdk会读取entry/src/main/resources/rawfile目录的cordova.crt证书文件，用于验签，如果该文件不存在，启动应用后，应用会闪退。如果应用的bundle name为com.example.myapplication，鸿蒙版 cordova sdk会跳过验签，不检测cordova.crt文件。但是上架鸿蒙应用市场，必须将bundle name改为正式的id，所以请联系开发者申请cordova.crt证书，另外由于操作系统之间的差异，虽然保持了cordova的插件接口不变，但是返回值会有所调整，后续文档会逐步完善，在使用本插件跨平台研发时请联系开发者提供技术服务。

## 常见问题
1，编译报错 Error: ... useNormalizedOHMUrl is not true.
   支付宝支付插件引起的，在/build-profile.json5中增加找到buildOption配置选项，增加"useNormalizedOHMUrl": true，如下：
<pre>
    "buildOption": {
      "strictMode": {
        "caseSensitiveCheck": true,
        "useNormalizedOHMUrl": true
      }
    }
</pre>
2，鸿蒙返回键不起作用，就是手势事件，从左往右快速滑动，app不返回上一页面，或者到了顶层页面不退出应用
不同的框架有不同的处理方式，如果不管使用的是什么框架，只在cordova层处理的，需要监听返回键事件，代码如下：
<pre>
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
          document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown() {
    //自己处理返回
    //退出app: navigator.app.exitApp();
}
</pre>
如果采用ionic angularjs框架，可以采用如下代码：
<pre>
function showConfirm() {
   //处理退出应用的逻辑
}
$ionicPlatform.registerBackButtonAction(function (e) {
// Is there a page to go back to?
  if ($location.path() == '/tab/message') { //到了顶层页面，/tab/message是顶层页面的路由，这里只是举个例子，实际情况根据您的项目设置
      showConfirm();
      return false
  } else if ($ionicHistory.backView()) {
      // Go back in history
      $ionicHistory.goBack(); //自己处理返回
  } else {
      // This is the last page: Show confirmation popup
      showConfirm();
      return false;
  }
  e.preventDefault();
  return false;
}, 101);
</pre>
说明：无论采用什么框架都可以在cordova层通过监听backbutton返回事件自己处理。

如果加载的页面不包含cordova.js需要传入控制webview路由MainPageOnBackPress对象控制返回

3，如何访问沙箱资源文件
<div>采用cdvfile://访问沙箱文件，以downloadImage.png为例：</div>
<div>cdvfile:///data/storage/el2/base/files/chuzhitong/downloadedImage.png</div>
<div>如果是file://作为MainPage的入口页，也可以使用file://协议访问本地文件，沙箱资源文件可以是图片（png,jpg,svg等）、js、html等，请参考最后的file://协议说明</div>


4，http协议的cookie说明，如果您使用http协议非https协议，请参考如下cookie说明
   <p>（1）,同源请求：例如您是直接在MainPage传入网址例如传入http://www.tongecn.com，cordova会自动处理cookie，无需手动处理</p> 
   <p>（2）,跨域请求：例如您加载的文件在沙箱路径或者rawfile目录下的文件，在html文件中使用的http发送的GET/POST请求，此时需要再在config.xml里面配置http请求的域名，以便以cordova为http处理cookie，配置如下</p>
    <pre>
< !--在config.xml 根结点widget增加如下配置,静态配置-->
< cordova-protocol-force value="ceshi.tongecn.com" />
< cordova-protocol-force value="ceshi.chuzhitong.com" />
    </pre>
    <pre>
//在ArkTs侧运行态动态设置http的cookie,http的请GET/POST自动携带cookie
aboutToAppear() {
    SetCordovaProtocolUrl("ceshi.tongecn.com");
    SetCordovaProtocolUrl("ceshi.chuzhitong.com");
}
    </pre>
    <p>（3）,https协议：您发送的请求是https协议，非http协议，cordova会自动处理cookie，无需手动处理</p>
    <p>（4）,InAppBrowser的cookie:内置浏览器插件和cordova共享cookie，只需配置http协议，无需手动设置https协议的cookie</p>
    <p>（5）,手动设置cookie：如果您要在ArkTs侧运行态手动设置cookie,请参考不常用的高级功能部分</p>

5，虚拟域名www.example.com和file协议的详细说明

<div>加载rawfile目录下的页面时，通过DevTools工具测试时或者在日志log中会看到<span>https://www.example.com</span>的域名,可能会感到疑虑或者惊慌，接下来详细介绍一下，为什么使用此域名</div>
<p>鸿蒙无法使用file协议直接加载rawfile目录的文件，因此使用www.example.com虚拟域名代替file协议，因此您看到https://www.example.com就理解为file://即可</p>
<p>如果您的h5程序中有使用file://协议，在MainPage中就必须使用file://协议进入首页，否则file协议无法加载本地文件，cordova完全支持file://协议加载文件，无论是从资源文件夹加载还是从沙箱路径加载鸿蒙cordova完全支持</p>

6，屏蔽跟随系统字体大小

<div>在app.json5中增加configuration选项以屏蔽跟随系统字体大小，具体配置方法参考：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file</div>
<div>在EntryAbility的onWindowStageCreate函数中增加windowStage.setDefaultDensityEnabled(true);屏蔽跟随显示大小缩放，参考：https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-window#setdefaultdensityenabled12</div>

7，跨域错误
<div>cordova已经解决了所有的跨域访问，同时会自动携带cookie，并兼容所有的自定义http头，无需做任何配置，但是前端withCredentials设置为true时，需要相应的配置解决跨域</div>
<div>在前端发送POST、GET请求，withCredentials为true时，同时您的服务器依赖于自定义http头例如X-Auth-Token Test-Type，mainPage要传入相应的参数如下：</div>
<pre>
mainPage({customHttpHeaders:"X-Auth-Token,Test-Type",isAllowCredentials:true})
</pre>
<div>如果没有设置会报跨域错误：</div>
<div>Access to XMLHttpRequest at '*****' from origin '****' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.</div>
<pre>
解决方法：在mainPage增加参数isAllowCredentials:true
mainPage({isAllowCredentials:true})
</pre>
<div>Access to XMLHttpRequest at '*****' from origin '*****' has been blocked by CORS policy: Request header field ***** is not allowed by Access-Control-Allow-Headers in preflight response</div>
<pre>
解决方法：在mainPage增加自定义头，例如自定义http头X-Auth-Token Test-Type
mainPage({customHttpHeaders:"X-Auth-Token,Test-Type", isAllowCredentials:true})
</pre>

