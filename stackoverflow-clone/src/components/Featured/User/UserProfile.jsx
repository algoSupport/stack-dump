import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Typography } from '@material-ui/core';
import { fetchUserById } from '../../../services/user-service';
import UserProfileBiography from './UserProfileDetails/UserProfileBiography.jsx';
import UserProfilePicture from './UserProfileDetails/UserProfilePicture.jsx';
import UserTags from './UserProfileDetails/UserTags';
import UserQuestions from './UserProfileDetails/UserQuestions';
import '../../../sassStyles/user-profile.scss'

function UserProfile(props) {
    const { userId } = useParams();
    const [userProfileData, setUserProfileData] = useState(null);
    const [userTopTags, setUserTopTags] = useState(null);
    const [userTopQuestions, setUserTopQuestions] = useState(null);

    const importProfileFromFile = async () => {
        const profileDataResponse = await fetch('http://localhost:3000/sample_profile.txt');
        let data = await profileDataResponse.json();
        console.log("Profile data:", data);
        setUserProfileData(data.items[0]);

        const tagDataResponse = await fetch('http://localhost:3000/sample_tags.txt');
        data = await tagDataResponse.json();
        console.log('Tag data:', data);
        setUserTopTags(data);

        //http://localhost:3000/sample_questions.txt
        const topQnDataResponse = await fetch('http://localhost:3000/sample_questions.txt');
        data = await topQnDataResponse.json();
        console.log('Questions data:', data);
        setUserTopQuestions(data);
    }

    useEffect(() => {
        (async function () {
            importProfileFromFile();
            // const fetchUserByIdData = await fetchUserById(userId);
            // console.log('fetchUserByIdData', fetchUserByIdData);
            // setUserProfileData(fetchUserByIdData.items[0]);
        }
        )();
    }, [])

    return (
        <div className="user-profile-container-main" style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRight: '1px solid black', borderLeft: '1px solid black' }}>
            <div className="user-profile-outer-container">
                <Typography variant="h4" style={{ margin: '2vh' }}>User's profile</Typography>
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <UserProfilePicture
                        pictureUrl={userProfileData != null ? userProfileData.profile_image : ""}
                        badgeCounts={userProfileData != null ? userProfileData.badge_counts : {}}
                        reputation={userProfileData != null ? userProfileData.reputation : ""}
                    />

                    <UserProfileBiography
                        username={userProfileData != null ? userProfileData.display_name : ""}
                        location={userProfileData != null ? userProfileData.location : ""}
                        website={userProfileData != null ? userProfileData.link : ""}
                        memberSince={userProfileData != null ? userProfileData.creation_date : ""}
                    />
                </div>
                <UserTags
                    tags={userTopTags != null ? userTopTags.items : []}
                />
                <UserQuestions questions={userTopQuestions != null ? userTopQuestions.items : []} />
            </div>
        </div>
    );
}

export default UserProfile;