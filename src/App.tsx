import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
import {
  CostItemType,
  NewCostOutputProps,
} from './components/CostItem/CostItemProps'
import { useState } from 'react'

const INITIAL_COSTS: CostItemType[] = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Холодильник',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: 'MacBook',
    amount: 1254.72,
  },
  {
    id: 'c3',
    date: new Date(2021, 3, 1),
    description: 'Джинсы',
    amount: 49.99,
  },
]

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostItemHandler = (inputCostData: NewCostOutputProps) => {
    const addedData: CostItemType = {
      id: inputCostData.id,
      date: inputCostData.date,
      description: inputCostData.name,
      amount: Number(inputCostData.amount),
    }
    setCosts((prevCosts) => {
      return [addedData, ...prevCosts]
    })
  }

  const getYears = (costs: CostItemType[]) => {
    const years: number[] = []

    costs.map((cost) => {
      const year = cost.date.getFullYear()
      years.push(year)
    })

    return [...new Set(years)].sort().reverse()
  }

  return (
    <div>
      <NewCost onReceiveCostData={addCostItemHandler} />
      <Costs items={costs} years={getYears(costs)} />
    </div>
  )
}

export default App
