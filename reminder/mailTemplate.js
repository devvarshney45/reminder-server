const reminderTemplate = (teamName) => {
  return `
  <div style="margin:0;padding:0;background:#000;
              font-family:Arial,Helvetica,sans-serif;">

    <div style="max-width:600px;margin:20px auto;background:#0b0b0b;
                border-radius:12px;overflow:hidden;
                box-shadow:0 0 25px rgba(255,0,0,0.25);">

      <!-- HEADER -->
      <div style="background:#000;padding:28px;text-align:center;
                  border-bottom:1px solid #1f1f1f;">

        <img 
          src="https://res.cloudinary.com/dfry4phgo/image/upload/f_auto,q_auto,w_300/v1771064609/Mask_group_1_1_jy2eds.png"
          alt="Team Conatus"
          style="height:65px;margin-bottom:10px;"
        >

        <h1 style="margin:0;font-size:34px;letter-spacing:4px;color:#ff2a2a;
                   text-shadow:0 0 12px rgba(255,0,0,0.8);">
          CIPHER OF HAWKINS
        </h1>

        <p style="margin:8px 0 0;color:#aaa;font-size:13px;letter-spacing:2px;">
          FINAL REMINDER
        </p>
      </div>

      <!-- BODY -->
      <div style="padding:34px 26px;color:#d1d1d1;">

        <!-- TOP LINE (keep this as senior said) -->
        <h2 style="margin-top:0;color:#ffffff;text-align:center;">
          The Signal from Hawkins is Near 
        </h2>

        <p style="font-size:15px;color:#bfbfbf;text-align:center;">
          Hello <strong style="color:#ff2a2a;">${teamName}</strong>,
        </p>

        <!-- SENIOR REQUESTED LINE -->
        <h3 style="margin-top:10px;color:#ffffff;text-align:center;">
          The time has come to escape the Upside Down, get yourself ready.
        </h3>


        <p style="font-size:15px;color:#bfbfbf;text-align:center;">
          This is your final reminder for  
          <strong style="color:#ff2a2a;">Cipher of Hawkins</strong>.  
          Be ready to decode mysteries, compete with logic, and conquer the unknown.
        </p>

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

        <!-- IMPORTANT NOTES -->
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
        <div style="background:#111;border-radius:10px;padding:20px;margin-bottom:24px;">
          <h3 style="margin-top:0;color:#ffffff;">📞 Contact</h3>
          <p style="margin:6px 0;color:#cfcfcf;">Dhairya: 7037129788</p>
          <p style="margin:6px 0;color:#cfcfcf;">Priyank: 7905742895</p>
          <p style="margin:6px 0;color:#cfcfcf;">Help Desk: CS/IT Block</p>
        </div>

        <!-- FINAL LINE -->
        <p style="margin-top:10px;font-size:15px;color:#bfbfbf;text-align:center;">
          Stay sharp. Trust your team.  
          <br/>
          <strong style="color:#ff2a2a;">
            Hawkins is waiting… the mystery unfolds today.
          </strong>
        </p>

      </div>

      <!-- FOOTER -->
      <div style="background:#000;border-top:2px solid #ff2a2a;
                  text-align:center;padding:22px;">

        <div style="color:#ff2a2a;font-size:18px;font-weight:bold;
                    letter-spacing:3px;margin-bottom:6px;">
          TEAM CONATUS
        </div>

        <div style="color:#ffffff;font-size:13px;letter-spacing:2px;">
          LEARN • IMPROVISE • GROW
        </div>

      </div>

    </div>
  </div>
  `;
};

export default reminderTemplate;