import { 
  Shield, 
  Zap, 
  Eye, 
  Smartphone, 
  BarChart3, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Play,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  Monitor,
  Brain,
  Clock
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 blur-bg border-b border-white/20 bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">AMS</span>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-medium hover:shadow-strong transition-all duration-300">
              Запросить демо
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span>Новое поколение систем безопасности</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8 animate-fade-in-up animate-delay-100">
              AMS — автоматизированный{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                контроль здоровья
              </span>{' '}
              и безопасности персонала
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up animate-delay-200">
              Комплекс «умный терминал + аналитика + ПО», который заменяет бумажные предсменные осмотры 
              на полной автоматизации и премиальной надежности
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animate-delay-300">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-strong hover:shadow-xl transition-all duration-300 group">
                Запросить демо
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-medium group">
                <Play className="mr-2 w-5 h-5" />
                Смотреть видео
              </Button>
            </div>
          </div>
          
          {/* Floating Product Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass rounded-2xl border-0 shadow-medium hover:shadow-strong transition-all duration-500 animate-float animate-fade-in-up animate-delay-400">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AMS Tablet v2</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Биометрические датчики + компьютерное зрение + Face ID
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass rounded-2xl border-0 shadow-medium hover:shadow-strong transition-all duration-500 animate-float animate-fade-in-up animate-delay-500" style={{animationDelay: '1s'}}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AMS Камера</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Автоматический мониторинг рабочих мест и контроль СИЗ
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass rounded-2xl border-0 shadow-medium hover:shadow-strong transition-all duration-500 animate-float animate-fade-in-up animate-delay-600" style={{animationDelay: '2s'}}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Аналитика</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cloud/On-premise решения с полной аналитикой
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Проблемы ручных осмотров
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современные предприятия теряют эффективность из-за устаревших методов контроля
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ошибки и фальсификации</h3>
                <p className="text-gray-600 leading-relaxed">
                  Нетрезвые сотрудники проходят незамеченными, подделка документов, человеческий фактор
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Отсутствие контроля СИЗ</h3>
                <p className="text-gray-600 leading-relaxed">
                  Невозможно проверить наличие касок, масок и другого защитного оборудования
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Неэффективность</h3>
                <p className="text-gray-600 leading-relaxed">
                  Трудоемкие процессы, неэффективность при масштабировании, потеря времени
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Идеальное решение
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AMS предлагает быстрое и бесконтактное решение для полной автоматизации
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">AMS Tablet v2</h3>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                        <li>• Датчики: пульс, температура, сатурация, давление, алкотестер</li>
                        <li>• Компьютерное зрение + Face ID + СИЗ-детекция</li>
                        <li>• Быстрое, гигиеничное, без технической поддержки — plug-and-play</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">AMS Камера</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Автоматический мониторинг рабочих мест и контроля СИЗ
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Мобильное приложение</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Учет посещаемости и отчётность HR
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Админ-панель + Cloud/On-premise</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Удобный интерфейс, аналитика, GDPR-соответствие
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-strong animate-float">
                  <Monitor className="w-32 h-32 text-white/90" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-medium animate-float" style={{animationDelay: '1s'}}>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-medium animate-float" style={{animationDelay: '2s'}}>
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Преимущества AMS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Почему тысячи компаний выбирают наше решение
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Скорость',
                description: 'Полная автоматизация за 30–60 сек до смены',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: CheckCircle,
                title: 'Точность',
                description: 'Исключается человеческий фактор, фальсификации',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: Shield,
                title: 'Безопасность',
                description: 'Проверка состояния и экипировки до допуска на объект',
                gradient: 'from-blue-400 to-indigo-500'
              },
              {
                icon: TrendingUp,
                title: 'Экономия',
                description: 'Меньше бумажной работы, отчетность сразу готова',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: BarChart3,
                title: 'Масштабируемость',
                description: 'Подходит для стройки, нефтегаза, полиции, школ',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                icon: Brain,
                title: 'Интеллект',
                description: 'ИИ-анализ и машинное обучение для предотвращения инцидентов',
                gradient: 'from-pink-400 to-red-500'
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white/80 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-medium`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              История успеха
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От школьного проекта до международной компании
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Начало</h3>
                <p className="text-gray-600 leading-relaxed">
                  Разработан школьниками в Актау, вдохновлен опытом Samsung Solve for Tomorrow
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Рост</h3>
                <p className="text-gray-600 leading-relaxed">
                  5+ установок на промтерриториях Казахстана, повторные продажи
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Экспансия</h3>
                <p className="text-gray-600 leading-relaxed">
                  Патенты, официальные ИС, старт международного экспорта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Команда
            </h2>
            <p className="text-xl text-gray-600">
              Опытные профессионалы за инновациями AMS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Камила Куатова',
                role: 'CEO, CEO Automated Monitoring Solutions',
                education: 'Образование: Purdue University',
                gradient: 'from-blue-500 to-indigo-600'
              },
              {
                name: 'Улан Айтбай',
                role: 'CTO, сооснователь',
                education: 'Развивает системы Computer Vision & Infra',
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                name: 'Данил Мухалёв',
                role: 'Технический директор',
                education: 'Вдохновитель проекта с этапа MVP',
                gradient: 'from-green-500 to-emerald-600'
              }
            ].map((member, index) => (
              <Card key={index} className="bg-white/80 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.education}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Цифры
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Установок в Казахстане' },
              { number: '6-10', label: 'Человек в команде' },
              { number: '2022', label: 'Год основания' },
              { number: '$1000+', label: 'Первые инвестиции' }
            ].map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Основано в 2022-м, HQ — в Дубае, филиалы — Актау и Прованс, Франция
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Roadmap 📈
            </h2>
            <p className="text-xl text-gray-600">
              Планы развития на ближайшее будущее
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Q3-Q4 2025',
                description: 'Выход на рынки Европы и США',
                icon: MapPin,
                gradient: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Аналитика',
                description: 'Расширение отчетов: KPI, табели, предупреждения',
                icon: BarChart3,
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                title: 'Интеграция',
                description: 'Интеграция с ERP и сторонними системами по API',
                icon: Brain,
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Производство',
                description: 'Серийное производство и масштабный роут-аут',
                icon: TrendingUp,
                gradient: 'from-orange-500 to-red-600'
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/80 border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы повысить безопасность и эффективность своих процессов?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Запросите демо прямо сейчас — и получите первые результаты уже после установки AMS Tablet v2!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold shadow-strong hover:shadow-xl transition-all duration-300 group">
              Запросить демо
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium">
              <Calendar className="mr-2 w-5 h-5" />
              Записаться на звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-semibold">AMS</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                HQ — Дубай | Филиалы — Актау, Прованс (Франция)
              </p>
              <p className="text-gray-400">
                © 2024 Automated Monitoring Solutions. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App