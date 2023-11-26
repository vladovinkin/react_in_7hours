import './CostItem.css'
import { CostItemType } from './CostItemProps'
import CostDate from '../CostDate/CostDate'
import Card from '../Card/Card'

const CostItem = (props: CostItemType) => {
  const { date, amount } = props

  return (
    <li>
      <Card className="cost-item">
        <CostDate date={date} />
        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default CostItem
