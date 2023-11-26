import './Card.css'
import { DefaultProps } from '../DefaultProps'

const Card = (props: DefaultProps) => {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card
