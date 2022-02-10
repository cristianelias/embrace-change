// Dependencies
import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 4% 28% 11% 11% 11% 7% 7% 7%;
  gap: 2%;
  text-align: center;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0 25px;

  @media (max-width: 768px) {
    grid-template-columns: 4% 28% 20% 20% 20%;
  }

  @media (max-width: 440px) {
    grid-template-columns: 6% 38% 25% 25%;
    padding: 0 5px;
  }
`;

export default Row;
