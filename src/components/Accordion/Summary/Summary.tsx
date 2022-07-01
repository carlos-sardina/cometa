import React from 'react'

export interface SummaryProps {
  title: string,
  description: string,
}

export const Summary = ({ title, description }: SummaryProps) => {
  return (
    <div>{title} - {description}</div>
  )
}
