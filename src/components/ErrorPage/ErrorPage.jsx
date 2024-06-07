import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
      <h2>404</h2>
      <Link to="/"><button className="btn">Back to Home !</button></Link>
      
    </div>
  );
};

export default ErrorPage;