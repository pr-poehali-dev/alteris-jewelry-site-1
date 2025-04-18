import { Sparkles, Award, Shield, Truck } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-alteris-grey-light rounded-sm transition-all duration-300 hover:shadow-md">
      <div className="text-alteris-black mb-4">{icon}</div>
      <h3 className="text-lg font-medium mb-2 text-alteris-black">{title}</h3>
      <p className="text-alteris-grey-dark">{description}</p>
    </div>
  );
};

const BrandFeatures = () => {
  return (
    <section className="py-16 bg-alteris-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12 text-alteris-black">
          Преимущества бренда Alteris
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            icon={<Sparkles className="h-10 w-10" />}
            title="Универсальность"
            description="Украшения, которые легко адаптируются к любому образу и ситуации"
          />
          <Feature
            icon={<Award className="h-10 w-10" />}
            title="Качество"
            description="Высокие стандарты производства и тщательный отбор материалов"
          />
          <Feature
            icon={<Shield className="h-10 w-10" />}
            title="Эксклюзивность"
            description="Уникальный дизайн и ограниченные серии для особенных людей"
          />
          <Feature
            icon={<Truck className="h-10 w-10" />}
            title="Быстрая доставка"
            description="Доставляем заказы в кратчайшие сроки в любую точку страны"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandFeatures;