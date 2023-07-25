import { Button } from "antd";
import Link from "next/link";
import React from "react";

function ProductsHomePage() {
  return (
    <div>
      <h1>Products home page</h1>
      <Button type="primary">
        <Link href="/">Back to Home👋🏼</Link>
      </Button>
    </div>
  );
}

export default ProductsHomePage;
