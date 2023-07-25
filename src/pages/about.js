import RootLayout from "../../components/Layouts/RootLayout";

function AboutPage() {
  return <div>AboutPage</div>;
}

export default AboutPage;

AboutPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
