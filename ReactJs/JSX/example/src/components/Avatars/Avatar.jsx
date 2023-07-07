const Avatar = ({imgSrc,imgWidth,imgMeta}) =>{
    return(
        <div>
            <img src={imgSrc} alt="sample" width={imgWidth}></img>
            <ul>
                <li>Name of image : {imgMeta.name}</li>
                <li>Img id: {imgMeta.id}</li>
            </ul>
        </div>
    )
}
export default Avatar;