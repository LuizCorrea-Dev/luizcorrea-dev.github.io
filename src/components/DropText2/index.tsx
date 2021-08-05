/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Box, { FlexBox } from '../Box';
import { Title, Image } from './droptext2';
import Text from '../Text';
import Animate from '../Animate';
import { TIME } from '../../constants/constants';


const OFFSET = 30;

interface Props {
  title: string;
  align?: 'left' | 'center' | 'right';
  description: string;
  image: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DropText2: React.FC<Props> = ({
  title,
  description,
  image,
  align,
  open,
  setOpen,
}) => {
  const [titleHeight, setTitleHeight] = useState(0);
  const [descriptionHeight, setDescriptionHeight] = useState(0);

  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef && descriptionRef.current)
      setDescriptionHeight(descriptionRef.current.clientHeight + OFFSET);
  }, [descriptionRef, description]);

  useEffect(() => {
    if (titleRef && titleRef.current)
      setTitleHeight(titleRef.current.clientHeight);
  }, [titleRef, title]);

  return (
    <Box
      color="gray90"
      width="68%"
      textAlign={align || 'center'}
      style={{ wordWrap: 'break-word' }}
      overflow="hidden"
      height={descriptionHeight + titleHeight}
      onClick={() => setOpen(!open)}
      cursor="pointer"
    >
      <FlexBox
        ref={titleRef}
        color={open ? 'primary100' : 'gray90'}
        marginTop={`${
          open ? 0 : (descriptionHeight + titleHeight) / 2 + 1 + 'px'
        }`}
        paddingBottom={open ? 1 : 0}
        transform={open ? '' : 'translateY(-50%)'}
        transition="all 0.2s"
        textAlign={align || 'left'}
        justifyContent={
          align === 'right'
            ? 'flex-end'
            : align === 'center'
            ? 'center'
            : 'flex-start'
        }
        alignItems="center"
      >
        <Title open={open}>{title}</Title>
        <FlexBox
          marginLeft={2}
          marginTop={'2px'}
          align-items="center"
          transform={open ? 'rotate(180deg)' : ''}
          transition="all 0.35s"
          height={20}
        >
          <MdKeyboardArrowDown size={24} />
        </FlexBox>
      </FlexBox>
      <Box ref={descriptionRef} opacity={open ? 1 : 0} transition="all 0.4s">
        <Text lineHeight={1.6} textAlign={'justify'}>
          {description}
        </Text>
        <Animate animation={`move-in-bottom-right ${TIME}s ease-out`}>
            <Image>
              <img
                src={image}
                style={{
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                alt={title}
              />
            </Image>
          </Animate>
      </Box>
    </Box>
  );
};

export default DropText2;
