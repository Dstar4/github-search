import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { QueryOptions } from './Search'

const searchUrl = 'https://api.github.com/search/repositories'

/**
 * Use Search Hook
 * Controls Data fetching for a search
 * Updates when text or options change for a sort
 * Paginated with infinite query
 */
export default function useSearch(text: string, options: QueryOptions) {
  const { language, sort } = options
  return useInfiniteQuery(
    ['search', { text, language, sort }],
    async ({ pageParam = 0 }) => {
      const languageQuery = language.length ? encodeURIComponent(`+language:${language}`) : ''

      const response = await axios.get(
        `${searchUrl}?q=${text}${languageQuery}&sort=${sort}&page=${pageParam}`
      )
      return response.data
    },
    {
      // Calculation for if we are on the final page of results, needs to return falsy there is not a next page
      getNextPageParam: (lastPage: any, pages) => {
        const isLastPage = lastPage.total_count / 30 <= pages.length + 1
        return !isLastPage
      },
      // The query will not run on empty search text
      enabled: text.length ? true : false
    }
  )
}
