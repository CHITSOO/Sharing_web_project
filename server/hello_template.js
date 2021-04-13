const Hello = data => {

    return `
      <!DOCTYPE html>
     <html style="margin: 0; padding: 0;">
     
         <head>
             <title>Hello</title>
         </head>
     
             <body style="margin: 0; padding: 0;">
                <br />
                <br />
                <div>인증코드를 입력해주세요 ${data}</div>
                <br />
                <br />
             </body>
     
       </html>
      `;
  };
  
  module.exports = { Hello };