import * as s from "./styled"

type Props = {
    title: string
    top: string
}

export const ListHeaderTitle = ({ title, top }: Props) => {
    return (
        <s.Title top={top}>
            {title}
        </s.Title>
    )
}