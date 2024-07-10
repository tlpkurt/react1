import * as React from "react";
import { Box, Button, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from "@mui/icons-material/Delete";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Root = styled(Box)(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const ButtonContainer = styled(Box)({
  marginBottom: "10px", // Aralarında boşluk bırakmak için margin-bottom ekledik
});

function SwipeableEdgeDrawer() {
  return (
    <Root>
      <ButtonContainer>
        <Button>Open</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>Open</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>Open</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>Open</Button>
      </ButtonContainer>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>

      <Button variant="outlined"  startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Root>
  );
}

export default SwipeableEdgeDrawer;
