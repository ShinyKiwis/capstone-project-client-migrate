"use client";

import { Button } from "@mantine/core";
import React from "react";

interface UserFilterButtonsProps {
  selectedFilter: string;
  filterHandler: (role: Role) => void;
}

function UserFilterButtons({
  selectedFilter,
  filterHandler,
}: UserFilterButtonsProps) {
  const roles = [
    { id: 1, name: "Teacher" },
    { id: 2, name: "Student" },
    { id: 3, name: "Department Head" },
    { id: 4, name: "Program Chair" },
    { id: 5, name: "Dean" },
  ];
  //   const filterOptions = [roles[4], roles[1], roles[0]]    // pick out some roles at any orders as filter options

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div>Select Users group:</div>
      <div className="flex gap-6 flex-wrap">
      	<Button
      	  variant={selectedFilter === "All" ? "normal" : "outline"}
      	  className="px-4"
      	  onClick={() => filterHandler({ id: 0, name: "All" })}
      	>
      	  All Users
      	</Button>
      	{roles &&
      	  roles.map((role) => {
      	    return (
      	      <Button
      	        variant={selectedFilter === role.name ? "normal" : "outline"}
      	        className="px-4"
      	        onClick={() => filterHandler(role)}
      	      >
      	        {role.name}s
      	      </Button>
      	    );
      	  })}
      </div>
    </div>
  );
}

export default UserFilterButtons;
