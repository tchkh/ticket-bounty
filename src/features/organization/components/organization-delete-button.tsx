"use client";

import { LucideLoaderCircle, LucideTrash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useConfirmDialog } from "@/components/confirm-dialog";
import { Button } from "@/components/ui/button";
import { deleteOrganization } from "../actions/delete-organization";

type OrganizationDeleteButtonProps = {
  organizationId: string;
};

export const OrganizationDeleteButton = ({
  organizationId,
}: OrganizationDeleteButtonProps) => {
  const route = useRouter();

  const [deleteButton, deleteDialog] = useConfirmDialog({
    action: deleteOrganization.bind(null, organizationId),
    trigger: (isPending) => (
      <Button variant="destructive" size="icon">
        {isPending ? (
          <LucideLoaderCircle className="w-4 h-4 animate-spin" />
        ) : (
          <LucideTrash className="w-4 h-4" />
        )}
      </Button>
    ),
    onSuccess: () => {
      route.refresh();
    },
  });

  return (
    <>
      {deleteDialog}
      {deleteButton}
    </>
  );
};
