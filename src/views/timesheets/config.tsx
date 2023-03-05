import {
  GridColDef,
  GridApi,
  GridCellValue,
  GridRenderCellParams,
  useGridSelector,
  useGridApiContext,
  gridFilteredDescendantCountLookupSelector
} from "@mui/x-data-grid-pro";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, Stack, Avatar, Typography } from "@mui/material";
import { stringAvatar } from "./../../util/avatars";
import {
  CellBold,
  CellApprovalStatus,
  HeaderCellDate,
  HeaderCellStatus
} from "./../../components/data-grid";

export const Columns: GridColDef[] = [
  {
    field: "status",
    headerName: "Status",
    width: 115,
    align: "right",
    headerAlign: "right",
    renderCell: CellApprovalStatus,
    renderHeader: HeaderCellStatus,
    valueGetter: (params) => {
      if (params.row.project?.length > 1) return;
      if (params) return params.row.summary?.status;
    }
  },
  {
    field: "monday",
    headerName: "Mon",
    width: 120,
    renderHeader: HeaderCellDate,
    valueGetter: (params) => params && params.row.summary?.cells?.monday?.time
  },
  {
    field: "tuesday",
    headerName: "Tue",
    width: 120,
    renderHeader: HeaderCellDate,
    valueGetter: (params) => params && params.row.summary?.cells?.tuesday?.time
  },
  {
    field: "wednesday",
    headerName: "Wed",
    width: 120,
    renderHeader: HeaderCellDate,
    valueGetter: (params) =>
      params && params.row.summary?.cells?.wednesday?.time
  },
  {
    field: "thursday",
    headerName: "Thu",
    width: 120,
    renderHeader: HeaderCellDate,
    valueGetter: (params) => params && params.row.summary?.cells?.thursday?.time
  },
  {
    field: "friday",
    headerName: "Fri",
    width: 120,
    renderHeader: HeaderCellDate,
    valueGetter: (params) => params && params.row.summary?.cells?.friday?.time
  },
  {
    field: "saturday",
    headerName: "Sat",
    width: 120,
    renderHeader: HeaderCellDate,
    valueGetter: (params) => params && params.row.summary?.cells?.saturday?.time
  },
  {
    field: "sunday",
    headerName: "Sun",
    width: 120,
    renderHeader: HeaderCellDate,
    valueGetter: (params) => params && params.row.summary?.cells?.sunday?.time
  },
  {
    field: "overall",
    headerName: "Overall",
    width: 100,
    renderCell: CellBold,
    valueGetter: (params) => params && params.row.summary?.cells?.overall?.time
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

export const GroupingColDef = {
  headerName: "Employee",
  field: "employee",
  width: 240,
  renderCell: (params: GridRenderCellParams) => {
    const { id, field, rowNode, row } = params;
    const apiRef = useGridApiContext();
    const filteredDescendantCountLookup = useGridSelector(
      apiRef,
      gridFilteredDescendantCountLookupSelector
    );
    const filteredDescendantCount =
      filteredDescendantCountLookup[rowNode.id] ?? 0;

    const handleClick = (event) => {
      apiRef.current.setRowChildrenExpansion(id, !rowNode.childrenExpanded);
      apiRef.current.setCellFocus(id, field);
      event.stopPropagation();
    };

    return (
      <>
        {filteredDescendantCount > 0 ? (
          <Button
            variant="text"
            onClick={handleClick}
            tabIndex={-1}
            size="small"
            sx={{ height: "100%", width: "100%", justifyContent: "flex-start" }}
          >
            <Stack direction="row" spacing="16px" sx={{ alignItems: "center" }}>
              {rowNode.childrenExpanded ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
              <Avatar {...stringAvatar(`${row.employee?.name}`)} />
              <Stack sx={{ textAlign: "left" }}>
                <Typography>{row.employee?.name}</Typography>
                <Typography variant="body2">{row.employee?.job}</Typography>
                {/* <Typography variant="body2">
                  {filteredDescendantCount} project
                </Typography> */}
              </Stack>
            </Stack>
          </Button>
        ) : (
          <Stack>
            <Typography sx={{ pl: "54px" }}>{row.project[0]?.label}</Typography>
            <Typography
              variant="body2"
              sx={{ pl: "54px", color: "grey !important" }}
            >
              {row.project[0]?.activities}
            </Typography>
          </Stack>
        )}
      </>
    );
  }
};
