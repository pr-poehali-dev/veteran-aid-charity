import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const StoriesSection = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const stories = [
    {
      name: "Сергей М.",
      age: 32,
      image: "https://cdn.poehali.dev/projects/74bc4833-5f9f-45da-a998-6340aba1410b/files/1337ad17-a096-4b3c-bcd0-5e7245fd2274.jpg",
      story: "После ранения вернулся к профессии инженера. Открыл собственное дело и помогает другим ветеранам с трудоустройством.",
      achievement: "Открыл бизнес",
      color: "primary"
    },
    {
      name: "Алексей Т.",
      age: 28,
      image: "https://cdn.poehali.dev/projects/74bc4833-5f9f-45da-a998-6340aba1410b/files/4ce6b85d-6f06-491d-a1ec-dcd1356ef03c.jpg",
      story: "Прошёл программу психологической реабилитации. Сейчас занимается спортом и участвует в марафонах.",
      achievement: "5 марафонов",
      color: "secondary"
    },
    {
      name: "Дмитрий К.",
      age: 35,
      image: "https://cdn.poehali.dev/projects/74bc4833-5f9f-45da-a998-6340aba1410b/files/8a1cc9c7-26b3-44e6-999b-c6f90f584a7f.jpg",
      story: "Получил профессиональное переобучение в IT. Работает разработчиком в крупной компании и наставником для новичков.",
      achievement: "IT-карьера",
      color: "accent"
    },
  ];

  const helpWays = [
    {
      title: "Разовое пожертвование",
      description: "Сделайте вклад в восстановление жизни ветеранов",
      icon: "Wallet",
      action: "Помочь сейчас"
    },
    {
      title: "Ежемесячная поддержка",
      description: "Регулярная помощь обеспечивает стабильность программ",
      icon: "Calendar",
      action: "Подключить"
    },
    {
      title: "Стать волонтёром",
      description: "Присоединяйтесь к команде и помогайте напрямую",
      icon: "HandHeart",
      action: "Присоединиться"
    },
  ];

  return (
    <>
      <section id="stories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Истории успеха</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Они вернулись к жизни</h2>
            <p className="text-lg text-muted-foreground">
              Реальные истории восстановления и новых достижений наших подопечных
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop';
                    }}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{story.name}, {story.age} лет</CardTitle>
                    <Badge className={`bg-${story.color}/10 text-${story.color}`}>{story.achievement}</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {story.story}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Как помочь</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Способы поддержки</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {helpWays.map((way, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                    <Icon name={way.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="mb-3">{way.title}</CardTitle>
                  <CardDescription className="mb-6 text-base">{way.description}</CardDescription>
                  <Button className="w-full bg-primary hover:bg-primary/90">{way.action}</Button>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Сделать пожертвование</CardTitle>
              <CardDescription className="text-center">Выберите сумму или введите свою</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {["1000", "3000", "5000"].map((amount) => (
                  <Button
                    key={amount}
                    variant={donationAmount === amount ? "default" : "outline"}
                    className="h-16 text-lg"
                    onClick={() => setDonationAmount(amount)}
                  >
                    {amount} ₽
                  </Button>
                ))}
              </div>
              <Input
                type="number"
                placeholder="Или введите свою сумму"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="text-lg h-12"
              />
              <div className="space-y-3">
                <Input placeholder="Ваше имя" className="h-12" />
                <Input placeholder="Email" type="email" className="h-12" />
              </div>
              <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Перейти к оплате
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Пожертвования защищены SSL-шифрованием. Мы не храним данные банковских карт.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="volunteer" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Волонтёрство</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Станьте частью команды</h2>
              <p className="text-lg text-muted-foreground">
                Ваше время и навыки могут изменить чью-то жизнь к лучшему
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="CheckCircle" className="text-success mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Сопровождение ветеранов</h4>
                        <p className="text-sm text-muted-foreground">Помощь в поездках к врачам и на реабилитацию</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="CheckCircle" className="text-success mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Организация мероприятий</h4>
                        <p className="text-sm text-muted-foreground">Спортивные и культурные события для ветеранов</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="CheckCircle" className="text-success mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Психологическая помощь</h4>
                        <p className="text-sm text-muted-foreground">Для специалистов в области психологии</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="CheckCircle" className="text-success mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Профессиональное обучение</h4>
                        <p className="text-sm text-muted-foreground">Помощь в переквалификации и наставничество</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="CheckCircle" className="text-success mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Административная поддержка</h4>
                        <p className="text-sm text-muted-foreground">Работа с документами и организация процессов</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="CheckCircle" className="text-success mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Информационная поддержка</h4>
                        <p className="text-sm text-muted-foreground">SMM, фото/видео, создание контента</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" className="h-12" />
                    <Input placeholder="Телефон" className="h-12" />
                  </div>
                  <Input placeholder="Email" type="email" className="h-12" />
                  <Textarea placeholder="Расскажите о себе и своих навыках" className="min-h-24" />
                  <Button className="w-full h-14 text-lg bg-secondary hover:bg-secondary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoriesSection;
