import dotenv from "dotenv";
import transporter from "./transporter.js";
import reminderTemplate from "./mailTemplate.js";
import connectDB from "../config/db.js";
import Team from "../models/Team.js";
import delay from "../utils/delay.js";

dotenv.config();

/* ====== MAIN FUNCTION ====== */
const sendReminderMails = async () => {
  try {
    console.log("⏳ Connecting DB...");
    await connectDB();

    console.log("📨 Fetching eligible teams (__v:1 only)...");

    // ✅ ONLY __v:1 wale teams
    const teams = await Team.find(
      { __v: 1 }, 
      "teamName leader.email"
    );

    if (teams.length === 0) {
      console.log("⚠ No eligible teams found.");
      process.exit(0);
    }

    console.log(`🚀 Sending reminder to ${teams.length} teams...\n`);

    for (const team of teams) {
      try {
        await transporter.sendMail({
          from: `"Team Conatus" <${process.env.MAIL_SENDER}>`,
          to: team.leader.email,
          subject: "Reminder: Conatus “Decode. Compete. Conquer. Hawkins awaits you”",
          html: reminderTemplate(team.teamName),
        });

        console.log(`✅ Sent to: ${team.leader.email}`);
      } catch (err) {
        console.log(`❌ Failed: ${team.leader.email}`);
      }

      // ⏳ delay to avoid spam/block
      await delay(5000);
    }

    console.log("\n🎉 All reminder mails sent successfully!");
    process.exit(0);

  } catch (error) {
    console.error("❌ Reminder mail error:", error.message);
    process.exit(1);
  }
};

/* ===== RUN SCRIPT ===== */
sendReminderMails();