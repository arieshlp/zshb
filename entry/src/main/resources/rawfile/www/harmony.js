function GetDeviceInfo() {
    var deviceInfo = "平台：" + device.platform+"<br>"
      +"版本:"+device.version+"<br>"
      +"uuid:"+device.uuid+"<br>";

    /*
        1，虚拟机uuid是空，系统返回是固定的,真机有值
        2，虚拟机platform，不包含HarmonyOs ，真机包含
        3，其他字段参考plugins/cordova-plugin-device/www/device.js文件
     */
    document.getElementById("deviceInfo").innerHTML = deviceInfo;
}

function GetNetworkInfo() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    document.getElementById("networkInfo").innerHTML = states[networkState];
}

function openUrl(url) {
    var ref = window.open(url, '_blank', 'location=yes,hidden=no,zoom=no,hardwareback=no');
    //_blank _self是内置打开，_system是跳转系统浏览器打开
    ref.show("跳转");
}

function openTel(tel) {
    var ref = window.open("tel:"+tel, '_blank', 'location=yes,hidden=no,zoom=no,hardwareback=no');
    ref.show("打电话");
}

function openBuiduMap() {
    var ref = window.open("baidumap://map/show?center=40.057406655722,116.29644071728&zoom=11&traffic=on&bounds=37.8608310000,112.5963090000,42.1942670000,118.9491260000&src=andr.baidu.openAPIdemo", '_blank', 'location=yes,hidden=no,zoom=no,hardwareback=no');
    ref.show("跳转百度地图");
}

function openGaodeMap() {
    var ref = window.open("amapuri://route/plan?sid=BGVIS1&dlat=39.98848272&dname=B&slat=39.92848272&dlon=116.47560823&did=BGVIS2&slon=116.39560823&sname=A&t=0&sourceApplication=applicationName", '_blank', 'location=yes,hidden=no,zoom=no,hardwareback=no');
    ref.show("跳转高德地图");
}

function chcpUpdate() {
    //配置新的更新地址，如果不传option，更新地址使用www/chcp.json配置的地址
    var options = {"config-file":"https://www.chuzhitong.com/chcp/www/chcp.json","request-headers":{"userName":"chenlh"}};
    chcp.fetchUpdate(function(action, error, data){
        if(action == "chcp_updateIsReadyToInstall") {
            //检测到更新,更新成功后会自动重启app，每次更新间隔周期需大于1分钟
            //如果要进行测试，修改www/chcp.json的release版本号，修改www/chcp.manifest文件内，其中文件对应的md5值
            if(confirm("是否立即更新")) {
                chcp.installUpdate();
            }
        } else {
            console.log("无更新")
        }

    },options);
}

function createDatabase() {
    var db = window.sqlitePlugin.openDatabase({name: 'magongshou.db', location: 'default'});
    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS TONGE_CONFIG_SYS(ID INTEGER PRIMARY KEY AUTOINCREMENT, CONF_KEY VARCHAR(64), CONF_VALUE VARCHAR(512))');
    }, function(error){
        alert("checkDb失败"+error);
    }, function(){
        alert("数据库文件创建成功");
    });
}

function getFile() {
    //注释的代码，有各种测试用例
    function onErrorLoadFs(error) {

    }
    function onErrorCreateFile(error) {

    }
    function onErrorReadFile(error) {

    }

    function displayImage2(imgData) {
        var elem = document.getElementById('imageFile');
        elem.src = imgData;
    }

    function displayImage(blob) {
        // Displays image if result is a valid DOM string for an image.
        var elem = document.getElementById('imageFile');
        // Note: Use window.URL.revokeObjectURL when finished with image.
        elem.src = window.URL.createObjectURL(blob);
    }

    function readBinaryFile(fileEntry) {
        fileEntry.file(function (file) {
            var reader = new FileReader();
            reader.onloadend = function() {
                console.log("Successful file write: " + this.result);
                //displayFileData(fileEntry.fullPath + ": " + this.result);
                var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
                displayImage(blob);
                //displayImage2(this.result);
            };
            reader.readAsArrayBuffer(file);
            //reader.readAsDataURL(file);
            //reader.readAsBinaryString(file);
        }, onErrorReadFile);
    }

    function moveToFile(fileEntry, parentDir, newFileName) {
        fileEntry.moveTo(parentDir, newFileName, function(newEntry){
            readBinaryFile(newEntry);
        }, function(error){

        });
    }

    function copyToFile(fileEntry, parentDir, newFileName) {
        fileEntry.copyTo(parentDir, newFileName, function(newEntry){
            readBinaryFile(newEntry);
        }, function(error){

        });
    }

    function readFile(fileEntry) {
        fileEntry.file(function (file) {
            var reader = new FileReader();
            reader.onloadend = function() {
                console.log("Successful file read: " + this.result);
                console.log(fileEntry.fullPath + ": " + this.result);
            };
            reader.readAsText(file);
        }, onErrorReadFile);
    }


    function writeFile(fileEntry, dataObj, isAppend) {
        fileEntry.createWriter(function (fileWriter) {
            fileWriter.onwriteend = function() {
                console.log("Successful file write...");
                window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function(dirEntry) {
                    copyToFile(fileEntry, dirEntry, "newFile.png");
                });
            };
            fileWriter.onerror = function(e) {
                console.log("Failed file write: " + e.toString());
            };
            fileWriter.write(dataObj);
        });
    }

    function saveFile(dirEntry, fileData, fileName) {
        dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
            writeFile(fileEntry, fileData);
        }, onErrorCreateFile);
    }

    function getSampleFile(dirEntry) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://cordova.apache.org/static/img/cordova_bot.png', true);
        xhr.responseType = 'blob';

        xhr.onload = function() {
            if (this.status == 200) {
                var blob = new Blob([this.response], { type: 'image/png' });
                saveFile(dirEntry, blob, "downloadedImage.png");
            }
        };
        xhr.send();
    }

    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
        dirEntry.getDirectory("magongshou/import", {create: true}, function (dir) {
              getSampleFile(dir);
          },
          function(){
              return;
          });
    });
    //以下注释代码是其他测试用例，可以参考
    /*
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
        fs.root.getDirectory("yunweibao/easypatrol/import", { create: true, exclusive: false }, function (fileEntry) {
            fileEntry.getDirectory("images", { create: true, exclusive: false }, function (fileEntry) {

            })
            //console.log("fileEntry is file?" + fileEntry.isFile.toString());
            // fileEntry.name == 'someFile.txt'
            // fileEntry.fullPath == '/someFile.txt'
            //writeFile(fileEntry, "chenlh");
        }, onErrorCreateFile);

    }, onErrorLoadFs);
    */
    /*
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
        var dirReader = dirEntry.createReader();
        dirReader.readEntries(function(results){
            console.log("Successful file read: " + JSON.stringify(this.result));
        },function(error){

        });
    });
    */

    /*
    window.resolveLocalFileSystemURL("https://localhost/persistent/chuzhitong/downloadedImage.png", function(fileEntry) {
        readBinaryFile(fileEntry);
    });
    */
    /*
    window.resolveLocalFileSystemURL("cdvfile://localhost/persistent/chuzhitong/downloadedImage.png", function(fileEntry) {
        readBinaryFile(fileEntry);
    });
    */
    /*
    window.resolveLocalFileSystemURL("cdvfile://data/storage/el2/base/files/chuzhitong/downloadedImage.png", function(fileEntry) {
        readBinaryFile(fileEntry);
    });*/
}
function openCamera() {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: false,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    navigator.camera.getPicture(function cameraSuccess(imageUri) {
        var elem = document.getElementById('imgInfo1');
        elem.src = imageUri;
    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
    }, options);
}

function openPhoto() {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: false,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    navigator.camera.getPicture(function cameraSuccess(imageUri) {
        var elem = document.getElementById('imgInfo2');
        elem.src = imageUri;
    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
    }, options);
}

var global_play = null;
function cameraVod() {
    if(global_play != null) {
        global_play.pause();
    }
    navigator.device.capture.captureVideo(function(mediaFiles){
          for (var i = 0; i < mediaFiles.length; i++) {
              fileName = mediaFiles[i].fullPath;
              //fileName = fileName.replace("file://", "");
              console.log("fileName:"+fileName);
              var player = new Aliplayer({
                  id: "vodId", // 容器id
                  source: "https://localhost/"+fileName,  // 视频url 支持互联网可直接访问的视频地址
                  autoplay: false,      // 自动播放
                  width:"100%",       // 播放器宽度
                  height:"200px",      // 播放器高度
                  showBarTime:"2000",
                  showBuffer:true,
                  playsinline:true,
                  preload:true,
                  "controlBarVisibility": "click",
                  skinLayout: [{"name":"bigPlayButton","align":"cc","x":0,"y":0},{"name":"H5Loading","align":"cc"},{"align":"blabs","x":0,"y":0,"name":"controlBar", "children":[{"align":"tlabs","x":0, "y":0,"name":"progress"},{"align":"tl","x":15,"y":26,"name":"playButton"},{"align":"tl", "x":10, "y":24, "name":"timeDisplay"},{ "align":"tr", "x":20, "y":25, "name":"fullScreenButton"},{ "align":"tr", "x":20, "y":25, "name":"setButton"},{ "align":"tr", "x":20, "y":23, "name":"streamButton"},{"align":"tr","x":20,"y":25, "name":"volume"}]}]
              });

              player.on("play", function() {
                  //监听播放
                  global_play = this;
              });

              player.on("requestFullScreen", function() {
                  //全屏播放监听
              });

              player.on("cancelFullScreen", function() {
                  //取消全屏播放
              });
              player.play();
          }
      }, function(){
          alert('Error code: ' + error.code);
      },
      {limit:1, duration: 480});
}

function selectVod() {
    if(global_play != null) {
        global_play.pause();
    }
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.VIDEO,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    // var func = createNewFileEntry;
    navigator.camera.getPicture(function cameraSuccess(imageUri) {
        //You may choose to copy the picture, save it somewhere, or upload.
        fileName = imageUri;
        var player = new Aliplayer({
            id: "vodId2", // 容器id
            source: "https://localhost/"+fileName,  // 视频url 支持互联网可直接访问的视频地址
            autoplay: false,      // 自动播放
            width:"100%",       // 播放器宽度
            height:"200px",      // 播放器高度
            showBarTime:"2000",
            showBuffer:true,
            playsinline:true,
            preload:true,
            "controlBarVisibility": "click",
            skinLayout: [{"name":"bigPlayButton","align":"cc","x":0,"y":0},{"name":"H5Loading","align":"cc"},{"align":"blabs","x":0,"y":0,"name":"controlBar", "children":[{"align":"tlabs","x":0, "y":0,"name":"progress"},{"align":"tl","x":15,"y":26,"name":"playButton"},{"align":"tl", "x":10, "y":24, "name":"timeDisplay"},{ "align":"tr", "x":20, "y":25, "name":"fullScreenButton"},{ "align":"tr", "x":20, "y":25, "name":"setButton"},{ "align":"tr", "x":20, "y":23, "name":"streamButton"},{"align":"tr","x":20,"y":25, "name":"volume"}]}]
        });

        player.on("play", function() {
            //监听播放
            global_play = this;
        });

        player.on("requestFullScreen", function() {
            //全屏播放监听
        });

        player.on("cancelFullScreen", function() {
            //取消全屏播放
        });
        player.play();
    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
    }, options);
}

function openAudio() {
    navigator.device.capture.captureAudio(function(mediaFiles){
          for (var i = 0; i < mediaFiles.length; i++) {
              fileName = mediaFiles[i].fullPath;
              var elem = document.getElementById('idAudio');
              elem.src = "https://localhost/"+fileName;
          }
      }, function(){
          alert('Error code: ' + error.code);
      },
      {limit:1, duration: 480});
}

//自定义插件没有配置config.xml和cordova_plugins.js直接调用
function sayHello() {
    cordova.exec(function(result){
        console.log("result:"+result);
    },function(error){
        console.log("result:"+error);
    },"TestPlugin", "eayHello", []);
}

function openSystemBrowser() {
    cordova.exec(function(result){
        console.log("result:"+result);
    },function(error){
        console.log("result:"+error);
    },"TestPlugin", "openSystemBrowser", ['https://www.chuzhitong.com']);
}

function openOtherPage() {
    cordova.exec(function(result){
        console.log("result:"+result);
    },function(error){
        console.log("result:"+error);
    },"TestPlugin", "openOtherPage", []);
}

function otherFunction() {
    cordova.exec(function(result){
        console.log("result:"+result);
    },function(error){
        console.log("result:"+error);
    },"TestPlugin", "otherFunction", []);
}

