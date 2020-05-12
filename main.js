const path = require('path')
const { app, BrowserWindow, shell, powerMonitor } = require('electron')
const storage = require('electron-json-storage')
const windowStateKeeper = require("electron-window-state")

// 关闭变量
// eslint-disable-next-line no-unused-vars

const goodbye = () => {
  app.quit();
};

function updateMenu(palying) {

}

const createMainWindow = () => {
  var mainWindowState = windowStateKeeper({
    defaultHeight: 600,
    defaultWidth: 400
  })
  const mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    show: false,
    width: 800,
    height: 520,
    // 窗口是否可以改变尺寸
    resizable: true,
    // 窗口是否可以最大化动
    maximizable: false,
    fullscreenable: false,
    backgroundColor: 'none',
    titleBarStyle: 'hiddenInset',
  });


  mainWindowState.manage(mainWindow)
  mainWindow.loadURL(`http://localhost:8080`);
  mainWindow.webContents.openDevTools()

  // 导航完成时触发，即选项卡的旋转器将停止旋转，并指派onload事件后。
  mainWindow.webContents.on('did-finish-load', e => {
    mainWindow.show()
    mainWindow.focus()
  })

  // 当页面请求打开地址为 url 的新窗口时触发
  mainWindow.webContents.on("new-window", (event, url, frameName, disposition, options) => {
    event.preventDefault()
    console.log(options)
    const win = new BrowserWindow({
      webContents: options.webContents, // use existing webContents if provided
      show: false
    })
    win.once('ready-to-show', () => win.show())
    if (!options.webContents) {
      win.loadURL(url) // existing webContents will be navigated automatically
    }
    event.newGuest = win
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('close', e => {
    app.quit()
  })

  // 当系统休眠时
  powerMonitor.on('suspend', () => {
    mainWindow.webContents.send('player-pause');
  });

  mainWindow.goodbay = () => goodbye()

  global.mainWindow = mainWindow;
};



app.allowRendererProcessReuse = false;
// 当应用被激活时发出。 各种操作都可以触发此事件, 
// 例如首次启动应用程序、尝试在应用程序已运行时或单击应用程序的坞站或任务栏图标时重新激活它。
app.on('activate', e => {
  console.log(3333)
})

// 在应用程序开始关闭窗口之前触发。 调用 event.preventDefault() 会阻止默认的行为。默认的行为是终结应用程序。
app.on('before-quit', e => {
  e.preventDefault()
})

app.on('ready', async () => {
  storage.get('preferences', (err, preferences = {}) => {
    if (err) throw err;
    createMainWindow();
  })
})
