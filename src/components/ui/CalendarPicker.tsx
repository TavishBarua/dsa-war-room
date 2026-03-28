import { useState, useMemo } from 'react';
import { toLocalISO } from '../../hooks/useSchedule';

interface Props {
  initialStart?: string;
  initialEnd?: string;
  onApply: (start: string, end: string) => void;
  onClear: () => void;
  onClose: () => void;
}

function toISO(y: number, m: number, d: number): string {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

function parseISO(s: string): { y: number; m: number; d: number } {
  const [y, m, d] = s.split('-').map(Number);
  return { y, m: m - 1, d };
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + 'T00:00:00');
  const db = new Date(b + 'T00:00:00');
  return Math.round((db.getTime() - da.getTime()) / (1000 * 60 * 60 * 24));
}

function addMonths(dateStr: string, months: number): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setMonth(d.getMonth() + months);
  return toLocalISO(d);
}

const DAYS = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

export default function CalendarPicker({ initialStart, initialEnd, onApply, onClear, onClose }: Props) {
  const today = new Date();
  const todayStr = toISO(today.getFullYear(), today.getMonth(), today.getDate());

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selStart, setSelStart] = useState<string | null>(initialStart || null);
  const [selEnd, setSelEnd] = useState<string | null>(initialEnd || null);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  const cells = useMemo(() => {
    const arr: (number | null)[] = [];
    for (let i = 0; i < firstDayOfWeek; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) arr.push(d);
    return arr;
  }, [firstDayOfWeek, daysInMonth]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const handleDayClick = (day: number) => {
    const iso = toISO(viewYear, viewMonth, day);
    if (!selStart || (selStart && selEnd)) {
      setSelStart(iso);
      setSelEnd(null);
    } else {
      if (iso < selStart) {
        setSelEnd(selStart);
        setSelStart(iso);
      } else {
        setSelEnd(iso);
      }
    }
  };

  const getDayClass = (day: number): string => {
    const iso = toISO(viewYear, viewMonth, day);
    const classes: string[] = ['calendar-day'];
    if (iso === todayStr) classes.push('today');
    if (iso === selStart) classes.push('range-start');
    if (iso === selEnd) classes.push('range-end');
    if (selStart && selEnd && iso > selStart && iso < selEnd) classes.push('in-range');
    return classes.join(' ');
  };

  const totalDays = selStart && selEnd ? daysBetween(selStart, selEnd) + 1 : 0;
  const isValid = totalDays >= 20;

  const handlePreset = (months: number) => {
    const start = todayStr;
    const end = addMonths(start, months);
    setSelStart(start);
    setSelEnd(end);
  };

  const handleApply = () => {
    if (selStart && selEnd && isValid) {
      onApply(selStart, selEnd);
    }
  };

  return (
    <div className="calendar-overlay" onClick={onClose}>
      <div className="calendar-picker" onClick={e => e.stopPropagation()}>
        <div className="calendar-title">SET YOUR SCHEDULE</div>

        <div className="calendar-presets">
          <button onClick={() => handlePreset(1)}>1 Month</button>
          <button onClick={() => handlePreset(3)}>3 Months</button>
          <button onClick={() => handlePreset(6)}>6 Months</button>
          <button onClick={() => handlePreset(12)}>1 Year</button>
        </div>

        <div className="calendar-nav">
          <button onClick={prevMonth}>&lt;</button>
          <span className="calendar-month-label">{MONTHS[viewMonth]} {viewYear}</span>
          <button onClick={nextMonth}>&gt;</button>
        </div>

        <div className="calendar-grid">
          {DAYS.map(d => (
            <div key={d} className="calendar-day-header">{d}</div>
          ))}
          {cells.map((day, i) =>
            day ? (
              <div key={i} className={getDayClass(day)} onClick={() => handleDayClick(day)}>
                {day}
              </div>
            ) : (
              <div key={i} className="calendar-day empty" />
            )
          )}
        </div>

        <div className="calendar-selection-info">
          {selStart && !selEnd && (
            <span>Start: {formatDisplay(selStart)} — select end date</span>
          )}
          {selStart && selEnd && (
            <span>
              {formatDisplay(selStart)} — {formatDisplay(selEnd)} ({totalDays} days)
              {!isValid && <span className="calendar-warn"> (min 20 days)</span>}
            </span>
          )}
          {!selStart && <span>Click a start date</span>}
        </div>

        <div className="calendar-footer">
          <button className="cal-btn cal-btn-clear" onClick={onClear}>Clear</button>
          <button className="cal-btn cal-btn-close" onClick={onClose}>Cancel</button>
          <button
            className="cal-btn cal-btn-apply"
            disabled={!isValid}
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

function formatDisplay(iso: string): string {
  const { y, m, d } = parseISO(iso);
  return `${MONTHS[m].slice(0, 3)} ${d}, ${y}`;
}