function uploadPicture(imageUri) {
    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
        if(r.response == "MAX") {
            alert("图片太大超过4M，请剪裁小一点");
        }
    }

    function fail(error) {
        console.log("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        alert('图片上传失败。');
    }

    function progressFun(progressEvent) {
        var progress = progressEvent.loaded / progressEvent.total * 100;
        document.getElementById("progress").innerHTML = progress+"%100";
    }

    var options = new FileUploadOptions();
    options.fileKey = "picture";
    options.fileName = imageUri.substr(imageUri.lastIndexOf('/')+1);
    options.mimeType = "image/pjpeg";
    var headers={'headerParam':'headerValue'};
    options.headers = headers;
    var ft = new FileTransfer();
    ft.onprogress = progressFun;
    ft.upload(imageUri, "https://", win, fail, options);
}

function upload() {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: false,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    navigator.camera.getPicture(function cameraSuccess(imageUri) {
        var elem = document.getElementById('imageFile');
        elem.src = imageUri;
        window.resolveLocalFileSystemURL(imageUri, function(fileEntry) {
            console.log(fileEntry.toURL());
            uploadPicture(fileEntry.toURL());
        });
    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
    }, options);
}

function download() {
    function successFun(fileEntry) {
        console.log("download complete: " + fileEntry.toURL());
        document.getElementById("imageFile2").src = "https://localhost/"+fileEntry.toURL();
    }

    function failFun(error) {
        console.log("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        alert('图片下载失败。');
    }

    function progressFun(progressEvent) {
        var progress = progressEvent.loaded / progressEvent.total * 100;
        document.getElementById("progress").innerHTML = progress+"%100";
    }

    var uri = "https://cordova.apache.org/static/img/cordova_bot.png";
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
        var targetPath = dirEntry.toURL() + "corplogo.png";
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

function  barcode() {
    //以下两种方法都可以扫码
    /*
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(result.cancelled) {
                return;
            }
            if(result.format != "QR_CODE") {
                alert("二维码不正确");
                return;
            }
            document.getElementById("barcode").innerHTML = result.text;
        },
        function (error) {
            console.log("Scanning failed: " + error);
        },
        {
            "preferFrontCamera" : true,
            "showFlipCameraButton" : true,
            "showTorchButton" : true,
            "disableAnimations" : true,
            "prompt" : "Place a barcode inside the scan area",
            "formats" : "QR_CODE",
            "orientation" : "portrait"
        }
    );
*/
    //
    const defaultOptions = {
        barcodeFormats: {
            Code128: true,
            Code39: true,
            Code93: true,
            CodaBar: true,
            DataMatrix: true,
            EAN13: true,
            EAN8: true,
            ITF: true,
            QRCode: true,
            UPCA: true,
            UPCE: true,
            PDF417: true,
            Aztec: true,
        },
        beepOnSuccess: false,
        vibrateOnSuccess: false,
        detectorSize: 0.6,
        rotateCamera: false,
    };
    cordova.plugins.mlkit.barcodeScanner.scan(
      defaultOptions,
      (result) => {
          // Do something with the data
          document.getElementById("barcode").innerHTML = result.text;
      },
      (error) => {
          // Error handling
      },
    );
}

function save() {
    function onErrorReadFile(error) {

    }

    function successFun(fileEntry) {
        fileEntry.file(function (file) {
            var reader = new FileReader();
            reader.onloadend = function() {
                console.log("Successful file write: " + this.result);
                var base64Data = this.result;
                cordova.base64ToGallery(
                  base64Data,
                  {
                      prefix: 'img_',
                      mediaScanner: true
                  },

                  function(path) {
                      alert("保存成功");
                  },

                  function(err) {

                  }
                );
            };
            reader.readAsDataURL(file);
        }, onErrorReadFile);
    }

    function failFun(error) {
        console.log("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        alert('图片下载失败。');
    }

    function progressFun(progressEvent) {
        var progress = progressEvent.loaded / progressEvent.total * 100;
    }

    var uri = "https://cordova.apache.org/static/img/cordova_bot.png";
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
        var targetPath = dirEntry.toURL() + "corplogo.png";
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

function getLocation() {
    var options = {
        enableHighAccuracy: true,  // 是否使用 GPS
        maximumAge: 30000,         // 缓存时间
        timeout: 27000,            // 超时时间
        coorType: 'bd09ll'         // 默认是 gcj02，可填 bd09ll wgs84、gcj02以获取百度经纬度用于访问百度 API
    }
    navigator.geolocation.getCurrentPosition(function(info){
        document.getElementById("locationInfo").innerHTML = JSON.stringify(info);
    }, function(error){

    }, options);
}
