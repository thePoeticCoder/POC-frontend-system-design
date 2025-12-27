import { SearchBarType } from '../types'
import SearchIcon from './icons/SearchIcon'

const SearchBar = ({
  placeholder,
  searchHandler,
  searchValue,
  searchContainer,
  searchIcon,
  searchInput,
}: SearchBarType) => {
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={searchContainer}
    >
      <input
        value={searchValue}
        onChange={searchHandler}
        className={searchInput}
        placeholder={placeholder}
      />
      <SearchIcon
        color='#053233'
        className={searchIcon}
        height={20.06}
        width={19.64}
      />
    </div>
  )
}

export default SearchBar
