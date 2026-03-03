import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h2>404 Not found page</h2>
      <p>
        This page is not found. You will be redirected to home page in 3
        seconds....
      </p>
    </div>
  );
}
export default NotFoundPage;
