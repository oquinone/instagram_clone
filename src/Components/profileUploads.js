import React from 'react'

export const ProfileUploads = ({images}) => {
    return(
        <section className="profile-uploads">
                <hr/>
                <div className="profile-uploads-flex">
                    {images !== undefined ? 
                    (images.reverse().map((data, index) => <div key={index}> <img src={data} alt={data}/></div>))
                    : 
                    null}
                </div>
            </section>
    );
}