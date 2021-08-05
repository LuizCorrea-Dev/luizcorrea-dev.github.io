/** @format */

import React, { ReactElement, useState, useContext } from 'react';

import { Container, Copy } from './copytext';

import Box from '../Box';
import Text from '../Text';

import DataContext from '../../services/data';

interface Props {
  icon: ReactElement;
  text: string;
}

const DURATION = 1800;

const CopyText: React.FC<Props> = ({ icon, text }) => {
  const {
    about: { copy, copyError },
  } = useContext(DataContext);

  const [message, setMessage] = useState(false);

  const copyText = async () => {
    try {
      setMessage(true);
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setMessage(false);
      }, DURATION);
    } catch (error) {
      console.error(copyError + error);
      setMessage(false);
    }
  };

  return (
    <Container onClick={copyText}>
      <Box marginRight={4} color="gray90" opacity={0.7}>
        <Text fontSize={5}>{icon}</Text>
      </Box>
      <Text fontSize={5}>{text}</Text>
      <Copy showMessage={message}>{copy}</Copy>
    </Container>
  );
};

export default CopyText;
