import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';


const StyledCard = styled(Card)`
  && {
    width: 200px;
  }
`;

const StyledImage = styled(CardMedia)`
  && {
    height: 200px;
    background-size: contain;
  }
`;

const StyledTitle = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: bold;
  }
`;

const StyledPrice = styled(Typography)`
  && {
    font-size: 14px;
    color: #0070f3; /* Cor do preço */
  }
`;

export default function ProductCard({ imageSrc, title, price }) {
  return (
    <StyledCard>
      <StyledImage image={imageSrc} />
      <CardContent>
        <StyledTitle gutterBottom variant="h6" component="div">
          {title}
        </StyledTitle>
        <StyledPrice variant="body2" color="text.secondary">
          {price}
        </StyledPrice>
      </CardContent>
    </StyledCard>
  );
}
