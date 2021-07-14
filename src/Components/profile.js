import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

//Imported Functions
import { Navigation } from './navigation';
import { getProfileData } from '../fetch/profile';

// Styling & Images
import '../styling/profile.scss';
import '../styling/globals.scss';
import Slug  from '../images/ucscsammy.jpeg';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setProfileData } from '../redux/profile';

export const Profile = () => {
    const dispatch = useDispatch();
    const { pData } = useSelector((state) => state.profile);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        makeRequest();
        // eslint-disable-next-line
    }, [])

    // useEffect(() => {
    //     if(!isLoading){
    //         const data = group(profileData['uploadedPhotos']);
    //         console.log(data);
    //     }
    // }, [isLoading])

    const makeRequest = async () => {
        if(pData.payload === {}){
            const data = await getProfileData();
            if(data === "Not Auth"){
                setIsLoggedOut(true);
            }
            else{
                dispatch(setProfileData(data));
                setIsLoading(false);
            }
        }
        else{
            setIsLoading(false);
        }
    }

    if(isLoggedOut){
        return(
            <Redirect to="/" />
        );
    }

    if(isLoading){
        return <div className="flex-c spinner">
                <Spinner animation="border" variant="primary"/>
            </div>
    }

    return (
        <div className = "profile">
            <section className="profile-nav">
                <Navigation/>
            </section>
            <hr/>

            <section className="profile-p-all profile-user">
                <div>
                    {(pData.payload['profilePicture'] === undefined) ? 
                    (<img src={Slug} alt="Sammy The Slug" className="profile-pic"/>
                    ) : (
                    <img src={pData.payload['profilePicture']} alt="Profile Pic" className="profile-pic"/>)}
                </div>
                <div className="profile-stats-mobile">
                    <div>
                        <h1>{pData.payload['username']}</h1>
                    </div>
                    <div className="p-tb profile-edit">
                        <Link to="edit">
                            <Button 
                            variant="light" 
                            block size="sm"
                            className="textStyle"
                            >Edit Profile</Button>
                        </Link>
                    </div>
                </div>
                <div className="profile-stats">
                    <div className="info">
                        <div className="info-username">
                            <h1>{pData.payload['username']}</h1>
                        </div>
                        <div className="p-tb profile-edit">
                            <Link to="edit">
                                <Button 
                                variant="light" 
                                block size="sm"
                                className="textStyle"
                                >Edit Profile</Button>
                            </Link>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="status">
                        <div className="status-flex">
                            <h4>8</h4> 
                            <h5>Post</h5>
                        </div>
                        <div className="status-flex">
                            <h4>9</h4> 
                            <h5>Followers</h5>
                        </div>
                        <div className="status-flex">
                            <h4>10</h4> 
                            <h5>Following</h5>
                        </div>
                    </div>
                    <div className="profile-bio">
                        <p>{pData.payload['profileBio']}</p>
                    </div>
                </div>

                <div className="extra"></div>
                <div className="extra"></div>
            </section>

            <section className="p-tb profile-bio-mobile">
                <p>{pData.payload['profileBio']}</p>
            </section>
            {/* <hr/> */}

            <section className="profile-followers-mobile">
                <div className="profile-followers-mobile-flex">
                    <h5>8</h5> 
                    <h5>Post</h5>
                </div>
                <div className="profile-followers-mobile-flex">
                    <h5>9</h5> 
                    <h5>Followers</h5>
                </div>
                <div className="profile-followers-mobile-flex">
                    <h5>15</h5> 
                    <h5>Following</h5>
                </div>
            </section>
            <hr className="profile-followers-mobile-hr"/>

            <section className="profile-uploads">
                <hr/>
                <div className="profile-uploads-flex">
                    {pData.payload['uploadedPhotos'] !== undefined ? 
                    (pData.payload['uploadedPhotos'].map((data, index) => <div> <img src={data} alt={data} key={index}/></div>)) 
                    : 
                    null}
                </div>
            </section>
        </div>
    )
}

// const group = (data) => {
//     let trav = data.reverse();
//     let temp = [];
//     let hold = [];
//     if(data.length === 1){
//         temp.push(trav[0]);
//         hold.push(temp);
//     }  
//     if(data.length === 2){
//         temp.push(trav[0]);
//         temp.push(trav[1]);
//         hold.push(temp);
//     } 
//     else{
//         let i = 0;
//         while( i < trav.length){
//             if(i - trav.length <= 2){
//                 if(i - trav.length === 2){
//                     // temp.push(trav[i]);
//                     // temp.push(trav[i+1]);
//                     hold.push([trav[i], trav[i+1]]);
//                     i+=2;
//                 }
//                 else{
//                     // temp.push()
//                     hold.push([trav[i]]);
//                     i++;
//                 }
//             }
//             else{
//                 // temp.push(trav[i]);
//                 // temp.push(trav[i+1]);
//                 // temp.push(trav[i+2]);
//                 hold.push([trav[i], trav[i+1], trav[i+2]]);
//                 i+=3;
//             }
//             temp = [];
//         }
//     }
//     return hold;
// }