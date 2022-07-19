
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
      zoomFactor: 1.0
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

app.whenReady()
  .then(() => {
    globalShortcut.unregisterAll()
    globalShortcut.register('Command+Q', () => {
      console.log('Electron loves global shortcuts!')
    })
})
.then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
