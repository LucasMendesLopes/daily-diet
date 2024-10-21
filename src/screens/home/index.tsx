import * as s from "./styled"
import Logo from "@assets/Logo.png"
import User from "@assets/user.png"

export function Home() {
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

                <s.NewMealButton>
                    <s.NewMealButtonIcon />

                    <s.NewMealButtonText>Nova refeição</s.NewMealButtonText>
                </s.NewMealButton>
            </s.NewMealContainer>
        </s.Container>
    )
}