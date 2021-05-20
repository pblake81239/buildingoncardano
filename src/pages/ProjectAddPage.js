import Page from 'components/Page';
import React from 'react';
import {
  Button, Form, FormGroup, Input, Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import { Card, Col, Row } from 'reactstrap';
import { baseUrl, createProject } from '../assets/services';
import { Link } from 'react-router-dom';

class ProjectAddPage extends React.Component {
  state = {
    loading: false,
    name: "",
    type: "",
    tokenType: "",
    ticker: "",
    stage: "",
    description: null,
    homepage: null,
    twitterHandle: null,
    telegramHandle: null,
    youtubeHandle: null,
    facebookHandle: null,
    discordHandle: null,
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  componentDidMount() {

  }


  handleSubmit = event => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        type: this.state.type,
        tokenType: this.state.tokenType,
        ticker: this.state.ticker,
        stage: this.state.stage,
        description: this.state.description,
        homepage: this.state.homepage,
        twitterHandle: this.state.twitterHandle,
        telegramHandle: this.state.telegramHandle,
        youtubeHandle: this.state.youtubeHandle,
        facebookHandle: this.state.facebookHandle,
        discordHandle: this.state.discordHandle
      })
    };
    fetch(baseUrl + createProject, requestOptions)
      .then(response => response.json());
    // .then(data => this.setState({ postId: data.id }));

    console.log("success!");
    this.setState({ modal: true });
  };

  render() {
    return (
      <Page
        className="ProjectAddPage"
        title="Project Add"
        breadcrumbs={[{ name: 'Project Add', active: true }]}
      >

        {/* https://reactstrap.github.io/components/form/?email=&password=&select=1&text=&file= */}

        {/* {
        "id": 1,
        "name": "Poolpeek",
        "type": "Application",
        "tokenType": "DUNNO",
        "ticker": "12345",
        "stage": "ISO",
        "description": null,
        "homepage": null,
        "twitterHandle": null,
        "telegramHandle": null,
        "youtubeHandle": null,
        "facebookHandle": null,
        "discordHandle": null
    }, */}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle()}
        // className={this.props.className}
        >
          <ModalHeader toggle={this.toggle()}></ModalHeader>
          <ModalBody>
            <Row>
              <p>Project Submitted successfully.</p>
              <p>We will be reviewing this project for credability and will hope to approve ASAP.</p>
            </Row>

          </ModalBody>
          <ModalFooter>
            {' '}
            <Link to={{ pathname: '/' }}>
            <Button color="secondary" onClick={this.toggle()}>
              Close
            </Button>
            </Link>
          </ModalFooter>
        </Modal>

        <Row
          style={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Col md={6} lg={8}>
            <Card body>
              <h3>Submit Project</h3>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ name: e.target.value })} />
                </FormGroup>
                <br></br>
                <FormGroup>
                  <Label for="exampleSelect">Project Type</Label>
                  <Input type="select" name="select" id="exampleSelect" onChange={e => this.setState({ type: e.target.value })}>
                    <option></option>
                    <option>Defi</option>
                    <option>Application</option>
                    <option>Tooling</option>
                    <option>Wallet</option>
                    <option>Data</option>
                    <option>Nft</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="name">Ticker</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ ticker: e.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Stage</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ stage: e.target.value })} />
                </FormGroup>
                <br></br>
                <FormGroup>
                  <Label for="name">Website</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ homepage: e.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Twitter Handle</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ twitterHandle: e.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Telegram Handle</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ telegramHandle: e.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Youtube Handle</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ youtubeHandle: e.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Facebook Handle</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ facebookHandle: e.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Discord</Label>
                  <Input type="text" name="name" id="name" placeholder=""
                    onChange={e => this.setState({ discordHandle: e.target.value })} />
                </FormGroup>
                <br></br>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input type="textarea" name="description" id="description"
                    onChange={e => this.setState({ description: e.target.value })} />
                </FormGroup>

                <Button onClick={this.handleSubmit}>Submit</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default ProjectAddPage;
