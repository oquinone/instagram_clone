import React from 'react'
// import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { setSelectedImage } from '../redux/profile';

export const ProfileUploads = ({images}) => {
    const dispatch = useDispatch();
    // const { selectedImage } = useSelector((state) => state.profile);

    return(
        <section className="profile-uploads">
                <hr/>
                <div className="profile-uploads-flex">
                    {images !== undefined ? 
                    (images.map((data, index) => 
                    <div key={index} onClick={() => dispatch(setSelectedImage(index))}> 
                        <img src={data} alt={data}/>
                    </div>))
                    : 
                    null}
                </div>
            </section>
    );
}