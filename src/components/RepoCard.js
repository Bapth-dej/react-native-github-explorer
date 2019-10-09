import React from 'react';
import { Text } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { StyledCard } from '../styledComponents/StyledCard';

export const RepoCard = props => {
    const { repoInfo, handleBackClick } = props;
    return (
        <StyledCard>
            <Card>
                <Card.Actions>
                    <Button onPress={handleBackClick}>Back</Button>
                </Card.Actions>
                <Card.Content>
                    <Title>{repoInfo.name}</Title>
                    <Paragraph>{repoInfo.description}</Paragraph>
                    <Paragraph>{`Written in: ${repoInfo.language}`}</Paragraph>
                    <Paragraph>{repoInfo.url}</Paragraph>
                </Card.Content>
            </Card>
        </StyledCard>
    );
};
