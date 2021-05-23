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
        {this.state.loading ? <div>Loading project...<BeatLoader loading={this.state.loading} css={override} size={180} /></div>
          :
          <div>
            <Row
              style={{
                height: '100vh',
                justifyContent: 'center',
                margin: '20px'
              }}>

              <Col xl={6} lg={12} md={12}>
                <CardBody>
                  <Row>
                    <ReactImageFallback
                      src={this.props.location.state.projectDetails.imageUrl}
                      width="120"
                      height="140"
                      fallbackImage={CardanoImage} />
                    <Col>
                      <h1>{this.props.location.state.projectDetails.name}</h1>
                      <br></br>
                      <h5>{this.props.location.state.projectDetails.description}</h5>
                      <br></br>
                      <h4>Development Stage:</h4>
                      <p>{this.props.location.state.projectDetails.stage}</p>
                      <br></br>
                      <h4>Project Types:</h4>
                      <p>{this.props.location.state.projectDetails.type}</p>
                      <br></br>
                      <h4>Token:</h4>
                      <p>{this.props.location.state.projectDetails.tokenType}</p>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
              <Col md={3} sm={6} xs={12} className="mb-3">
                <SocialMedia extendedmeta={{
                  homepage: this.props.location.state.projectDetails.homepage,
                  twitter_handle: this.props.location.state.projectDetails.twitterHandle,
                  telegram_handle: this.props.location.state.projectDetails.telegramHandle,
                  youtube_handle: this.props.location.state.projectDetails.youtubeHandle,
                  facebook_handle: this.props.location.state.projectDetails.facebookHandle,
                  discord_handle: this.props.location.state.projectDetails.discordHandle
                }} />
              </Col>
            </Row>
          </div>
        }

      </Page>
    );
  }
}
export default ProjectDetailsPage;
