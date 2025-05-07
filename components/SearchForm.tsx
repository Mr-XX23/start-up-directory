import Form from "next/form"
import ResetButton from "./SearchFormReset"
import { Search } from "lucide-react"
const SearchForm = ({ query} : { query? : string}) => {

  return (
    <Form action="/" scroll={false} className="search-form">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search for startups, ideas, or entrepreneurs..."
          className="search-input" />
          <div className="flex gap-2">
            { query && <ResetButton />}
            <button type="submit" className="search-btn text-white">
              <Search className="size-5" />
            </button>

          </div>
    </Form>
  )
}

export default SearchForm