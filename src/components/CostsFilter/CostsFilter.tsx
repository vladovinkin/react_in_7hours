import './CostsFilter.css'

type costsFilterProps = {
  onSelectYear: (newYearValue: string) => void
  selectYear: string
  years: number[]
}

const CostsFilter = (props: costsFilterProps) => {
  const yearChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSelectYear(event.target.value)
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор по году</label>
        <select value={props.selectYear} onChange={yearChangeHandler}>
          <>
            {props.years.map((year) => (
              <option key={String(year)} value={String(year)}>
                {String(year)}
              </option>
            ))}
          </>
        </select>
      </div>
    </div>
  )
}

export default CostsFilter
