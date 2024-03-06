import { Button, ScrollArea, TextInput } from "@mantine/core";
import { PiSliders } from "react-icons/pi";
import React from "react";
import { IoCreate } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";

const Project = () => {
  return (
    <div>
      <div className="w-[50%]">
        <div className="flex w-full gap-4">
          <TextInput placeholder="Search projects..." className="flex-1" />
          <Button
            leftSection={<PiSliders size={20} />}
            variant="outline"
            className="ms-auto"
          >
            Filter
          </Button>
        </div>
        <div className="mt-4">
          <Button variant="filled" leftSection={<IoCreate size={20} />}>
            Create project
          </Button>
          <Button
            variant="filled"
            leftSection={<MdFileUpload size={20} />}
            className="ms-4"
          >
            Upload project
          </Button>
        </div>
      </div>
      <div className="w-[30%]">
        <ScrollArea h={250}></ScrollArea>
      </div>
    </div>
  );
};

export default Project;
