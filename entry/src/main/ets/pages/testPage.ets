@Builder
export function TestPageBuilder() {
  TestPage()
}

@Entry
@Component
export struct TestPage {
  @State title:string = "TestPage";
  @State message: string = 'Hello World';
  @Consume('pageInfos') pageInfos: NavPathStack;

  build() {
    NavDestination () {
      RelativeContainer() {
        Text(this.message)
          .id('TestPageHelloWorld')
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
      }
      .height('100%')
      .width('100%')
    }
    .title(this.title)
    .onReady((context: NavDestinationContext) => {
      let arrayPara = JSON.stringify(this.pageInfos.getParamByName("TestPage"));
      console.log(arrayPara);
      return;
    })
  }
}