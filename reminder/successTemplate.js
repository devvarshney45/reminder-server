const successMailTemplate = () => {
  return `
<body style="margin:0;padding:0;background:#000;
             font-family:Arial,Helvetica,sans-serif;">

  <div style="max-width:620px;margin:30px auto;background:#0b0b0b;
              border-radius:12px;overflow:hidden;
              box-shadow:0 0 30px rgba(255,0,0,0.25);
              border:1px solid #1a1a1a;">

    <!-- HEADER -->
    <div style="background:#000;padding:30px;text-align:center;
                border-bottom:1px solid #1f1f1f;">

      <img 
        src="https://res.cloudinary.com/dfry4phgo/image/upload/f_auto,q_auto,w_300/v1771064609/Mask_group_1_1_jy2eds.png"
        style="height:65px;margin-bottom:12px;"
      >

      <h1 style="margin:0;font-size:32px;letter-spacing:4px;
                 color:#ff2a2a;
                 text-shadow:0 0 12px rgba(255,0,0,0.8);">
        CIPHER OF HAWKINS
      </h1>

      <p style="margin-top:8px;color:#aaa;font-size:13px;letter-spacing:2px;">
        REGISTRATION CONFIRMED
      </p>
    </div>

    <!-- BODY -->
    <div style="padding:34px 26px;color:#d1d1d1;line-height:1.7;">

      <h2 style="margin-top:0;color:#ffffff;text-align:center;">
        The Signal Has Been Received
      </h2>

      <p style="font-size:15px;color:#bfbfbf;text-align:center;">
        Your payment has been successfully processed.
        <br/>
        You are now officially part of  
        <strong style="color:#ff2a2a;">Cipher of Hawkins</strong>.
      </p>

      <p style="font-size:14px;color:#9a9a9a;text-align:center;">
        What lies ahead is not just a competition — it's a test of logic, instinct, and control.
      </p>

      <!-- DIVIDER -->
      <div style="margin:28px 0;height:1px;
                  background:linear-gradient(to right,transparent,#ff2a2a,transparent);">
      </div>

      <!-- EVENT DETAILS -->
      <div style="background:#111;border:1px solid #ff2a2a;border-radius:10px;
                  padding:22px;margin:26px 0;
                  box-shadow:0 0 18px rgba(255,0,0,0.35);">

        <h3 style="margin-top:0;color:#ff2a2a;">📍 Event Details</h3>

        <ul style="padding-left:18px;margin:0;color:#cfcfcf;">
          <li><strong>Dates:</strong> April 2 – 3</li>
          <li><strong>Reporting Time:</strong> 4:00 PM</li>
          <li><strong>Venue:</strong> CS/IT Block (3rd Floor)</li>
        </ul>
      </div>

      <!-- INSTRUCTIONS -->
      <div style="background:#111;border:1px solid #333;border-radius:10px;
                  padding:20px;margin-bottom:24px;">

        <h3 style="margin-top:0;color:#ffffff;">📝 Important Instructions</h3>

        <ul style="padding-left:18px;margin:0;color:#cfcfcf;">
          <li>Ensure all team members report together.</li>
          <li>Carry your college ID.</li>
          <li>Reach on time to avoid disqualification.</li>
          <li>Please ensure you have your <strong>HackerRank account</strong> created before the event.</li>
          <li>Hosteller girls should wait at the hostel gate until society members arrive.</li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div style="background:#111;border:1px solid #222;border-radius:10px;
                  padding:18px;margin-bottom:20px;text-align:center;">

        <p style="margin:0 0 8px;color:#ff2a2a;font-size:14px;font-weight:bold;">
          For Queries
        </p>

        <p style="margin:4px 0;color:#cfcfcf;font-size:13px;">
          Dhairya • 7037129788
        </p>

        <p style="margin:4px 0;color:#cfcfcf;font-size:13px;">
          Priyank • 7905742895
        </p>

      </div>

      <!-- FINAL LINE -->
      <p style="margin-top:10px;font-size:15px;color:#bfbfbf;text-align:center;">
        The gate is open now.  
        <br/>
        <strong style="color:#ff2a2a;">
          Hawkins is waiting… step into the unknown.
        </strong>
      </p>

    </div>

    <!-- FOOTER -->
    <div style="background:#000;border-top:2px solid #ff2a2a;
                text-align:center;padding:20px;">

      <div style="color:#ff2a2a;font-size:17px;font-weight:bold;
                  letter-spacing:3px;margin-bottom:6px;">
        TEAM CONATUS
      </div>

      <div style="color:#ffffff;font-size:12px;letter-spacing:2px;">
        LEARN • IMPROVISE • GROW
      </div>

    </div>

  </div>
</body>
`;
};

export default successMailTemplate;