import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, deletePost} from '../actions';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class PostIndex extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
            <li className="list-group-item " key={post.id}>{post.title} {' '} 
                <Link to={`/posts/${post.id}`} className="btn btn-primary">View</Link>
            </li>
                );
        });
    }

    render(){
        return(
            <div className="container">
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a post</Link><br /><br />
                </div>
                    <ul className="list-group">{this.renderPosts()}</ul>
            </div>
        )
    }
}

function mapStateToProps({posts}, ownProps){
    return {posts}
}

export default connect(mapStateToProps, {fetchPosts, deletePost})(PostIndex);