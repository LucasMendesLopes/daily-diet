import { ArrowUpRight, Plus } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px 24px 0;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Statistics = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))`
  width: 100%;
  height: 102px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: ${({ theme }) => theme.BORDER.SM}px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 33px 0 40px;
`;

export const StatisticsNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const StatisticsText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Arrow = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const NewMealContainer = styled.View`
  width: 100%;
  gap: 8px;
  padding-bottom: 32px;
`;

export const NewMealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const NewMealButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: ${({ theme }) => theme.BORDER.SM}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
`;

export const NewMealButtonIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const NewMealButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
