import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';
import AreaLineChart from './AreaLineChart';

interface ChartOrdersProps extends HTMLAttributes<HTMLDivElement> {
  data?: { month: string; value: number }[];
}

const ChartOrders = ({ data = dummyData, ...rest }: ChartOrdersProps) => {
  return (
    <ChartContainer {...rest}>
      <Header>
        <Title>Chart Orders</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur</Description>
        <StatsContainer>
          <Stat>
            <StatValue>257k</StatValue>
            <StatLabel>Total Sales</StatLabel>
          </Stat>
          <Stat>
            <StatValue>1,245</StatValue>
            <StatLabel>Avg. Sales per day</StatLabel>
          </Stat>
        </StatsContainer>
        <Tabs>
          <Tab active>Monthly</Tab>
          <Tab>Weekly</Tab>
          <Tab>Daily</Tab>
        </Tabs>
      </Header>
      <AreaLineChart data={data} />
    </ChartContainer>
  );
};

export default ChartOrders;

const ChartContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
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

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const StatLabel = styled.p`
  font-size: 12px;
  color: #999;
  margin: 0;
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

// 예시 데이터
type DummyData = { month: string; value: number }[];

const dummyData: DummyData = [
  { month: 'Jan', value: 200000 },
  { month: 'Feb', value: 250000 },
  { month: 'Mar', value: 300000 },
  { month: 'Apr', value: 350000 },
  { month: 'May', value: 400000 },
  { month: 'Jun', value: 450000 },
  { month: 'Jul', value: 500000 },
  { month: 'Aug', value: 550000 },
  { month: 'Sep', value: 400000 },
  { month: 'Oct', value: 350000 },
  { month: 'Nov', value: 300000 },
];
