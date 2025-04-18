import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

// Заглушка данных для бестселлеров
const bestsellerProducts = [
  {
    id: "1",
    name: "Кольцо Минимал",
    price: 12500,
    image: "/placeholder.svg",
    category: "Кольца",
  },
  {
    id: "2",
    name: "Серьги Геометрия",
    price: 15800,
    image: "/placeholder.svg",
    category: "Серьги",
  },
  {
    id: "3",
    name: "Подвеска Лунное сияние",
    price: 9900,
    image: "/placeholder.svg",
    category: "Подвески",
  },
  {
    id: "4",
    name: "Браслет Линии",
    price: 11200,
    image: "/placeholder.svg",
    category: "Браслеты",
  },
  {
    id: "5",
    name: "Кольцо Волна",
    price: 13400,
    image: "/placeholder.svg",
    category: "Кольца",
  },
  {
    id: "6",
    name: "Серьги Капли",
    price: 16700,
    image: "/placeholder.svg",
    category: "Серьги",
  },
];

const BestsellerProducts = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setMaxScroll(
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      );
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setMaxScroll(
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : Math.min(scrollPosition + scrollAmount, maxScroll);
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="py-16 bg-alteris-grey-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-light text-alteris-black">
            Бестселлеры
          </h2>
          <Link
            to="/catalog"
            className="text-alteris-black border-b border-alteris-black hover:text-alteris-grey-dark hover:border-alteris-grey-dark transition-colors"
          >
            В каталог
          </Link>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {bestsellerProducts.map((product) => (
              <div key={product.id} className="flex-none w-64 md:w-72">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-alteris-white/80 hover:bg-alteris-white border-alteris-grey-light rounded-full"
            onClick={() => scroll("left")}
            disabled={scrollPosition <= 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-alteris-white/80 hover:bg-alteris-white border-alteris-grey-light rounded-full"
            onClick={() => scroll("right")}
            disabled={scrollPosition >= maxScroll}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestsellerProducts;