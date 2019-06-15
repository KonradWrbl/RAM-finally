import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'LOAD', label: 'LOAD' },
    { value: 'STORE', label: 'STORE' },
    { value: 'ADD', label: 'ADD' },
    { value: 'SUB', label: 'SUB' },
    { value: 'MULT', label: 'MULT' },
    { value: 'DIV', label: 'DIV' },
    { value: 'READ', label: 'READ' },
    { value: 'WRITE', label: 'WRITE' },
    { value: 'JUMP', label: 'JUMP' },
    { value: 'JGTZ', label: 'JGTZ' },
    { value: 'JZERO', label: 'JZERO' },
    { value: 'HALT', label: 'HALT' },
  ];

  class CommandNameInput extends Component {
      state = {
          selectedOption: null,
      }

      handleChange = selectedOption => {
          this.setState({ selectedOption })
          clg(`Option selected:`, selectedOption);
      }

      render() {
          const { selectedOption } = this.state;

          return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
          )
      }
  }