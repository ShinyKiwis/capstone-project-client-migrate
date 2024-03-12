import { useState } from "react";
import { Modal, Button, Text, Radio, Stack, MultiSelect } from "@mantine/core";
import { PiSliders } from "react-icons/pi";
import { useDisclosure } from "@mantine/hooks";

const FilterModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [projectType, setProjectType] = useState("all");

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        yOffset="18vh"
        title={
          <Text size="lg" c="blue" fw={600}>
            Filter
          </Text>
        }
      >
        <Text size="md" fw={600} className="mb-2">
          Project type
        </Text>
        <Radio.Group value={projectType} onChange={setProjectType} mb="sm">
          <Stack gap="sm">
            <Radio value="personal" label="Your projects" />
            <Radio value="all" label="All projects of your faculty" />
          </Stack>
        </Radio.Group>
        <Text size="md" fw={600} className="mb-2">
          Program
        </Text>
        <MultiSelect
          placeholder="Select programs"
          data={["React", "Angular", "Vue", "Svelte"]}
        />
      </Modal>
      <Button
        leftSection={<PiSliders size={20} />}
        variant="outline"
        className="ms-auto"
        onClick={open}
      >
        Filter
      </Button>
    </>
  );
};

export default FilterModal;
