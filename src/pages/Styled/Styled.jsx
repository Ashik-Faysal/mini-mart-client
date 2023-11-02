import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SortOptions = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
`;

export const Option = styled.option`
  /* Add styles for option tag here */
  background-color: #fff; /* Background color */
  color: #333; /* Text color */
  padding: 8px;
  font-size: 14px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  width: auto;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  border: none;
  box-shadow: 0 7px 10px rgba(222, 67, 67, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 300px;
  border-radius: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

export const CardPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Div = styled.div`
  margin: 2% 5%;

  @media (max-width: 768px) {
    margin: 2% 3%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const PaginationButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
