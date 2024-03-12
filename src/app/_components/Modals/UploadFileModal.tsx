import {
  Text,
  Group,
  Button,
  rem,
  useMantineTheme,
  Modal,
  Container,
  List,
  ThemeIcon,
  ListItem,
  Pill,
} from "@mantine/core";
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { useDisclosure } from "@mantine/hooks";
import { MdUploadFile } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FiFileText } from "react-icons/fi";
import { useState } from "react";

const UploadFileModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [files, setFiles] = useState<FileWithPath[]>([]);
  return (
    <>
      <Modal
        size="45%"
        opened={opened}
        onClose={close}
        title={
          <Text size="lg" c="blue" fw={600}>
            Upload File
          </Text>
        }
      >
        <Dropzone
          // loading
          // onDrop={(files) => console.log("accepted files", files)}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          onDrop={(newFiles) => {
            setFiles((currentFiles) => [...currentFiles, ...newFiles]);
          }}
          className="data-reject:bg-red-500 data-[]:"
        >
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <FiUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <RxCross2
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-red-6)",
                }}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <FiFileText
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-dimmed)",
                }}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
        <Container>
          {/* <List
            spacing="xs"
            size="sm"
            center
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <FiFileText style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            {files.map((file) => (
              <ListItem key={file.name}>{file.name}</ListItem>
            ))}
          </List> */}

          <Pill.Group size="md">
            {files.map((file, index) => (
              <Pill
                key={index}
                onRemove={() => {
                  setFiles((currentFiles) =>
                    currentFiles.filter((_, i) => i != index),
                  );
                }}
                withRemoveButton
              >
                {file.name}
              </Pill>
            ))}
          </Pill.Group>
        </Container>
      </Modal>
      <Button variant="filled" leftSection={<MdUploadFile />} onClick={open}>
        Upload File
      </Button>
    </>
  );
};

export default UploadFileModal;
