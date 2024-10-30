import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface SellingItem {
  rank: number;
  name: string;
  price: string;
  category: string;
  serves: string;
  time: string;
  imageUrl: string;
}

interface SellingItemsProps extends HTMLAttributes<HTMLDivElement> {
  items?: SellingItem[];
}

const SellingItems = ({ items = dummyData, ...rest }: SellingItemsProps) => {
  return (
    <SellingContainer {...rest}>
      <Header>
        <Title>Most Selling Items</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur</Description>
        <Tabs>
          <Tab>Monthly</Tab>
          <Tab>Weekly</Tab>
          <Tab active>Today</Tab>
        </Tabs>
      </Header>
      <ItemsList>
        {items.map((item) => (
          <Item key={item.rank}>
            <ItemImage src={item.imageUrl} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemCategory>{item.category}</ItemCategory>
              <ItemInfo>
                <Serves>{item.serves}</Serves>
                <Time>{item.time}</Time>
              </ItemInfo>
            </ItemDetails>
            <ItemPrice>{item.price}</ItemPrice>
            <MoreOptions>⋯</MoreOptions>
          </Item>
        ))}
      </ItemsList>
      <ViewMore>View more ▼</ViewMore>
    </SellingContainer>
  );
};

export default SellingItems;

const SellingContainer = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 100%;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin: 12px 0;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const Tab = styled.button<{ active?: boolean }>`
  font-size: 14px;
  padding: 8px 16px;
  background: ${({ active }) => (active ? '#f0f0f0' : '#fff')};
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-left: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #f0f0f0;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 16px;
  border-radius: 12px;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 16px;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const ItemCategory = styled.p`
  font-size: 14px;
  color: #0073e6;
  margin: 4px 0;
`;

const ItemInfo = styled.div`
  display: flex;
  gap: 16px;
`;

const Serves = styled.span`
  font-size: 14px;
  color: #666;
`;

const Time = styled.span`
  font-size: 14px;
  color: #666;
`;

const ItemPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 16px;
`;

const MoreOptions = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-left: auto;
`;

const ViewMore = styled.p`
  font-size: 18px;
  color: #0073e6;
  text-align: center;
  margin-top: 24px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const dummyData: SellingItem[] = [
  {
    rank: 1,
    name: 'Medium Spicy Spaghetti Italiano',
    price: '$12.56',
    category: 'SPAGETHI',
    serves: 'Serves for 4 Person',
    time: '24mins',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    rank: 2,
    name: 'Pizza Meal for Kids (Small size)',
    price: '$5.67',
    category: 'PIZZA',
    serves: 'Serves for 1 Person',
    time: '24mins',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    rank: 3,
    name: 'Supreme Pizza with Beef Topping',
    price: '$11.21',
    category: 'PIZZA',
    serves: 'Serves for 2 Person',
    time: '24mins',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    rank: 4,
    name: 'Mozarella Pizza with Random Topping',
    price: '$8.15',
    category: 'PIZZA',
    serves: 'Serves for 2 Person',
    time: '24mins',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    rank: 5,
    name: 'Pizza Meal for Kids (Small size)',
    price: '$5.67',
    category: 'PIZZA',
    serves: 'Serves for 1 Person',
    time: '24mins',
    imageUrl: 'https://via.placeholder.com/150',
  },
];
