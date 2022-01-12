import styled from "styled-components/macro";

const Item = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Quantity = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  color: #d87d4a;
`;

const ListItem = styled.li`
  display: flex;
  gap: 24px;
`;

const ComponentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ProductComponents = ({ items }) => {
  const components = items.map((item) => (
    <ListItem>
      <Quantity>{`${item.quantity}x`}</Quantity>
      <Item>{item.item}</Item> {/* TODO: capitalize each word */}
    </ListItem>
  ));
  return <ComponentList>{components}</ComponentList>;
};

export default ProductComponents;
