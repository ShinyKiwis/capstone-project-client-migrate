"use client";

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "next/navigation";
import useProgramBranch from "@/app/hooks/useProgramBranch";
import useInstructor from "@/app/hooks/useInstructor";
import { useForm } from "@mantine/form";
import {
  Button,
  Input,
  MultiSelect,
  NativeSelect,
  NumberInput,
} from "@mantine/core";
import { formatRevalidate } from "next/dist/server/lib/revalidate";

const stageOptions = [
  {
    label: "Specialized project",
    value: "1",
  },
  {
    label: "Capstone project",
    value: "2",
  },
];

const CreateProject = () => {
  // Background data initialization
  const { programBranches } = useProgramBranch();
  const programOptions = programBranches.map((progbranch) => {
    return {
      label: progbranch.name,
      value: progbranch.id.toString(),
    };
  });
  function getBranchOptions() {
    let programIds: string[] = form.values.programs;
    if (Array.isArray(programIds) && programIds.length === 0) return [];
    if (programBranches.length === 0) return [];

    const programBranchesFiltered = programBranches.filter((program) =>
      programIds.includes(program.id.toString()),
    );

    const branchesArrays = programBranchesFiltered.map(
      (program) => program.branches,
    );

    // Find common branches
    const commonBranches = branchesArrays.reduce(
      (accumulator, currentBranches) => {
        return accumulator.filter((branch) =>
          currentBranches.some(
            (currentBranch) => currentBranch.id === branch.id,
          ),
        );
      },
    );

    const mappedBranches = commonBranches.map((branch) => ({
      label: branch.name,
      value: branch.id.toString(),
    }));

    return mappedBranches;
  }

  const { instructors } = useInstructor();
  const searchParams = useSearchParams();

  // Input data state hooks
  const form = useForm({
    initialValues: {
      title: "",
      stage: -1,
      programs: [],
      branches: [],
      instructorsList: [],
      membersNo: 1,
      membersList: [],
      description: "",
      tasks: "",
      references: "",
      requirements: "",
    },

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });

  // const [title, setTitle] = useState("");
  // const [stage, setStage] = useState<string>('-1');
  // const [instructorList, setInstructorList] = useState<OptionType[]>([]);
  // const [studentsList, setStudentsList] = useState<OptionType[]>([]);
  // const [selectedBranches, setSelectedBranches] = useState<OptionType[]>([]);
  // const [selectedMajors, setSelectedMajors] = useState<OptionType[]>([]);
  // const [requirements, setRequirements] = useState("");
  // const [description, setDescription] = useState("");
  // const [tasks, setTasks] = useState("");
  // const [refs, setRefs] = useState("");
  // const [numberOfMembers, setNumberOfMembers] = useState(1);

  // useEffect(() => {
  //   // Set values based on default options
  //   if (branches.length > 0 || majors.length > 0) {
  //     setSelectedBranches([branchOptions[0]]);
  //     setSelectedMajors([majorOptions[0]]);
  //   }
  // }, [branches, majors]);

  // const projectContext = useContext(ProjectContext);
  // if (!projectContext) return <div>Loading</div>
  // const { handleCreation } = projectContext;
  // const stageOptions: OptionType[] = [
  //   {
  //     label: "Specialized project",
  //     value: '1',
  //     dataObject: {},
  //   },
  //   {
  //     label: "Capstone project",
  //     value: '2',
  //     dataObject: {},
  //   },
  // ]

  // Display elements
  const InputFieldTitle = ({ title }: { title: string }) => {
    let className = "text-2xl font-bold mb-4";
    return <div className={className}>{title}</div>;
  };

  const InputLabel = ({ title }: { title: string }) => {
    let className = "w-44 text-lg font-semibold";
    return <div className={className}>{title}</div>;
  };

  // Main return
  return (
    <div className="h-full w-full bg-white">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        {/* title section */}
        <input
          placeholder="Input project title"
          required
          className="border-gray max-h-[5em] w-full border-b-2 py-2 pb-4 pt-8 text-center text-3xl font-semibold focus:outline-none"
          {...form.getInputProps("title")}
        />

        <div className="mt-8 w-full">
          {/* metadata table & req section */}
          <div className="flex h-fit gap-4">
            <div className="w-1/3">
              <InputFieldTitle title="Project's information" />
              <table className="border-separate border-spacing-3">
                <tbody>
                  <tr>
                    <td>
                      <InputLabel title="Project ID:" />
                    </td>
                    <td className="bg-lightgray rounded-md px-2 py-2">Draft</td>
                  </tr>
                  <tr>
                    <td>
                      <InputLabel title="Project owner:" />
                    </td>
                    <td className="bg-lightgray rounded-md px-2 py-2">
                      {"current user's name"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InputLabel title="Project stage:" />
                    </td>
                    <td>
                      <NativeSelect
                        data={stageOptions}
                        aria-placeholder="Select project stage"
                        {...form.getInputProps("stage")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InputLabel title="Program:" />
                    </td>
                    <td>
                      <div className="w-full">
                        <MultiSelect
                          placeholder="Pick project program"
                          data={programOptions}
                          {...form.getInputProps("programs")}
                          onChange={(val) => {
                            form.getInputProps("programs").onChange(val);
                            form.setValues({branches: []})
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InputLabel title="Branch:" />
                    </td>
                    <td>
                      <div className="w-full">
                        <MultiSelect
                          placeholder={
                            form.values.programs.length < 1
                              ? "Select program(s) first"
                              : "Select available branches"
                          }
                          data={getBranchOptions()}
                          {...form.getInputProps("branches")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InputLabel title="Number of members:" />
                    </td>
                    <td>
                      <div className="w-full">
                        <NumberInput
                          defaultValue={1}
                          min={1}
                          max={20}
                          clampBehavior="strict"
                          required
                          {...form.getInputProps("membersNo")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-2/3">
              <div className="flex h-full flex-col">
                <p className="mb-4 text-2xl font-bold">Requirements</p>
                {/* <RichTextEditor
                onChange={setRequirements}
                initialContent={requirements}
              /> */}
              </div>
            </div>
          </div>

          {/* instructors and desc section */}
          <div className="mt-4 flex h-fit gap-4">
            <div className="h-fit min-h-[16rem] w-1/3">
              <InputFieldTitle title="Instructors" />
              {/* <ProfileSelector
              type="instructors"
              onChange={setInstructorList}
              value={instructorList}
              isMulti={true}
            /> */}
            </div>

            <div className="w-2/3">
              <div className="flex h-full flex-col">
                <p className="mb-4 text-2xl font-bold">Description</p>
                {/* <RichTextEditor
                onChange={setDescription}
                initialContent={description}
              /> */}
              </div>
            </div>
          </div>

          {/* Members and tasks section */}
          <div className="mt-4 flex h-fit gap-4">
            <div className="h-fit min-h-[16rem] w-1/3">
              <InputFieldTitle title="Members" />
              {/* <ProfileSelector
              type="students"
              onChange={setStudentsList}
              value={studentsList}
              isMulti={true}
            /> */}
            </div>

            <div className="w-2/3">
              <div className="flex h-full flex-col">
                <p className="mb-4 text-2xl font-bold">Tasks/Missions</p>
                {/* <RichTextEditor onChange={setTasks} initialContent={tasks} /> */}
              </div>
            </div>
          </div>

          <div className="mt-4 flex h-fit gap-4">
            <div className="h-64 w-1/3"></div>
            <div className="w-2/3">
              <div className="flex h-full flex-col">
                <p className="mb-4 text-2xl font-bold">References</p>
                {/* <RichTextEditor onChange={setRefs} initialContent={refs} /> */}
              </div>
            </div>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>

    // {/* Action buttons: */}
    // <div className="flex justify-end gap-4 pt-4 pb-4">
    //   <Button
    //     isPrimary={true}
    //     variant="success"
    //     className="px-4 py-2 text-lg"
    //     onClick={() => {
    //       const newProject = {
    //         name: title,
    //         stage: parseInt(stage),
    //         description,
    //         status: "WAITING_FOR_DEPARTMENT_HEAD",
    //         owner: {
    //           id: user.id
    //         },
    //         tasks,
    //         references: refs,
    //         limit: numberOfMembers,
    //         semester: {
    //           year: 2023,
    //           no: 1,
    //         },
    //         supervisors: [
    //           {
    //             id: user.id,
    //           },
    //           ...instructorList.map((instructor) => {
    //             return {
    //               id: +instructor.value,
    //             };
    //           }),
    //         ],
    //         students: [
    //           ...studentsList.map((student) => {
    //             return {
    //               userId: student.value,
    //             };
    //           }),
    //         ],
    //         majors: [
    //           ...selectedMajors.map((major: OptionType) => {
    //             return {
    //               id: major.value,
    //             };
    //           }),
    //         ],
    //         branches: [
    //           ...selectedBranches.map((branch: OptionType) => {
    //             return {
    //               id: branch.value,
    //             };
    //           }),
    //         ]
    //       };
    //       axios
    //         .post("http://localhost:3500/projects", newProject)
    //         .then((res) => {
    //           const newSupervisorIds = [
    //             user.id,
    //             ...instructorList
    //               .map((instructor) => {
    //                 if (+instructor.value != user.id) {
    //                   return +instructor.value;
    //                 }
    //               })
    //               .filter(
    //                 (storedInstructor) => storedInstructor !== undefined,
    //               ),
    //           ];
    //           const parsedProject = {
    //             ...newProject,
    //             code: res.data.code,
    //             students: [],
    //             studentsCount: 0,
    //             requirements: requirements,
    //             supervisors: [
    //               {
    //                 id: user.id,
    //                 email: user.email,
    //                 username: user.username,
    //                 name: user.name,
    //               },
    //               ...instructors.filter((instructor) =>
    //                 newSupervisorIds.includes(instructor.id),
    //               ),
    //             ],

    //             majors: majors.filter(
    //               (storedMajor: any) => storedMajor.name === selectedMajors,
    //             ),
    //             branches: branches.filter(
    //               (storedBranch: any) => storedBranch.name === selectedBranches,
    //             ),
    //           };
    //           handleCreation(parsedProject);
    //           navigate(`/project?project=${searchParams.get("project")}`);
    //         }).catch(err => { console.log(err) });
    //     }}
    //   >
    //     Submit for approval
    //   </Button>

    //   <Button
    //     isPrimary={true}
    //     variant="normal"
    //     className="px-4 py-2 text-lg"
    //     onClick={() => {
    //       // alert(`Instructors:\n${JSON.stringify(instructorList)}\n\nStudents:\n${JSON.stringify(studentsList)}`)

    //       const newProject = {
    //         name: title,
    //         stage: parseInt(stage),
    //         description,
    //         tasks,
    //         status: "DRAFT",
    //         references: refs,
    //         owner: {
    //           id: user.id
    //         },
    //         limit: numberOfMembers,
    //         semester: {
    //           year: 2023,
    //           no: 1,
    //         },
    //         supervisors: [
    //           {
    //             id: user.id,
    //           },
    //           ...instructorList.map((instructor) => {
    //             return {
    //               id: +instructor.value,
    //             };
    //           }),
    //         ],
    //         students: [
    //           ...studentsList.map((student) => {
    //             return {
    //               userId: student.value,
    //             };
    //           }),
    //         ],
    //         majors: [
    //           ...selectedMajors.map((major: OptionType) => {
    //             return {
    //               id: major.value,
    //             };
    //           }),
    //         ],
    //         branches: [
    //           ...selectedBranches.map((branch: OptionType) => {
    //             return {
    //               id: branch.value,
    //             };
    //           }),
    //         ]
    //       };

    //       axios
    //         .post("http://localhost:3500/projects", newProject)
    //         .then((res) => {
    //           const newSupervisorIds = [
    //             user.id,
    //             ...instructorList
    //               .map((instructor) => {
    //                 if (+instructor.value != user.id) {
    //                   return +instructor.value;
    //                 }
    //               })
    //               .filter(
    //                 (storedInstructor) => storedInstructor !== undefined,
    //               ),
    //           ];
    //           const parsedProject = {
    //             ...newProject,
    //             code: res.data.code,
    //             students: [],
    //             studentsCount: 0,
    //             requirements: requirements,
    //             owner: {
    //               id: user.id
    //             },
    //             supervisors: [
    //               {
    //                 id: user.id,
    //                 email: user.email,
    //                 username: user.username,
    //                 name: user.name,
    //               },
    //               ...instructors.filter((instructor) =>
    //                 newSupervisorIds.includes(instructor.id),
    //               ),
    //             ],
    //             majors: majors.filter(
    //               (storedMajor: any) => storedMajor.name === selectedMajors,
    //             ),
    //             branches: branches.filter(
    //               (storedBranch: any) => storedBranch.name === selectedBranches,
    //             ),
    //           };
    //           handleCreation(parsedProject);
    //           navigate(`/project?project=${searchParams.get("project")}`);
    //         });
    //     }}
    //   >
    //     Save Changes
    //   </Button>
    // </div>
  );
};

export default CreateProject;
