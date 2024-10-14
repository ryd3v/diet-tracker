const {app, BrowserWindow} = require('electron');
const path = require('path');

const iconPath = process.platform === 'win32'
    ? path.join(__dirname, 'assets', 'icon.ico')
    : path.join(__dirname, 'assets', 'icon.png');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: iconPath, // Use iconPath here
    });

    // Load your app
    win.loadURL(`http://localhost:3000`);

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
