import {
  Button,
  Checkbox,
  Grid,
  Group,
  Input,
  Modal,
  Text,
  TextInput,
} from "@mantine/core";
import { AiOutlineProject } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDisclosure, useListState } from "@mantine/hooks";
import { managementInitialValues } from "./roleData";

const CreateRoleModal = () => {
  const [roleName, setRoleName] = useState("");
  const [error, setError] = useState("")
  const [opened, { open, close }] = useDisclosure(false);

  const [managementValues, setManagementValues] = useListState(
    managementInitialValues,
  );

  const allManagementValuesChecked = managementValues.every(
    (value) => value.checked,
  );

  const indeterminateManagement =
    managementValues.some((value) => value.checked) &&
    !allManagementValuesChecked;

  const handleCreateRole = () => {
    if(roleName.length === 0) {
      setError("Role name is required")
    } else {
    }
  }

  return (
    <>
      <Modal
        size="45%"
        opened={opened}
        onClose={close}
        yOffset="18vh"
        title={
          <Text size="lg" c="blue" fw={600}>
            Create Role
          </Text>
        }
      >
        <>
          <Input.Wrapper
            label={
              <Text size="md" c="blue" fw={600} className="mb-2">
                Role name
              </Text>
            }
            inputWrapperOrder={["label", "error", "input"]}
            error={error}
          >
            <TextInput
              autoFocus
              placeholder="Role name"
              className="mb-4"
              value={roleName}
              onChange={(e) => setRoleName(e.currentTarget.value)}
            />
          </Input.Wrapper>

          <Text size="md" c="blue" fw={600} className="mb-2">
            Resources
          </Text>
          <Grid gutter="xl">
            <Grid.Col span={4}>
              <Checkbox
                checked={allManagementValuesChecked}
                indeterminate={indeterminateManagement}
                onChange={() =>
                  setManagementValues.setState((current) =>
                    current.map((value) => ({
                      ...value,
                      checked: !allManagementValuesChecked,
                    })),
                  )
                }
                label={
                  <div className="flex items-center gap-1 font-medium">
                    <MdManageAccounts size={20} />
                    Management
                  </div>
                }
              />
              {managementValues.map((value, index) => (
                <Checkbox
                  mt="xs"
                  ml={33}
                  label={value.label}
                  key={value.key}
                  checked={value.checked}
                  onChange={(e) =>
                    setManagementValues.setItemProp(
                      index,
                      "checked",
                      e.currentTarget.checked,
                    )
                  }
                />
              ))}
            </Grid.Col>
            <Grid.Col span={4}>
              <Checkbox
                label={
                  <div className="flex items-center gap-1 font-medium">
                    <FaChalkboardTeacher size={20} />
                    Program
                  </div>
                }
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Checkbox
                label={
                  <div className="flex items-center gap-2">
                    <AiOutlineProject size={25} />
                    Projects
                  </div>
                }
              />
              <Checkbox.Group className="ms-8 mt-2">
                <div className="flex flex-col gap-2">
                  <Checkbox label="Create projects" />
                  <Checkbox label="View projects" />
                  <Checkbox label="Modify projects" />
                  <Checkbox label="Delete/Deactivate projects" />
                  <Checkbox label="Approve projects" />
                </div>
              </Checkbox.Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Checkbox
                label={
                  <div className="flex items-center gap-2">
                    <PiExam size={25} />
                    Assessment
                  </div>
                }
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Checkbox
                label={
                  <div className="flex items-center gap-2">
                    <VscGraph size={25} />
                    Evaluation
                  </div>
                }
              />
            </Grid.Col>
          </Grid>
          <Group justify="flex-end" gap="xs">
            <Button onClick={close} variant="outline">
              Cancel
            </Button>
            <Button variant="filled" onClick={handleCreateRole}>Create</Button>
          </Group>
        </>
      </Modal>

      <Button onClick={open} leftSection={<IoMdAdd size={20} />}>
        Create role
      </Button>
    </>
  );
};

export default CreateRoleModal;
