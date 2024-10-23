import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-self: flex-start;
  height: 34px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
