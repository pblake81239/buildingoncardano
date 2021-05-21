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
import { Link } from 'react-router-dom';
import { TableRow } from '@material-ui/core';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const width = window.innerWidth;


class DashboardPage extends React.Component {
  state = {
    projects: null,
    loading: true,
    totalProjects: '',
    projectTypesAndCount: [],
    smallScreen: false
  };

  componentDidMount() {

    if (width < 600) {
      this.setState({ smallScreen: true });
    }

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
        <Row>
          <Col lg="12" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Projects</CardHeader>
              <CardBody>


                {this.state.loading ? <div>Loading projects...<BeatLoader loading={this.state.loading} css={override} size={180} /></div>
                  :
                  <Table {...{ ['bordered']: true }}>
                    <thead>
                      {this.state.smallScreen ?
                        <tr>
                          <th>#</th>
                          <th>Project</th>
                          <th>Type</th>
                        </tr>
                        :
                        <tr>
                          <th>#</th>
                          <th>Project</th>
                          <th>Type</th>
                          <th>Token Type</th>
                          <th>Ticker</th>
                          <th>Stage</th>
                        </tr>}

                    </thead>
                    <tbody>

                      {this.state.smallScreen ?
                        this.state.projects.map(function (item, index) {
                          return (
                            <TableRow component={Link} to={{ pathname: '/projectdetails', state: { projectDetails: item } }}>

                              <td scope="row">{item.id}</td>
                              <td >{item.name}</td>
                              <td >{item.type}</td>

                            </TableRow >
                          )
                        })

                        :
                        this.state.projects.map(function (item, index) {
                          return (
                            <TableRow component={Link} to={{ pathname: '/projectdetails', state: { projectDetails: item } }}>
                              <td scope="row">{item.id}</td>
                              <td >{item.name}</td>
                              <td >{item.type}</td>
                              <td>{item.tokenType}</td>
                              <td>{item.ticker}</td>
                              <td>{item.stage}</td>

                            </TableRow >
                          )
                        })}

                      {/* {this.state.projects.map(function (item, index) {
                        return (
                          <TableRow component={Link} to={{ pathname: '/projectdetails', state: { projectDetails: item } }}>

                            {this.state.smallScreen ? <td scope="row">{item.id}</td> : <td scope="row">{item.id}</td>}

                            <td>{item.tokenType}</td>
                            <td>{item.ticker}</td>
                            <td>{item.stage}</td>

                          </TableRow >
                        )
                      })
                      } */}




                    </tbody>
                  </Table>
                }
              </CardBody>

            </Card>
          </Col>
        </Row>


      </Page>
    );
  }
}
export default DashboardPage;
