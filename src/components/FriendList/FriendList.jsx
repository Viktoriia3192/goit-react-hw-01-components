import {List, Item, Name, Status, Image} from './FriendList.styled'
export const FriendsList = ({ friends }) => {
    return (
       <List className="friend-list" >
            {friends.map(({ isOnline, avatar, name, id }) => {
                return (
                <Item className="item" key={id}>
        <Status className="status">{isOnline}</Status>
  <Image className="avatar" src={avatar} alt="User avatar" width="48" />
        <Name className="name">{name}</Name>
</Item>  
            )
             
        
            
        })
        }
</List> 
    )
}
   