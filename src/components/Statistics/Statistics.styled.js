import styled from 'styled-components';

export const Statistic = styled.section`
max-width: 400px;
margin: 0;
margin-left: auto;
margin-right: auto;
background-color: lightblue;
`;

export const Title = styled.h2`
text-align: center;
font-size: 16px;
text-transform: uppercase;
margin: 0;
`;

export const List = styled.ul`
padding: 0;
display: flex;
flex-wrap: nowrap;
width: 100%;
margin: 0;
`;

export const Item = styled.li`
list-style-type: none;
flex: 1;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Label = styled.span `

font-size: 14px;
font-weight: 700;
`;

export const Percentage = styled.span`

font-size: 12px;
font-weight: 500;

`