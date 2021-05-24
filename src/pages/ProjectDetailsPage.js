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
import ReactImageFallback from "react-image-fallback";
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

class ProjectDetailsPage extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    console.log(this.props.location.state.projectDetails)
    console.log(this.state.projectDetails)
  }



  render() {


    return (
      <Page
        className="ProjectDetailsPage"
        title="Project Details"
        breadcrumbs={[{ name: 'Project Details / ' + this.props.location.state.projectDetails.type + ' / ' + this.props.location.state.projectDetails.name, active: true }]}
      >
        <Row
          style={{
            height: '100vh',
            justifyContent: 'center',
            margin: '20px'
          }}>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <h3>Description:</h3>
                    <h4>{this.props.location.state.projectDetails.description}</h4>
                    <br></br>
                    <h3>Development Stage:</h3>
                    <h4>{this.props.location.state.projectDetails.stage}</h4>
                    <br></br>


                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <h3>Tokenomics:</h3>
                    <br></br>
                    <h3>Token:</h3>
                    <h4>{this.props.location.state.projectDetails.tokenType}</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={2} sm={6} xs={12} className="mb-3">
            <Row style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Col>
                <Card body style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
                  <ReactImageFallback
                    src={this.props.location.state.projectDetails.imageUrl}
                    width="140"
                    height="140"
                    fallbackImage={CardanoImage} />
                  <h2>{this.props.location.state.projectDetails.name}</h2>
                  <h4>{this.props.location.state.projectDetails.description}</h4>
                  <h5>{this.props.location.state.projectDetails.type}</h5>
                </Card>
                <Card style={{
                  alignItems: 'center'
                }}>
                  <CardBody>
                    <SocialMedia extendedmeta={{
                      homepage: this.props.location.state.projectDetails.homepage,
                      twitter_handle: this.props.location.state.projectDetails.twitterHandle,
                      telegram_handle: this.props.location.state.projectDetails.telegramHandle,
                      youtube_handle: this.props.location.state.projectDetails.youtubeHandle,
                      facebook_handle: this.props.location.state.projectDetails.facebookHandle,
                      discord_handle: this.props.location.state.projectDetails.discordHandle
                    }} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default ProjectDetailsPage;
