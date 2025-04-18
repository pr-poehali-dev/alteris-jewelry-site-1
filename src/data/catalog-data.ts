import { Product, FilterOption } from '@/types/catalog';

export const catalogProducts: Product[] = [
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

export const categoryOptions: FilterOption[] = [
  { id: "category-rings", label: "Кольца" },
  { id: "category-earrings", label: "Серьги" },
  { id: "category-pendants", label: "Подвески" },
  { id: "category-bracelets", label: "Браслеты" },
];

export const materialOptions: FilterOption[] = [
  { id: "material-silver", label: "Серебро" },
  { id: "material-gold", label: "Золото" },
  { id: "material-ceramic", label: "Керамика" },
];

export const styleOptions: FilterOption[] = [
  { id: "style-minimalism", label: "Минимализм" },
  { id: "style-classic", label: "Классика" },
  { id: "style-statement", label: "Statement" },
];

export const sortOptions = [
  { value: "newest", label: "Сначала новинки" },
  { value: "price-asc", label: "По возрастанию цены" },
  { value: "price-desc", label: "По убыванию цены" },
  { value: "popular", label: "По популярности" },
];

export const priceRangeConfig = {
  min: 1000,
  max: 50000,
  step: 1000,
  default: [5000, 20000] as [number, number],
};
