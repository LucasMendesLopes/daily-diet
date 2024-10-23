import { useNavigation } from "@react-navigation/native"
import * as s from "./styled"

type Props = {
    title?: string
}

export const Header = ({ title }: Props) => {
    const navigation = useNavigation()

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <s.Container>
            <s.BackButton onPress={handleBack}>
                <s.BackIcon />
            </s.BackButton>

            {title &&
                <s.Title>
                    {title}
                </s.Title>
            }
        </s.Container>
    )
}