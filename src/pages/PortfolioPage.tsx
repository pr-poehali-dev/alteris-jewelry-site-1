import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Заглушка для данных портфолио
const portfolioItems = [
  {
    id: "1",
    title: "Коллекция 'Минимализм'",
    category: "collections",
    description: "Минималистичные украшения для повседневного образа",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Серьги 'Геометрия'",
    category: "earrings",
    description: "Современный дизайн с геометрическими формами",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Кольцо 'Волна'",
    category: "rings",
    description: "Элегантное кольцо с плавными линиями",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Колье 'Звёздный путь'",
    category: "necklaces",
    description: "Роскошное колье с вставками из циркония",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Коллекция 'Природные мотивы'",
    category: "collections",
    description: "Украшения, вдохновленные природными формами",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Браслет 'Лунная дорожка'",
    category: "bracelets",
    description: "Серебряный браслет с полированной поверхностью",
    image: "/placeholder.svg",
  }
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-light mb-10 mt-20 text-alteris-black text-center">
        Наши работы
      </h1>
      
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-alteris-grey-dark">
          Представляем вам коллекцию наших лучших работ. Каждое украшение уникально и создано с особым вниманием к деталям.
          Мы гордимся каждым изделием и стремимся к совершенству в каждой детали.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="flex justify-center space-x-2 mb-8">
          <TabsTrigger value="all">Все работы</TabsTrigger>
          <TabsTrigger value="collections">Коллекции</TabsTrigger>
          <TabsTrigger value="rings">Кольца</TabsTrigger>
          <TabsTrigger value="earrings">Серьги</TabsTrigger>
          <TabsTrigger value="necklaces">Колье</TabsTrigger>
          <TabsTrigger value="bracelets">Браслеты</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </TabsContent>

        {["collections", "rings", "earrings", "necklaces", "bracelets"].map((category) => (
          <TabsContent 
            key={category} 
            value={category} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems
              .filter((item) => item.category === category)
              .map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center">
        <Button variant="outline">Загрузить ещё</Button>
      </div>
    </div>
  );
};

// Компонент карточки портфолио
interface PortfolioCardProps {
  item: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
  };
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="group overflow-hidden">
      <div className="relative overflow-hidden aspect-square mb-4">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
      <p className="text-alteris-grey-dark">{item.description}</p>
    </div>
  );
};

export default PortfolioPage;
