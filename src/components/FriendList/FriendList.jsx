import {Item} from './FriendList.styled'
export const FriendsList = ({ friends }) => {
    return (
       < ul className="friend-list" >
            {friends.map(({ isOnline, avatar, name, id }) => {
                return (
                <Item className="item" key={id}>
        <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
</Item>  
            )
             
        
            
        })
        }
</ul> 
    )
}
   