
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
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

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
