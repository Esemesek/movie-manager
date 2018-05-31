import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const InputBarContainer = styled.div`
  text-align: center;
`;

export default class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  onButtonClick = (event) => {
    this.props.onClick(this.state.inputValue);
  }

  render() {
    return (
      <InputBarContainer>
        <TextField
          label={this.props.label}
          style={{ width: '500px ' }}
          onChange={this.onInputChange}
        />
        <Button
          color="primary"
          onClick={this.onButtonClick}
          disabled={this.props.disabled}
        >
          {this.props.disabled ? <CircularProgress size={30} /> : 'Add'}
        </Button>
      </InputBarContainer>
    );
  }
}

InputBar.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
