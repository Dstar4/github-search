import styled from 'styled-components'
import { Column } from '../Flex'
import { popularLanguages, otherLanguages } from '../../helpers/languageOptions'
import { QueryOptions } from '../search/Search'

interface FilterProps {
  options: QueryOptions
  setOptions: (options: QueryOptions) => void
}

/**
 * Filters
 * Renders a menu to select filters and sorting for a search
 */
export default function Filters({ options, setOptions }: FilterProps) {
  return (
    <FilterList>
      <OptionGroup>
        <FilterLabel htmlFor='sort'>Sort Results:</FilterLabel>
        <Select id='sort' value={options.sort} onChange={(e) => setOptions({ ...options, sort: e.target.value })}>
          <option value='default'>Best Match</option>
          <option value='stars'>Stars</option>
        </Select>
      </OptionGroup>
      <OptionGroup>
        <FilterLabel htmlFor='filter'>Filter By Language:</FilterLabel>
        <Select id='filter' value={options.language} onChange={(e) => setOptions({ ...options, language: e.target.value })}>
          <option value=''>Select Language</option>
          <option disabled>Popular Languages</option>
          {popularLanguages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
          <option disabled>Other Languages</option>
          {otherLanguages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </Select>
      </OptionGroup>
    </FilterList>
  )
}

const Select = styled.select`
  width: 100%;
  border: 0;
  background-color: var(--gray);
  font-size: 18px;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`

const OptionGroup = styled(Column)`
  padding-bottom: 20px;
  @media screen and (max-width: 800px) {
    width: 40%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`

const FilterList = styled(Column)`
  min-width: 200px;
  border-radius: 14px 0 0 14px;
  border-right: solid 2px var(--darker-grey);
  background-color: var(--light-grey);
  padding: 16px;
  @media screen and (max-width: 800px) {
    height: initial;
  }
  @media screen and (max-width: 400px) {
    min-width: 0px;
  }

  @media screen and (max-width: 800px) {
    border-radius: 14px 14px 0 0;
    border-right: none;
    border-bottom: solid 2px var(--darker-grey);
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  @media screen and (max-width: 400px) {
    border-radius: 14px 14px 0 0;
    border-right: none;
    border-bottom: solid 2px var(--darker-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const FilterLabel = styled.label`
  padding: 10px 0;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`
