import { Item, Name, Status, Image } from './FriendList.styled'

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
      <Item className="item">
        <Status className="status" status={isOnline}>{isOnline}</Status>
  <Image className="avatar" src={avatar} alt="User avatar" width="48" />
        <Name className="name">{name}</Name>
</Item>    
    )
}
