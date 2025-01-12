import { Link } from "react-router-dom"; 

const NotFound = () => {
    return (
        <div>
            <h1>Произошло что-то непредвиденное, вернёмся на Главную? </h1>
          <Link to="/">NotFound</Link>
        </div>
    );
};

export default NotFound;