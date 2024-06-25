import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './DropdownMenu.style';

interface DropdownMenuProps {
  selectedDate: string | null;
  onDateChange: (date: string | null) => void;
}

const data = [
  { label: 'Today', value: '0' },
  { label: 'Tomorrow', value: '1' },
  { label: 'This Week', value: '2' },
  { label: 'This Month', value: '3' },
  { label: 'This Year', value: '4' },
];

const DropdownMenu: React.FC<DropdownMenuProps> = ({ selectedDate, onDateChange }) => {
  const [value, setValue] = useState<string | null>(selectedDate);
  const [isFocus, setIsFocus] = useState(false);

  return (
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        iconStyle={styles.iconStyle}
        iconColor='white'
        placeholder={!isFocus ? 'Select Date': 'Today'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          onDateChange(item.value);
        }}
      />
  );
};

export default DropdownMenu;
