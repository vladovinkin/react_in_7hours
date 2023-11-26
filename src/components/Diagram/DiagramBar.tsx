import './DiagramBar.css'

type diagramPropsType = {
  value: number
  maxValue: number
  label: string
}

const DiagramBar = (props: diagramPropsType) => {
  const height = `${
    props.value ? Math.round((props.value / props.maxValue) * 100) : 0
  }%`

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__innner">
        <div
          className="diagram-bar__fill"
          style={{
            height,
          }}
        ></div>
      </div>
      <div className="diagram-bar__label">{props.label}</div>
    </div>
  )
}

export default DiagramBar
