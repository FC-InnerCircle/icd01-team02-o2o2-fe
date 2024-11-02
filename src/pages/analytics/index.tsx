import styled from '@emotion/styled';
import ChartOrders from './components/ChartOrders';
import FavoritesItems from './components/FavoritesItems';
import TrendingItems from './components/TrendingItems';
import SellingItems from './components/SellingItems';

const AnalyticsDashboard = () => {
  return (
    <DashboardContainer>
      <Header>
        <Title>Analytics</Title>
        <Subtitle>Here is your restaurant summary with graph view</Subtitle>
      </Header>
      <MainContent>
        <LeftColumn>
          <ChartOrders />
          <FavoritesItems />
        </LeftColumn>
        <RightColumn>
          <TrendingItems />
          <SellingItems />
        </RightColumn>
      </MainContent>
    </DashboardContainer>
  );
};

export default AnalyticsDashboard;

const DashboardContainer = styled.div`
  padding: 24px;
  background-color: #f8f9fb;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

const MainContent = styled.div`
  display: flex;
  gap: 24px;
`;

const LeftColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RightColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
