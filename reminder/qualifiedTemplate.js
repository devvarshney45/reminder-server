const qualifiedTemplate = (teamName) => {

return `

<div style="margin:0;padding:0;background:#000;
font-family:Arial,Helvetica,sans-serif;">

<div style="max-width:600px;margin:20px auto;background:#0b0b0b;
border-radius:12px;overflow:hidden;
box-shadow:0 0 25px rgba(255,0,0,0.25);">

<!-- HEADER -->

<div style="background:#000;padding:28px;text-align:center;
border-bottom:1px solid #1f1f1f;">

<h1 style="margin:0;font-size:34px;letter-spacing:4px;color:#ff2a2a;
text-shadow:0 0 12px rgba(255,0,0,0.8);">
CIPHER OF HAWKINS
</h1>

<p style="margin:8px 0 0;color:#aaa;font-size:13px;letter-spacing:2px;">
TOP 20 QUALIFIED
</p>

</div>


<!-- BODY -->

<div style="padding:34px 26px;color:#d1d1d1;">

<h2 style="margin-top:0;color:#ffffff;text-align:center;">
You Survived Day-1 of the Upside Down ⚡
</h2>

<p style="font-size:15px;color:#bfbfbf;text-align:center;">
Hello <strong style="color:#ff2a2a;">${teamName}</strong>,
</p>

<p style="font-size:15px;color:#bfbfbf;text-align:center;">
Congratulations! Your team has successfully cleared the first two rounds of 
<strong style="color:#ff2a2a;">Cipher of Hawkins</strong>.
</p>

<p style="font-size:15px;color:#bfbfbf;text-align:center;">
You are now among the <strong style="color:#ff2a2a;">Top 20 Teams</strong> selected 
to advance to <strong>Day-2</strong> of the competition.
</p>


<!-- DAY 2 DETAILS -->

<div style="background:#111;border:1px solid #ff2a2a;border-radius:10px;
padding:22px;margin:26px 0;
box-shadow:0 0 18px rgba(255,0,0,0.35);">

<h3 style="margin-top:0;color:#ff2a2a;">📍 Day-2 Event Details</h3>

<ul style="padding-left:18px;margin:0;color:#cfcfcf;">

<li><strong>Date:</strong> 3 April</li>

<li><strong>Reporting Time:</strong> 4:00 PM</li>

<li><strong>Venue:</strong> CS/IT Block (3rd Floor)</li>


</ul>

</div>


<!-- MESSAGE -->

<p style="font-size:15px;color:#bfbfbf;text-align:center;">
Day-2 will introduce a completely new set of challenges and an exciting format 
that will test your team’s awareness, strategy, and quick thinking.
</p>

<p style="font-size:15px;color:#bfbfbf;text-align:center;">
Get ready for an experience unlike the previous rounds — the mystery of Hawkins 
is only getting deeper.
</p>


<!-- FINAL LINE -->

<p style="margin-top:10px;font-size:15px;color:#bfbfbf;text-align:center;">

Stay sharp. Trust your team.

<br/>

<strong style="color:#ff2a2a;">
The Upside Down is far from finished…
Day-2 awaits.
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

`
}

export default qualifiedTemplate