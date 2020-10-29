import React, { Component } from 'react';

class Course extends Component {

    render () {
        const [, title] = this.props.location.search.replace(/^\?/, "").split('=');

        return (
            <div>
                <h1>{decodeURIComponent(title)}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;