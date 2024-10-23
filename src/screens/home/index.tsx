import * as s from "./styled"
import Logo from "@assets/Logo.png"
import User from "@assets/user.png"
import { Button, ListHeaderTitle, ListItem } from "@components"
import { useNavigation } from "@react-navigation/native";
import { theme } from "@theme";
import { LineVertical, Plus } from "phosphor-react-native";
import { SectionList, Text, TouchableOpacity, View } from "react-native"

const dietPlan = [
    {
        date: "21.10.2024",
        data: [
            {
                id: "1",
                name: "Omelete com espinafre",
                description: "Omelete feita com ovos e espinafre fresco.",
                hour: "07:00",
                isPartOfTheDiet: true,
            },
            {
                id: "2",
                name: "Frutas com iogurte natural",
                description: "Mistura de frutas da estação com iogurte natural.",
                hour: "10:00",
                isPartOfTheDiet: false,
            },
            {
                id: "3",
                name: "Peito de frango grelhado com salada",
                description: "Peito de frango grelhado servido com salada verde.",
                hour: "12:30",
                isPartOfTheDiet: true,
            },
            {
                id: "4",
                name: "Torrada integral com abacate",
                description: "Torrada integral coberta com abacate amassado e temperos.",
                hour: "15:30",
                isPartOfTheDiet: true,
            },
            {
                id: "5",
                name: "Salmão com legumes no vapor",
                description: "Salmão grelhado acompanhado de legumes no vapor.",
                hour: "18:30",
                isPartOfTheDiet: false,
            },
            {
                id: "6",
                name: "Vitamina de abacate com leite de amêndoas",
                description: "Vitamina feita com abacate e leite de amêndoas.",
                hour: "21:00",
                isPartOfTheDiet: true,
            },
        ],
    },
    {
        date: "22.10.2024",
        data: [
            {
                id: "7",
                name: "Panqueca de aveia com banana",
                description: "Panquecas feitas com aveia e banana.",
                hour: "07:00",
                isPartOfTheDiet: false,
            },
            {
                id: "8",
                name: "Castanhas e frutas secas",
                description: "Mistura de castanhas e frutas secas.",
                hour: "10:00",
                isPartOfTheDiet: true,
            },
            {
                id: "9",
                name: "Carne vermelha magra com batata-doce",
                description: "Carne vermelha magra assada com batata-doce.",
                hour: "12:30",
                isPartOfTheDiet: true,
            },
            {
                id: "10",
                name: "Iogurte grego com mel",
                description: "Iogurte grego natural adoçado com mel.",
                hour: "15:30",
                isPartOfTheDiet: true,
            },
            {
                id: "11",
                name: "Tilápia grelhada com quinoa",
                description: "Tilápia grelhada acompanhada de quinoa.",
                hour: "18:30",
                isPartOfTheDiet: false,
            },
            {
                id: "12",
                name: "Smoothie de frutas vermelhas",
                description: "Smoothie feito com frutas vermelhas e leite.",
                hour: "21:00",
                isPartOfTheDiet: true,
            },
        ],
    },
    {
        date: "23.10.2024",
        data: [
            {
                id: "13",
                name: "Tapioca com queijo cottage",
                description: "Tapioca recheada com queijo cottage.",
                hour: "07:00",
                isPartOfTheDiet: true,
            },
            {
                id: "14",
                name: "Maçã com manteiga de amendoim",
                description: "Maçã cortada servida com manteiga de amendoim.",
                hour: "10:00",
                isPartOfTheDiet: true,
            },
            {
                id: "15",
                name: "Frango ao curry com arroz integral",
                description: "Frango cozido ao curry acompanhado de arroz integral.",
                hour: "12:30",
                isPartOfTheDiet: true,
            },
            {
                id: "16",
                name: "Mix de nozes e castanhas",
                description: "Mistura de nozes e castanhas.",
                hour: "15:30",
                isPartOfTheDiet: false,
            },
            {
                id: "17",
                name: "Filé de peixe com purê de batata",
                description: "Filé de peixe grelhado acompanhado de purê de batata.",
                hour: "18:30",
                isPartOfTheDiet: true,
            },
            {
                id: "18",
                name: "Chá verde com biscoitos integrais",
                description: "Chá verde servido com biscoitos integrais.",
                hour: "21:00",
                isPartOfTheDiet: false,
            },
        ],
    },
];


export function Home() {
    const navigation = useNavigation()


    const handleOpenMeal = () => {
        navigation.navigate('meal')
    }

    const handleOpenNewMeal = () => {
        navigation.navigate('newMeal')
    }

    return (
        <s.Container>
            <s.Header>
                <s.Logo source={Logo} />

                <s.UserImage source={User} />
            </s.Header>

            <s.Statistics>
                <s.StatisticsNumber>
                    90,86%
                </s.StatisticsNumber>

                <s.StatisticsText>
                    das refeições dentro da dieta
                </s.StatisticsText>

                <s.Arrow />
            </s.Statistics>

            <s.NewMealContainer>
                <s.NewMealTitle>
                    Refeições
                </s.NewMealTitle>

                <Button
                    icon={Plus}
                    text="Nova refeição"
                    onPress={handleOpenNewMeal}
                />
            </s.NewMealContainer>

            <SectionList
                sections={dietPlan}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={({ section }) => {
                    const index = dietPlan.findIndex(sec => sec.date === section.date);

                    return (
                        <ListHeaderTitle
                            title={section.date}
                            top={index === 0 ? "0px" : "32px"}
                        />
                    );
                }}
                renderItem={({ item: meal }) =>
                    <ListItem
                        onPress={handleOpenMeal}
                        hour={meal.hour}
                        name={meal.name}
                        isPartOfTheDiet={meal.isPartOfTheDiet}
                    />}
            />
        </s.Container>
    )
}