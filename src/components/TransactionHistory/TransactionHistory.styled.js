import styled from 'styled-components';

export const Table = styled.table`
margin: 0;
max-width: 400px;
margin-left: auto;
margin-right: auto;
text-align: center;
background-color: lightsalmon;
display: flex;
flex-direction: column;
align-items: center;
thead {

    border-top: 1px solid;
    font-weight: 700;
     text-transform: uppercase;
}

th {

    border-top: 0.5px solid;
}

td {

    border-top: 0.5px solid;

}

`;