import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Calculator() {
  const [area, setArea] = useState<number>(5000);
  const [cleanersCount, setCleanersCount] = useState<number>(3);
  const [salaryPerCleaner, setSalaryPerCleaner] = useState<number>(60000);
  
  const [results, setResults] = useState({
    robotsNeeded: 0,
    robotCost: 0,
    monthlySavings: 0,
    paybackMonths: 0,
    yearSavings: 0
  });

  useEffect(() => {
    const calculateROI = () => {
      const robotsNeeded = Math.ceil(area / 1500);
      const avgRobotPrice = 750000;
      const totalRobotCost = robotsNeeded * avgRobotPrice;
      
      const monthlyCleanersCost = cleanersCount * salaryPerCleaner;
      const monthlyRobotCost = (totalRobotCost / 60) + (robotsNeeded * 5000);
      
      const monthlySavings = monthlyCleanersCost - monthlyRobotCost;
      const paybackMonths = monthlySavings > 0 ? Math.ceil(totalRobotCost / monthlySavings) : 0;
      const yearSavings = monthlySavings * 12;

      setResults({
        robotsNeeded,
        robotCost: totalRobotCost,
        monthlySavings: Math.max(0, monthlySavings),
        paybackMonths,
        yearSavings: Math.max(0, yearSavings)
      });
    };

    calculateROI();
  }, [area, cleanersCount, salaryPerCleaner]);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="area">Площадь помещения (м²)</Label>
          <Input
            id="area"
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            min="100"
            max="50000"
            step="100"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cleaners">Количество уборщиков</Label>
          <Input
            id="cleaners"
            type="number"
            value={cleanersCount}
            onChange={(e) => setCleanersCount(Number(e.target.value))}
            min="1"
            max="20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="salary">Зарплата уборщика (₽/мес)</Label>
          <Input
            id="salary"
            type="number"
            value={salaryPerCleaner}
            onChange={(e) => setSalaryPerCleaner(Number(e.target.value))}
            min="30000"
            max="150000"
            step="5000"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-primary" />
              </div>
              <CardTitle className="text-lg">Потребуется роботов</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">{results.robotsNeeded}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Стоимость: {results.robotCost.toLocaleString('ru-RU')} ₽
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
                <Icon name="TrendingDown" size={20} className="text-green-700" />
              </div>
              <CardTitle className="text-lg">Экономия в месяц</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-700">
              {results.monthlySavings.toLocaleString('ru-RU')} ₽
            </p>
            <p className="text-sm text-green-600 mt-2">
              В год: {results.yearSavings.toLocaleString('ru-RU')} ₽
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-200 flex items-center justify-center">
                <Icon name="Calendar" size={28} className="text-blue-700" />
              </div>
              <div>
                <CardTitle className="text-2xl text-blue-900">
                  Окупаемость: {results.paybackMonths} месяцев
                </CardTitle>
                <CardDescription className="text-blue-700 mt-1">
                  После окупаемости — чистая экономия {results.monthlySavings.toLocaleString('ru-RU')} ₽ каждый месяц
                </CardDescription>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted/30 rounded-lg p-6 space-y-3">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5" />
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Расчет учитывает:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Полную замену уборщиков на роботов</li>
              <li>Средняю стоимость робота 750 000 ₽</li>
              <li>Ежемесячное обслуживание ~5 000 ₽ на робота</li>
              <li>Срок службы роботов 5 лет</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
