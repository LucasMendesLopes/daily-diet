import { Meal } from "@types"
import * as s from "./styled"
import { TouchableOpacityProps } from "react-native";
import { Circle } from "phosphor-react-native";
import { theme } from "@theme";

type Props = Omit<Meal, "id" | "description"> & TouchableOpacityProps;


export const ListItem = ({ hour, name, isPartOfTheDiet, ...rest }: Props) => {
    return (
        <s.Container {...rest}>
            <s.HourText>
                {hour}
            </s.HourText>

            <s.Separator />

            <s.ItemName>
                {name}
            </s.ItemName>

            <Circle
                size={18}
                color={isPartOfTheDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}
                weight="fill"
                style={{ marginLeft: "auto" }}
            />
        </s.Container>
    )
}