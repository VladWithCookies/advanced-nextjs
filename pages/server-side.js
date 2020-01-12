import fetch from 'isomorphic-unfetch'

const SeverSide = ({ stars }) => (
  <p>
    Next stars: {stars}
  </p>
)

SeverSide.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()

  return { stars: json.stargazers_count }
}

export default SeverSide
