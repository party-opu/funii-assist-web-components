import styled from 'styled-components'

const ResponsiveList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: 'center';
  flex: 1;

  @media (min-width: 400px) {
    flex-direction: row;
    justify-content: 'space-between';
  }
`

export default ResponsiveList