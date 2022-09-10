import styled from '@emotion/styled';

export const StatisticsBoard = styled.div`
    padding: 10px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 400px;
`;

export const StatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StatsItem = styled.li`
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 4);
    border: 1px solid grey;
    background-color: ${ (props) => {
    switch (props.label) {
        case '.docx':
            return "pink";
        case '.pdf':
            return '#708090';
        case '.mp3':
            return "orange";
        case '.psd':
            return '#708090';
        default: return "blue";
        }
    }
    
    }
`;
export const Title = styled.h2`
    margin: 0;
    padding: 10px 0px;
    background-color: #708090;
    text-transform: uppercase;
`;