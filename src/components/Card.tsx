import { ReactNode } from "react"

interface CardProps {
    children: ReactNode
}

const Card = (props: CardProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}
export default Card
