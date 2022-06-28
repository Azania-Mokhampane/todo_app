import styled from "styled-components";

export const Container = styled.div`
  .home_container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-items: center;
    align-content: space-around;
    height: 100vh;
    padding: 20px;
    text-align: center;

    @media (min-width: 768px) {
      .home_container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-content: center;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
