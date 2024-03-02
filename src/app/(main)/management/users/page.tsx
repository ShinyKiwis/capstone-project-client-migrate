"use client";

import { Profile } from '@/app/_components';
import { Button } from '@mantine/core';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import React, { SyntheticEvent, useContext, useState } from 'react'
import UserFilterButtons from './components/FilterButtons';
import UsersSearchBar from './components/UsersSearchBar';

const Users = () => {
  const [selectedFilter, setSelectedFilter] = useState("Dean");
  const [search, setSearch] = useState("");
  const [tableIsLoading, setTableIsLoading] = useState(false);

  const usersData:User_ManageTable[] = [
    {
      "id": 2053101,
      "name": "Nguyễn An",
      "email": "user2053101@example.com",
      "roles": [{ "id": 1, "name": "Student" }]
    },
    {
      "id": 2053102,
      "name": "Trần Bình",
      "email": "user2053102@example.com",
      "roles": [{ "id": 2, "name": "Teacher" }]
    },
    {
      "id": 2053103,
      "name": "Lê Châu",
      "email": "user2053103@example.com",
      "roles": [{ "id": 3, "name": "Department Head" }]
    },
    {
      "id": 2053104,
      "name": "Phạm Dũng",
      "email": "user2053104@example.com",
      "roles": [{ "id": 4, "name": "Program Chair" }]
    },
    {
      "id": 2053105,
      "name": "Hoàng Hiếu",
      "email": "user2053105@example.com",
      "roles": [{ "id": 5, "name": "Dean" }]
    },
    {
      "id": 2053106,
      "name": "Huỳnh Khánh",
      "email": "user2053106@example.com",
      "roles": [{ "id": 1, "name": "Student" }]
    },
    {
      "id": 2053107,
      "name": "Phan Linh",
      "email": "user2053107@example.com",
      "roles": [{ "id": 2, "name": "Teacher" }]
    },
    {
      "id": 2053108,
      "name": "Vũ Minh",
      "email": "user2053108@example.com",
      "roles": [{ "id": 3, "name": "Department Head" }]
    },
    {
      "id": 2053109,
      "name": "Võ Nga",
      "email": "user2053109@example.com",
      "roles": [{ "id": 4, "name": "Program Chair" }]
    },
    {
      "id": 2053110,
      "name": "Đặng Quang",
      "email": "user2053110@example.com",
      "roles": [{ "id": 5, "name": "Dean" }]
    },
    {
      "id": 2053111,
      "name": "Bùi An",
      "email": "user2053111@example.com",
      "roles": [{ "id": 1, "name": "Student" }]
    },
    {
      "id": 2053112,
      "name": "Đỗ Bình",
      "email": "user2053112@example.com",
      "roles": [{ "id": 2, "name": "Teacher" }]
    },
    {
      "id": 2053113,
      "name": "Hồ Châu",
      "email": "user2053113@example.com",
      "roles": [{ "id": 3, "name": "Department Head" }]
    },
    {
      "id": 2053114,
      "name": "Ngô Dũng",
      "email": "user2053114@example.com",
      "roles": [{ "id": 4, "name": "Program Chair" }]
    },
    {
      "id": 2053115,
      "name": "Dương Hiếu",
      "email": "user2053115@example.com",
      "roles": [{ "id": 5, "name": "Dean" }]
    },
    {
      "id": 2053116,
      "name": "Lý Khánh",
      "email": "user2053116@example.com",
      "roles": [{ "id": 1, "name": "Student" }]
    },

  ]
  

  // const {
  //   data: usersData,
  //   isLoading,
  //   isRefetching,
  // } = useQuery({
  //   queryFn: async () => {
  //     // let allUsers:User_AdminPage[] = await fetchUsers("");    // test using mock API
  //     let respond = await (await axios.get(`http://localhost:3500/users`)).data;

  //     // Initialize all rows on first fetch, the other times will be retreived from cache
  //     setRows(respond.users);
  //     return respond.users; // returned in userData const
  //   },
  //   queryKey: ["users"],
  //   staleTime: Infinity,
  // });

  const [rows, setRows] = useState<User_ManageTable[]>(usersData ? usersData : []); // use data from cache if available

  // Functional handlers
  const handleFilter = async (selectedRole: Role) => {
    setTableIsLoading(true);
    // let respond = await axios
    //   .get(`http://localhost:3500/users?role=${selectedRole.id}`)
    //   .catch((err) => {
    //     console.error("Err filtering users:", err);
    //   });

    // setRows(respond ? respond.data.users : []);
    setTableIsLoading(false);
  };

  const handleSearchUser = async (query: string) => {
    // Call search from api and render results seperately, result is not cached
    setTableIsLoading(true);

    // let respond = await axios
    //   .get(`http://localhost:3500/users?search=${query}`)
    //   .catch((err) => {
    //     console.error("Err searching users:", err);
    //   });

    // setRows(respond ? respond.data.users : []);
    setTableIsLoading(false);
  };

  const handleEditUser = (e: SyntheticEvent, row: any) => {
    alert("Edit:" + row.id);
    // e.stopPropagation();
    // let clickedBtn = e.target as HTMLElement;
    // let clickedBtnCoords = clickedBtn.getBoundingClientRect();

    // setModalType("customPos_user_edit");
    // setModalProps({
    //   targetUsr: row,
    //   position: { x: clickedBtnCoords.x, y: clickedBtnCoords.y },
    // });
    // toggleModal(true);
  };

  const handleDeleteUser = (e: SyntheticEvent, row: any) => {
    alert("Delete:" + row.id);
    // e.stopPropagation();
    // console.log("e object:", e);
    // setModalType("user_deletion");
    // setModalProps({
    //   targetUsr: row,
    // });
    // toggleModal(true);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID number",
      minWidth: 90,
      flex: 1,
    },
    {
      field: "user",
      headerName: "User",
      minWidth: 250,
      flex: 4,
      valueGetter: (params: GridValueGetterParams) => {
        return params.row.name;
      },

      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="py-2">
            <Profile
              type="horizontal"
              username={params.row.name}
              email={params.row.email}
            />
          </div>
        );
      },
    },
    {
      field: "roles",
      headerName: "Roles",
      minWidth: 150,
      flex: 3,
      valueGetter: (params: GridValueGetterParams) => {
        return params.row.roles.map(
          (role: { id: Number; name: String }) => role.name,
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 130,
      flex: 3,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="flex gap-2">
            <Button
              variant="success"
              className="w-24 py-1 text-sm font-semibold"
              onClick={(e) => handleEditUser(e, params.row)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              className="w-24 py-1 text-sm font-semibold"
              onClick={(e) => handleDeleteUser(e, params.row)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex h-fit w-full py-6">
        <UserFilterButtons
          selectedFilter={selectedFilter}
          filterHandler={handleFilter}
        />
        <UsersSearchBar
          value={search}
          onChange={setSearch}
          searchHandler={handleSearchUser}
        />
      </div>

      <div style={{ flex: "1 1 0%", minHeight: 0, width: "100%" }}>
        <DataGrid
          rows={rows || []}
          columns={columns}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              background: "rgba(153, 194, 255, 0.20)",
            },
            ".MuiDataGrid-columnHeaderTitle": {
              fontWeight: 600,
            },
          }}
          getRowHeight={() => "auto"}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20, 50, 100]}
          checkboxSelection
          loading={tableIsLoading}
        />
      </div>
    </div>
  );
}

export default Users