import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const FooterSection = () => {
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
    <>
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
    </>
  );
};

export default FooterSection;
