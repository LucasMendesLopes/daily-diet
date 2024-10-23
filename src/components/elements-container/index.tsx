import { ReactNode } from "react"
import * as s from "./styled"

type Props = {
    children: ReactNode
}

export const ElementsBaseContainer = ({ children }: Props) => {
    return (
        <s.Container>
            {children}
        </s.Container>
    )
}