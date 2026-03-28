import { useState } from 'react';
import { useScheduleContext } from '../../context/ScheduleContext';
import { formatDateShort } from '../../hooks/useSchedule';
import CalendarPicker from './CalendarPicker';

export default function ScheduleToggle() {
  const { config, setScheduleRange, clearSchedule } = useScheduleContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="schedule-toggle" onClick={() => setOpen(true)}>
        {config ? (
          <span>{formatDateShort(config.startDate)} – {formatDateShort(config.endDate)} ({config.totalDays}d)</span>
        ) : (
          <span>Set Schedule</span>
        )}
      </button>
      {open && (
        <CalendarPicker
          initialStart={config?.startDate}
          initialEnd={config?.endDate}
          onApply={(s, e) => { setScheduleRange(s, e); setOpen(false); }}
          onClear={() => { clearSchedule(); setOpen(false); }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
