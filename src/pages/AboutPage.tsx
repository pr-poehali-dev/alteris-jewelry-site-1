import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-light mb-10 mt-20 text-alteris-black text-center">
        О нас
      </h1>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-light mb-6 text-alteris-black">
            Наша философия
          </h2>
          <p className="text-alteris-grey-dark mb-6">
            Мы создаем украшения, которые становятся неотъемлемой частью вашей истории. 
            Каждое изделие – это сочетание современного дизайна, традиционного мастерства 
            и внимания к деталям.
          </p>
          <p className="text-alteris-grey-dark mb-6">
            Основанная в 2015 году, наша компания выросла из небольшой мастерской в 
            узнаваемый бренд, сохраняя при этом индивидуальный подход к каждому клиенту 
            и изделию.
          </p>
          <Button variant="outline">Узнать больше</Button>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="/placeholder.svg" 
            alt="О нашей компании" 
            className="w-full h-auto rounded-sm shadow-sm"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-24">
        <h2 className="text-2xl font-light mb-12 text-alteris-black text-center">
          Наши ценности
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <span className="text-4xl">✨</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Качество</h3>
            <p className="text-alteris-grey-dark">
              Мы используем только высококачественные материалы и следим за каждым 
              этапом производства.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <span className="text-4xl">🌿</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Устойчивость</h3>
            <p className="text-alteris-grey-dark">
              Наше производство экологично, а материалы закупаются у ответственных 
              поставщиков.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <span className="text-4xl">💎</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Инновации</h3>
            <p className="text-alteris-grey-dark">
              Мы постоянно исследуем новые техники и дизайнерские решения для 
              создания уникальных украшений.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Our Team */}
      <div className="mb-24">
        <h2 className="text-2xl font-light mb-12 text-alteris-black text-center">
          Наша команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <p className="text-alteris-grey-dark mb-3">{member.position}</p>
              <p className="text-alteris-grey-dark">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Workshop */}
      <div className="mb-24">
        <h2 className="text-2xl font-light mb-12 text-alteris-black text-center">
          Наша мастерская
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img 
            src="/placeholder.svg" 
            alt="Наша мастерская" 
            className="w-full h-auto rounded-sm shadow-sm"
          />
          <div>
            <p className="text-alteris-grey-dark mb-6">
              В нашей мастерской сочетаются традиционные ювелирные техники и современное 
              оборудование. Здесь каждое украшение проходит путь от эскиза до готового изделия.
            </p>
            <p className="text-alteris-grey-dark mb-6">
              Мы проводим экскурсии по мастерской и мастер-классы для тех, кто хочет 
              узнать больше о процессе создания украшений.
            </p>
            <Button variant="outline">Записаться на экскурсию</Button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-alteris-white p-12 rounded-sm shadow-sm text-center">
        <h2 className="text-2xl font-light mb-6 text-alteris-black">
          Станьте частью нашей истории
        </h2>
        <p className="text-alteris-grey-dark mb-8 max-w-2xl mx-auto">
          Мы верим, что украшения – это не просто аксессуары, а способ самовыражения. 
          Исследуйте нашу коллекцию или свяжитесь с нами для создания индивидуального дизайна.
        </p>
        <div className="flex justify-center space-x-4">
          <Button>Наш каталог</Button>
          <Button variant="outline">Связаться с нами</Button>
        </div>
      </div>
    </div>
  );
};

// Заглушка для данных о команде
const teamMembers = [
  {
    id: "1",
    name: "Анна Соколова",
    position: "Основатель и главный дизайнер",
    photo: "/placeholder.svg",
    bio: "Более 10 лет опыта в ювелирном дизайне. Выпускница Академии Художеств.",
  },
  {
    id: "2",
    name: "Михаил Карпов",
    position: "Мастер-ювелир",
    photo: "/placeholder.svg",
    bio: "Специалист по работе с драгоценными металлами с уникальным подходом к созданию форм.",
  },
  {
    id: "3",
    name: "Елена Ветрова",
    position: "Геммолог",
    photo: "/placeholder.svg",
    bio: "Эксперт по драгоценным камням. Помогает подобрать идеальные камни для каждого изделия.",
  },
];

export default AboutPage;
