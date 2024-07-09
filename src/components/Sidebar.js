import * as React from 'react';
import { Box, Button, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

const Root = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ButtonContainer = styled(Box)({
  marginBottom: '10px', // Aralarında boşluk bırakmak için margin-bottom ekledik
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
      <ButtonContainer>
        <Button>Open</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>Open</Button>
      </ButtonContainer>
    </Root>
  );
}

export default SwipeableEdgeDrawer;
