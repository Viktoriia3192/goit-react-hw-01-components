import {List} from './FriendList.styled'
import { FriendListItem } from './FriendListItem'

export const FriendsList = ({ friends }) => {
    return (
       <List className="friend-list" >
            {friends.map(({id}) => {
                return (
                <FriendListItem key={id}/>
            )
        })
        }
</List> 
    )
}
   