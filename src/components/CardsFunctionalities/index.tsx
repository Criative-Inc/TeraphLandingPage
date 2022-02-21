import React, { ReactElement } from 'react';

import { Card } from './styles'

interface CardsFunctionalitiesProps {
  icon: ReactElement;
  title: string;
  content: string;
}

export function CardsFunctionalities({icon, title, content}: CardsFunctionalitiesProps ){
  return (
    <Card>
      <div className="icon">
        {icon}
      </div>
      <h3>{title}</h3>

      <p>{content}</p>
    </Card>
  );
}