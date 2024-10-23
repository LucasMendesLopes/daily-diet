import { Circle } from "phosphor-react-native"
import * as s from "./styled"
import { theme } from "@theme"

type Props = {
    isPartOfTheDiet: boolean
}

export const Chip = ({ isPartOfTheDiet }: Props) => {
    return (
        <s.Container>
            <Circle
                size={8}
                color={isPartOfTheDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
                weight="fill"
            />

            <s.Text>
                {isPartOfTheDiet ? "dentro da dieta" : "fora da dieta"}
            </s.Text>
        </s.Container>
    )
}