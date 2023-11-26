import CostForm from '../CostForm/CostForm'
import './NewCost.css'
import {
  CostFormOutputProps,
  NewCostOutputProps,
} from '../CostItem/CostItemProps'
import { useState } from 'react'

type NewCostProps = {
  onReceiveCostData: (inputCostData: NewCostOutputProps) => void
}

const NewCost = (props: NewCostProps) => {
  const [isShowNewCostForm, setIsShowNewCostForm] = useState(false)
  const saveCostDataHandler = (inputCostData: CostFormOutputProps) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }

    props.onReceiveCostData(costData)
  }

  const openNewCostFormHandler = () => {
    setIsShowNewCostForm(true)
  }

  const closeNewCostFormHandler = () => {
    setIsShowNewCostForm(false)
  }

  const formContent = isShowNewCostForm ? (
    <CostForm
      onSaveCostData={saveCostDataHandler}
      onClickFormButton={closeNewCostFormHandler}
    />
  ) : (
    <button onClick={openNewCostFormHandler}>Добавить новый расход</button>
  )

  return <div className="new-cost">{formContent}</div>
}

export default NewCost
