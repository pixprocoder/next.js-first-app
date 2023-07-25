import RootLayout from "../../components/Layouts/RootLayout";

function ContactPage() {
  return <div>contact</div>;
}

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
