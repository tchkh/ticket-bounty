import EmailVerification from "@/emails/auth/email-verification";
import { resend } from "@/utils/resend";

export const sendEmailVerification = async (
  username: string,
  email: string,
  verificationCode: string
) => {
  return await resend.emails.send({
    from: "no-reply@app.ticket-bounty.com",
    to: email,
    subject: "Email Verification from Ticket Bounty",
    react: <EmailVerification toName={username} code={verificationCode} />,
  });
};
