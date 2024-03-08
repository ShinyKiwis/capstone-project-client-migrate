import React from "react";
import { Card, Text, Group, Button } from "@mantine/core";
import { LuShieldCheck } from "react-icons/lu";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

interface RoleCardProps {
  role: string;
  description: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, description }) => {
  return (
    <Card shadow="xs" padding="md" radius="md">
      <Card.Section>
        <LuShieldCheck size={30} />
        <Text fw={500} size="lg">
          {role}
        </Text>
        <Text>{description}</Text>
      </Card.Section>
      <Card.Section>
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
