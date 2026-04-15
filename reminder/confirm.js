import fs from "fs";
import path from "path";
import transporter from "./transporter.js";
import connectDB from "../config/db.js";
import Team from "../models/Team.js";
import certificateTemplate from "./certificateTemplate.js";
import delay from "../utils/delay.js";

const CERT_PATH = "./certificates"; // local folder

const sendCertificates = async () => {
  try {
    await connectDB();

    const teams = await Team.find({ __v: 1 });

    console.log(`📨 Sending certificates to ${teams.length} teams...\n`);

    for (const team of teams) {
      const teamFolder = path.join(CERT_PATH, team.teamName);

      // leader + members combine
      const allMembers = [
        { name: team.leader.name, email: team.leader.email },
        ...team.members,
      ];

      for (const member of allMembers) {
        try {
          const filePath = path.join(teamFolder, `${member.name}.pdf`);

          if (!fs.existsSync(filePath)) {
            console.log(`⚠ Missing: ${filePath}`);
            continue;
          }

          await transporter.sendMail({
            from: `"Team Conatus" <${process.env.MAIL_SENDER}>`,
            to: member.email,
            subject: "🎉 Certificate of Participation - Cipher of Hawkins",
            html: certificateTemplate(member.name),

            attachments: [
              {
                filename: `${member.name}_certificate.pdf`,
                path: filePath,
              },
            ],
          });

          console.log(`✅ Sent: ${member.email}`);
        } catch (err) {
          console.log(`❌ Failed: ${member.email}`);
        }

        await delay(2000);
      }
    }

    console.log("\n🎉 All certificates sent!");
    process.exit(0);

  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
};

sendCertificates();
