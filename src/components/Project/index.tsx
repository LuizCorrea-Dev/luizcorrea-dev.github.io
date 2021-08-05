/** @format */

import React, { useContext } from 'react';
import DataContext from '../../services/data';
import { Icon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import playFilledAlt from '@iconify-icons/carbon/play-filled-alt';

import { LAYOUT, getVal } from '../../styles/device';

import { Container, Overlay, Image, Title } from './project';

import { TIME } from '../../constants/constants';

import Box, { FlexBox } from '../Box';
import Animate from '../Animate';
import Paragraph from '../Paragraph';
import Button from '../Button';

interface Props {
  position?: 'left' | 'right';
  title: string;
  description: string;
  github: string;
  demo: string;
  image: string;
}

const Project: React.FC<Props> = ({
  position,
  title,
  description,
  github,
  demo,
  image,
}) => {
  const {
    about: { buttons },
  } = useContext(DataContext);

  const mobile = window.innerWidth <= LAYOUT;

  const padding = getVal({
    desktopL: 30,
    tabS: 30,
    mobileL: 18,
  });

  return (
    <FlexBox
      paddingY={padding}
      marginX={mobile ? 20 : 0}
      justifyContent={'space-between'}
      alignItems={mobile ? 'center' : 'auto'}
      flexDirection={
        mobile ? 'column' : position === 'right' ? 'row-reverse' : 'row'
      }
      marginY={!mobile ? 20 : 0}
    >
      <Box>
        <Container>
          <Animate animation={`move-in-top-left ${TIME}s ease-out`}>
            <Overlay />
          </Animate>
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
        </Container>
      </Box>
      <FlexBox
        marginLeft={position === 'right' || mobile ? 0 : 60}
        marginRight={position === 'left' || mobile ? 0 : 60}
        flex={1}
        justifyContent="space-between"
        alignItems={mobile ? 'center' : 'auto'}
        flexDirection="column"
      >
        <Animate animation={`move-in-${position}-short ${TIME}s ease-out`}>
          <Title>{title}</Title>
        </Animate>
        <Animate animation={`move-in-${position}-short ${TIME}s ease-out`}>
          <Box marginBottom={mobile ? '12px' : 0}>
            <Paragraph textAlign="justify">{description}</Paragraph>
          </Box>
        </Animate>

        <FlexBox marginTop="auto" marginBottom={22}>
          {github && (
            <Animate
              animation={`move-in-${position}-short ${TIME}s ease-out`}
              margin={0}
            >
              <Button
                fill="empty"
                onClick={() => window.open(github, '_blank')}
              >
                <Icon
                  icon={githubFilled}
                  style={{
                    transform: 'scale(1.4)',
                  }}
                />
                <Box marginLeft="10px">{buttons.code}</Box>
              </Button>
            </Animate>
          )}
          {demo && github && <Box marginLeft="20px" />}
          {demo && (
            <Animate
              animation={`move-in-${position}-short ${TIME}s ease-out`}
              margin={0}
            >
              <Button fill="full" onClick={() => window.open(demo, '_blank')}>
                <Icon
                  icon={playFilledAlt}
                  style={{
                    transform: 'scale(1.4)',
                  }}
                />
                <Box width="10px" />
                {buttons.demo}
              </Button>
            </Animate>
          )}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Project;
