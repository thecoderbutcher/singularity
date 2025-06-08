import { IoSearchOutline } from 'react-icons/io5'

function SearchSongs(): React.JSX.Element {
  return (
    <div className="flex py-1 px-2 lg:py-4 lg:px-8">
      <div className="group flex justify-between px-2 bg-primary-dark/0 border-b border-accent text-accent rounded-md w-full focus:px-2 p-0 placeholder:text-secondary/50 placeholder:text-sm placeholder:px-2">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Quick Search"
          className="w-full focus:outline-none "
        />
        <IoSearchOutline className="opacity-50 text-sm lg:text-xl" />
      </div>
    </div>
  )
}

export default SearchSongs
