import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigation } from './navigation';

import { Link } from 'react-router-dom';
// import { getProfileData } from '../fetch/profile';
import Slug  from '../images/ucscsammy.jpeg';

import '../styling/profile.scss';
import '../styling/globals.scss';

import { useSelector } from 'react-redux';


export const Profile = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [apiData, setApiData] = useState({});
    // const [images, setImages] = useState();
    // const [bio, setBio] = useState("");
    // const dispatch = useDispatch();
    const { username } = useSelector((state) => state.signUpStore);
    const { bio, postedPhotos, profilePhoto } = useSelector((state) => state.profile);

    // useEffect(() => {
    //     getData();
    //     // eslint-disable-next-line
    // }, [])

    // const getData = async () => {
    //     const data = await getProfileData(_info.payload);
    //     console.log(data);
    //     setApiData(data)
    //     // if(data["profilePicture"] !== null){ dispatch(setProfileImage(data["profilePicture"])); }
    //     // if(data["postedPhotos"] !== undefined){  }
    //     setImages(data["postedPhotos"]);
    //     setIsLoading(false);
    // }

    // if(isLoading){
    //     return <div className="flex-c spinner">
    //             <Spinner animation="border" variant="primary"/>
    //         </div>
    // }
    return (
        <div className = "profile">
            <section className="flex-c profile-p-all profile-header">
                <div>
                    <h1>{username.payload}</h1>
                </div>
            </section>

            <section className="flex-sb profile-p-all profile-user">
                <div>
                    {(profilePhoto.payload === undefined) ? 
                    (<img src={Slug} alt="Sammy The Slug" className="profile-pic"/>
                    ) : (
                    <img src={profilePhoto} alt="Profile Pic" className="profile-pic"/>)}
                </div>
                <div className="profile-stats">
                    <ul className="flex-se">
                        <li> 8 <br/> Post </li>
                        <li> 8 <br/> Followers </li>
                        <li> 5 <br/> Following </li>
                    </ul>
                </div>
            </section>
            
            <section className="p-tb profile-edit">
                <Link to="edit">
                    <Button 
                    variant="secondary" 
                    block size="sm"
                    className="textStyle"
                    >Edit Profile</Button>
                </Link>
            </section>

            <section className="p-tb profile-bio">
                <p>{bio.payload}</p>
                <hr/>
            </section>

            <section className="profile-uploads">
                <div display="flex-sb">
                    {/* {postedPhotos.payload !== [] ? 
                    (postedPhotos.reverse().map((imgSrc, index) => (<img src={imgSrc} key={index} alt={index}/>))) 
                    : 
                    null} */}
                </div>
            </section>

            <div className="profile-nav">
                <Navigation/>
            </div>
        </div>
    )
}