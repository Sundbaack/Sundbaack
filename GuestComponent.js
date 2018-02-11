import React, {Component} from 'react';
import styled from 'styled-components';

const GridItem = styled.div`
    font-family: 'Poppins', sans-serif;
    grid-column-start: auto;
    grid-row-start: auto;
    margin: 15px;
    margin-bottom: 0px;
    text-align: left;
    text-transform: none;
`;

const Headline = styled.h2`
    font-weight: 500        !important;
    font-size: 15px         !important;
    color: #000             !important;
    letter-spacing: normal  !important;
`;

const Span = styled.span`
    width: 100%;
    color: #34495e;
    font-size: 13px;
    display: block;
    width: 100%;
`;

const Paragraph = styled.p`
    font-weight: 300;
    text-transform: none;
    font-family: 'Poppins', sans-serif;
    letter-spacing: normal;
    color: #34495e;
    font-size: 13px;
`;

const GuestComponent = (props) => (
    <GridItem>
        <Headline>{props.name}, <Span>{props.relation}</Span></Headline>
        <Paragraph>{props.info}</Paragraph>
    </GridItem>
);


export default GuestComponent;
