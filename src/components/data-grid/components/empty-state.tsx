import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  svg: {
    maxWidth: "100px"
  },
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626"
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959"
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343"
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c"
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff"
  }
}));

const emptyIcon = (
  <svg
    width="120"
    height="100"
    viewBox="0 0 184 152"
    aria-hidden
    focusable="false"
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(24 31.67)">
        <ellipse
          className="ant-empty-img-5"
          cx="67.797"
          cy="106.89"
          rx="67.797"
          ry="12.668"
        />
        <path
          className="ant-empty-img-1"
          d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
        />
        <path
          className="ant-empty-img-2"
          d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
        />
        <path
          className="ant-empty-img-3"
          d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
        />
      </g>
      <path
        className="ant-empty-img-3"
        d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
      />
      <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
        <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
        <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
      </g>
    </g>
  </svg>
);

const emptyIconBranded = (
  <svg viewBox="0 0 151 149" version="1.1">
    <title>Drawer organizer open</title>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Drawer-organizer-open"
        transform="translate(0.730000, 0.924000)"
        fill-rule="nonzero"
      >
        <polygon
          id="Path"
          fill="#CEC1B3"
          points="90.171 67.523 149.873 33.178 149.873 101.316 90.171 135.661 90.171 106.459"
        ></polygon>
        <polygon
          id="Path"
          fill="#EDE5DC"
          points="90.171 67.523 30.47 33.178 30.47 101.316 90.171 135.661 90.171 106.459"
        ></polygon>
        <polygon
          id="Path"
          fill="#CEC1B3"
          points="86.927 71.605 33.715 40.993 33.715 67.021 86.927 97.633 86.927 88.956"
        ></polygon>
        <polygon
          id="Path"
          fill="#756351"
          points="65.703 70.858 53.298 63.722 53.298 67.767 65.703 74.904"
        ></polygon>
        <polygon
          id="Path"
          fill="#CEC1B3"
          points="86.927 101.818 33.715 71.207 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#BAAD9F"
          points="86.927 101.818 33.715 71.207 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#CEC1B3"
          points="53.212 147.423 -3.54366623e-15 116.811 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#756351"
          points="0 90.783 33.635 71.206 33.635 97.233 7.029 112.54 0.377 116.367"
        ></polygon>
        <polygon
          id="Path"
          fill="#756351"
          points="53.212 121.395 60.32 116.965 86.927 101.659 86.927 127.687 60.32 142.993 53.212 147.423"
        ></polygon>
        <polygon
          id="Path"
          fill="#A09992"
          points="55.387 120.138274 2.174 89.571 -3.55271368e-15 90.783 2.175 107.047 2.175 115.723 53.212 147.423 55.387 146.048469 55.388 137.659"
        ></polygon>
        <polygon
          id="Path"
          fill="#CEC1B3"
          points="53.211 121.395 -3.55271368e-15 90.783 -3.55271368e-15 116.811 53.212 147.423 53.212 138.747"
        ></polygon>
        <polygon
          id="Path"
          fill="#756351"
          points="30.9 119.8 18.495 112.664 18.495 116.709 30.901 123.845"
        ></polygon>
        <polygon
          id="Path"
          fill="#EDE5DC"
          points="90.167 7.10542736e-15 149.873 33.178 90.167 68.274 30.47 33.178"
        ></polygon>
      </g>
    </g>
  </svg>
);
const emptyIconBrandedSaturated = (
  <svg viewBox="0 0 151 149" version="1.1" style={{ opacity: ".75" }}>
    <title>Drawer organizer open</title>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Drawer-organizer-open"
        transform="translate(0.730000, 0.924000)"
        fill-rule="nonzero"
      >
        <polygon
          id="Path"
          fill="#aeb8c2"
          points="90.171 67.523 149.873 33.178 149.873 101.316 90.171 135.661 90.171 106.459"
        ></polygon>
        <polygon
          id="Path"
          fill="#dce0e6"
          points="90.171 67.523 30.47 33.178 30.47 101.316 90.171 135.661 90.171 106.459"
        ></polygon>
        <polygon
          id="Path"
          fill="#aeb8c2"
          points="86.927 71.605 33.715 40.993 33.715 67.021 86.927 97.633 86.927 88.956"
        ></polygon>
        <polygon
          id="Path"
          fill="#434343"
          points="65.703 70.858 53.298 63.722 53.298 67.767 65.703 74.904"
        ></polygon>
        <polygon
          id="Path"
          fill="#434343"
          points="86.927 101.818 33.715 71.207 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#dce0e6"
          points="86.927 101.818 33.715 71.207 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#dce0e6"
          points="53.212 147.423 -3.54366623e-15 116.811 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#aeb8c2"
          points="0 90.783 33.635 71.206 33.635 97.233 7.029 112.54 0.377 116.367"
        ></polygon>
        <polygon
          id="Path"
          fill="#aeb8c2"
          points="53.212 121.395 60.32 116.965 86.927 101.659 86.927 127.687 60.32 142.993 53.212 147.423"
        ></polygon>
        <polygon
          id="Path"
          fill="#dce0e6"
          points="55.387 120.138274 2.174 89.571 -3.55271368e-15 90.783 2.175 107.047 2.175 115.723 53.212 147.423 55.387 146.048469 55.388 137.659"
        ></polygon>
        <polygon
          id="Path"
          fill="#dce0e6"
          points="53.211 121.395 -3.55271368e-15 90.783 -3.55271368e-15 116.811 53.212 147.423 53.212 138.747"
        ></polygon>
        <polygon
          id="Path"
          fill="#434343"
          points="30.9 119.8 18.495 112.664 18.495 116.709 30.901 123.845"
        ></polygon>
        <polygon
          id="Path"
          fill="#dce0e6"
          points="90.167 7.10542736e-15 149.873 33.178 90.167 68.274 30.47 33.178"
        ></polygon>
      </g>
    </g>
  </svg>
);

