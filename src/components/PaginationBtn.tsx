export default function PaginationBtn(query: any) {
  return (
    <>
      <div>
        <button
          onClick={() => query.fetchNextPage()}
          disabled={!query.hasNextPage || query.isFetchingNextPage}>
          {query.isFetchingNextPage
            ? 'Loading more...'
            : query.hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{query.isFetching && !query.isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}
