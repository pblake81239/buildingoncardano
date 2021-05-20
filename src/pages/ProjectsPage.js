import Page from 'components/Page';
import { IconWidget, NumberWidget } from 'components/Widget';
import React from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardText,
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
import { baseUrl, getProjectsByType } from '../assets/services';
import SocialMedia from '../components/SocialMedia';
import CardanoImage from 'assets/img/cardanoIcon.png';

const socialMediaProps = {
  twitter_handle: '@PoolShamrock',
  telegram_handle: 'change',
  youtube_handle: 'change',
  facebook_handle: 'change',
  discord_handle: 'change'
};


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ProjectsPage extends React.Component {
  state = {
    projects: [],
    loading: true
  };

  componentDidMount() {
    this.getProjectsByType();
  }

  async getProjectsByType() {
    try {
      var response = await fetch(baseUrl + getProjectsByType + this.props.projectType);
      const data = await response.json();
      console.log(data);

      this.setState({ projects: data, loading: false })
    } catch (error) {
      console.log(error)
    }
  }

  render() {


    return (
      <Page
        className="ProjectsPage"
        title="Projects"
        breadcrumbs={[{ name: 'Projects / ' + this.props.projectType, active: true }]}
      >

        <Row>

          {this.state.loading ? <div>Loading projects...<BeatLoader loading={this.state.loading} css={override} size={180} /></div>
            :
            this.state.projects.map(function (item, index) {
              return (
                //
                // id:2
                // name:'Who knows'
                // stage:'ISO'
                // ticker:'12345'
                // tokenType:'DUNNO'
                // type:'Defi'
                <Col lg={3} md={2} sm={2} xs={12} className="mb-3">
                  <Card >
                    <CardBody>
                      <Row>
                        <Col lg={3} md={2} sm={2} xs={12} className="mb-3">
                          <img
                            src={CardanoImage}
                            className="pr-2"
                            width="60"
                            height="60"
                          />
                        </Col>
                        <Col lg={9} md={9} sm={9} xs={9} className="mb-3">
                          <CardTitle className="text-capitalize">
                            {item.name}
                          </CardTitle>
                          <CardText>
                            {item.desc}
                          </CardText>
                          <SocialMedia extendedmeta={socialMediaProps} />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              )

            })
          }


        </Row>

      </Page>
    );
  }
}
export default ProjectsPage;
