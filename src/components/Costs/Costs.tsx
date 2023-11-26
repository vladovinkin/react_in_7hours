import CostItem from '../CostItem/CostItem'
import { CostsProps, CostItemType } from '../CostItem/CostItemProps'
import Card from '../Card/Card'
import CostsFilter from '../CostsFilter/CostsFilter'
import './Costs.css'
import { useState } from 'react'
import CostsList from '../CostsList/CostsList'

const Costs = (props: CostsProps) => {
  const [selectedYear, setSelectedYear] = useState(String(props.years[0]))

  const yearChangeHandler = (year: string) => {
    setSelectedYear(year)
  }

  const filteredCosts = props.items.filter(
    (cost: CostItemType) => cost.date.getFullYear().toString() === selectedYear,
  )

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          onSelectYear={yearChangeHandler}
          selectYear={selectedYear}
          years={props.years}
        />
        <CostsList items={filteredCosts} />
      </Card>
    </div>
  )
}

export default Costs
