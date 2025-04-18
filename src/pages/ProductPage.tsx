import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { catalogProducts } from "@/data/catalog-data";
import { Product } from "@/types/catalog";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных с сервера
    setIsLoading(true);
    setTimeout(() => {
      const foundProduct = catalogProducts.find((p) => p.id === id) || null;
      setProduct(foundProduct);
      setIsLoading(false);
    }, 300);
  }, [id]);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    // Здесь будет логика добавления в корзину
    console.log(`Добавлено в корзину: ${product?.name}, количество: ${quantity}`);
    // Можно добавить тост-уведомление
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 bg-gray-200 rounded aspect-square"></div>
            <div className="w-full md:w-1/2">
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-24 bg-gray-200 rounded w-full mb-6"></div>
              <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-light mb-6 text-alteris-black">Товар не найден</h1>
        <p className="text-alteris-grey-dark mb-6">
          К сожалению, запрашиваемый товар не существует или был удален.
        </p>
        <Button asChild variant="outline">
          <a href="/catalog">Вернуться в каталог</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalog">Каталог</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/catalog?category=${product.category}`}>
              {product.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/product/${product.id}`} isCurrentPage>
              {product.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Изображение товара */}
        <div className="w-full md:w-1/2">
          <div className="bg-alteris-white rounded-sm overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto aspect-square object-cover"
            />
          </div>
        </div>

        {/* Информация о товаре */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-light mb-2 text-alteris-black">{product.name}</h1>
          <p className="text-2xl font-medium mb-6 text-alteris-black">
            {product.price.toLocaleString()} ₽
          </p>

          <div className="mb-6">
            <p className="text-alteris-grey-dark mb-4">
              Элегантное украшение, созданное с вниманием к деталям. Идеально подходит
              для повседневного образа и особых случаев.
            </p>
          </div>

          <div className="flex items-center mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <span className="mx-4 text-lg font-medium">{quantity}</span>
            <Button variant="outline" size="icon" onClick={handleIncreaseQuantity}>
              +
            </Button>
          </div>

          <Button className="w-full metallic-button" onClick={handleAddToCart}>
            Добавить в корзину
          </Button>

          <div className="mt-10">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-4">
                <p className="text-alteris-grey-dark">
                  Это изделие изготовлено вручную из высококачественных материалов.
                  Каждая деталь тщательно проработана, чтобы подчеркнуть вашу
                  индивидуальность.
                </p>
              </TabsContent>

              <TabsContent value="characteristics" className="mt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-alteris-grey-dark">Материал</span>
                    <span className="font-medium">Серебро 925 пробы</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-alteris-grey-dark">Вес</span>
                    <span className="font-medium">3.5 г</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-alteris-grey-dark">Размер</span>
                    <span className="font-medium">Регулируемый</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="delivery" className="mt-4">
                <p className="text-alteris-grey-dark">
                  Доставка осуществляется по всей России. Сроки доставки: 1-3 рабочих дня
                  в Москве, 3-7 рабочих дней по России. Стоимость доставки рассчитывается
                  при оформлении заказа.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
