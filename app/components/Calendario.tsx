import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

interface Contribution {
  date: string;
  count: number;
}

interface ContributionsCalendarProps {
  contributions: Contribution[];
}

const ContributionsCalendar = ({ contributions }: ContributionsCalendarProps) => {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), 0, 1);
  const endDate = new Date(today.getFullYear(), 11, 31);
  const monthLabels: [string, string, string, string, string, string, string, string, string, string, string, string] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const weekdayLabels: [string, string, string, string, string, string, string] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (<>
    <h2 className='text-xl text-left'>Frequência de treino</h2>
    <div className='w-5/6 overflow-auto'>
      <div style={{ width: '640px' }}>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={contributions}
          monthLabels={monthLabels}
          weekdayLabels={weekdayLabels}
          classForValue={(value) => {
            if (!value) {
              return 'calendario calendario-vazio';
            }
            return `calendario calendario-preenchido`;
          }}
          showWeekdayLabels
        />
      </div>
    </div>
  </>
  );
};

const Calendario = () => {
  const contributions: Contribution[] = [
    { date: '2025-01-01', count: 1 },
    { date: '2025-01-22', count: 2 },
    { date: '2025-01-30', count: 3 },
    { date: '2025-02-01', count: 4 },
    { date: '2025-02-07', count: 4 },
  ];
  return (
    <ContributionsCalendar contributions={contributions} />
  )
}

export default Calendario;