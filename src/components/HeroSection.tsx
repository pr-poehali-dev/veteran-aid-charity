import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const stats = [
    { label: "Ветеранов получили помощь", value: "1,247", icon: "Users" },
    { label: "Миллионов рублей собрано", value: "48.6", icon: "TrendingUp" },
    { label: "Активных волонтёров", value: "329", icon: "Heart" },
    { label: "Программ реабилитации", value: "15", icon: "Target" },
  ];

  return (
    <>
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
    </>
  );
};

export default HeroSection;
