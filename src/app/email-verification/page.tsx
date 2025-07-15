import { CardCompact } from "@/components/card-compact";
import { EmailVerificaitonForm } from "@/features/auth/components/email-verification-form";
import { EmailVerificaitonResendForm } from "@/features/auth/components/email-verification-resend-form";

const EmailVerificationPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Verify Email"
        description="Please verify your email address to continue."
        className="w-full max-w-[420px] animate-fade-from-top"
        content={
          <div className="flex flex-col gap-y-2">
            <EmailVerificaitonForm />
            <EmailVerificaitonResendForm />
          </div>
        }
      />
    </div>
  );
};

export default EmailVerificationPage;
