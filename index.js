const { app, BrowserWindow } = require('electron')

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({})

  mainWindow.loadURL(`File://${__dirname}/index.html`)
})
