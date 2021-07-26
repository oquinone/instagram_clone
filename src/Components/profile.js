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
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateUser, setProfilePicture } from '../redux/profile';

export const Profile = () => {
    const dispatch = useDispatch();
    const { updateUser } = useSelector((state) => state.profile);
    const [pData, setProfileData] = useState(null);
    const [images, setImages]  = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        makeRequest();
    }, [])

    // useEffect(() => {
    //     if(!pData){
    //         const img = group(pData['uploadedPhotos']);
    //         setImages(img);
    //     }
    // }, [pData])

    const makeRequest = async () => {
        if(!pData){
            const data = await getProfileData();

            if(data === "Not Auth"){
                setIsLoggedOut(true);
            }
            else{
                const img = group(data['uploadedPhotos']);
                setImages(img);
                setProfileData(data);
                dispatch(setProfilePicture(data['profilePicture']))
                setIsLoading(false);
            }
        }
        else if(updateUser.payload){
            console.log("we entered");
            const data = await getProfileData();
            setProfileData(data);
            dispatch(setUpdateUser(false));
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
                    {(pData['profilePicture'] === undefined) ? 
                    (<img src={Slug} alt="Sammy The Slug" className="profile-pic"/>
                    ) : (
                    <img src={pData['profilePicture']} alt="Profile Pic" className="profile-pic"/>)}
                </div>
                <div className="profile-stats-mobile">
                    <div>
                        <h1>{pData['username']}</h1>
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
                            <h1>{pData['username']}</h1>
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
                        <p>{pData['profileBio']}</p>
                    </div>
                </div>

                <div className="extra"></div>
                <div className="extra"></div>
            </section>

            <section className="p-tb profile-bio-mobile">
                <p>{pData['profileBio']}</p>
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
                    {pData['uploadedPhotos'] !== undefined ? 
                    (pData['uploadedPhotos'].reverse().map((data, index) => <div> <img src={data} alt={data} key={index}/></div>))
                    // (images.map((data, index) => <div>{data}</div>)) 
                    : 
                    null}
                </div>
            </section>
        </div>
    )
}

const group = (data) => {
    let trav = data.reverse();
    // let temp = [];
    let buffer = [];
    if(trav.length === 1){
        let t = <div>
            <img src={trav[0]} alt={trav[0]}/>
        </div>
        buffer.push(t);
    }  
    if(trav.length === 2){
        let t = <div>
            <img src={trav[0]} alt={trav[0]}/>
            <img src={trav[0]} alt={trav[0]}/>
        </div>
        buffer.push(t);
    } 
    else{
        let i = 0;
        while( i < trav.length){
            if(i - trav.length <= 2){
                if(i - trav.length === 2){
                    let t = <div>
                        <img src={trav[i]} alt={trav[i]}/>
                        <img src={trav[i +1]} alt={trav[i+1]}/>
                    </div>
                    buffer.push([t]);
                    i+=2;
                }
                else{
                    let t = <div>
                        <img src={trav[i]} alt={trav[i]}/>
                    </div>
                    buffer.push(t);
                    i++;
                }
            }
            else{
                let t = <div>
                            <img src={trav[i]} alt={trav[i]}/>
                            <img src={trav[i+1]} alt={trav[i+1]}/>
                            <img src={trav[i+2]} alt={trav[i+2]}/>
                        </div>
                buffer.push(t);
                i+=3;
            }
            // temp = [];
        }
    }
    return buffer;
}