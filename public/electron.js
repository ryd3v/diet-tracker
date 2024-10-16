const path = require('path');

const {app, BrowserWindow, Menu} = require('electron');

const menu = require('./menu');

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 500,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
app.setName('DietTracker');
Menu.setApplicationMenu(menu);
