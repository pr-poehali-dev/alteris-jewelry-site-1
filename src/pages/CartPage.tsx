import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Заглушка для данных корзины
const cartItems = [
  {
    id: "1",
    name: "Кольцо Минимал",
    price: 12500,
    image: "/placeholder.svg",
    quantity: 1,
  },
  {
    id: "3",
    name: "Подвеска Лунное сияние",
    price: 9900,
    image: "/placeholder.svg",
    quantity: 2,
  },
];

const CartPage: React.FC = () => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 20000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-light mb-10 mt-20 text-alteris-black">Корзина</h1>

      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Товар</TableHead>
                  <TableHead>Цена</TableHead>
                  <TableHead>Количество</TableHead>
                  <TableHead>Сумма</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                      </div>
                    </TableCell>
                    <TableCell>{item.price.toLocaleString()} ₽</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          +
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>{(item.price * item.quantity).toLocaleString()} ₽</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        ✕
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-alteris-white p-6 rounded-sm shadow-sm">
              <h2 className="text-xl font-medium mb-6 text-alteris-black">Ваш заказ</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Товары ({totalItems})</span>
                  <span>{subtotal.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>
                    {shipping === 0 ? "Бесплатно" : `${shipping.toLocaleString()} ₽`}
                  </span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-medium">Итого</span>
                  <span className="font-medium">{total.toLocaleString()} ₽</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-2">Промокод</p>
                <div className="flex space-x-2">
                  <Input placeholder="Введите промокод" />
                  <Button variant="outline">Применить</Button>
                </div>
              </div>

              <Button className="w-full metallic-button">Оформить заказ</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-alteris-grey-dark mb-4">
            Ваша корзина пуста
          </p>
          <Button asChild variant="outline">
            <a href="/catalog">Перейти в каталог</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
