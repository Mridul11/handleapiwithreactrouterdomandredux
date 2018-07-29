import React, {Component  } from "react";
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect } from 'react-redux';
import {createPosts} from '../actions'

class PostsNew extends Component{

    renderField(field){
        return(
            <div className="form-group has-danger">
                <label>Enter your {field.label}</label>    
                <input 
                    className = "form-control"
                    type = "text"
                    {...field.input} //gives all the event related to form input
                />
                <span className="text-help">
                    { field.meta.touched ? field.meta.error : '' }
                </span>
            </div>
        );
    };

    onSubmit(values){
        
        this.props.createPosts(values, () => {
            this.props.history.push('/');
            });
        };

    render(){
        const { handleSubmit, pristine, touched } = this.props;
        return(
        <div>
            <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }
                className="container" >
                <Field
                    label = "Title"
                    name = "title"
                    component = {this.renderField}  
                />

                <Field
                    label = "Categories"
                    name = "categories"
                    component = {this.renderField}  
                />

                 <Field
                    label = "Content"
                    name = "content"
                    component = {this.renderField}  
                />

            <button type="submit" disabled={pristine || touched} className="btn btn-primary"> submit </button>
            {' '} {' '}
            <Link to="/" className="btn btn-danger">Back to Home</Link>
            </form>{''}
        </div>
        )
    }
}

function validate(values){
    const errors = {};

    //validate inputs from 'values'
    //if errors is null, fine to submit
    //if error has any property, redux form assumes form is invlid.
    if(!values.title){
        errors.title = "Enter a title..."
    }
    if(!values.categories){
        errors.categories = "Enter Categories..."
    }
    if(!values.content){
        errors.content = "Enter some content..."
    }

    return errors;
}

export default reduxForm({
    validate,
    form : 'PostsNewForm'
})(connect(null, {createPosts})(PostsNew));