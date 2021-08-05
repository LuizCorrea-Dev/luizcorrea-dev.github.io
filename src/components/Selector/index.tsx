/** @format */

import React, { useMemo, useRef, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import {
  SelectorContainer,
  SelectedOptionText,
  SelectedOptionContainer,
  SelectorOptionItem,
  SelectorOptionsList,
} from './selector';

import OutsideClick from '../../hooks/OutsideClick';

interface Props {
  options: string[];
  value: string;
  onChange: (option: string) => void;
  width?: number;
}

export const Selector: React.FC<Props> = ({
  options,
  value,
  onChange,
  width,
}) => {
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);
  const renderOptions = useMemo(
    () =>
      options.map((option) => (
        <SelectorOptionItem key={option} onClick={() => onChange(option)}>
          {option}
        </SelectorOptionItem>
      )),
    [options, onChange]
  );

  OutsideClick(selectorRef, () => setOpen(false));

  return (
    <SelectorContainer
      onClick={() => setOpen((state) => !state)}
      ref={selectorRef}
    >
      <SelectedOptionContainer width={width}>
        <SelectedOptionText>{value}</SelectedOptionText>
        <AiFillCaretDown
          style={{
            transform: `translateY(2px) ${open ? 'rotate(180deg)' : ''}`,
            marginLeft: '26px',
            transition: 'all 0.2s',
          }}
        />
      </SelectedOptionContainer>
      {open && <SelectorOptionsList>{renderOptions}</SelectorOptionsList>}
    </SelectorContainer>
  );
};

export default Selector;
