"use client";

import { Button, Select, SelectItem } from "@nextui-org/react";
import { Application, ApplicationStatus } from "@prisma/client";

type ApplicationEditFormProps = {
  formAction: (formData: FormData) => void;
  application: Application;
  applicationStatusItems: ApplicationStatus[];
};

export default function ApplicationUpdateForm({
  formAction,
  application,
  applicationStatusItems,
}: ApplicationEditFormProps) {
  const handleSubmit = (formData: FormData) => {
    formAction(formData);
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 my-4">
      <Select
        label="Status"
        className="max-w"
        name="status"
        size="sm"
        defaultSelectedKeys={application.applicationStatusId?.toString() || ""}
      >
        {applicationStatusItems.map((applicationStatus) => (
          <SelectItem key={applicationStatus.id} value={applicationStatus.id}>
            {applicationStatus.name}
          </SelectItem>
        ))}
      </Select>
      <Button type="submit">Zapisz</Button>
    </form>
  );
}
