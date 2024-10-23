import { ElementsBaseContainer, Header } from "@components";
import * as s from "./styled"
import { Text } from "react-native";

export function NewMeal() {
    return (
        <s.Container>
            <Header title="Nova refeição" />

            <ElementsBaseContainer>
                <Text></Text>
            </ElementsBaseContainer>
        </s.Container>
    )
}