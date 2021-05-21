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
import { Link } from 'react-router-dom';

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
                //   {
                //     "id": 1,
                //     "name": "Poolpeek",
                //     "type": "Application",
                //     "tokenType": "DUNNO",
                //     "ticker": "12345",
                //     "stage": "ISO",
                //     "description": null,
                //     "homepage": null,
                //     "twitterHandle": null,
                //     "telegramHandle": null,
                //     "youtubeHandle": null,
                //     "facebookHandle": null,
                //     "discordHandle": null
                // },
                <Col lg={3} md={2} sm={2} xs={12} className="mb-3">

                  <Card style={{ cursor: "pointer", height: '10rem' }}>
                    <CardBody>
                      <Row>
                        <Link to={{ pathname: '/projectdetails', state: { projectDetails: item } }}>
                        <Col lg={3} md={2} sm={2} xs={12} className="mb-3">
                          <br></br>
                            <img
                              src={CardanoImage}
                              className="pr-2"
                              width="70"
                              height="70"
                            />
                          </Col>
                        </Link>
                        <Col>
                          <Link to={{ pathname: '/projectdetails', state: { projectDetails: item } }}>
                            <CardTitle className="text-capitalize">
                              {item.name}
                            </CardTitle>
                            <CardText>
                              {item.type}
                            </CardText>
                          </Link>
                          <br></br>
                          <SocialMedia extendedmeta={{
                            homepage: item.homepage,
                            twitter_handle: item.twitterHandle,
                            telegram_handle: item.telegramHandle,
                            youtube_handle: item.youtubeHandle,
                            facebook_handle: item.facebookHandle,
                            discord_handle: item.discordHandle
                          }} />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              )

            })
          }


        </Row>

      </Page >
    );
  }
}
export default ProjectsPage;
