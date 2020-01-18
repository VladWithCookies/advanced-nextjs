import styled from 'styled-components';

const Cyan = styled.p`
  color: cyan;
`;

const CSSInJS = () => (
  <Cyan>
    This page uses custom babel config and custom document for Styled Components integration
  </Cyan>
);

export default CSSInJS;
