import useAuth from 'common/hooks/useAuth';

const AdminHome = () => {
  return <div>Welcome, Admin! This is your dashboard.</div>;
};

// const OwnerHome = () => {
//   return <div>Welcome, Owner! This is your home screen.</div>;
// };

const Home = () => {
  const { AuthGuard } = useAuth(["admin", "owner"]);

  /**
   * atom에 따라 구별하여
   */
  return (
    <AuthGuard>
      {<AdminHome />}
      {/* <OwnerHome /> */}
    </AuthGuard>
  );
};

export default Home;
