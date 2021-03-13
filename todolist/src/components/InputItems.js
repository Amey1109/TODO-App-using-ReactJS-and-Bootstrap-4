import React from "react";

export default class InputItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div style={{ display: this.props.showInput ? "block" : "none" }}>
        <input
          className = "todo-input"
          style={{ margin: "0.3%", width: "52%" }}
          type="text"
          placeholder="Task"
          value={this.props.item.Task}
          onChange={this.props.handleChange}
        />

        <input
          type="date"
          value={this.props.item.tempDate}
          className=" btn btn-outline-info m-1"
          onChange={this.props.handleDateChange}
        />
        <button
          //style={{ margin: "0.2%" }}
          type="button"
          className="btn btn-outline-info m-1"
          onClick={this.props.handleAddDescriptionFeild}
        >
          Description
        </button>

        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={this.props.handleClick}
        >
          Add to TodoList
        </button>

        <textarea
          className = "todo-input"
          style={{
            margin: "0.3%",
            marginTop: "2%",
            width: "93%",
            display: this.props.showDescription ? "block" : "none",
          }}
          type="text"
          placeholder=" Add your Task Description Here"
          value={this.props.item.TaskDescription}
          onChange={this.props.handleChangeDescription}
        />
        <br />
      </div>
    );
  }
}
