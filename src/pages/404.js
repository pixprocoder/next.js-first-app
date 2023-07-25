import { useRouter } from "next/router";
import React from "react";

function ErrorPage() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div>
      <img
        src="https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png"
        alt="img"
      />
    </div>
  );
}

export default ErrorPage;
