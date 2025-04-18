import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Деловой стиль",
    subtitle: "Украшения для офиса и деловых встреч",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Спортивный образ",
    subtitle: "Практичные и стильные аксессуары для активных",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Вечерний выход",
    subtitle: "Элегантные украшения для особых случаев",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video/Slider Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-alteris-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-alteris-white px-4">
        <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wider">
          Alteris – другой взгляд на украшения
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl">
          Создано, чтобы подстраиваться под вас
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/catalog" className="metallic-button">
            Купить сейчас
          </Link>
          <Link
            to="/catalog"
            className="bg-transparent border border-alteris-white text-alteris-white hover:bg-alteris-white/10 
            font-medium py-3 px-6 rounded-sm transition-all duration-300"
          >
            Смотреть коллекцию
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-alteris-white w-8"
                : "bg-alteris-white/50"
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;