"use client";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Modal, TextInput, Text } from "@mantine/core";
import { Deadline, useDeadlines } from "@/app/providers/DeadlinesProvider";
import { DateTimePicker } from "@mantine/dates";
import React, { useState } from "react";
import { toggleNotification } from "@/app/lib/notification";

interface DeadlineModalProps {
  deadline?: Deadline;
  Icon?: any;
  action: string;
}

const DeadlineModal = ({ Icon, action, deadline }: DeadlineModalProps) => {
  const { deadlines, setDeadlines } = useDeadlines();
  const [opened, { open, close }] = useDisclosure(false);
  const [name, setName] = useState(deadline?.name || "");
  const [semester, setSemester] = useState(deadline?.semester || "");
  const [startsAt, setStartsAt] = useState<Date>(
    deadline?.startsAt || new Date(),
  );
  const [endsAt, setEndsAt] = useState<Date>(deadline?.endsAt || new Date());

  const handleCreateDeadline = () => {
    if (
      deadlines.some(
        (deadline) => deadline.name === name && deadline.semester === semester,
      )
    ) {
      toggleNotification(
        `Deadline ${name} existed in semester ${semester}`,
        `The role ${name} is existed in semester ${semester}. Please try another.`,
        "danger",
      );
    } else {
      setDeadlines([
        ...deadlines,
        {
          name,
          semester,
          startsAt,
          endsAt,
        },
      ]);
      toggleNotification(
        `Create ${name} in semester ${semester} successfully`,
        `The deadline for event ${name} in semester ${semester} has been created successfully.`,
        "success",
      );
      setName("");
      setSemester("");
      setStartsAt(new Date());
      setEndsAt(new Date());
      close();
    }
  };

  const handleUpdateDeadline = () => {
    setDeadlines(
      deadlines.map((updateDeadline) => {
        if (
          updateDeadline.name == deadline?.name &&
          updateDeadline.semester == deadline?.semester
        ) {
          return {
            name,
            semester,
            startsAt,
            endsAt,
          };
        }
        return updateDeadline;
      }),
    );
    toggleNotification(
      `Update ${name} in semester ${semester} successfully`,
      `The deadline for event ${name} in semester ${semester} has been updated successfully.`,
      "success",
    );
    close();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={
          <Text size="lg" c="blue" fw={600}>
            Create deadline
          </Text>
        }
        centered
      >
        <TextInput
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          label={
            <Text size="md" c="blue" fw={600} className="mb-2">
              Name
            </Text>
          }
          placeholder="E.g. Specialized Project Registration"
          py="xs"
        />
        <TextInput
          value={semester}
          onChange={(event) => setSemester(event.currentTarget.value)}
          label={
            <Text size="md" c="blue" fw={600} className="mb-2">
              Semester
            </Text>
          }
          placeholder="E.g. 223"
          py="xs"
        />
        <DateTimePicker
          defaultValue={startsAt}
          onChange={(value) =>
            value ? setStartsAt(value) : setStartsAt(new Date())
          }
          label={
            <Text size="md" c="blue" fw={600} className="mb-2">
              Starts at
            </Text>
          }
          placeholder="Pick date and time"
          py="xs"
        />
        <DateTimePicker
          defaultValue={endsAt}
          onChange={(value) =>
            value ? setEndsAt(value) : setEndsAt(new Date())
          }
          label={
            <Text size="md" c="blue" fw={600} className="mb-2">
              Ends at
            </Text>
          }
          placeholder="Pick date and time"
          py="xs"
        />
        <Group justify="flex-end" gap="xs">
          <Button onClick={close} variant="outline">
            Cancel
          </Button>
          <Button
            variant="filled"
            onClick={
              action.toLowerCase() === "edit"
                ? handleUpdateDeadline
                : handleCreateDeadline
            }
          >
            {action.toLowerCase() === "edit" ? "Update" : "Create"}
          </Button>
        </Group>
      </Modal>
      <Button variant="filled" leftSection={<Icon />} onClick={open}>
        {action}
      </Button>
    </>
  );
};

export default DeadlineModal;
