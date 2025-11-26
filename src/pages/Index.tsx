import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Calculator from '@/components/Calculator';

const robots = [
  {
    id: 1,
    name: 'IClean Pro Mini',
    description: 'Компактная модель для небольших помещений до 500 м²',
    features: ['Автономная работа до 4 часов', 'Объем бака 15 л', 'Ширина очистки 45 см'],
    price: 'от 450 000 ₽',
    image: 'https://cdn.poehali.dev/projects/4c64d226-bbbb-4814-a7ba-68d72c0d1485/files/258d6fcb-b9a8-4c3e-8933-c7c3eb8f3dce.jpg'
  },
  {
    id: 2,
    name: 'IClean Pro Standard',
    description: 'Универсальное решение для помещений до 1500 м²',
    features: ['Автономная работа до 6 часов', 'Объем бака 30 л', 'Ширина очистки 60 см'],
    price: 'от 750 000 ₽',
    image: 'https://cdn.poehali.dev/projects/4c64d226-bbbb-4814-a7ba-68d72c0d1485/files/9e0b828d-23be-440d-b898-69104b768ffe.jpg'
  },
  {
    id: 3,
    name: 'IClean Pro Max',
    description: 'Мощная модель для больших площадей до 3000 м²',
    features: ['Автономная работа до 8 часов', 'Объем бака 50 л', 'Ширина очистки 75 см'],
    price: 'от 1 200 000 ₽',
    image: 'https://cdn.poehali.dev/projects/4c64d226-bbbb-4814-a7ba-68d72c0d1485/files/ca4858fe-494f-4927-a717-718da3380519.jpg'
  }
];

const advantages = [
  {
    icon: 'Bot',
    title: 'Полная автоматизация',
    description: 'Робот самостоятельно планирует маршрут и выполняет уборку без участия человека'
  },
  {
    icon: 'Clock',
    title: 'Экономия времени',
    description: 'Уборка происходит в нерабочее время, не мешая основной деятельности'
  },
  {
    icon: 'TrendingDown',
    title: 'Снижение затрат',
    description: 'Окупаемость за 12-18 месяцев благодаря сокращению расходов на персонал'
  },
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Система датчиков предотвращает столкновения и защищает окружающие объекты'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Bot" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">IClean Pro</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href="tel:+74994902814" className="flex items-center gap-2 text-primary font-semibold">
            <Icon name="Phone" size={20} />
            +7 (499) 490-28-14
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Роботизированная уборка
              <span className="block text-primary mt-2">нового поколения</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Полностью автоматическая уборка без участия человека. 
              Освободите персонал для более важных задач.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#catalog">Выбрать робота</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#contact">Получить консультацию</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества IClean Pro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог роботов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите модель, подходящую для ваших задач</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {robots.map((robot, index) => (
              <Card key={robot.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img src={robot.image} alt={robot.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{robot.name}</CardTitle>
                  <CardDescription className="text-base">{robot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {robot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{robot.price}</span>
                    <Button asChild>
                      <a href="#contact">Заказать</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Реальные кейсы внедрения</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Компании, которые уже доверились IClean Pro
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-primary" />
                </div>
                <CardTitle>ТЦ "Мега"</CardTitle>
                <CardDescription>Торговый центр, 15 000 м²</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Замена 6 уборщиков на 3 робота IClean Pro Max
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Экономия в месяц:</span>
                    <span className="font-semibold text-primary">380 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Окупаемость:</span>
                    <span className="font-semibold">14 месяцев</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Hotel" size={24} className="text-primary" />
                </div>
                <CardTitle>Отель "Азимут"</CardTitle>
                <CardDescription>Гостиница, 8 000 м²</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Уборка холлов и коридоров в ночное время
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Экономия в месяц:</span>
                    <span className="font-semibold text-primary">220 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Окупаемость:</span>
                    <span className="font-semibold">12 месяцев</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Factory" size={24} className="text-primary" />
                </div>
                <CardTitle>Завод "ТехПром"</CardTitle>
                <CardDescription>Производство, 25 000 м²</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Поддержание чистоты в производственных цехах
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Экономия в месяц:</span>
                    <span className="font-semibold text-primary">510 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Окупаемость:</span>
                    <span className="font-semibold">16 месяцев</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Калькулятор окупаемости</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Рассчитайте экономию для вашего бизнеса
            </p>
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <Calculator />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Связаться с нами</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Оставьте заявку, и наш специалист свяжется с вами для консультации
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+74994902814" className="text-primary hover:underline text-lg">
                        +7 (499) 490-28-14
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб-Вс: выходной</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Офис продаж</p>
                      <p className="text-muted-foreground">Москва, м. Деловой центр</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажите о ваших задачах..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Bot" size={28} />
            <span className="text-xl font-bold">IClean Pro</span>
          </div>
          <p className="text-primary-foreground/80">© 2024 IClean Pro. Роботизированные поломоечные машины.</p>
        </div>
      </footer>
    </div>
  );
}