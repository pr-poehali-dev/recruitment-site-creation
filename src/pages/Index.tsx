import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={32} className="text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ТАКТ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Связаться с нами
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Стремимся к лидерству в сфере подбора персонала</div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Найдем идеального 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> сотрудника</span> для вашей команды
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Профессиональный подбор персонала для различных компаний и позиций. 
                  Качественно, быстро, с гарантией результата.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти кандидатов
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-gray-50">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть презентацию
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Успешных размещений</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">150+</div>
                  <div className="text-sm text-gray-600">Компаний-партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-600">Удовлетворенность</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="/img/d85aca8a-5fb8-498a-96fd-3c82c594a800.jpg" 
                alt="Профессиональная команда" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по подбору персонала для бизнеса любого масштаба
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="UserSearch" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Подбор специалистов</CardTitle>
                <CardDescription className="text-gray-600">
                  Поиск и отбор квалифицированных кандидатов для различных позиций
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Executive Search</CardTitle>
                <CardDescription className="text-gray-600">
                  Поиск топ-менеджеров и руководителей высшего звена
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Массовый подбор</CardTitle>
                <CardDescription className="text-gray-600">
                  Быстрый подбор большого количества сотрудников для стартапов и проектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="ClipboardCheck" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">HR-консалтинг</CardTitle>
                <CardDescription className="text-gray-600">
                  Консультации по оптимизации HR-процессов и управлению персоналом
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-pink-50 to-pink-100">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Аутстаффинг</CardTitle>
                <CardDescription className="text-gray-600">
                  Предоставление персонала в аренду для временных и постоянных проектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="GraduationCap" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Обучение и развитие</CardTitle>
                <CardDescription className="text-gray-600">
                  Программы адаптации и профессионального развития сотрудников
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">О компании ТАКТ</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Мы — ведущее кадровое агентство с более чем 10-летним опытом работы на рынке. 
                  Наша миссия — создавать идеальные соответствия между талантливыми людьми и инновационными компаниями.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Экспертиза</h3>
                    <p className="text-gray-600 text-sm">10+ лет на рынке HR-услуг</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Качество</h3>
                    <p className="text-gray-600 text-sm">95% успешных размещений</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Скорость</h3>
                    <p className="text-gray-600 text-sm">Средний срок закрытия вакансии 14 дней</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Гарантия</h3>
                    <p className="text-gray-600 text-sm">6 месяцев гарантии на подбор</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <Icon name="Award" size={32} className="text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Награды и сертификаты</h3>
                    <p className="text-gray-600">Признание профессионального сообщества</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-yellow-500" />
                    <span className="text-gray-700">Лучшее кадровое агентство 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-yellow-500" />
                    <span className="text-gray-700">Сертификат качества ISO 9001</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-yellow-500" />
                    <span className="text-gray-700">Член Ассоциации консультантов</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Наша команда</h3>
                <p className="mb-4 opacity-90">
                  Более 25 опытных HR-консультантов и рекрутеров работают над вашими задачами
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Познакомиться с командой
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы начать поиск идеального кандидата? Оставьте заявку и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Card className="p-8 border-0 bg-gradient-to-br from-blue-50 to-emerald-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input id="company" placeholder="Название компании" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 999-99-99" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Описание задачи</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вакансии или задаче подбора персонала"
                      className="h-32"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес офиса</h3>
                    <p className="text-gray-600">г. Москва, ул. Тверская, 15<br />БЦ "Центральный", 10 этаж</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67<br />+7 (800) 555-66-77</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@talentpro.ru<br />jobs@talentpro.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: выходные</p>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">
                <h3 className="text-xl font-semibold mb-4">Следите за нами</h3>
                <div className="flex space-x-4">
                  <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                    <Icon name="MessageCircle" size={16} />
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                    <Icon name="Users" size={16} />
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                    <Icon name="Linkedin" size={16} />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">TalentPro</span>
              </div>
              <p className="text-gray-400">
                Ведущее кадровое агентство России. Создаем идеальные матчи между талантами и компаниями.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Подбор персонала</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Executive Search</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HR-консалтинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аутстаффинг</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>г. Москва, ул. Тверская, 15</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@talentpro.ru</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TalentPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}