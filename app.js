import customFonts from 'custom-fonts-in-emails';
import express from 'express';
import {dirname} from 'path';
import osFonts from 'os-fonts';

const app = express();

const options = {
    text: 'Oliver Ramstedt',
    fontNameOrPath: 'FiraCode',
    fontColor: '#F77F56',
    fontSize: 40
  };
  
  customFonts.svg(options)
    .then(console.log)
    .catch(console.error);


    // osFonts.getAll().then(fonts => {
    //     // array of fonts...
    //     fonts.forEach(font => {
    //         console.log(font);
    //     });
    // })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });

