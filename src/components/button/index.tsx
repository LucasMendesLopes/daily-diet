import { TouchableOpacityProps } from "react-native"
import * as s from "./styled"
import { IconProps } from "phosphor-react-native"
import { theme } from "@theme";

type Props = TouchableOpacityProps & {
    icon?: React.ElementType<IconProps>;
    type?: s.ButtonIconTypeStyleProps
    text: string
}

export const Button = ({ icon: Icon, type = "DARK", text, ...rest }: Props) => {
    return (
        <s.Button {...rest} type={type}>
            {Icon && (
                <Icon
                    size={18}
                    weight="regular"
                    color={type === "DARK" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1}
                />
            )}

            <s.Text type={type}>
                {text}
            </s.Text>
        </s.Button>
    )
}
