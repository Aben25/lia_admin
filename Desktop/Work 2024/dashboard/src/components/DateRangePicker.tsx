import React from 'react';
import { DateRangePicker as ReactDateRangePicker, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DateRangePickerProps {
  dateRange: Range;
  onRangeChange: (range: Range) => void;
  [key: string]: any;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ dateRange, onRangeChange, ...props }) => {
  const handleSelect = (rangesByKey: RangeKeyDict) => {
    const selectedRange = rangesByKey[Object.keys(rangesByKey)[0]];
    if (selectedRange) {
      onRangeChange(selectedRange);
    }
  };

  return (
    <ReactDateRangePicker
      ranges={[{ ...dateRange, key: 'selection' }]}
      onChange={handleSelect}
      months={2}
      direction="horizontal"
      // Remove showSelectionPreview and moveRangeOnFirstSelection if they're not valid props
      {...props}
    />
  );
};

export default DateRangePicker;
