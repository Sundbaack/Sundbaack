import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GuestComponent from './GuestComponent';
import guests from './guests.json';

const Grid = styled.div`
    grid-template-rows: auto;
    grid-template-columns: 50% 50%;
    margin-top: 30px;
    padding-left: 70px;
    padding-right: 70px;
    display: grid;
    grid-template-rows: auto;
    justify-content: center;

    @media screen and (max-width: 700px) {
        grid-template-columns: 100%;
        padding-left: 30px;
        padding-right: 30px;
    }
`;

var app = (
    <Grid>
        { guests.map( (guest,i) => (<GuestComponent key={i} {...guest} />))}
    </Grid>
);

ReactDOM.render(app, document.getElementById('app'))
