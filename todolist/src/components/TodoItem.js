import React from "react";
export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.getDate = this.getDate.bind(this);
  }

  getDate() {
    let d = new Date();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    let DateToday = year + "-" + month + "-" + date;
    if (DateToday == this.props.Date) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div style={{ display: "flex", marginLeft: "25%", margin: "2%"  }} className="todo-row">
        <input
          className="m-3 mx-auto"
          type="checkbox"
          checked={this.props.isItemChecked}
          onChange={() => {
            this.props.handleCheckBoxChange(this.props.index);
          }}
        />
        {this.props.isItemChecked ? (
          <p
            style={{
              margin: "1%",
              marginRight: "auto!important",
              color: "#F4F6F5",
            }}
            className="font-weight-bold mx-auto"
          >
            <strike>
              <h6
                style={{
                  textDecoration: this.getDate() ? "underline" : "none",
                  textDecorationColor: "yellow",
                  textDecorationStyle: "double",
                  marginBottom: "0.2%",
                }}
              >
                {this.props.singleItem} | PlannedDate : {this.props.Date}
              </h6>
              <p
                style={{
                  textDecoration: this.getDate() ? "underline" : "none",
                  textDecorationColor: "yellow",
                  textDecorationStyle: "double",
                  marginBottom: "0.2%",
                }}
              >
                {this.props.TaskDescription}
              </p>
            </strike>
          </p>
        ) : (
          <p
            style={{
              margin: "1%",
              marginRight: "auto!important",
              color: "#F4F6F5",
            }}
            className="font-weight-bold mx-auto"
          >
            <h6
              style={{
                textDecoration: this.getDate() ? "underline" : "none",
                textDecorationColor: "yellow",
                textDecorationStyle: "double",
                marginBottom: "0.2%",
              }}
            >
              {this.props.singleItem} | PlannedDate : {this.props.Date}
            </h6>
            <p
              style={{
                textDecoration: this.getDate() ? "underline" : "none",
                textDecorationColor: "yellow",
                textDecorationStyle: "double",
                marginBottom: "0.2%",
              }}
            >
              {this.props.TaskDescription}
            </p>
          </p>
        )}

        <button
          style={{ position: "relative" }}
          onClick={() => {
            this.props.handleDeleteChange(this.props.index);
          }}
          className="btn btn-danger mx-auto"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-trash-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
}
