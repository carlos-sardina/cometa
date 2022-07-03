import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Summary, DetailRow, CometaSmallTypography } from '../../components';
import { AccordionItem, Background, FlexContainer, StyledCometaTypography, Card, StyledButton } from './styles';
import { StudentInfo, StudentOrders } from '../../types';
import { formatNumber, getStudentInfoData, getStudentOrdersData } from '../../utils';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Home = () => {
  const [total, setTotal] = React.useState(0);
  const [student, setStudent] = React.useState<StudentInfo>();
  const [studentOrders, setStudentOrders] = useState<StudentOrders>();

  useEffect(() => {
    getStudentOrdersData()
      .then(data => setStudentOrders(data))
  }, []);

  useEffect(() => {
    getStudentInfoData()
      .then(data => setStudent(data))
  }, []);

  const isTotalZero = () => {
    return total.toFixed(2) === '0.00' || total.toFixed(2) === '-0.00';
  }

  const updateTotal = (amount: string, interest: string, checked: boolean) => {
    if (checked) {
      setTotal((total) => total + parseFloat(amount) + parseFloat(interest));
    } else {
      setTotal((total) => total - parseFloat(amount) - parseFloat(interest));
    }
  }

  return (
    <Background>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {
            student && (
              <Grid item xs={12}>
                <Card>
                  <FlexContainer>
                    <CometaSmallTypography>{student.first_name} {student.last_name}</CometaSmallTypography>
                    <CometaSmallTypography>{student.cohort}</CometaSmallTypography>
                  </FlexContainer>
                  <FlexContainer>
                    <StyledCometaTypography>Total a Pagar</StyledCometaTypography>
                    <StyledCometaTypography>{isTotalZero() ?  '--' : formatNumber(total.toFixed(2))}</StyledCometaTypography>
                  </FlexContainer>
                </Card>
              </Grid>
            )
          }
          {
            !isTotalZero() && (
              <Grid container direction='row' justifyContent='flex-end'>
                <StyledButton variant="contained">IR A PAGAR</StyledButton>
              </Grid>
            )
          }
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Summary title='Cuotas pagadas' description='Dale click para expandir' />
              </AccordionSummary>
              <AccordionDetails>
                {
                  studentOrders && studentOrders.due.map(item => (
                    <AccordionItem key={item.id}>
                      <DetailRow title={item.name} description={'Vence el ' + item.due} amount={formatNumber(item.price)} amountSubtext={'Interés: ' + formatNumber(item.interest)} />
                      <Checkbox {...label} onChange={({ target: { checked } }) => updateTotal(item.price, item.interest, checked) } />
                    </AccordionItem>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </Background>
  )
}
