import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';

interface FavoriteItem {
  rank: number;
  name: string;
  price: string;
  category: string;
  sales: number;
  percentageChange: number;
  imageUrl: string;
  id: number;
}

interface FavoriteItemsProps extends HTMLAttributes<HTMLDivElement> {
  items?: FavoriteItem[];
}

const FavoriteItems = ({ items = dummyData, ...rest }: FavoriteItemsProps) => {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();
  return (
    <FavoriteContainer {...rest}>
      <Header>
        <Title>Most Favorite Items</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur</Description>
        <Tabs>
          <Tab>Monthly</Tab>
          <Tab>Weekly</Tab>
          <Tab active>Today</Tab>
        </Tabs>
      </Header>
      <ItemsGrid>
        {items.map((item) => (
          <Item
            key={item.rank}
            onClick={() => navigate(`/${storeId}/menu/${item.id}`)}
          >
            <ItemImage src={item.imageUrl} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemCategory>{item.category}</ItemCategory>
              <ReviewContainer>
                <StarRating>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Star
                        key={index}
                        filled={index < Math.ceil(item.percentageChange / 2)}
                      >
                        ★
                      </Star>
                    ))}
                </StarRating>
                <ReviewText>(454 reviews)</ReviewText>
              </ReviewContainer>
              <LikeContainer>
                <LikeIcon>💜</LikeIcon>
                <LikeCount>256k Like it</LikeCount>
              </LikeContainer>
            </ItemDetails>
          </Item>
        ))}
      </ItemsGrid>
      <ViewMore>View more ▼</ViewMore>
    </FavoriteContainer>
  );
};

export default FavoriteItems;

const FavoriteContainer = styled.div`
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

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  cursor: pointer;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 16px;
`;

const ItemDetails = styled.div`
  text-align: center;
`;

const ItemName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  margin: 6px 0;
`;

const ItemCategory = styled.p`
  font-size: 14px;
  color: #0073e6;
  margin: 0;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const StarRating = styled.div`
  display: flex;
`;

const Star = styled.span<{ filled?: boolean }>`
  color: ${({ filled }) => (filled ? '#ffb400' : '#ddd')};
  margin-right: 2px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  color: #666;
  margin-left: 8px;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const LikeIcon = styled.span`
  font-size: 20px;
  margin-right: 8px;
`;

const LikeCount = styled.span`
  font-size: 16px;
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

const dummyData = [
  {
    id: 1,
    rank: 1,
    name: '카라멜 마키아토',
    price: '₩4500',
    category: '커피',
    sales: 524,
    percentageChange: 60,
    imageUrl: '/src/assets/caramel.webp',
  },
  {
    id: 2,
    rank: 2,
    name: '바닐라 라떼',
    price: '₩4000',
    category: '커피',
    sales: 215,
    percentageChange: -2,
    imageUrl: '/src/assets/vanila.webp',
  },
  {
    id: 3,
    rank: 3,
    name: '에스프레소',
    price: '₩3000',
    category: '커피',
    sales: 120,
    percentageChange: 5,
    imageUrl: '/src/assets/espresso.webp',
  },
  {
    id: 4,
    rank: 4,
    name: '카푸치노',
    price: '₩4000',
    category: '커피',
    sales: 76,
    percentageChange: 12,
    imageUrl: '/src/assets/cappuccino.webp',
  },
  {
    id: 5,
    rank: 5,
    name: '플랫 화이트',
    price: '₩4200',
    category: '커피',
    sales: 215,
    percentageChange: -2,
    imageUrl: '/src/assets/latte.webp',
  },
];
