import { CostDateProps } from './CostDateProps'
import './CostDate.css'

const CostDate = (props: CostDateProps) => {
  const { date } = props
  const month = date.toLocaleString('RU-ru', { month: 'long' })
  const year = date.getFullYear()
  const day = date.toLocaleString('RU-ru', { day: '2-digit' })

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  )
}

export default CostDate
