import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    FormOpen: (id: string) => void;
}
export default function ActivityDetails({ activity, cancelSelectActivity, FormOpen }: Props) {
    return (
        <Card fluid>
            <Image src={`/Assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic onClick={() => FormOpen(activity.id)} color='blue' content='Edit' />
                    <Button basic onClick={cancelSelectActivity} color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}