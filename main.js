const apprunner = require("./apprunner")

const {app, BrowserWindow, globalShortcut} = require('electron')
const path = require('path')


function createWindow () {
  const mainWindow = new BrowserWindow({
    fullscreen: true,
    frame: false,
    autoHideMenuBar: true,
    kiosk: true,

    width: 2560,
    height: 1600,

    useContentSize: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      zoomFactor: 1.0,
      webviewTag: true
    }
  })

  // mainWindow.webContents.setZoomFactor(1.0)
  // mainWindow.webContents.session.webRequest.onHeadersReceived(
  //   {urls: ['*://*/*']},
  //   (details, callback) => {
  //     Object.keys(details.responseHeaders).filter(x => x.toLowerCase() === 'x-frame-options')
  //           .map(x => delete details.responseHeaders[x])
  
  //     callback({
  //       cancel: false,
  //       responseHeaders: details.responseHeaders,
  //     })
  //   },
  // )
  // const { webFrame } = require('electron')
  // webFrame.setZoomFactor(100)

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
}

function setupKeyBindings() {
  globalShortcut.register('Ctrl+R', () => {
    console.log("overshadow reloading")
  })
  globalShortcut.register('Command+Q', () => {
    console.log('Electron loves global shortcuts!')
  })

  globalShortcut.register('Esc', () => {
    console.log("excape pressed")
  })

  globalShortcut.register('Alt+Shift+Q', () => {
    console.log('want to quit!')
    app.quit()
  })
}

app.whenReady()
  .then(() => {
    //setupKeyBindings()
  })
  .then(() => {
    createWindow()
    
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    
    app.on('browser-window-focus', function () {
      setupKeyBindings()
    })
})



app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
