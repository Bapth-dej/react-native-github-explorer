import React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';
import View from 'react-native-web/dist/exports/View';
import { StyledCard } from '../styledComponents/StyledCard';

export const UserCard = ({ userInfo }) => {
    return (
        <StyledCard>
            <Card>
                <Card.Cover source={{ uri: userInfo.avatar_url }} />
                <Card.Content>
                    <Title>{userInfo.name}</Title>
                    <Paragraph>{userInfo.bio}</Paragraph>
                </Card.Content>
            </Card>
        </StyledCard>
    );
};
