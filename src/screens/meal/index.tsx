import { Button, Chip, Header } from "@components";
import * as s from "./styled"
import { PencilSimpleLine, Trash } from "phosphor-react-native";

export function Meal() {
    return (
        <s.Container>
            <Header title="Refeição" />

            <s.ElementsContainer>
                <s.InfosContainer>
                    <s.MealName>
                        Sanduíche
                    </s.MealName>

                    <s.MealDescription>
                        Sanduíche de pão integral com atum e salada de alface e tomate
                    </s.MealDescription>
                </s.InfosContainer>

                <s.InfosContainer>
                    <s.MealDateTitle>
                        Data e hora
                    </s.MealDateTitle>

                    <s.MealDate>
                        12/08/2022 às 16:00
                    </s.MealDate>
                </s.InfosContainer>

                <Chip isPartOfTheDiet={false} />

                <s.ButtonsContainer>
                    <Button
                        text="Editar refeição"
                        icon={PencilSimpleLine}
                    />

                    <Button
                        text="Excluir refeição"
                        type="LIGHT"
                        icon={Trash}
                    />
                </s.ButtonsContainer>
            </s.ElementsContainer>
        </s.Container>
    )
}