import { Typography } from "@mui/material";
import { memo } from "react";

const MemoArrComponent = ({ children }) => {
  return <Typography>{children}</Typography>;
};
export default memo(MemoArrComponent);
