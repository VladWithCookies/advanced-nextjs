import fetch from 'isomorphic-unfetch'

const UsingAPI = ({ title }) => (
  <p>
    {title}
  </p>
)

UsingAPI.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/test')
  const json = await res.json()

  return { title: json.title }
};

export default UsingAPI
