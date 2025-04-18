import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-alteris-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-alteris-black">
            ALTERIS
          </span>
          <div className={cn("h-[2px] bg-alteris-black mt-1", scrolled ? "animate-line-appear" : "")} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu className="space-x-8">
            <Link to="/catalog" className="text-alteris-black hover:text-alteris-grey-dark transition-colors">
              Каталог
            </Link>
            <Link to="/portfolio" className="text-alteris-black hover:text-alteris-grey-dark transition-colors">
              Портфолио
            </Link>
            <Link to="/about" className="text-alteris-black hover:text-alteris-grey-dark transition-colors">
              О нас
            </Link>
            <Link to="/reviews" className="text-alteris-black hover:text-alteris-grey-dark transition-colors">
              Отзывы
            </Link>
            <Link to="/delivery" className="text-alteris-black hover:text-alteris-grey-dark transition-colors">
              Доставка
            </Link>
            <Link to="/contacts" className="text-alteris-black hover:text-alteris-grey-dark transition-colors">
              Контакты
            </Link>
          </NavigationMenu>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSearch}
            className="text-alteris-black hover:text-alteris-grey-dark hover:bg-transparent"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="text-alteris-black hover:text-alteris-grey-dark hover:bg-transparent"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-alteris-black hover:text-alteris-grey-dark hover:bg-transparent"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-alteris-white p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/catalog" className="text-alteris-black hover:text-alteris-grey-dark py-2 border-b border-alteris-grey-light">
              Каталог
            </Link>
            <Link to="/portfolio" className="text-alteris-black hover:text-alteris-grey-dark py-2 border-b border-alteris-grey-light">
              Портфолио
            </Link>
            <Link to="/about" className="text-alteris-black hover:text-alteris-grey-dark py-2 border-b border-alteris-grey-light">
              О нас
            </Link>
            <Link to="/reviews" className="text-alteris-black hover:text-alteris-grey-dark py-2 border-b border-alteris-grey-light">
              Отзывы
            </Link>
            <Link to="/delivery" className="text-alteris-black hover:text-alteris-grey-dark py-2 border-b border-alteris-grey-light">
              Доставка
            </Link>
            <Link to="/contacts" className="text-alteris-black hover:text-alteris-grey-dark py-2">
              Контакты
            </Link>
          </nav>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-alteris-white p-4 shadow-md">
          <SearchBar onClose={toggleSearch} />
        </div>
      )}
    </header>
  );
};

export default Header;