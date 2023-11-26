export type CostItemType = {
  id: string,
  date: Date,
  description: string,
  amount: number,
}

export type CostItemProps = {
  items: CostItemType[]
}

export type CostsProps = {
  items: CostItemType[],
  years: number[],
}

export type CostFormOutputProps = {
  name: string,
  amount: string,
  date: Date,
}

export type NewCostOutputProps = {
  name: string,
  amount: string,
  date: Date,
  id: string,
}
