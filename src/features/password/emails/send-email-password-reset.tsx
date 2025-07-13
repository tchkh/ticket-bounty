import EmailPasswordReset from "@/emails/password/email-password-reset";
import { resend } from "@/utils/resend";

export const sendEmailPasswordReset = async (
  username: string,
  email: string,
  passwordResetLink: string
) => {
  return await resend.emails.send({
    from: "no-reply@app.ticket-bounty.com",
    to: email,
    subject: "Password Reset from Ticket Bounty",
    react: <EmailPasswordReset toName={username} url={passwordResetLink} />,
  });
};
