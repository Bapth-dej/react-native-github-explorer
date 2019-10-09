import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const RepoListCard = props => {
    const { repoInfo, handleRepoClick } = props;
    return (
        <Card>
            <TouchableHighlight onPress={() => handleRepoClick(repoInfo.id)}>
                <Card.Content>
                    <Title>{repoInfo.name}</Title>
                    <Paragraph>{repoInfo.description}</Paragraph>
                </Card.Content>
            </TouchableHighlight>
        </Card>
    );
};
