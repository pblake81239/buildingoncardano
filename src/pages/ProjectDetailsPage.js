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
        breadcrumbs={[{ name: 'Project Details / ' + this.props.location.state.projectDetails.type + ' / '+ this.props.location.state.projectDetails.name, active: true }]}
      >
          {this.state.loading ? <div>Loading project...<BeatLoader loading={this.state.loading} css={override} size={180} /></div>
            :
            <div>
              <Col lg={3} md={2} sm={2} xs={12} className="mb-3">
{/* 
              description: "This is the description of the project"
discordHandle: "null"
facebookHandle: "null"
homepage: "https://poolpeek.com"
id: 2
name: "Poolpeek"
stage: "ISO"
telegramHandle: "null"
ticker: "12345"
tokenType: "DUNNO"
twitterHandle: "@PoolShamrock"
type: "Application"
youtubeHandle: "null" */}


                    <p>{this.props.location.state.projectDetails.name}</p>
                    <p>{this.props.location.state.projectDetails.description}</p>
                    <p>{this.props.location.state.projectDetails.stage}</p>
                    <p>{this.props.location.state.projectDetails.tokenType}</p>
                    <p>{this.props.location.state.projectDetails.type}</p>

              </Col>

            </div>
          }

      </Page>
    );
  }
}
export default ProjectDetailsPage;
