import { CardCompact } from "@/components/card-compact";
import { PasswordResetForm } from "@/features/password/components/password-reset-form";

type PasswordResetProps = {
  params: Promise<{
    tokenId: string;
  }>;
};

const PasswordResetPage = async ({ params }: PasswordResetProps) => {
  const { tokenId } = await params;

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="New Password"
        description="Enter a new password for your account"
        className="w-full max-w-[420px] animate-fade-from-top"
        content={<PasswordResetForm tokenId={tokenId} />}
      />
    </div>
  );
};

export default PasswordResetPage;
