const electron = require('electron') ;


const { app ,BrowserWindow } = electron ; 

let mianWin = null ; 

app.on('ready' , () => { 
    
    mianWin = new BrowserWindow({
        webPreferences:{
            backgroundThrottling:false , 
            height: 13, 
            width : 1200 ,  
        }
    }) ; 

    mianWin.loadURL(`file://${__dirname}/src/index.html`) ; 
}); 