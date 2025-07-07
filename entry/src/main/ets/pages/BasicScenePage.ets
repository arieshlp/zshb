import SFUemSDK, { SFBaseMessage, SFAuthType } from 'SangforSDK';
import { BusinessError } from '@kit.BasicServicesKit';
import { AlertDialog, router, promptAction, LoadingDialog } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "[BasicScenePage]";

AppStorage.link('url');
PersistentStorage.persistProp("url", "https://116.52.6.118:4432");

@Entry
@Component
struct BasicScenePage {
    @StorageLink('url') url: string = '';
    @StorageLink('username') username: string = '';
    @StorageLink('password') password: string = '';
    private length: number = 0;

    private loadingDialog: CustomDialogController = new CustomDialogController({
        builder: LoadingDialog({
            content: '正在登录中...',
        }),
        autoCancel: false
    })

    public startPasswordAuth() {
        console.info(TAG, "startPasswordAuth");
        this.loadingDialog.open();
        SFUemSDK.getInstance().startPasswordAuth(this.url,  this.username,  this.password);
    }

    public showFailDialog(content: string) {
        try {
            promptAction.showDialog({
                title: '提示',
                message: content,
                buttons: [
                    {
                        text: '确定',
                        color: '#FF0000'
                    }
                ],
            })
                .then(data => {
                    console.info('showDialog success, click button: ' + data.index);
                })
                .catch((err:Error) => {
                    console.info('showDialog error: ' + err);
                })
        } catch (error) {
            let message = (error as BusinessError).message
            let code = (error as BusinessError).code
            console.error(`showDialog args error code is ${code}, message is ${message}`);
        };
    }

    public onAuthSuccess(message: SFBaseMessage) {
        console.info(TAG, "onAuthSuccess:",JSON.stringify(message));
        this.loadingDialog.close();
        promptAction.showToast({
            message: '认证成功',
            duration: 2000
        });
        router.pushUrl({
            url: 'pages/Index'
        }).then(() => {
            hilog.info(0x0000, 'developTag', '%{public}s', 'Succeeded in jumping to the TestNetWorkView page.');
        }).catch((err: BusinessError) => {
            hilog.error(0x0000, 'developTag', 'Failed to jump to the TestNetWorkView page: %{public}s',
                JSON.stringify(err) ?? '');
        })
    }

    public onAuthProcess(authType: SFAuthType, message: SFBaseMessage) {
        console.info(TAG, "onAuthProcess:", authType, JSON.stringify(message));
        this.loadingDialog.close();
        this.showFailDialog(`暂不支持此种认证类型(${authType}), 管理员请关掉此认证`);
    }

    public onAuthFailed(message: SFBaseMessage) {
        console.info(TAG, "onAuthFailed:", JSON.stringify(message));
        this.loadingDialog.close();
        this.showFailDialog(message.mErrStr);
    }

    aboutToAppear(): void {
        SFUemSDK.getInstance().setAuthResultListener(this);
        if (SFUemSDK.getInstance().startAutoTicket()) {
            promptAction.showToast({
                message: '免密成功',
                duration: 2000
            });
            router.pushUrl({
                url: 'pages/Index'
            }).then(() => {
                hilog.info(0x0000, 'developTag', '%{public}s', 'Succeeded in jumping to the TestNetWorkView page.');
            }).catch((err: BusinessError) => {
                hilog.error(0x0000, 'developTag', 'Failed to jump to the TestNetWorkView page: %{public}s',
                    JSON.stringify(err) ?? '');
            })
        }
    }

    onBackPress() {
        router.back();
        return true;
    }

    build() {
        Column() {
            Text("VPN登陆")
                .fontSize(24)
                .fontColor('#000000')
                .fontWeight(FontWeight.Medium)
                .textAlign(TextAlign.Start)
                .width('100%')
                .margin({ top: 18 })

            Text("VPN地址：")
                .fontSize(16)
                .fontColor('#000000')
                .fontWeight(FontWeight.Medium)
                .textAlign(TextAlign.Start)
                .width('100%')
                .margin({ top: 32 })
            TextInput({ text: this.url})
                .opacity(0.6)
                .type(InputType.URL)
                .placeholderColor(0x182431)
                .width('100%')
                .placeholderFont({ size: 16, weight: FontWeight.Regular })
                .margin({ top: 6, bottom: 20 })
                .onChange((value: string) => {
                    this.url = value;
                    this.length = value.length;
                })

            Text("账号登录")
                .fontSize(20)
                .fontColor('#87CEFA')
                .fontWeight(FontWeight.Medium)
                .textAlign(TextAlign.Center)
                .width('100%')
                .margin({ top: 32 })

            TextInput({ placeholder: '用户名', text: this.username })
                .opacity(0.6)
                .type(InputType.USER_NAME)
                .placeholderColor(0x182431)
                .width('100%')
                .placeholderFont({ size: 16, weight: FontWeight.Regular })
                .margin({ top: 10, bottom: 8 })
                .onChange((value: string) => {
                    this.username = value;
                    this.length = value.length;
                })
                .caretPosition(this.length)

            TextInput({ placeholder: '密码', text: this.password })
                .type(InputType.Password)
                .placeholderColor(0x182431)
                .width('100%')
                .opacity(0.6)
                .showPasswordIcon(true)
                .placeholderFont({ size: 16, weight: FontWeight.Regular })
                .onChange((value: string) => {
                    this.password = value;
                })
                .margin({ bottom: 36 })

            Button('登录', { type: ButtonType.Capsule, stateEffect: false })
                .borderRadius(20)
                .width('100%')
                .height(40)
                .enabled((this.url !== '') && (this.username !== '') && (this.password !== ''))
                .onClick(() => {
                    this.startPasswordAuth();
                })
        }
        .padding({ left: 24, right: 24 })
        .height('100%')
        .width('100%')
    }
}