import RootLayout from "../../components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <h1 style={{ color: "black" }}>This is home page I have ever created</h1>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
