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
  height: 50vh;
`;

export default PgNotFnd
