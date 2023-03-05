import { Button, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  GridEvents,
  GridRenderCellParams,
  useGridSelector,
  useGridApiContext,
  gridFilteredDescendantCountLookupSelector
} from "@mui/x-data-grid-pro";

export const isNavigationKey = (key: string) =>
  key === "Home" ||
  key === "End" ||
  key.indexOf("Arrow") === 0 ||
  key.indexOf("Page") === 0 ||
  key === " ";

export const TreeDataCell = (props: GridRenderCellParams) => {
  const { id, field, rowNode, row } = props;
  const apiRef = useGridApiContext();
  const filteredDescendantCountLookup = useGridSelector(
    apiRef,
    gridFilteredDescendantCountLookupSelector
  );
  const filteredDescendantCount =
    filteredDescendantCountLookup[rowNode.id] ?? 0;
  const hasChildren = filteredDescendantCount > 0;

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.stopPropagation();
    }
    if (isNavigationKey(event.key) && !event.shiftKey) {
      apiRef.current.publishEvent(
        GridEvents.cellNavigationKeyDown,
        props,
        event
      );
    }
  };

  const handleClick = (event) => {
    apiRef.current.setRowChildrenExpansion(id, !rowNode.childrenExpanded);
    apiRef.current.setCellFocus(id, field);
    event.stopPropagation();
  };

  return (
    <Box sx={{ ml: rowNode.depth * 4 }}>
      {hasChildren ? (
        <Button
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          size="small"
        >
          <ChevronRightIcon />
          <span>{filteredDescendantCount} projects</span>
          <span>{row.projects}</span>
        </Button>
      ) : (
        <span>{!rowNode.parent && row.name}</span>
      )}
    </Box>
  );
};
