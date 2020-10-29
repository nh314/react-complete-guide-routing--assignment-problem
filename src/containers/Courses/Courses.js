import React, { Component } from 'react';

import './Courses.css';
import {Link, Route} from 'react-router-dom';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    articleSelectedHandler = (course_id, course_title) => {
        this.props.history.push({
            pathname:'/courses/' + course_id,
            search: `title=${course_title}`
        });
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                            // <Link to={"/courses/" + course.id } key={course.id}>
                                <article onClick={() => this.articleSelectedHandler(course.id, course.title)} className="Course" key={course.id}>{course.title}</article>
                            // </Link>
                            );
                        } )
                    }
                </section>
                    <Route path="/courses/:id" component={Course} />
            </div>
        );
    }
}

export default Courses;