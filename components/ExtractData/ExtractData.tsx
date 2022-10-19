import React from 'react'
type TypeDb = {
    id: number,
    date: string,
    description: string,
    amount: number,
    type: string,
    operation ?: string
}
type ExtractDataProps = {
    db: Array<TypeDb>
}

export default function ExtractData(props:ExtractDataProps) {
  return (
    <div>Dados do Array
        {props.db.map((item, index) => {
            return (
                <div key={item.id}>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                    <p>{item.amount}</p>
                    <p>{item.type}</p>
                </div>
            )
        })}
    </div>
  )
}
