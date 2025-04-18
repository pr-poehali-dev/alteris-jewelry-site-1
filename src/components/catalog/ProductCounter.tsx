import React from "react";

interface ProductCounterProps {
  count: number;
}

const ProductCounter: React.FC<ProductCounterProps> = ({ count }) => {
  return (
    <p className="text-alteris-grey-dark">
      Найдено: {count} {getPluralForm(count)}
    </p>
  );
};

function getPluralForm(count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "товаров";
  }

  if (lastDigit === 1) {
    return "товар";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "товара";
  }

  return "товаров";
}

export default ProductCounter;
