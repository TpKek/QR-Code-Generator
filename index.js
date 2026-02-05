/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      /* 1. Use the 'message' key for the question */
      message: 'Type in your URL: ',
      /* 2. Use the 'name' key to store the answer */
      name: 'url',
    },
  ])
  .then(answer => {
    const url = answer.url;
    const qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_Image.png'));
    console.log('QR code generated and saved as my_qr_code.png');
  })
  .catch(error => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log('Something else went wrong');
    }
  });
