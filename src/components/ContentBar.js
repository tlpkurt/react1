import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card';
import Sidebar from './Sidebar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Item><Sidebar/></Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Item>
        </Grid>
        <Grid item xs ={5}>
        <Item>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}