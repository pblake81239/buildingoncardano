import Page from 'components/Page';
import { IconWidget, NumberWidget } from 'components/Widget';
import React from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Table
} from 'reactstrap';
import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);
const tableTypes = ['', 'bordered', 'striped', 'hover'];

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Profit"
              subtitle="This month"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Monthly Visitors"
              subtitle="This month"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="New Users"
              subtitle="This month"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bounce Rate"
              subtitle="This month"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                label: 'Last month',
              }}
            />
          </Col>
        </Row>

        <Row>
          {/* <Col lg="3" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Projects Reported{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col> */}

          <Col lg="12" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Projects</CardHeader>
              <CardBody>
              <Table {...{ ['bordered']: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Project</th>
                            <th>Type</th>
                            <th>Token Type</th>
                            <th>Ticker</th>
                            <th>Stage</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr onClick={() => console.log("clicked")}>
                            <th scope="row">1</th>
                            <td>SundaeSwap</td>
                            <td>Defi</td>
                            <td>Something</td>
                            <td>Sun</td>
                            <td>Dunno</td>
                          </tr>

                        </tbody>
                      </Table>
              </CardBody>

            </Card>
          </Col>
        </Row>

        
      </Page>
    );
  }
}
export default DashboardPage;
