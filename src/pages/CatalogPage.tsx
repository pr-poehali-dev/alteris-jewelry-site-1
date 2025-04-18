import { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductCard from "@/components/ProductCard";

// Заглушка данных для каталога
const catalogProducts = [
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
  {
    id: "7",
    name: "Кольцо Эллипс",
    price: 14300,
    image: "/placeholder.svg",
    category: "Кольца",
  },
  {
    id: "8",
    name: "Браслет Сфера",
    price: 10900,
    image: "/placeholder.svg",
    category: "Браслеты",
  },
];

const CatalogPage = () => {
  const [priceRange, setPriceRange] = useState([5000, 20000]);
  
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-light mb-10 mt-20 text-alteris-black">Каталог</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters */}
        <div className="w-full lg:w-1/4">
          <div className="bg-alteris-white p-6 rounded-sm shadow-sm">
            <h2 className="text-xl font-medium mb-6 text-alteris-black">Фильтры</h2>
            
            <Accordion type="single" collapsible defaultValue="categories">
              <AccordionItem value="categories">
                <AccordionTrigger className="text-lg font-medium text-alteris-black">
                  Категории
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 py-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-rings" />
                      <Label htmlFor="category-rings">Кольца</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-earrings" />
                      <Label htmlFor="category-earrings">Серьги</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-pendants" />
                      <Label htmlFor="category-pendants">Подвески</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-bracelets" />
                      <Label htmlFor="category-bracelets">Браслеты</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="materials">
                <AccordionTrigger className="text-lg font-medium text-alteris-black">
                  Материалы
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 py-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="material-silver" />
                      <Label htmlFor="material-silver">Серебро</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="material-gold" />
                      <Label htmlFor="material-gold">Золото</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="material-ceramic" />
                      <Label htmlFor="material-ceramic">Керамика</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="style">
                <AccordionTrigger className="text-lg font-medium text-alteris-black">
                  Стиль
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 py-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="style-minimalism" />
                      <Label htmlFor="style-minimalism">Минимализм</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="style-classic" />
                      <Label htmlFor="style-classic">Классика</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="style-statement" />
                      <Label htmlFor="style-statement">Statement</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="price">
                <AccordionTrigger className="text-lg font-medium text-alteris-black">
                  Цена
                </AccordionTrigger>
                <AccordionContent>
                  <div className="py-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={1000}
                      max={50000}
                      step={1000}
                    />
                    <div className="flex justify-between mt-2 text-sm text-alteris-grey-dark">
                      <span>{priceRange[0].toLocaleString()} ₽</span>
                      <span>{priceRange[1].toLocaleString()} ₽</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-6">
              <Button className="w-full metallic-button">
                Применить
              </Button>
              <Button variant="outline" className="w-full mt-2">
                Сбросить
              </Button>
            </div>
          </div>
        </div>
        
        {/* Products */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-alteris-grey-dark">
              Найдено: {catalogProducts.length} товаров
            </p>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Сортировать по" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Сначала новинки</SelectItem>
                <SelectItem value="price-asc">По возрастанию цены</SelectItem>
                <SelectItem value="price-desc">По убыванию цены</SelectItem>
                <SelectItem value="popular">По популярности</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button variant="outline" className="metallic-button">
              Загрузить ещё
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;