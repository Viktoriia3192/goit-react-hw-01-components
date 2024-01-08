import {List} from './FriendList.styled'
import { FriendListItem } from './FriendListItem'

export const FriendsList = ({ friends } ) => {
    return (
       <List className="friend-list" >
            {friends.map(({id, isOnline, avatar, name}) => {
                return (
                    <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
            )
        })
        }
</List> 
    )
}
   