import AppRoutes from "routes/AppRoutes";
import Layout from "components/common/layout";

//아래 Route외 html Layout 컴포넌트로 변경 예정
function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
