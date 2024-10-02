import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount() {
    alert("A person with the email  has been removed from your network");
  }

  render() {
    const { img, email } = this.props.person;
    const { handleRemove } = this.props;

    return (
      <div className="person">
        <b onClick={() => handleRemove(email)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
