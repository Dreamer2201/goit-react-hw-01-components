import styled from '@emotion/styled';

export const FriendsBoard = styled.div`
    padding: 10px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
`;
export const ListAllFriends = styled.ul`
    list-style: none;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
`;
export const FriendItem = styled.li`
    margin-right: auto;
    margin-left: auto;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #A9A9A9;
    border-radius: 5px;
    width: 200px;
    
`;
export const ImgFriend = styled.img`
    border: 1px solid #A9A9A9;
    border-radius: 15%;
    margin-right: 10px;
    padding: 3px;

    position: relative;

    &::before {
        content: "";
        width: 24px;
        height: 24px;
        border-radius: 25%;
        background-color: red;
        
        position: absolute;
        bottom: -10px;
        left: 10px;

    }
`;