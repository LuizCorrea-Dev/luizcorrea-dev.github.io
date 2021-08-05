import styled from 'styled-components';

interface Props {
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  textAlign?:
    | 'end'
    | 'inherit'
    | 'initial'
    | 'start'
    | 'left'
    | 'center'
    | 'right'
    | 'justify'
    | '-moz-initial'
    | 'revert'
    | 'unset'
    | 'match-parent'
    | undefined;
}

export const Paragraph = styled.p<Props>(
  ({ theme, fontSize, lineHeight, color, textAlign = 'left' }) => ({
    display: 'block',
    margin: '15px 0',
    lineHeight,
    fontSize:
      (fontSize &&
        (fontSize > theme.fontSizes.length
          ? fontSize
          : theme.fontSizes[fontSize])) ||
      theme.fontSizes[4],
    textAlign,
    wordWrap: 'break-word',
    color: (color && theme.colors[color]) || theme.colors.gray90
  })
);

export default Paragraph;
