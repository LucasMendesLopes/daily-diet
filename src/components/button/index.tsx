import { TouchableOpacityProps } from "react-native"
import * as s from "./styled"
import { MaterialIcons } from "@expo/vector-icons"

type Props = TouchableOpacityProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
    type?: s.ButtonIconTypeStyleProps
    text: string
}

export const Button = ({ icon, type = "DARK", text, ...rest }: Props) => {
    return (
        <s.Button {...rest} type={type}>
            {icon &&
                <s.Icon
                    name={icon}
                    type={type}
                />
            }

            <s.Text type={type}>
                {text}
            </s.Text>
        </s.Button>
    )
}