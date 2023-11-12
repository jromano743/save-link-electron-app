const { app, BrowserWindow} = require("electron");

let mainWindow = null;//Define app

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, // web API + node API
            contextIsolation: false, // TODO:
        }
    });

    mainWindow.loadFile(__dirname + '/index.html');
});