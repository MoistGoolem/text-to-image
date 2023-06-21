import customFonts from 'custom-fonts-in-emails';
import express from 'express';
import osFonts from 'os-fonts';

const options = {
    text: 'Oliver Ramstedt',
    fontNameOrPath: 'FiraCode monospace',
    fontColor: '#f77f56',
    fontSize: 40
};
  
customFonts.svg(options)
    .then(console.log)
    .catch(console.error);


//Get all fonts on system and in node_modules
// osFonts.getAll().then(fonts => {
//     // array of fonts...
//     fonts.forEach(font => {
//         console.log(font);
//     });
// })

