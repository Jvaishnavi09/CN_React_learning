import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => nav("/"), 3000);
  }, []);
  return (
    <>
      <h1> Something went wrong</h1>
      <h4> Redirecting.....</h4>
    </>
  );
}
