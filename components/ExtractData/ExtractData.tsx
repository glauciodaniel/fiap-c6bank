import React from 'react';
import TypeDb from '../../types/TypeDb';

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
                    <p>{item.operation}</p>
                </div>
            )
        })}
    </div>
  )
}
