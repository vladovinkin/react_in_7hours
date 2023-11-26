import { CostItemProps, CostItemType } from '../CostItem/CostItemProps'
import CostItem from '../CostItem/CostItem'
import './CostsList.css'

const costsList = (props: CostItemProps) => {
  const costsContent = props.items.map((cost: CostItemType) => (
    <CostItem
      key={cost.id}
      id={cost.id}
      date={cost.date}
      description={cost.description}
      amount={cost.amount}
    />
  ))

  return <ul className="cost-list">{costsContent}</ul>
}

export default costsList
