import styled from '@emotion/styled';
import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

export interface HomeProps {}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  textAlign: 'center',
}));

export const Home = () =>{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} xl={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  )
}
