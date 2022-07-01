import React from 'react'

export interface DetailRowProps {
  title: string,
  description: string,
}

export const DetailRow = ({ title, description }: DetailRowProps) => {
  return (
    <div>{title} - {description}</div>
  )
}
