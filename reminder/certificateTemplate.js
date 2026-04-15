const certificateTemplate = (name) => {
  return `
  <body style="margin:0;padding:0;background:#000;font-family:Arial,Helvetica,sans-serif;">

    <div style="max-width:600px;margin:30px auto;background:#0b0b0b;
                border-radius:12px;overflow:hidden;
                border:1px solid #1a1a1a;
                box-shadow:0 0 25px rgba(255,0,0,0.25);">

      <!-- HEADER -->
      <div style="padding:28px;text-align:center;border-bottom:1px solid #1f1f1f;">
        <h1 style="color:#ff2a2a;letter-spacing:4px;margin:0;">
          CIPHER OF HAWKINS
        </h1>
        <p style="color:#aaa;font-size:12px;">CERTIFICATE OF PARTICIPATION</p>
      </div>

      <!-- BODY -->
      <div style="padding:30px;color:#d1d1d1;text-align:center;">

        <p>This is to certify that</p>

        <h2 style="color:#ff2a2a;margin:10px 0;">
          ${name}
        </h2>

        <p>
          has successfully participated in the event  
          <strong>Cipher of Hawkins</strong> organized by Team Conatus.
        </p>

        <p style="margin-top:20px;color:#aaa;font-size:13px;">
          We appreciate your enthusiasm and effort.
        </p>

      </div>

      <!-- FOOTER -->
      <div style="padding:20px;text-align:center;border-top:1px solid #1f1f1f;">
        <p style="color:#ff2a2a;font-weight:bold;">TEAM CONATUS</p>
      </div>

    </div>

  </body>
  `;
};

export default certificateTemplate;
