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
import BeatLoader
  from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import { baseUrl, getAllProjects, getProjectsStats } from '../assets/services';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class DashboardPage extends React.Component {
  state = {
    projects: null,
    loading: true,
    totalProjects: '',
    projectTypesAndCount: []
  };

  componentDidMount() {
    this.getProjectsStats();
    this.getAllProjects();
  }

  async getAllProjects() {
    try {
      var response = await fetch(baseUrl + getAllProjects);
      const data = await response.json();
      console.log(data);
      this.setState({ projects: data, loading: false })
    } catch (error) {
      console.log(error)
    }
  }

  async getProjectsStats() {
    try {
      var response = await fetch(baseUrl + getProjectsStats);
      const data = await response.json();
      console.log(data);
      var projectTypesAndCount = data.projectTypesAndCount;
      this.setState({ totalProjects: data.totalProjects, projectTypesAndCount: projectTypesAndCount })
    } catch (error) {
      console.log(error)
    }
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
              title="Total Projects"
              number={this.state.totalProjects}
              color="secondary"
            />
          </Col>
          </Row>
          {/* <Row>
  
            {this.state.loading ? <div>Loading projects...<BeatLoader loading={this.state.loading} css={override} size={180} /></div>
              :
              this.state.projectTypesAndCount.map(function (item, index) {
                return (
                  <Col lg={3} md={6} sm={6} xs={12}>
                  <NumberWidget
                    title="Total Projects"
                    number="1"
                    color="secondary"
                  />
                </Col>
                )

              })
            }


          {/* <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Der"
              number="9.8k"
              color="secondary"
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
          </Col>    /</Row> */}
     

        <Row>
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
                    {this.state.loading ? <div>Loading projects...<BeatLoader loading={this.state.loading} css={override} size={180} /></div>
                      :
                      this.state.projects.map(function (item, index) {
                        return (
                          <tr onClick={() => console.log("clicked")}>
                            <th scope="row">1</th>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.tokenType}</td>
                            <td>{item.ticker}</td>
                            <td>{item.stage}</td>
                          </tr>
                        )

                      })
                    }
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
