// electron.js
/*const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');*/
import {app, BrowserWindow} from "electron";
import path from "path";
import isDev from "electron-is-dev";

/*(async () => {const { app, BrowserWindow } = await import('electron');})();
(async () => {const { path } = await import('path');})();
(async () => {const { isDev } = await import('electron-is-dev');})();*/

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    /*const startURL = isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`;*/
    const startURL = 'http://localhost:3000';

    mainWindow.loadURL(startURL);

    mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});