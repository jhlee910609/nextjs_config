import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const router = useRouter();
  return <div>num :{router.query.num}</div>;
}
