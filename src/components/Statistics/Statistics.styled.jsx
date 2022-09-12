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
    background-color: ${({ typedoc, theme }) => {
    switch (typedoc) {
        case '.docx':
            return theme.colors.blue;
        case '.pdf':
            return theme.colors.violet;
        case '.mp3':
            return theme.colors.red;
        case '.psd':
            return theme.colors.green;
        default: return getRandomHexColor;
        }
    }
    
    }
`;
export const Title = styled.h2`
    margin: 0;
    padding: 10px 0px;
    background-color: #fff;
    text-transform: uppercase;
    color: #767676;
`;
export const TypeDocument = styled.span`
    color: #f6f6f6;
    margin-bottom: 5px;
    font-size: 18px;
`;
export const PerTypeDoc = styled.span`
    color: #f6f6f6;
    font-size: 18px;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}