import { GridColDef, GridApi, GridCellValue } from "@mui/x-data-grid-pro";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { stringAvatar } from "./../../util/avatars";

export const Columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    align: "center",
    renderCell: (params) => {
      return <Avatar {...stringAvatar(`${params.row.name}`)} />;
    }
  },
  { field: "name", headerName: "Name", width: 150, editable: true },
  {
    field: "employeeId",
    headerName: "Employee ID",
    width: 150,
    editable: true
  },
  { field: "email", headerName: "Email", width: 250, editable: true },
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
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <IconButton onClick={onClick}>
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
      );
    }
  }
];
