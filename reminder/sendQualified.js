import dotenv from "dotenv";
import transporter from "./transporter.js";
import qualifiedTemplate from "./qualifiedTemplate.js";
import connectDB from "../config/db.js";
import Team from "../models/Team.js";
import delay from "../utils/delay.js";

dotenv.config();

/* ====== MAIN FUNCTION ====== */
const sendQualifiedMails = async () => {
  try {
    console.log("⏳ Connecting DB...");
    await connectDB();

    console.log("🏆 Fetching Top 20 qualified teams...");

    // ✅ Only qualified teams
    const teams = await Team.find({
      qualifiedForNextRound: true
    });

    if (teams.length === 0) {
      console.log("⚠ No qualified teams found.");
      process.exit(0);
    }

    console.log(`🚀 Sending mails to ${teams.length} teams...\n`);

    for (const team of teams) {
      try {
        // ✅ Collect all emails (leader + members)
        const emails = [
          team.leader?.email,
          ...(team.members?.map(m => m.email) || [])
        ].filter(Boolean); // remove undefined/null

        for (const email of emails) {
          try {
            await transporter.sendMail({
              from: `"Team Conatus" <${process.env.MAIL_SENDER}>`,
              to: email,
              subject: "+TOP 20 Selected - Cipher of Hawkins Day 2",
              html: qualifiedTemplate(team.teamName),
            });

            console.log(`✅ Sent to: ${email}`);
          } catch (err) {
            console.log(`❌ Failed: ${email}`);
          }

          // ⏳ delay between emails
          await delay(3000);
        }

      } catch (err) {
        console.log(`❌ Team error: ${team.teamName}`);
      }
    }

    console.log("\n🎉 All qualified mails sent!");
    process.exit(0);

  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

/* ===== RUN SCRIPT ===== */
sendQualifiedMails();