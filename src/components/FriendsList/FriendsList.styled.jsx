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
    align-items: center;
    border: 1px solid #A9A9A9;
    border-radius: 5px;
    width: 250px;
    margin-bottom: 10px;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);
    background-color: #f6f6f6;
`;
export const ImgFriend = styled.img`
    margin-right: 7px;
    background-color: #5d5351;
    border: 1px solid #A9A9A9;
    border-radius: 10%;
    margin-right: 10px;
    padding: 3px;
`;

export const OnlineStatus = styled.span`
    margin-right: 7px;
    margin-left: 7px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => (props.status ? 'green' : 'red')};
   
`;
export const FriendName = styled.p`
    font-size: 18px;
    font-weight: 700;
`;