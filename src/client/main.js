const { app, BrowserWindow } =  require("electron");

app.on('ready', () =>{
    console.log('Aplicação iniciada ', __dirname)
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 500
    });
    
    mainWindow.loadURL(`file://${__dirname}/index.html`)

});

app.on("window-all-closed", () =>{
    app.quit();
})