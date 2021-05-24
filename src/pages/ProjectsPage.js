import Page from 'components/Page';
import { IconWidget, NumberWidget } from 'components/Widget';
import ProjectCard from 'components/ProjectCard';
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
import ReactImageFallback from "react-image-fallback";

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
        breadcrumbs={[{ name: 'Projects/' + this.props.projectType, active: true }]}
      >
        <Row>
        {/* <Col lg={4} md={4} sm={4} xs={12} className="mb-3"> */}
          {this.state.loading ? <div>Loading projects...<BeatLoader loading={this.state.loading} css={override} size={180} /></div>
            :
            this.state.projects.map(function (item, index) {
              return (  
                
                  <div className='ProjectCards'>
                    <ProjectCard
                      img={item.imageUrl}
                      projectDetails= {item} />
                  </div>

              )

            })
          }

{/* </Col> */}
        </Row>

      </Page >
    );
  }
}
export default ProjectsPage;
