import styled from 'styled-components';

const Layout = styled.div`
  border: 1px dashed black;
  padding: 20px;
`

const CustomApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default CustomApp;
