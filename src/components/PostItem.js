import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';
import WOW from 'wowjs';

class PostItem extends Component {
    lastScrollY = 0;

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillMount() {
        // const size = getRenderedSize(
        //     <div>
        //         I am a random element that I want to get the size of for some reason!
        //     </div>
        // );

        // this.setState({
        //     size
        // });
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {
        const { post } = this.props;

        return (
            <Grid key={post.objectId} item xs={12} sm={6} md={4} lg={4} xl={4}>
                <Card key={post.objectId} className="wow fadeInUp" data-wow-offset="50" data-wow-delay="2s">
                    <CardHeader title={post.title} />
                    <CardMedia>
                        <img src="images/01a-about@2x.jpg" alt="" />
                    </CardMedia>
                    <CardText>
                        {post.text}
                    </CardText>
                </Card>
            </Grid>
        );
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostItem;
