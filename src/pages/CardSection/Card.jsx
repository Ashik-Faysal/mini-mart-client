import {
  AddToCartButton,
  CardContainer,
  CardDescription,
  CardImage,
  CardPrice,
  CardTitle,
} from "../Styled/Styled";
import { toast } from "react-toastify";

const Card = ({ product }) => {
  const { title, image, description, price } = product;

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    toast.success(`${title} added to cart!`);
  };

  return (
    <CardContainer>
      <CardImage src={image} alt={title} loading="lazy" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardPrice>${price}</CardPrice>
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </CardContainer>
  );
};

export default Card;
