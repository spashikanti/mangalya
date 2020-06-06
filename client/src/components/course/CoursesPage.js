import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../store/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
    //alert(this.state.course.title);
  };

  render() {
    debugger;
    console.log(this.props.courses);
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          vlaue={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  debugger;
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch){
    return{
        // createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
