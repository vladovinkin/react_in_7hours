import './CostForm.css'
import React, { useState } from 'react'
import { CostFormOutputProps } from '../CostItem/CostItemProps'

type CostFormProps = {
  onSaveCostData: (inputCostData: CostFormOutputProps) => void
  onClickFormButton: () => void
}

const CostForm = (props: CostFormProps) => {
  const [inputName, setInputName] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [inputDate, setInputDate] = useState('')

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value)
  }

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAmount(event.target.value)
  }

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value)
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    }

    if (event.type === 'submit') {
      props.onSaveCostData(costData)
    }

    setInputName('')
    setInputAmount('')
    setInputDate('')

    props.onClickFormButton()
  }

  return (
    <form onSubmit={submitHandler} onReset={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            value={inputAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            value={inputDate}
            min="2011-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="reset">Отмена</button>
        </div>
      </div>
    </form>
  )
}

export default CostForm
