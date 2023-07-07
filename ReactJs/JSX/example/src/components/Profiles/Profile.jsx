import Avatar from "../Avatars/Avatar"
const Profile = () => {
    return (
        <div>
            <Avatar
                imgSrc ="https://i.imgur.com/iEBQ4KA.jpeg"
                imgWidth ={50}
                imgMeta ={{name: 'sample1',id :2}}
            />
            <Avatar
                imgSrc ="https://i.imgur.com/iEBQ4KA.jpeg"
                imgWidth ={100}
                imgMeta ={{name: 'sample2',id :3}}
            />
            <Avatar
                imgSrc ="https://i.imgur.com/pXraIqz.jpeg"
                imgWidth ={150}
                imgMeta ={{name: 'sample3',id :4}}
            />
        </div>
        
    )
}
export default Profile;