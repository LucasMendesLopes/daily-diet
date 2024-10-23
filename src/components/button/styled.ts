import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = "DARK" | "LIGHT";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Button = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.5,
}))<Props>`
  ${({ theme, type }) => css`
    width: 100%;
    height: 56px;
    flex-direction: row;
    gap: 12px;
    justify-content: center;
    align-items: center;
    background-color: ${type === "DARK" ? theme.COLORS.GRAY_2 : "transparent"};
    ${type === "LIGHT" && `border: 1px solid ${theme.COLORS.GRAY_1}`};
    border-radius: ${theme.BORDER.SM}px;
    padding: 16px;
  `}
`;

export const Text = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "DARK" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
