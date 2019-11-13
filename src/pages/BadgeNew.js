import React from "react";

import "./styles/BadgeNew.css";

import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from '../components/BadgeForm';
import Navbar from "../components/Navbar";


class BadgeNew extends React.Component {
    state = {form: {
        firstName:'',
        lastName:'',
        twitter:'',
        jobTitle:'',
        email:'',
    }};
    handleChange = (e) => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name]=e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstname={this.state.form.firstName}
                lastname={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobtitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatar="https://es.gravatar.com/avatar/9deef320351a5f60fa8dd128fa53e771"
              />
            </div>
            <div className="col-6">
                <BadgeForm onChange ={this.handleChange} formValues ={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
