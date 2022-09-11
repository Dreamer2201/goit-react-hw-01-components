import styled from '@emotion/styled';

const textColor = '#636363';

export const UserProfile = styled.div`
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 40px;
    padding-top: 15px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #dad8d6;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    `;

export const StatsUser = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #dad8d6;
    `;

export const ImageUser = styled.img`
    width: 100px;
    heiht: 100px;
    border: 1px solid #d8cbb6;
    border-radius: 50%;
    background-color: #d8cbb6;
    `;

export const StatsItem = styled.li`
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 3);
    border-right: 1px solid #f6f6f6;
    &:last-child {
        border-right: none;
    }
  `;
export const StatsTitle = styled.span`
    color: ${textColor};
    margin-bottom: 5px;
`;
export const StatsData = styled.span`
    color: #1e1e1e;
    font-weight: bold;
`;
export const UserName = styled.p`
    font-weight: bold;
    color: #1e1e1e;
`;
export const UserTag = styled.p`
    color: ${textColor};
`;
export const UserLocation = styled.p`
    color: ${textColor};
    margin-bottom: 30px;
`;
