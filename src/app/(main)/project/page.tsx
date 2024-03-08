"use client";
import { Badge, Button, Card, ScrollArea, TextInput, Box } from "@mantine/core";
import { PiSliders } from "react-icons/pi";
import React from "react";
import { IoCreate } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
import { ProjectCard, ProjectCardDetail } from "@/app/_components";

const projectData: ProjectProps[] = [
  {
    code: 102,
    name: "Image Segmentation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
    branches: [
      {
        id: 1,
        name: "English Program",
      },
    ],
    majors: [
      {
        id: 1,
        name: "Computer Science",
      },
    ],
    limit: 3,
    status: "WAITING FOR DEPARTMENT HEAD",
    studentsCount: 2,
    students: [
      {
        userId: 2052725,
        credits: 100,
        enrolledAt: "8/3/2024",
        GPA: 8,
        generation: 2020,
        user: {
          id: 2052725,
          email: "truongthinh2902@gmail.com",
          username: "gigachad",
          name: "Gigachad",
          roles: [
            {
              id: 1,
              name: "Student",
            },
          ],
        },
      },
    ],
    references:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
    supervisors: [
      {
        id: 2010,
        email: "vothingocchau@gmail.com",
        name: "Vo Thi Ngoc Chau",
        username: "chauvtn",
      },
    ],
    tasks:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
  },
  {
    code: 102,
    name: "Image Segmentation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
    branches: [
      {
        id: 1,
        name: "English Program",
      },
    ],
    majors: [
      {
        id: 1,
        name: "Computer Science",
      },
    ],
    limit: 3,
    status: "WAITING FOR DEPARTMENT HEAD",
    studentsCount: 2,
    students: [
      {
        userId: 2052725,
        credits: 100,
        enrolledAt: "8/3/2024",
        GPA: 8,
        generation: 2020,
        user: {
          id: 2052725,
          email: "truongthinh2902@gmail.com",
          username: "gigachad",
          name: "Gigachad",
          roles: [
            {
              id: 1,
              name: "Student",
            },
          ],
        },
      },
    ],
    references:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
    supervisors: [
      {
        id: 2010,
        email: "vothingocchau@gmail.com",
        name: "Vo Thi Ngoc Chau",
        username: "chauvtn",
      },
    ],
    tasks:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
  },
  {
    code: 102,
    name: "Image Segmentation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
    branches: [
      {
        id: 1,
        name: "English Program",
      },
    ],
    majors: [
      {
        id: 1,
        name: "Computer Science",
      },
    ],
    limit: 3,
    status: "WAITING FOR DEPARTMENT HEAD",
    studentsCount: 2,
    students: [
      {
        userId: 2052725,
        credits: 100,
        enrolledAt: "8/3/2024",
        GPA: 8,
        generation: 2020,
        user: {
          id: 2052725,
          email: "truongthinh2902@gmail.com",
          username: "gigachad",
          name: "Gigachad",
          roles: [
            {
              id: 1,
              name: "Student",
            },
          ],
        },
      },
    ],
    references:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
    supervisors: [
      {
        id: 2010,
        email: "vothingocchau@gmail.com",
        name: "Vo Thi Ngoc Chau",
        username: "chauvtn",
      },
    ],
    tasks:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
  },
  {
    code: 102,
    name: "Image Segmentation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
    branches: [
      {
        id: 1,
        name: "English Program",
      },
    ],
    majors: [
      {
        id: 1,
        name: "Computer Science",
      },
    ],
    limit: 3,
    status: "WAITING FOR DEPARTMENT HEAD",
    studentsCount: 2,
    students: [
      {
        userId: 2052725,
        credits: 100,
        enrolledAt: "8/3/2024",
        GPA: 8,
        generation: 2020,
        user: {
          id: 2052725,
          email: "truongthinh2902@gmail.com",
          username: "gigachad",
          name: "Gigachad",
          roles: [
            {
              id: 1,
              name: "Student",
            },
          ],
        },
      },
    ],
    references:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
    supervisors: [
      {
        id: 2010,
        email: "vothingocchau@gmail.com",
        name: "Vo Thi Ngoc Chau",
        username: "chauvtn",
      },
    ],
    tasks:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?",
  },
];

const Project = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="w-2/5">
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
      <div className="mt-4 flex w-full overflow-auto">
        <div className="h-full w-2/5">
          <ScrollArea type="hover" h="100%" scrollbars="y" scrollbarSize={4}>
            {projectData.map((project) => (
              <ProjectCard projectObject={project} />
            ))}
          </ScrollArea>
        </div>
        <div className="h-full flex-1 px-4 pt-4">
          <ProjectCardDetail />
        </div>
      </div>
    </div>
  );
};

export default Project;
