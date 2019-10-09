import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { ActivityIndicator, Card, Colors, Paragraph, Title } from 'react-native-paper';

import { getUser, getUserRepos } from '../repositories/GitHubRepository';
import { UserCard } from './UserCard';
import { RepoListCard } from './RepoListCard';
import { RepoCard } from './RepoCard';

const UIStatus = {
    None: '',
    Loading: 'loading',
    Success: 'success',
    Error: 'error',
    Empty: 'empty'
};

export const User = ({ user }) => {
    const [userInfo, setUserInfo] = useState({});
    const [status, setStatus] = useState(UIStatus.none);
    const [repos, setRepos] = useState([]);
    const [showRepoCurr, setShowRepoCurr] = useState(false);
    const [repoCurr, setRepoCurr] = useState({});

    useEffect(() => {
        const getFromAPI = async () => {
            if (!!user) {
                const [userInfo, repos] = await Promise.all([getUser(user), getUserRepos(user)]);
                if (userInfo.error || repos.error) {
                    setStatus(UIStatus.Error);
                } else if (userInfo.login && repos && repos.length) {
                    setUserInfo(userInfo);
                    setStatus(UIStatus.Success);
                    setRepos(repos);
                } else {
                    setStatus(UIStatus.Empty);
                }
            } else {
                setStatus(UIStatus.None);
                setShowRepoCurr(false);
                setRepoCurr({});
            }
        };

        setStatus(UIStatus.Loading);
        setShowRepoCurr(false);
        setRepoCurr({});

        getFromAPI();
    }, [user]);

    const handleRepoClick = id => {
        const repoInfo = repos.find(repo => repo.id === id);
        setShowRepoCurr(true);
        setRepoCurr(repoInfo);
    };

    const handleBackClick = () => {
        setShowRepoCurr(false);
        setRepoCurr({});
    };

    switch (status) {
        case UIStatus.Loading:
            return (
                <View>
                    <ActivityIndicator animating={true} color={Colors.red800} />
                </View>
            );
        case UIStatus.Success:
            return !showRepoCurr ? (
                <>
                    <UserCard userInfo={userInfo} />
                    <View className="repos">
                        {repos.map(repo => (
                            <RepoListCard repoInfo={repo} handleRepoClick={handleRepoClick} key={repo.id} />
                        ))}
                    </View>
                </>
            ) : (
                <>
                    <View>
                        <RepoCard repoInfo={repoCurr} handleBackClick={handleBackClick} />
                    </View>
                </>
            );
        case UIStatus.Error:
            return (
                <>
                    <Card>
                        <Card.Content>
                            <Text>An error occurred</Text>
                        </Card.Content>
                    </Card>
                </>
            );
        default:
            return null;
    }
};

User.propTypes = {
    user: PropTypes.string.isRequired
};
