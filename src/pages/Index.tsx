import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [donationAmount, setDonationAmount] = useState("");

  const stats = [
    { label: "Ветеранов получили помощь", value: "1,247", icon: "Users" },
    { label: "Миллионов рублей собрано", value: "48.6", icon: "TrendingUp" },
    { label: "Активных волонтёров", value: "329", icon: "Heart" },
    { label: "Программ реабилитации", value: "15", icon: "Target" },
  ];

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

  const news = [
    {
      date: "15 декабря 2024",
      title: "Открытие нового реабилитационного центра",
      description: "В Москве начал работу центр комплексной реабилитации для ветеранов СВО"
    },
    {
      date: "10 декабря 2024",
      title: "250 ветеранов получили профессиональное обучение",
      description: "Завершилась программа переквалификации в сфере IT и инженерии"
    },
    {
      date: "5 декабря 2024",
      title: "Запуск программы психологической поддержки семей",
      description: "Новая инициатива поможет близким ветеранов справиться с трудностями"
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Поддержим Вместе</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#mission" className="hover:text-primary transition-colors">О миссии</a>
              <a href="#stories" className="hover:text-primary transition-colors">Истории</a>
              <a href="#help" className="hover:text-primary transition-colors">Помочь</a>
              <a href="#volunteer" className="hover:text-primary transition-colors">Волонтёры</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Heart" size={18} className="mr-2" />
              Помочь сейчас
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Вместе возвращаем героям достойную жизнь
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Благотворительный фонд поддержки и реабилитации ветеранов СВО
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Heart" size={20} className="mr-2" />
                Сделать пожертвование
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Users" size={20} className="mr-2" />
                Стать волонтёром
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon name={stat.icon as any} className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Наша миссия</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Что мы делаем</h2>
            <p className="text-lg text-muted-foreground">
              Мы создаём комплексную систему поддержки для тех, кто защищал нашу страну. 
              От медицинской реабилитации до социальной адаптации и трудоустройства.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Activity" className="text-primary" size={24} />
                </div>
                <CardTitle>Медицинская помощь</CardTitle>
                <CardDescription>
                  Оплата лечения, протезирования и реабилитации. Работаем с лучшими клиниками России.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-secondary" size={24} />
                </div>
                <CardTitle>Психологическая поддержка</CardTitle>
                <CardDescription>
                  Индивидуальные и групповые сессии с профессиональными психологами для ветеранов и их семей.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-accent" size={24} />
                </div>
                <CardTitle>Трудоустройство</CardTitle>
                <CardDescription>
                  Программы переквалификации, помощь в поиске работы и открытии собственного дела.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

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

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Новости фонда</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши достижения</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon name="Newspaper" className="text-accent" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Контакты и реквизиты</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Свяжитесь с нами</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@supportheroes.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Реквизиты для пожертвований</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Название организации:</p>
                    <p className="text-muted-foreground">Благотворительный фонд "Поддержим Вместе"</p>
                  </div>
                  <div>
                    <p className="font-semibold">ИНН:</p>
                    <p className="text-muted-foreground">1234567890</p>
                  </div>
                  <div>
                    <p className="font-semibold">КПП:</p>
                    <p className="text-muted-foreground">123456789</p>
                  </div>
                  <div>
                    <p className="font-semibold">Расчётный счёт:</p>
                    <p className="text-muted-foreground">40703810100000000000</p>
                  </div>
                  <div>
                    <p className="font-semibold">Банк:</p>
                    <p className="text-muted-foreground">ПАО "Сбербанк"</p>
                  </div>
                  <div>
                    <p className="font-semibold">БИК:</p>
                    <p className="text-muted-foreground">044525225</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" className="text-primary" size={32} />
                <span className="text-xl font-bold">Поддержим Вместе</span>
              </div>
              <p className="text-sm text-background/70">
                Благотворительный фонд помощи ветеранам СВО
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#mission" className="hover:text-primary transition-colors">О миссии</a></li>
                <li><a href="#stories" className="hover:text-primary transition-colors">Истории</a></li>
                <li><a href="#help" className="hover:text-primary transition-colors">Помочь</a></li>
                <li><a href="#volunteer" className="hover:text-primary transition-colors">Волонтёры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#news" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отчёты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Share2" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2024 Благотворительный фонд "Поддержим Вместе". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;