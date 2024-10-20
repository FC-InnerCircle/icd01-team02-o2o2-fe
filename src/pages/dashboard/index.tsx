import useAuth from 'common/hooks/useAuth';
import OwnerHome from './OwnerHome';

const Home = () => {
  const { AuthGuard } = useAuth(['admin', 'owner']);

  /**
   * atom에 따라 구별하여
   */
  return (
    <AuthGuard>
      {/* {<AdminHome />} */}
      <OwnerHome />
    </AuthGuard>
  );
};

export default Home;
