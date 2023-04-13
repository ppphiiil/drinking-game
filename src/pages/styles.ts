import { styled, Typography } from "@mui/material";

export const Headline = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

export const SubHeadline = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
}));