const emptyIconBrandedSaturated2 = (
  <svg viewBox="0 0 151 149">
    <title>Drawer organizer open</title>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Drawer-organizer-open"
        transform="translate(0.730000, 0.924000)"
        fill-rule="nonzero"
      >
        <polygon
          id="Path"
          fill="#DCD9D6"
          points="90.171 67.523 149.873 33.178 149.873 101.316 90.171 135.661 90.171 106.459"
        ></polygon>
        <polygon
          id="Path"
          fill="#EFEDEA"
          points="90.171 67.523 30.47 33.178 30.47 101.316 90.171 135.661 90.171 106.459"
        ></polygon>
        <polygon
          id="Path"
          fill="#DCD9D6"
          points="86.927 71.605 33.715 40.993 33.715 67.021 86.927 97.633 86.927 88.956"
        ></polygon>
        <polygon
          id="Path"
          fill="#B3ABA3"
          points="65.703 70.858 53.298 63.722 53.298 67.767 65.703 74.904"
        ></polygon>
        <polygon
          id="Path"
          fill="#CEC1B3"
          points="86.927 101.818 33.715 71.207 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#AEAAA6"
          points="86.927 101.818 33.715 71.207 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#C4C0BB"
          points="53.212 147.423 -3.54366623e-15 116.811 33.715 97.234 86.927 127.846 86.927 119.17"
        ></polygon>
        <polygon
          id="Path"
          fill="#BDB9B4"
          points="0 90.783 33.635 71.206 33.635 97.233 7.029 112.54 0.377 116.367"
        ></polygon>
        <polygon
          id="Path"
          fill="#BDB9B4"
          points="53.212 121.395 60.32 116.965 86.927 101.659 86.927 127.687 60.32 142.993 53.212 147.423"
        ></polygon>
        <polygon
          id="Path"
          fill="#A09992"
          points="55.387 120.138274 2.174 89.571 -3.55271368e-15 90.783 2.175 107.047 2.175 115.723 53.212 147.423 55.387 146.048469 55.388 137.659"
        ></polygon>
        <polygon
          id="Path"
          fill="#DCD9D6"
          points="53.211 121.395 -3.55271368e-15 90.783 -3.55271368e-15 116.811 53.212 147.423 53.212 138.747"
        ></polygon>
        <polygon
          id="Path"
          fill="#B3ABA3"
          points="30.9 119.8 18.495 112.664 18.495 116.709 30.901 123.845"
        ></polygon>
        <polygon
          id="Path"
          fill="#EFEDEA"
          points="90.167 7.10542736e-15 149.873 33.178 90.167 68.274 30.47 33.178"
        ></polygon>
      </g>
    </g>
  </svg>
);

export const EmptyState = () => {
  return (
    <StyledGridOverlay>
      {emptyIconBrandedSaturated2}
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
};
