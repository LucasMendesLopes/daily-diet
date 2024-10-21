import { Meal } from "@types"
import * as s from "./styled"
import { TouchableOpacityProps } from "react-native";

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

            <s.Circle isPartOfTheDiet={isPartOfTheDiet} />
        </s.Container>
    )
}