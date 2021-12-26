import { FC } from 'react';
import { Button, Icon } from 'components';
import {
    Actions,
    Bg,
    Container,
    Content,
    ImageHolder,
    Row,
    Schedule,
    ScheduleItem,
} from './index.styles';

export const PostCard: FC<PostCardProps> = (props) => {
    const { edit, del, id, date, time, imageUrl, message } = props;

    return (
        <Container>
            <Content>
                <p>{message}</p>
                <ImageHolder>
                    <img src={imageUrl} alt="post" />
                </ImageHolder>
            </Content>
            <Schedule>
                <ScheduleItem>
                    <Icon icon="calendar" />
                    <p>{date}</p>
                </ScheduleItem>
                <ScheduleItem>
                    <Icon icon="clock" />
                    <p>{time}</p>
                </ScheduleItem>
            </Schedule>
            <Actions className="actions">
                <Row>
                    <Button click={() => edit(id)} icon="edit" color="white" label="Edit" />
                    <span />
                    <Button click={() => del(id)} icon="delete" color="white" label="Delete" />
                </Row>
            </Actions>
            <Bg className="bg" />
        </Container>
    );
};
