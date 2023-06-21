import customFonts from 'custom-fonts-in-emails';
import express from 'express';
import osFonts from 'os-fonts';

//*Custom-fonts-in-emails attributes
const text = "Oliver Ramstedt";
const font = "FiraCode monospace";
const color = "#f77f56";
const backgroundColor = "";
const size = 40;
const trim = true;
//*svg options
const x = 0;
const y = 0;
const anchor = "left";
const attributes = {};

const textToSvgOptions = {
    x,
    y,
    anchor,
    attributes,
}


const options = {
    text: text,
    fontNameOrPath: font,
    fontColor: color,
    fontSize: size,
};
  
customFonts.svg(options)
    .then(console.log)
    .catch(console.error);


//*Get all fonts on system and in node_modules
// osFonts.getAll().then(fonts => {
//     // array of fonts...
//     fonts.forEach(font => {
//         console.log(font);
//     });
// })

