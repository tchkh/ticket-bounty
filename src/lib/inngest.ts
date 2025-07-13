import { EventSchemas, Inngest } from "inngest";
import { PasswordResetArgs } from "@/features/password/events/event-password-reset";

type Events = {
  "app/password.password-reset": PasswordResetArgs;
};

export const inngest = new Inngest({
  id: "ticket-bounty",
  schemas: new EventSchemas().fromRecord<Events>(),
});
