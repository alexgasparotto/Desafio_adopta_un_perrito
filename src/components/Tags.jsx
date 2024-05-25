import React from 'react';
import { Badge } from 'react-bootstrap';

const Tags = ({ text, bg, width }) => {
  return (
    <Badge bg={bg} className="m-1" style={{width: width}}>
      {text}
    </Badge>
  );
};

export default Tags;