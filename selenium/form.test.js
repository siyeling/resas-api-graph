import { Builder, By ,Capabilities , WebDriver, Select} from 'selenium-webdriver'
const capabilities = Capabilities.chrome()
let webDriver = null;

const init = async () => {
    webDriver = await new Builder()
        .withCapabilities(capabilities.set('chromeOptions',{
            args: [
                '--headless',
                '--no-sandbox'
            ],
            w3c: false
        }
    ))
    .build();
}

const setUrl = async(url) => {
    if(webDriver){
        await webDriver.get(url)
    }
}

const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000))

const main = async() => {
    await init();
    await setUrl('https://script.google.com/macros/s/AKfycbyPfj1VSLG2P-9nr3ucKHefS1fh6vzgGUHuScRySWqS6D3mCHK8rt5y-lCKJj4nmj3YpQ/exec')

    await sleep(5)

    await webDriver.switchTo().frame(await webDriver.findElement(By.id('sandboxFrame')))

    await webDriver.switchTo().frame(await webDriver.findElement(By.id('userHtmlFrame')))

    const checkList = [1,2,3,4,5]

    checkList.forEach(async(num)=>{
        await webDriver.findElement(By.id(`${num}`)).click()
    })

    const selectElement = await webDriver.findElement(By.name('category'))

    const select = new Select(selectElement)

    console.log(await select.getOptions())

    await select.selectByValue('2')


}

main()