import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Summary, DetailRow, CometaSmallTypography } from '../../components';
import { FormatNumber } from '../../utils';
import { AccordionItem, Background, Card, FlexContainer, StyledCometaTypography } from './styles';

export interface HomeProps {}

const boy = {"id":"3b35fb50-3d5e-41b3-96d6-c5566141fab0","first_name":"Gonzalo","last_name":"Wu","guardian":{"id":"b5ad0bde-f1bb-433a-8124-10379cc906f5","first_name":"Valeria","last_name":"Wu","email":"adoval4@gmail.com","phone":"+51950862507","tax_id":"47865675"},"cohort":"Primer año","school":{"id":"41ecfd5e-ffd2-44b3-8df5-70279624ad41","name":"Innova Schools San Miguel","logo":"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/media/school_logos/download.png","country":"PE","city":"Lima","address":"Jr. La paz 123","zip_code":"15026"},"monthly_grant_type":null,"monthly_grant_value":null,"inscription_grant_value":null,"inscription_grant_type":null}
const data = [{"id":"eeaa73b2-6f02-4594-830d-94cf5dab8b6e","concept":"MONTHLY","name":"Colegiatura Diciembre 2021","price":"5000.00","price_currency":"MXN","due":"2021-12-31","status":"PAID","interest":"788.13","pending":false,"payin":{"id":"2d724299-e12d-4153-aa86-61636f0f441d","status":"approved","created":"2022-03-17T00:34:42.653388Z"}},{"id":"dc438d87-18fc-4f65-8927-d860d1496795","concept":"MONTHLY","name":"Colegiatura Enero 22","price":"5000.00","price_currency":"MXN","due":"2022-01-05","status":"PAID","interest":"788.13","pending":false,"payin":{"id":"2d724299-e12d-4153-aa86-61636f0f441d","status":"approved","created":"2022-03-17T00:34:42.653388Z"}},{"id":"ac1d2527-a0ec-4d98-a981-7c97c50580cf","concept":"MONTHLY","name":"Colegiatura Febrero 22","price":"5000.00","price_currency":"MXN","due":"2022-02-05","status":"PAID","interest":"512.50","pending":false,"payin":{"id":"94d56167-ac50-4440-bd3a-792f53d63b90","status":"approved","created":"2022-03-21T21:04:37.089895Z"}},{"id":"c2866664-020a-4df3-a078-f08337c3cb3a","concept":"MONTHLY","name":"Colegiatura Marzo 22","price":"5000.00","price_currency":"MXN","due":"2022-03-05","status":"DUE","interest":"1077.53","pending":false,"payin":null},{"id":"c25f618b-b6ad-4941-972c-0be4e1c659ab","concept":"MONTHLY","name":"Colegiatura Abril 22","price":"5000.00","price_currency":"MXN","due":"2022-04-05","status":"DUE","interest":"788.13","pending":false,"payin":null},{"id":"25d4dd53-c45a-4e0a-afb7-fcff15b3a612","concept":"MONTHLY","name":"Colegiatura Mayo 22","price":"5000.00","price_currency":"MXN","due":"2022-05-05","status":"DUE","interest":"512.50","pending":false,"payin":null},{"id":"bd394e6e-b322-49c8-9b3f-29931a978880","concept":"MONTHLY","name":"Colegiatura Junio 22","price":"5000.00","price_currency":"MXN","due":"2022-06-05","status":"DUE","interest":"250.00","pending":false,"payin":null},{"id":"46d73bcf-e25d-4531-847d-8ccd5b1870cb","concept":"MONTHLY","name":"Colegiatura Julio 22","price":"5000.00","price_currency":"MXN","due":"2022-07-05","status":"OUTSTANDING","interest":null,"pending":false,"payin":null}];

export const Home = () => {

  const paid = data.filter(item => item.status === 'PAID');
  const due = data.filter(item => item.status === 'DUE');
  const outstanding = data.filter(item => item.status === 'OUTSTANDING');

  return (
    <Background>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={3}>
            <Card>
              <FlexContainer>
                <CometaSmallTypography>{boy.first_name} {boy.last_name}</CometaSmallTypography>
                <CometaSmallTypography>{boy.cohort}</CometaSmallTypography>
              </FlexContainer>
              <FlexContainer>
                <StyledCometaTypography>Total a Pagar</StyledCometaTypography>
                <StyledCometaTypography>0</StyledCometaTypography>
              </FlexContainer>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
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
                  paid.map(item => (
                    <AccordionItem key={item.id}>
                      <DetailRow title={item.name} description={'Pagado el 02 de Jul.'} onlySummary />
                    </AccordionItem>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Summary title='Cuotas pendientes' />
              </AccordionSummary>
              <AccordionDetails>
                {
                  due.map(item => (
                    <AccordionItem key={item.id}>
                      <DetailRow title={item.name} description={'Vence el 02 de Jul.'} amount={FormatNumber(item.price)} amountSubtext={'Interés: ' + FormatNumber(item.interest)} />
                    </AccordionItem>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Summary title='Cuotas futuras' />
              </AccordionSummary>
              <AccordionDetails>
                {
                  outstanding.map(item => (
                    <AccordionItem key={item.id}>
                      <DetailRow title={item.name} description={'Vence el 02 de Jul.'} amount={FormatNumber(item.price)} />
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
