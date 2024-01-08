import styled from 'styled-components';

export const List = styled.ul`
margin-left: auto;
margin-right: auto;
max-width: 400px;
background-color: lightgray;
padding: 0;
margin-bottom: 0;
margin-top: 0;
`;


export const Item = styled.li`
list-style-type: none;
    display: flex;
    align-items: center;
    gap: 10px;

`;

export const Name = styled.p`

text-align: center;
font-size: 18px;
font-weight: 600;

`;

export const Status = styled.span`

    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.status ? 'green' : 'red' }
`;

export const Image = styled.img`
  
 width:48px;

`
