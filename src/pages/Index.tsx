import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [query, setQuery] = useState('');

  const features = [
    {
      icon: 'Brain',
      title: 'Умный таргетинг',
      description: 'AI анализирует миллионы данных и находит вашу идеальную аудиторию'
    },
    {
      icon: 'Zap',
      title: 'Авто-оптимизация',
      description: 'Система сама подстраивает ставки и креативы для максимального ROI'
    },
    {
      icon: 'LineChart',
      title: 'Прогнозы результатов',
      description: 'Предсказываем эффективность кампании до запуска с точностью 95%'
    },
    {
      icon: 'Sparkles',
      title: 'Генерация креативов',
      description: 'AI создает десятки вариантов объявлений за секунды'
    }
  ];

  const cases = [
    {
      company: 'E-commerce магазин',
      metric: '+340%',
      label: 'ROI',
      description: 'Снизили CPA на 65% и увеличили продажи в 3.4 раза'
    },
    {
      company: 'SaaS стартап',
      metric: '-72%',
      label: 'CPA',
      description: 'Привлекли 10,000 пользователей за первый месяц'
    },
    {
      company: 'Мобильное приложение',
      metric: '+890%',
      label: 'Установок',
      description: 'Рост органических установок благодаря точному таргетингу'
    }
  ];

  const integrations = [
    { name: 'Google Ads', icon: 'Chrome' },
    { name: 'Facebook Ads', icon: 'Facebook' },
    { name: 'Instagram', icon: 'Instagram' },
    { name: 'TikTok', icon: 'Music' },
    { name: 'LinkedIn', icon: 'Linkedin' },
    { name: 'Яндекс.Директ', icon: 'Search' }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 opacity-50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl w-full text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 glass-morphism rounded-full text-sm text-muted-foreground mb-6">
                  <Icon name="Sparkles" size={16} className="text-primary" />
                  <span>Powered by Advanced AI</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                <span className="gradient-text text-glow">AI Менеджер</span>
                <br />
                <span className="text-foreground">Рекламы</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Автоматизируйте рекламные кампании с помощью искусственного интеллекта. 
                Увеличьте ROI на 300% и снизьте затраты на 70%.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300 glow-effect"></div>
                <div className="relative flex gap-2 p-2 glass-morphism rounded-2xl border-2 border-primary/50">
                  <Input
                    type="text"
                    placeholder="Опишите вашу рекламную задачу..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-background/50 border-0 text-lg h-14 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold h-14">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Запустить AI
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {['Увеличить продажи', 'Снизить CPA', 'Найти аудиторию', 'Создать креативы'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 glass-morphism rounded-full hover:bg-primary/20 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground mt-2">Аптайм системы</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text">2.5M+</div>
                <div className="text-sm text-muted-foreground mt-2">Кампаний запущено</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text">340%</div>
                <div className="text-sm text-muted-foreground mt-2">Средний рост ROI</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                Возможности <span className="gradient-text">AI</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Технологии будущего для вашего бизнеса сегодня
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 glass-morphism border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect group-hover:animate-pulse-glow">
                      <Icon name={feature.icon} size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                Кейсы и <span className="gradient-text">Результаты</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Реальные истории успеха наших клиентов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((item, index) => (
                <Card
                  key={index}
                  className="p-8 glass-morphism border-secondary/30 hover:border-secondary/60 transition-all duration-300 group hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="space-y-4">
                    <div className="text-sm font-semibold text-secondary uppercase tracking-wide">
                      {item.company}
                    </div>
                    <div className="space-y-2">
                      <div className="text-5xl font-black gradient-text text-glow">
                        {item.metric}
                      </div>
                      <div className="text-lg font-semibold text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                <span className="gradient-text">Интеграции</span> с платформами
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Работаем со всеми популярными рекламными платформами
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((platform, index) => (
                <Card
                  key={index}
                  className="p-6 glass-morphism border-accent/30 hover:border-accent/60 transition-all duration-300 group hover:scale-110 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center glow-effect group-hover:animate-pulse-glow">
                      <Icon name={platform.icon} size={32} className="text-white" />
                    </div>
                    <div className="text-sm font-semibold text-center">
                      {platform.name}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="px-12 py-6 text-lg bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold glow-effect">
                <Icon name="Rocket" size={24} className="mr-2" />
                Начать бесплатно
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-border/50">
          <div className="max-w-7xl mx-auto text-center text-muted-foreground">
            <p className="text-sm">© 2024 AI Менеджер Рекламы. Будущее рекламы уже здесь.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
