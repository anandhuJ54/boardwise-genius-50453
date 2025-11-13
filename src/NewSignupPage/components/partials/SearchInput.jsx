import React from 'react'
import { Search, ArrowRight } from 'react-feather'
import {
  SearchIconContainer,
  StyledSearchInput,
  SearchInputContainer,
  SearchInputButton,
} from '../../styles'

const SearchInput = ({
  searchTextValue = null,
  placeholder = '',
  onSearch = null,
  handleInputAction = null,
  props,
}) => {
  const handleInputButton = () => {
    if (handleInputAction) {
      handleInputAction()
    }
  }
  return (
    <SearchInputContainer>
      <SearchIconContainer>
        <Search size={20} strokeWidth={2} color={'rgb(107, 114, 128)'} />
      </SearchIconContainer>
      <StyledSearchInput
        placeholder={placeholder}
        onChange={e => onSearch(e.target.value)}
        {...props}
      />
      <SearchInputButton
        onClick={() => handleInputButton()}
        disabled={!searchTextValue || searchTextValue?.length < 2}
      >
        <ArrowRight size={16} strokeWidth={2} color={'#fff'} />
      </SearchInputButton>
    </SearchInputContainer>
  )
}

export default SearchInput
