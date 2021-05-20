import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faYoutube, faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'utils/stringutil.js';
import Tooltip from "@material-ui/core/Tooltip";

export default class SocialMedia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            homepage: "",
            twitterHandle: "",
            telegramHandle: "",
            youtubeHandle: "",
            facebookHandle: "",
            discordHandle: ""
        }
    }
    async componentDidMount() {

        //website
        if (!isEmpty(this.props.extendedmeta.homepage)) {
            this.state.homepage = this.props.extendedmeta.homepage;
            this.setState({ homepage: this.props.extendedmeta.homepage });
        }

        //twitter
        if (!isEmpty(this.props.extendedmeta.twitter_handle)) {
            this.state.twitterHandle = this.props.extendedmeta.twitter_handle;
            this.setState({ twitterHandle: this.props.extendedmeta.twitter_handle });
        }

        //telegram
        if (!isEmpty(this.props.extendedmeta.twitter_handle)) {
            this.state.telegramHandle = this.props.extendedmeta.telegram_handle;
            this.setState({ telegramHandle: this.props.extendedmeta.telegram_handle });
        }

        //youtube
        if (!isEmpty(this.props.extendedmeta.youtube_handle)) {
            this.state.youtubeHandle = this.props.extendedmeta.youtube_handle;
            this.setState({ youtubeHandle: this.props.extendedmeta.youtube_handle });
        }

        //facebook
        if (!isEmpty(this.props.extendedmeta.facebook_handle)) {
            this.state.facebookHandle = this.props.extendedmeta.facebook_handle;
            this.setState({ facebookHandle: this.props.extendedmeta.facebook_handle });
        }

        //discord
        if (!isEmpty(this.props.extendedmeta.discord_handle)) {
            this.state.discordHandle = this.props.extendedmeta.discord_handle;
            this.setState({ discordHandle: this.props.extendedmeta.discord_handle });
        }
    }

    render() {
        return (
            <div style={{ display: 'inline-block' }}>

                <Tooltip
                    title="Website"
                    placement="left"
                >
                    <a href={this.state.homepage} target="_blank" rel="noreferrer">
                        <img
                            className="pr-2"
                            alt=""
                        />
                        <FontAwesomeIcon icon={faGlobe} /></a></Tooltip>


                {this.state.twitterHandle !== "" &&
                    <Tooltip
                        title="Twitter"
                        placement="left"
                    >
                        <a href={"https://twitter.com/@" + this.state.twitterHandle} target="_blank" rel="noreferrer">
                            <img
                                className="pr-2"
                                alt=""
                            />
                            <FontAwesomeIcon icon={faTwitter} /></a></Tooltip>}

                {this.state.telegramHandle != "" &&
                    <Tooltip
                        title="Telegram"
                        placement="left"
                    >
                        <a href={"https://t.me/" + this.state.telegramHandle} target="_blank" rel="noreferrer">
                            <img
                                className="pr-2"
                                alt=""
                            /> <FontAwesomeIcon icon={faTelegram} /></a></Tooltip>}

                {this.state.youtubeHandle != "" &&
                    <Tooltip
                        title="Youtube"
                        placement="left"
                    >
                        <a href={"https://www.youtube.com/channel/" + this.state.youtubeHandle} target="_blank" rel="noreferrer">
                            <img
                                className="pr-2"
                                alt=""
                            /> <FontAwesomeIcon icon={faYoutube} /></a></Tooltip>}

                {this.state.facebookHandle != "" &&
                    <Tooltip
                        title="Facebook"
                        placement="left"
                    >
                        <a href={"https://www.facebook.com/" + this.state.facebookHandle} target="_blank" rel="noreferrer">
                            <img
                                className="pr-2"
                                alt=""
                            /> <FontAwesomeIcon icon={faFacebook} /></a></Tooltip>}

                {this.state.discordHandle != "" &&
                    <Tooltip
                        title="Discord"
                        placement="left"
                    >
                        <a href={"https://discord.com/invite/" + this.state.discordHandle} target="_blank" rel="noreferrer">
                            <img
                                className="pr-2"
                                alt=""
                            /> <FontAwesomeIcon icon={faDiscord} /></a></Tooltip>}
            </div>
        )
    };
};

