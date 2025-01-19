import { Link } from "react-router-dom"; 

const NotFound = () => {
    return (
        <div>
            <h1 style={{color: 'white'}}>Произошло что-то непредвиденное, вернёмся на Главную? </h1>
          <Link  to="/">Вернуться на главную</Link>
        </div>
    );
};

export default NotFound;