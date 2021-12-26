import { FC, useEffect, useState } from 'react';
import { Button, Icon } from 'components';
import {
    Actions,
    CloseButton,
    Container,
    Content,
    Divider,
    Editor,
    ImageHolder,
    Overlay,
    Schedule,
    ScheduleItem,
} from './index.styles';

interface PostCardModalProps {
    date: string;
    id: number;
    imageUrl: string | null;
    isVisible: boolean;
    message: string;
    time: string;
    close: () => void;
    save: () => void;
}

export const PostCardModal: FC<PostCardModalProps> = (props) => {
    const { date, id, imageUrl, isVisible, message, time, close, save } = props;
    const [newDate, setNewDate] = useState<string>(date);
    const [newImageUrl, setNewImageUrl] = useState<string | null>(imageUrl);
    const [newMessage, setNewMessage] = useState<string>(message);
    const [newTime, setNewTime] = useState<string>(time);

    useEffect(() => {
        setNewDate(date);
        setNewImageUrl(imageUrl);
        setNewMessage(message);
        setNewTime(time);
    }, [isVisible]);

    return (
        <Container isVisible={isVisible}>
            <Content className="wrapper">
                <Editor>
                    <textarea
                        placeholder="Write your message here..."
                        value={newMessage}
                        onChange={(v) => setNewMessage(v.target.value)}
                        maxLength={280}
                    />
                    {newImageUrl && (
                        <ImageHolder>
                            <img src={newImageUrl} alt="post" />
                        </ImageHolder>
                    )}
                </Editor>
                <Divider />
                <Actions className="actions">
                    <Schedule>
                        <ScheduleItem>
                            <Icon icon="image" />
                        </ScheduleItem>
                        <ScheduleItem>
                            <Icon icon="calendar" />
                            <input
                                placeholder="31/12/2025"
                                value={newDate}
                                onChange={(v) => setNewDate(v.target.value)}
                                maxLength={10}
                            />
                        </ScheduleItem>
                        <ScheduleItem>
                            <Icon icon="clock" />
                            <input
                                placeholder="00:00"
                                value={newTime}
                                onChange={(v) => setNewTime(v.target.value)}
                                maxLength={5}
                            />
                        </ScheduleItem>
                    </Schedule>
                    <Button
                        click={() => save()}
                        icon="compose"
                        color="white"
                        backgroundColor="primary400"
                        label="Save"
                    />
                </Actions>
                <CloseButton
                    click={() => close()}
                    icon="close"
                    color="gray800"
                    customTitle="close"
                />
            </Content>
            <Overlay onClick={() => close()} title="close" />
        </Container>
    );
};
