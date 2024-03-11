import React from "react";
import { Card, Text, Group, Button, Checkbox } from "@mantine/core";
import { LuShieldCheck } from "react-icons/lu";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { useListState } from "@mantine/hooks";
import { MdManageAccounts } from "react-icons/md";

const managementInitialValues = [
  {
    label: "Manage users",
    checked: false,
    key: "manage_users",
  },
  {
    label: "Manage roles",
    checked: false,
    key: "manage_roles",
  },
  {
    label: "Manage deadline",
    checked: false,
    key: "manage_deadline",
  },
];

interface RoleCardProps {
  role: string;
  description: string;
}

const RoleCard = ({ role, description }: RoleCardProps) => {
  const [managementValues, setManagementValues] = useListState(
    managementInitialValues,
  );

  const allManagementValuesChecked = managementValues.every(
    (value) => value.checked,
  );

  const indeterminateManagement =
    managementValues.some((value) => value.checked) &&
    !allManagementValuesChecked;

  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      <Card.Section inheritPadding>
        <LuShieldCheck size={30} />
        <Text fw={500} size="lg">
          {role}
        </Text>
        <Text>{description}</Text>
      </Card.Section>
      <Card.Section inheritPadding>
        <Group justify="space-between">
          <div>
            <Button leftSection={<AiOutlineEdit />}>Edit</Button>
            <Button leftSection={<AiOutlineEye />}>View</Button>
          </div>
          <div>
            <Button>Delete</Button>
          </div>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default RoleCard;
