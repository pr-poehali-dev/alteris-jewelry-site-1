import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-light text-alteris-black mb-4">404</h1>
      <h2 className="text-2xl font-medium text-alteris-black mb-6">
        Страница не найдена
      </h2>
      <p className="text-alteris-grey-dark max-w-md mb-8">
        К сожалению, страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link to="/">
        <Button className="metallic-button">
          Вернуться на главную
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;