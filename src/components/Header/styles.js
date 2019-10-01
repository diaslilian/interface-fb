import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: #4a90e2;

  header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px;

    div {
      display: flex;
      align-items: center;

      span {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        margin-right: 15px;
      }
    }
  }
`;
