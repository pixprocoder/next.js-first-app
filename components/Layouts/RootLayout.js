import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <div style={{ display: "flex", gap: "6px" }}>
            <Button type="primary">
              <Link href="/products">Products</Link>
            </Button>
            <Button type="primary">
              <Link href="/about">About</Link>
            </Button>
            <Button type="primary">
              <Link href="/contact">contact</Link>
            </Button>
            <Button type="primary">
              <Link href="/admin">Dashboard</Link>
            </Button>
          </div>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            backgroundColor: "darkcyan",
            height: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Next js design ©2023 Created by Samsul kobir
      </Footer>
    </Layout>
  );
};
export default RootLayout;
