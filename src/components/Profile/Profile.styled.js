import styled from 'styled-components';

export const Wrap = styled.div`
margin: auto;
padding-bottom: 15px;
max-width: 400px;
background-color: pink;
`
export const Name = styled.div`
display: flex;
flex-direction: column;
gap:10px;
justify-content: center;
align-items: center;
font-size: large;
padding: 10px;
`
export const Photo = styled.img`
width: 100px;
border-radius: 50px;
`
export const Profile = styled.div`

`
export const List = styled.ul`
padding: 10px;
display: flex;
flex-wrap: nowrap;

`
export const Item = styled.li`
list-style-type: none;
flex-basis: calc((100%) / 2);
`
export const Label = styled.span`
 display:flex;
  justify-content:center;
  align-items:center;
  gap:3px;
     
  margin-bottom:4px;

    font-weight: 700;
    font-size: 12px;
`
export const Quantity = styled.span`
display: block;
text-align: center;
font-size: 12px;
`