export const formEmailTemplate = (formData) => {
  const fields = Object.keys(formData)
    .map((key) => {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      return `
      <tr>
        <td style="font-weight: bold; padding: 10px;color:#c7ab7c;text-transform:uppercase; border-bottom: 1px solid #ccc;">${capitalizedKey}:</td>
        <td style="padding: 10px; border-bottom: 1px solid #ccc;color:#fff;">${formData[key]}</td>
      </tr>
    `;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          a {
          text-decoration: none;
          color: #fff;
        }
        body {
          font-family: 'PT Sans', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #282939;
          color: #333;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #282939;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 10px 0;
        }
        .header img {
          max-width: 100px;
        }
        .content {
          padding: 20px;
        }
        .content h2 {
          color: #c7ab7c;
          margin-bottom: 20px;
        }
        .content table {
          width: 100%;
          border-collapse: collapse;
        }
        .content td {
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://jovid-homes-properties.vercel.app/logoPNG.png" alt="Logo">
        </div>
        <div class="content">
          <h2>Form Submission Details</h2>
          <table>
            ${fields}
          </table>
        </div>
      </div>
    </body>
    </html>
  `;
};
