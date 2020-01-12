import fetch from 'unfetch'
import useSWR from 'swr'

async function fetcher(path) {
  const res = await fetch(path)
  const json = await res.json()

  return json
}

function StaticWithDataFetch() {
  const { data, error } = useSWR('https://api.github.com/repos/zeit/next.js', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <p>
      Next stars: {data.stargazers_count}
    </p>
  )
}

export default StaticWithDataFetch
