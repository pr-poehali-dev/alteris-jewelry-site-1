import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-alteris-black text-alteris-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">О компании</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-alteris-grey hover:text-alteris-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-alteris-grey hover:text-alteris-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-alteris-grey hover:text-alteris-white transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-alteris-grey hover:text-alteris-white transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Покупателям</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-alteris-grey hover:text-alteris-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-alteris-grey hover:text-alteris-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-alteris-grey hover:text-alteris-white transition-colors">
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-alteris-grey hover:text-alteris-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Подписка на новости</h3>
            <p className="text-alteris-grey mb-4">
              Будьте в курсе новинок и специальных предложений
            </p>
            <form className="flex mb-4">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-alteris-grey-dark text-alteris-white border-alteris-grey-dark focus:border-alteris-silver"
              />
              <Button className="ml-2 bg-alteris-silver hover:bg-alteris-grey text-alteris-black">
                Подписаться
              </Button>
            </form>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-alteris-grey hover:text-alteris-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-alteris-grey hover:text-alteris-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-alteris-grey hover:text-alteris-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-alteris-grey-dark pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-alteris-grey text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alteris. Все права защищены.
          </p>
          <div className="flex space-x-4 text-sm text-alteris-grey">
            <Link to="/privacy" className="hover:text-alteris-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-alteris-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;