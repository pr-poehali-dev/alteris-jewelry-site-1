import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <div
        className="relative group bg-alteris-white rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${product.id}`}>
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className={cn(
                "w-full h-full object-cover transition-transform duration-500",
                isHovered ? "scale-105" : "scale-100"
              )}
            />
            <div
              className={cn(
                "absolute inset-0 bg-alteris-black/5 transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </Link>

        <div className="p-4">
          <div className="text-xs text-alteris-grey-dark mb-1">
            {product.category}
          </div>
          <h3 className="text-lg font-medium text-alteris-black mb-2">
            <Link
              to={`/product/${product.id}`}
              className="hover:text-alteris-grey-dark transition-colors"
            >
              {product.name}
            </Link>
          </h3>
          <div className="flex justify-between items-center">
            <div className="text-alteris-black font-medium">
              {formatPrice(product.price)}
            </div>

            <div
              className={cn(
                "flex space-x-2 transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            >
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full hover:bg-alteris-grey-light"
                onClick={(e) => {
                  e.preventDefault();
                  setShowQuickView(true);
                }}
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full hover:bg-alteris-grey-light"
              >
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Shine Effect on Hover */}
        <div
          className={cn(
            "absolute inset-0 pointer-events-none transition-opacity duration-500 shine-effect after:opacity-0",
            isHovered ? "after:opacity-30" : ""
          )}
        />
      </div>

      {/* Quick View Dialog */}
      <Dialog open={showQuickView} onOpenChange={setShowQuickView}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium">
              {product.name}
            </DialogTitle>
            <DialogDescription className="text-alteris-grey-dark">
              {product.category}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg font-medium text-alteris-black mb-4">
                  {formatPrice(product.price)}
                </p>
                <p className="text-alteris-grey-dark mb-6">
                  Стильное украшение из коллекции Alteris. Минималистичный дизайн 
                  и элегантность для любого образа.
                </p>
              </div>
              <div className="space-y-2">
                <Button className="w-full metallic-button">
                  В корзину
                </Button>
                <Link to={`/product/${product.id}`}>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;