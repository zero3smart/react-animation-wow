import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { getFeedDataAction } from './FeedActions';
import PostItem from './PostItem';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spacing: 16,
            count: 10,
            size: {
                width: 0,
                height: 0
            }
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.props.getFeedDataAction();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        this.lastScrollY = window.scrollY;
        //console.log('clientHeight:' + this._element.current.clientHeight);
        console.log('scrollY:' + this.lastScrollY);
        let size = this.postEl.getBoundingClientRect();
        if (size.height - size.bottom < window.scrollY)
            console.log('//////');
        console.log(size.height - size.bottom);
    };

    refCallback = element => {
        if (element) {
            this.postEl = element;
        }
    };

    render() {
        const { classes, posts } = this.props;
        const { spacing, count } = this.state;

        return (
            <div>
                <h1>POSTs List</h1>
                <div ref={this.refCallback}>
                    <Grid container className={classes.root} spacing={16}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                                {posts && posts.slice(0, count).map((post, index) => (
                                    <PostItem key={post.objectId} post={post} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

PostList.propTypes = {
    classes: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.feed.posts
});

const mapDispatchToProps = dispatch => ({
    getFeedDataAction: () => dispatch(getFeedDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostList));
