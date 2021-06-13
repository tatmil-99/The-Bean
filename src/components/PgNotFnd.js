import styled from 'styled-components';

const PgNotFnd = () => {
  return (
    <PageNotFound>
      <h1>404 - Page Not Found</h1>
    </PageNotFound>
  );
}

const PageNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #B9B7BD;
  opacity: .5;

  h1 {
    height: 50vh;
  }
`;

export default PgNotFnd
