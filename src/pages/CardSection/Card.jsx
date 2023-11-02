import { AddToCartButton, CardContainer, CardDescription, CardImage, CardPrice, CardTitle } from "../Styled/Styled";


const Card = ({product}) => {
const {id , title, image, description, price}=product;
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardPrice>${price}</CardPrice>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </CardContainer>
  );
};

export default Card;
