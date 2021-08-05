/** @format */
import React, { useContext } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import DataContext from '../../services/data';

import { getVal } from '../../styles/device';

import { TIME } from '../../constants/constants';

import Section from '../../components/Section';
import Box, { FlexBox } from '../../components/Box';
import Animate from '../../components/Animate';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import CopyText from '../../components/CopyText';
import SocialMedia from '../../components/SocialMedia';

const ICON = {
  transform: 'translateY(3px)',
};

const Contact: React.FC = () => {
  const {
    about: { titles, contactMessage, phone, email },
  } = useContext(DataContext);

  const contact = [
    {
      label: email,
      icon: <AiOutlineMail style={ICON} />,
      text: 'correa.luizbatista@gmail.com',
    },
    {
      label: phone,
      icon: <AiOutlinePhone style={ICON} />,
      text: '+55 9 9892-8959',
    },
    
  ]; 

  const size = getVal({
    desktopL: 28,
    desktopM: 26,
    desktopS: 24,
    laptopL: 22,
  });

  const distance = getVal({
    desktopL: 20,
    desktopM: 19,
    desktopS: 17,
    laptopL: 16,
    laptopM: 15,
  });

  const direction = getVal({
    desktopL: 'row',
    tabM: 'row',
    tabS: 'column',
    mobileS: 'column',
  });

  const width = getVal({
    desktopL: '50%',
    tabM: '50%',
    tabS: '100%',
    mobileS: '100%',
  });
  const textMargin = getVal({
    desktopL: 6,
    tabM: 6,
    tabS: 2,
    mobileS: 2,
  });

  const contentPadding = getVal({
    desktopL: 0,
    tabM: 0,
    tabS: 8,
    mobileS: 8,
  });
  const contentMargin = getVal({
    desktopL: 0,
    tabM: 0,
    tabS: 4,
    mobileS: 4,
  });

  const socialMediaLeft = getVal({
    desktopL: -18,
    tabM: -18,
    tabS: 'auto',
    mobileS: 'auto',
  });

  const socialMediaRight = getVal({
    desktopL: 'auto',
    tabM: 'auto',
    tabS: 0,
    mobileS: '0,',
  });

  return (
    <Section variant="light" linker name="nav-contact">
      <FlexBox justifyContent="space-between" flexDirection={direction}>
        <Box
          width={width}
          position="relative"
          paddingBottom={contentPadding}
          marginBottom={contentMargin}
        >
          <Animate animation={`move-in-right-short ${TIME}s ease-out`}>
            <Title position="left">{titles.contact}</Title>
            <FlexBox
              flexDirection="column"
              justifyContent="space-between"
              marginBottom={textMargin}
            >
              <Paragraph fontSize={4} lineHeight={1.7}>
                {contactMessage}
              </Paragraph>
            </FlexBox>{' '}
          </Animate>
          <Animate animation={`fade-in ${TIME}s ease-out 0.2s`}>
            {contact.map((c) => (
              <CopyText key={c.label} icon={c.icon} text={c.text} />
            ))}
          </Animate>
          <FlexBox justifyContent="space-between" marginBottom={textMargin}>
            <Box
              position="absolute"
              bottom={0}
              left={socialMediaLeft}
              right={socialMediaRight}
            >
              <Animate animation={`fade-in ${TIME}s ease-out 0.4s`} margin={0}>
                <SocialMedia
                  orientation="horizontal"
                  distance={distance}
                  size={size}
                />
              </Animate>
            </Box>
          </FlexBox>
        </Box>
      </FlexBox>
    </Section>
  );
};

export default Contact;
