import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Typography } from '@material-ui/core';
import { fetchUserById, fetchQuestionsById, fetchTagsById } from '../../../services/user-service';
import Loading from '../../Loading';
import UserProfileBiography from './UserProfileDetails/UserProfileBiography.jsx';
import UserProfilePicture from './UserProfileDetails/UserProfilePicture.jsx';
import UserTags from './UserProfileDetails/UserTags';
import UserQuestions from './UserProfileDetails/UserQuestions';
import '../../../sassStyles/user-profile.scss'

function UserProfile(props) {
    const { userId } = useParams();
    const [loaded, setLoaded] = useState(false);
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
            //importProfileFromFile();
            const userByIdData = await fetchUserById(userId);
            console.log('userByIdData', userByIdData);
            const questionsByIdData = await fetchQuestionsById(userId);
            console.log('questionsByIdData', questionsByIdData);
            const tagsByIdData = await fetchTagsById(userId);
            console.log('tagsByIdData', tagsByIdData);
            setUserProfileData(userByIdData.items[0]);
            setUserTopQuestions(questionsByIdData);
            setUserTopTags(tagsByIdData);
        }
        )();
    }, [])

    useEffect(() => {
        if (userProfileData != null && userTopQuestions != null && userTopTags != null) {
            setLoaded(true);
        }
    }, [userProfileData, userTopQuestions, userTopTags])

    return (
        loaded ? <div className="user-profile-container-main" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
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
            : <Loading />
    );
}

export default UserProfile;