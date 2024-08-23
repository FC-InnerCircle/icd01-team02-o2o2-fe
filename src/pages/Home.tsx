interface Props {
  role: "admin" | "store-owner"; // 역할 타입 정의, enum으로 빼고 API에 맞출 예정
}

const AdminHome = () => {
  return <div>Welcome, Admin! This is your dashboard.</div>;
};

const OwnerHome = () => {
  return <div>Welcome, Employee! This is your home screen.</div>;
};

const Home = ({ role }: Props) => {
  if (role === "admin") return <AdminHome />;
  else return <OwnerHome />;
};

export default Home;
