import React, { useState } from 'react'
import styled from 'styled-components'

import { Flex } from '../Flex'

import searchIcon from '../../images/search-outline.svg'

interface SearchFormProps {
  searchText: string
  setSearchText: (searchText: string) => void
}

export default function SearchForm({ searchText, setSearchText }: SearchFormProps) {
  const [inputText, setInputText] = useState(searchText)

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchText(inputText.trim())
  }

  return (
    <Form onSubmit={(e) => submitSearch(e)}>
      <label htmlFor='search'>Search Github Repositories</label>
      <Flex>
        <SearchWrapper>
          <MagnifierIcon src={searchIcon} />
          <SearchInput
            id='search'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={'React'}
          />
        </SearchWrapper>
        <SubmitButton type='submit'>Search</SubmitButton>
      </Flex>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SearchWrapper = styled.span`
  position: relative;
  display: flex;
  min-width: 100px;
  width: 100%;
`

const MagnifierIcon = styled.img`
  position: absolute;
  top: 6px;
  left: 8px;
  width: 40px;
`

const SearchInput = styled.input`
  border: 2px solid var(--darker-grey);
  font-size: 24px;
  height: 40px;
  width: 100%;
  padding: 4px 23px 4px 60px;
  outline: 0;
  background-color: var(--light-grey);
  border-radius: 14px 0 0 14px;
  color: var(--darker-grey);
  &:hover,
  &:focus {
    border: 2px solid var(--he-blue);
    background-color: var(--white);
  }
`

const SubmitButton = styled.button`
  width: 150px;
  background-color: var(--he-blue);
  border: 1px solid var(--he-blue);
  color: var(--light-grey);
  font-size: 16px;
  border-radius: 0 14px 14px 0;
`
