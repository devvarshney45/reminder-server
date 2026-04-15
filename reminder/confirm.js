import dotenv from "dotenv";
import transporter from "./transporter.js";
import successMailTemplate from "./successTemplate.js";
import connectDB from "../config/db.js";
import Team from "../models/Team.js";
import delay from "../utils/delay.js";

dotenv.config();

/* ====== MAIN FUNCTION ====== */
const sendConfirmationMails = async () => {
  try {
    console.log("⏳ Connecting DB...");
    await connectDB();

    console.log("📨 Fetching eligible teams (__v:1 only)...");

    // ✅ ONLY __v: 1 wale teams
    const teams = await Team.find({ __v: 1 });

    if (teams.length === 0) {
      console.log("⚠ No eligible teams found.");
      process.exit(0);
    }

    console.log(`🚀 Sending confirmation to ${teams.length} teams...\n`);

    for (const team of teams) {
      try {
        await transporter.sendMail({
          from: `"Team Conatus" <${process.env.MAIL_SENDER}>`,
          to: team.leader.email,
          subject: "Registration Confirmed - Cipher of Hawkins 🎉",
          html: successMailTemplate({
            name: team.teamName,
            leaderName: team.leader.name,
            members: team.members,
          }),
        });

        console.log(`✅ Sent to: ${team.leader.email}`);
      } catch (err) {
        console.log(`❌ Failed: ${team.leader.email}`);
      }

      // ⏳ Delay (spam avoid)
      await delay(3000);
    }

    console.log("\n🎉 All confirmation mails sent!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Confirmation mail error:", error.message);
    process.exit(1);
  }
};

/* ===== RUN SCRIPT ===== */
sendConfirmationMails();