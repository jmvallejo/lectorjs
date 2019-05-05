const electron = require('electron')
const { app, BrowserWindow } = electron

app.once('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadURL('http://localhost:3000')
})