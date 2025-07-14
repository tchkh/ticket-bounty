import { CardCompact } from "@/components/card-compact";
import { EmailVerificaitonForm } from "@/features/auth/components/email-verification-form";

const EmailVerificationPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Verify Email"
        description="Please verify your email address to continue."
        className="w-full max-w-[420px] animate-fade-from-top"
        content={<EmailVerificaitonForm />}
      />
    </div>
  );
};

export default EmailVerificationPage;
