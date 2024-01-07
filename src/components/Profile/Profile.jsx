import {Name, Wrap, Photo, List, Item, Label, Quantity} from './Profile.styled'
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <>
    <Wrap className="profile">
  <Name className="description">
    <Photo
      src={avatar}
      alt={username}
      className="avatar"
    />
         <p className="name">{username}</p>
         <p className="tag">{tag}</p>
         <p className="location">{location}</p>
  </Name>

  <List className="stats">
    <Item>
      <Label className="label">Followers</Label>
             <Quantity className="quantity">{stats.followers}</Quantity>
    </Item>
    <Item>
      <Label className="label">Views</Label>
             <Quantity className="quantity">{stats.views}</Quantity>
    </Item>
    <Item>
      <Label className="label">Likes</Label>
             <Quantity className="quantity">{stats.likes}</Quantity>
    </Item>
  </List>
</Wrap> 
    </>
    )
 
}
