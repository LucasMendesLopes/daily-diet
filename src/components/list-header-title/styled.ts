import styled, { css } from "styled-components/native";

export const Title = styled.Text<{ top: string }>`
  ${({ theme, top }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 15px;
    margin-top: ${top};
  `}
`;
