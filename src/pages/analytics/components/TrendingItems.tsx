import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
import { useNavigate, useParams } from 'react-router-dom';

interface TrendingItem {
  rank: number;
  name: string;
  price: string;
  category: string;
  sales: number;
  percentageChange: number;
  imageUrl: string;
  id: number;
  chartData: {
    month: string;
    value: number;
  }[];
}

interface TrendingItemsProps extends HTMLAttributes<HTMLDivElement> {
  items?: TrendingItem[];
}

const TrendingItems = ({ items = dummyItems, ...rest }: TrendingItemsProps) => {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();
  return (
    <TrendingContainer {...rest}>
      <Header>
        <Title>🔥 Trending Items</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur</Description>
        <Tabs>
          <Tab active>Weekly</Tab>
          <Tab>Monthly</Tab>
          <Tab>Daily</Tab>
        </Tabs>
      </Header>
      <ItemsList>
        {items.map((item) => (
          <Item
            key={item.rank}
            onClick={() => navigate(`/${storeId}/menu/${item.id}`)}
          >
            <Rank>#{item.rank}</Rank>
            <ItemImage src={item.imageUrl} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemCategory>{item.category}</ItemCategory>
            </ItemDetails>
            <SalesInfo>
              <ChartContainer>
                <ResponsiveContainer width="100%" height={60}>
                  <AreaChart data={item.chartData}>
                    <XAxis dataKey="month" hide />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={
                        item.percentageChange >= 0 ? '#28a745' : '#dc3545'
                      }
                      fill={item.percentageChange >= 0 ? '#28a745' : '#dc3545'}
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
              <SalePercent>
                <SalesValue>{item.sales}</SalesValue>
                <PercentageChange positive={item.percentageChange >= 0}>
                  Sales ({item.percentageChange}%)
                </PercentageChange>
              </SalePercent>
            </SalesInfo>
          </Item>
        ))}
      </ItemsList>
    </TrendingContainer>
  );
};

export default TrendingItems;

const TrendingContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 100%;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #999;
  margin: 8px 0;
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
  padding: 12px;
  border-radius: 8px;
  background: #f9f9f9;
  cursor: pointer;
`;

const Rank = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 16px;
`;

const ItemImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 16px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  margin: 4px 0;
`;

const ItemCategory = styled.p`
  font-size: 12px;
  color: #0073e6;
  margin: 0;
`;

const SalesInfo = styled.div`
  text-align: center;
  display: flex;
  gap: 12px;
`;

const SalePercent = styled.div``;
const SalesValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const PercentageChange = styled.p<{ positive?: boolean }>`
  font-size: 14px;
  color: ${({ positive }) => (positive ? '#28a745' : '#dc3545')};
  margin: 0;
`;

const ChartContainer = styled.div`
  width: 80px;
  height: 60px;
`;

// 예시 데이터

const dummyItems = [
  {
    id: 1,
    rank: 1,
    name: '카라멜 마키아토',
    price: '₩4500',
    category: '커피',
    sales: 524,
    percentageChange: 60,
    imageUrl: '/src/assets/caramel.webp',
    chartData: [
      { month: 'Jan', value: 100 },
      { month: 'Feb', value: 150 },
      { month: 'Mar', value: 200 },
      { month: 'Apr', value: 250 },
    ],
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
    chartData: [
      { month: 'Jan', value: 200 },
      { month: 'Feb', value: 180 },
      { month: 'Mar', value: 160 },
      { month: 'Apr', value: 150 },
    ],
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
    chartData: [
      { month: 'Jan', value: 120 },
      { month: 'Feb', value: 130 },
      { month: 'Mar', value: 140 },
      { month: 'Apr', value: 150 },
    ],
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
    chartData: [
      { month: 'Jan', value: 80 },
      { month: 'Feb', value: 90 },
      { month: 'Mar', value: 100 },
      { month: 'Apr', value: 110 },
    ],
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
    chartData: [
      { month: 'Jan', value: 180 },
      { month: 'Feb', value: 170 },
      { month: 'Mar', value: 160 },
      { month: 'Apr', value: 150 },
    ],
  },
];
