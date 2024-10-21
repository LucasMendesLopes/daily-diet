import { LineVertical } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type CircleProps = {
  isPartOfTheDiet: boolean;
};

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))`
  flex-direction: row;
  padding: 16px 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: ${({ theme }) => theme.BORDER.SM}px;
`;

export const HourText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Separator = styled(LineVertical).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.GRAY_4,
}))``;

export const ItemName = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  ${({ theme }) => css`
    max-width: 80%;
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Circle = styled.View<CircleProps>`
  width: 14px;
  height: 14px;
  border-radius: 25px;
  background-color: ${({ theme, isPartOfTheDiet }) =>
    isPartOfTheDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  margin-left: auto;
`;
