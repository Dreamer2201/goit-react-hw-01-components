import styled from '@emotion/styled';

export const UserProfile = styled.div`
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    padding-top: 15px;
    width: 250px;
    border-radius: 5px;
    background-color: #D3D3D3;
    `;

export const StatsUser = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #808080;
    `;

export const ImageUser = styled.img`
    width: 100px;
    heiht: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    `;

export const StatsItem = styled.li`
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 3);
    outline: 1px solid #ffffff;
  `;