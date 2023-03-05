import * as React from "react";
import { GridColumns, GridApi, GridCellValue } from "@mui/x-data-grid-pro";
import Avatar from "@mui/material/Avatar";
import { IconButton, Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { stringsAvatar } from "./../../util/avatars";

export const Columns: GridColumns = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    align: "center",
    renderCell: (params) => {
      return (
        <Avatar
          {...stringsAvatar(
            `${params.row.firstname}`,
            `${params.row.lastname}`
          )}
        />
      );
    }
  },
  { field: "firstname", headerName: "Firstname", width: 150, editable: true },
  { field: "lastname", headerName: "Lastname", width: 150, editable: true },
  { field: "nickname", headerName: "Nickname", width: 120, editable: true },
  {
    field: "employeeId",
    headerName: "Employee ID",
    width: 150,
    editable: true
  },
  { field: "email", headerName: "Email", width: 250, editable: true },
  {
    field: "access",
    headerName: "Application access",
    width: 150,
    editable: true
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 60,
    align: "center",
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation();

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c?.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <Stack direction="row">
          <IconButton onClick={onClick}>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </Stack>
      );
    }
  }
];
