import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    margin-right: auto;
    margin-left: auto;
    width: 700px;
    border: 1px solid #dad8d6;
`;
export const HeadTable = styled.thead`
    font-family: 'sans-serif';
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: #55affa;
    color: #fff;
`;
export const HeadTableData = styled.th`
    padding: 10px;
`;

export const TableRow = styled.tr`
    background-color: #fff;
    &:nth-child(even) {
        background-color: #eee;
    }
`;
export const TableData = styled.td`
    width: calc(100% / 3);
    font-family: 'sans-serif';
    font-size: 14px;
    padding: 4px;
    text-align: center;
    text-transform: capitalize;
    color: #808080;
`;
