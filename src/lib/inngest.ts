import { EventSchemas, Inngest } from "inngest";
import { EmailVerificationEventArgs } from "@/features/auth/events/event-email-verification";
import { PasswordResetArgs } from "@/features/password/events/event-password-reset";

type Events = {
  "app/password.password-reset": PasswordResetArgs;
  "app/auth.sign-up": EmailVerificationEventArgs;
};

export const inngest = new Inngest({
  id: "ticket-bounty",
  schemas: new EventSchemas().fromRecord<Events>(),
});
