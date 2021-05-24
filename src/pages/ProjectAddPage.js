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
import { Multiselect } from 'multiselect-react-dropdown';

const inputnamewidth = 2;
const inputfieldwidth = 8;

const tagOptions = [
  { name: 'Defi', id: 1 },
  { name: 'Application', id: 2 },
  { name: 'Tooling', id: 3 },
  { name: 'Wallet', id: 4 },
  { name: 'Data', id: 5 },
  { name: 'Nft', id: 6 },
]

var selectedValue = [];
{/* <option>Defi</option>
<option>Application</option>
<option>Tooling</option>
<option>Wallet</option>
<option>Data</option>
<option>Nft</option> */}

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
    imageUrl: "",
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
    window.scrollTo(0, 0);
  }


  handleSubmit = event => {
    event.preventDefault();

    var tags = "";
    //get tags
    selectedValue.forEach(element => {
      console.log(element.name);
      tags += element.name + " ";
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        type: tags,
        imageUrl: this.state.imageUrl,
        homepage: this.state.homepage,

        tokenType: this.state.tokenType,
        ticker: this.state.ticker,
        stage: this.state.stage,
        description: this.state.description,

        twitterHandle: this.state.twitterHandle,
        telegramHandle: this.state.telegramHandle,
        youtubeHandle: this.state.youtubeHandle,
        facebookHandle: this.state.facebookHandle,
        discordHandle: this.state.discordHandle,
      })
    };
    fetch(baseUrl + createProject, requestOptions)
      .then(response => response.json());

    console.log("success!");
    this.setState({ modal: true });
  };

  onSelect(selectedList, selectedItem) {
    selectedValue= selectedList;
  }

  onRemove(selectedList, removedItem) {
    selectedValue= selectedList;
  }

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
                <br></br>
                <h4>Info</h4>
                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Name</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder=""
                      onChange={e => this.setState({ name: e.target.value })} /></Col>
                </FormGroup>
                {/* onChange={e => this.s etState({ type: e.target.value })} */}
                <FormGroup row>
                  <Label for="exampleSelect" sm={inputnamewidth}>Tags</Label>
                  <Col sm={inputfieldwidth}>
                    {/* <Select name="select" id="exampleSelect"
                      placeholder="nft, dex, protocol, cross chain, Wallet, Oracle, Tooling, Infrastructure"
                      onChange={this.handleChange} value={this.state.value} multiple={true} options={tagOptions}> */}

                    <Multiselect
                      options={tagOptions} // Options to display in the dropdown
                      selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                      onSelect={this.onSelect} // Function will trigger on select event
                      onRemove={this.onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />

                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Project Logo Url</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder="Add link/Url to project logo"
                      onChange={e => this.setState({ imageUrl: e.target.value })} /></Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Website</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder="Website Url"
                      onChange={e => this.setState({ homepage: e.target.value })} /></Col>
                </FormGroup>


                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Token Type</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder="Native Asset, ERC20, BSC, No Token"
                      onChange={e => this.setState({ tokenType: e.target.value })} /></Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Ticker</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder=""
                      onChange={e => this.setState({ ticker: e.target.value })} /></Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Stage / Status</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder="E.G Pre Funding, Catalyst, Private Sale, Presale, IEO, IDO, ISO, Live on Exchange"
                      onChange={e => this.setState({ stage: e.target.value })} /></Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="description" sm={inputnamewidth}>Description</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="textarea" name="description" id="description"
                      onChange={e => this.setState({ description: e.target.value })} /></Col>
                </FormGroup>

                <br></br>
                <h4>Tokenomics</h4>


                <br></br>
                <h4>Social Media</h4>
                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Twitter Handle</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder=""
                      onChange={e => this.setState({ twitterHandle: e.target.value })} /></Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Telegram Handle</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder=""
                      onChange={e => this.setState({ telegramHandle: e.target.value })} /></Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Youtube Handle</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder=""
                      onChange={e => this.setState({ youtubeHandle: e.target.value })} /></Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Facebook Handle</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder=""
                      onChange={e => this.setState({ facebookHandle: e.target.value })} /></Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="name" sm={inputnamewidth}>Discord</Label>
                  <Col sm={inputfieldwidth}>
                    <Input type="text" name="name" id="name" placeholder=""
                      onChange={e => this.setState({ discordHandle: e.target.value })} /></Col>
                </FormGroup>
                <br></br>




                <Button onClick={this.handleSubmit}>Submit</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Page >
    );
  }
}
export default ProjectAddPage;
