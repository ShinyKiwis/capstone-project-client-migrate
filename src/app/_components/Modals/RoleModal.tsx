import {
  Button,
  Checkbox,
  Grid,
  Group,
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
import { useDisclosure, useListState } from "@mantine/hooks";
import { managementInitialValues, projectInitialValues } from "./roleData";
import { Role, useRoles } from "@/app/providers/RolesProvider";
import { toggleNotification } from "@/app/lib/notification";

interface RoleModalProps {
  Icon: any;
  action: string;
  role?: Role;
}

const RoleModal = ({ Icon, action, role }: RoleModalProps) => {
  const { roles, setRoles } = useRoles();
  const [roleName, setRoleName] = useState(role?.roleName || "");
  const [error, setError] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const [managementValues, setManagementValues] = useListState(
    managementInitialValues.map((value) => ({
      ...value,
      checked: role?.resources.includes(value.key) ?? false,
    })),
  );

  const allManagementValuesChecked = managementValues.every(
    (value) => value.checked,
  );

  const indeterminateManagement =
    managementValues.some((value) => value.checked) &&
    !allManagementValuesChecked;

  const [projectValues, setProjectValues] = useListState(
    projectInitialValues.map((value) => ({
      ...value,
      checked: role?.resources.includes(value.key) ?? false,
    })),
  );

  const allProjectValuesChecked = projectValues.every((value) => value.checked);

  const indeterminateProject =
    projectValues.some((value) => value.checked) && !allProjectValuesChecked;

  const handleCreateRole = () => {
    if (roleName.length === 0) {
      setError("Role name is required");
    } else if (roles.some((role) => role.roleName == roleName)) {
      toggleNotification(
        `Role ${roleName} existed`,
        `The role ${roleName} is existed. Please try another.`,
        "danger",
      );
    } else {
      setRoles([
        ...roles,
        {
          roleName: roleName,
          resources: [managementValues, projectValues].flatMap((array) =>
            array
              .filter((item) => item.checked == true)
              .map((item) => item.key),
          ),
        },
      ]);
      toggleNotification(
        `Create role ${roleName} successfully`,
        `The role ${roleName} is created.`,
        "success",
      );
    }
    setManagementValues.setState(managementInitialValues);
    setProjectValues.setState(projectInitialValues);
    setRoleName("");
    close();
  };

  const handleUpdateRole = () => {
    setRoles(
      roles.map((updateRole) => {
        if (updateRole.roleName == role?.roleName) {
          return {
            roleName: roleName,
            resources: [managementValues, projectValues].flatMap((array) =>
              array.map((item) => item.key),
            ),
          };
        }
        return updateRole;
      }),
    );
    toggleNotification(
      `Update role ${roleName} successfully`,
      `The role ${roleName} is updated.`,
      "success",
    );
    close();
  };

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
          <Text size="md" c="blue" fw={600} className="mb-2">
            Role name
          </Text>
          <TextInput
            data-autofocus
            placeholder="E.g Admin..."
            className="mb-4 mt-2"
            value={roleName}
            inputWrapperOrder={["label", "error", "input"]}
            error={error}
            onChange={(e) => setRoleName(e.currentTarget.value)}
          />

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
                checked={allProjectValuesChecked}
                indeterminate={indeterminateProject}
                onChange={() =>
                  setProjectValues.setState((current) =>
                    current.map((value) => ({
                      ...value,
                      checked: !allProjectValuesChecked,
                    })),
                  )
                }
                label={
                  <div className="flex items-center gap-2">
                    <AiOutlineProject size={25} />
                    Project
                  </div>
                }
              />
              {projectValues.map((value, index) => (
                <Checkbox
                  mt="xs"
                  ml={33}
                  label={value.label}
                  key={value.key}
                  checked={value.checked}
                  onChange={(e) =>
                    setProjectValues.setItemProp(
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
            <Button
              variant="filled"
              onClick={
                action.toLowerCase() === "edit"
                  ? handleUpdateRole
                  : handleCreateRole
              }
            >
              {action.toLowerCase() === "edit" ? "Update" : "Create"}
            </Button>
          </Group>
        </>
      </Modal>

      <Button onClick={open} leftSection={<Icon size={20} />}>
        {action}
      </Button>
    </>
  );
};

export default RoleModal;
