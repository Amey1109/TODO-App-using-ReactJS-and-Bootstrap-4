import React from "react";

import InputItems from "./InputItems";
import TodoItem from "./TodoItem";

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      showDescription: false,
      Task: "", //Current Task Value
      TaskDescription: "",
      All: [], // [ {Todo,isItemChecked,PlannedTime,taskDescription},{},{},{} ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.toggleAddTask = this.toggleAddTask.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleAddDescriptionFeild = this.handleAddDescriptionFeild.bind(this);
  }

  handleChange(event) {
    this.setState({ Task: event.target.value });
  }

  handleClick(event) {
    this.setState({
      All: [
        ...this.state.All,
        {
          Todo: this.state.Task,
          PlannedTime: this.state.Date,
          isItemChecked: false,
          TodoTaskDescription : this.state.TaskDescription
        },
      ],
      
    });
    event.preventDefault();

    this.setState({ Task: "",TaskDescription : "" });
  }

  handleChangeDescription = (event) => {
    this.setState(
      {TaskDescription : event.target.value}
    )
  };

  handleAddDescriptionFeild(event) {
    this.setState({ showDescription: !this.state.showDescription });
    
  }

  handleDateChange(event) {
    this.setState({ Date: event.target.value });
  }

  handleCheckBoxChange = (ind) => {
    this.setState({
      All: [
        ...this.state.All.slice(0, ind),
        {
          ...this.state.All[ind],
          isItemChecked: !this.state.All[ind].isItemChecked,
        },
        ...this.state.All.slice(ind + 1),
      ],
    });
  };

  handleDeleteChange = (ind) => {
    this.setState({
      All: [...this.state.All.slice(0, ind), ...this.state.All.slice(ind + 1)],
    });
  };
  toggleAddTask(event) {
    this.setState({ showInput: !this.state.showInput });
    this.state.showInput
      ? (event.target.innerText = "Add Task")
      : (event.target.innerText = "Done");
  }

  render() {
    const TodoItemCompnents = this.state.All.map((item, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          singleItem={item.Todo}
          TaskDescription = {item.TodoTaskDescription}
          Date={String(item.PlannedTime)}
          isItemChecked={item.isItemChecked}
          handleCheckBoxChange={this.handleCheckBoxChange}
          handleDeleteChange={this.handleDeleteChange}
        />
      );
    });
    

    return (
      <div>
        <div style={{ margin: "2%" }}>
          <button
            style={{
              paddingLeft: "46%",
              paddingRight: "48%",
              marginLeft: "-2%",
            }}
            className="btn btn-outline-primary"
            onClick={this.toggleAddTask}
          >
            Add Task
          </button>
        </div>

        <InputItems
          showInput={this.state.showInput}
          handleChange={this.handleChange}
          handleDateChange={this.handleDateChange}
          handleClick={this.handleClick}
          item={this.state}
          TaskDescription={this.state.All.TaskDescription}
          handleChangeDescription={this.handleChangeDescription}
          handleAddDescriptionFeild={this.handleAddDescriptionFeild}
          showDescription = {this.state.showDescription}
        />

        {TodoItemCompnents}
      </div>
    );
  }
}
