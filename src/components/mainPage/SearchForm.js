import React, { Component } from 'react';
import { StyledInput, StyledForm, SearchButton } from '../style';

class SearchForm extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      value,
      onChange,
      children,
      onSubmit,
    } = this.props;

    return (
      <StyledForm onSubmit={onSubmit}>

        <StyledInput
          type="text"
          value={value}
          onChange={onChange}
          innerRef={(node) => { this.input = node; }}
        />

        <SearchButton type="submit">
          {children}
        </SearchButton>

      </StyledForm>
    );
  }
}

export default SearchForm;
