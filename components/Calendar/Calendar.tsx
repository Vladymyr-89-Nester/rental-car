'use client';

import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/style.css';
import { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';

import css from './Calendar.module.css';

interface CalendarProps {
  onDateSelect?: (date: DateRange | undefined) => void;
}

const Calendar = ({ onDateSelect }: CalendarProps) => {
  const [date, setDate] = useState<DateRange | undefined>();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hoveredDay, setHoveredDay] = useState<Date | undefined>();

  const handleClick = () => {
    setOpen(true);
  };

  const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range);

    if (!range?.from) {
      setInputValue('');
      return;
    }

    if (!range.to || range.from.getTime() === range.to.getTime()) {
      setInputValue(format(range.from, 'dd/MM/yyyy'));
      return;
    }

    setInputValue(
      `${format(range.from, 'dd/MM/yyyy')} - ${format(range.to, 'dd/MM/yyyy')}`
    );

    setHoveredDay(undefined);
    setOpen(false);
    onDateSelect?.(range);
  };

  const hoverRange: DateRange | undefined =
    date?.from && !date?.to && hoveredDay
      ? {
          from: date.from,
          to: hoveredDay > date.from ? hoveredDay : date.from,
        }
      : undefined;

  const handleDayMouseEnter = (day: Date) => {
    setHoveredDay(day);
  };

  const handleDayMouseLeave = () => {
    setHoveredDay(undefined);
  };

  const handleClearDate = () => {
    setDate(undefined);
    setInputValue('');
    setOpen(false);
    if (onDateSelect) {
      onDateSelect(undefined);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [open]);

  return (
    <>
      <div className={css.inputWrapper} ref={wrapperRef}>
        <input
          ref={inputRef}
          id='calendar-input'
          type='text'
          value={inputValue}
          name='date'
          placeholder='Booking date'
          className={css.input}
          onClick={handleClick}
          readOnly
        />
        {inputValue !== '' && (
          <button
            type='button'
            onClick={handleClearDate}
            className={css.clearBtn}
            title='Очистить дату'
          >
            ✕
          </button>
        )}

        {open && (
          <div className={css.popover}>
            <DayPicker
              mode='range'
              animate
              showOutsideDays
              disabled={{ before: new Date() }}
              ISOWeek
              navLayout='around'
              selected={date}
              onDayMouseEnter={handleDayMouseEnter}
              onDayMouseLeave={handleDayMouseLeave}
              modifiers={{ hoverRange }}
              formatters={{
                formatWeekdayName: label => format(label, 'EEE').toUpperCase(),
              }}
              onSelect={handleDateSelect}
              classNames={{
                chevron: css.chevron,
                weekday: css.weekday,
                outside: css.outside,
                today: css.today,
                day_button: css.dayButton,
                selected: css.selected,
                range_start: css.rangeStart,
                range_end: css.rangeEnd,
                range_middle: css.rangeMiddle,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;
