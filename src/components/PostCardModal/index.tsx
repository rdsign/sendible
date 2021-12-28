import { FC, useEffect, useState } from 'react';
import moment from 'moment';
import { convertBase64, validateDate } from 'utils';
import { Button, Icon, Input } from 'components';
import {
    Actions,
    Container,
    Content,
    Divider,
    Editor,
    ImageHolder,
    InputWrapper,
    Overlay,
    Schedule,
    ScheduleItem,
} from './index.styles';

interface PostCardModalProps extends PostProps {
    isVisible: boolean;
    close: () => void;
    save: (post: PostProps) => void;
    error: (errors: string[]) => void;
}

export const PostCardModal: FC<PostCardModalProps> = (props) => {
    const { date, id, imageUrl, isVisible, message, time, close, error, save } = props;
    const [newDate, setNewDate] = useState<string>(date);
    const [newImageUrl, setNewImageUrl] = useState<string>(imageUrl);
    const [newMessage, setNewMessage] = useState<string>(message);
    const [newTime, setNewTime] = useState<string>(time);

    useEffect(() => {
        setNewDate(date);
        setNewImageUrl(imageUrl);
        setNewMessage(message);
        setNewTime(time);
    }, [isVisible]);

    const handleSave = () => {
        const errors = [];

        if (newMessage.length < 10) errors.push('The message must contain 10 characters or more.');
        if (!moment(newDate, 'DD/MM/YYYY', true).isValid())
            errors.push('Date is incorrect. E.g.: 01/01/2022');
        if (!moment(newTime, 'HH:mm', true).isValid())
            errors.push('Time is incorrect. E.g.: 10:20');
        if (!validateDate(newDate, newTime)) errors.push('Date in past. Choose a future date.');
        errors.length > 0
            ? error(errors)
            : save({
                  date: newDate,
                  id,
                  imageUrl: newImageUrl,
                  message: newMessage,
                  time: newTime,
              });
    };

    const handleFileRead = async (event: any) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        setNewImageUrl(base64);
    };

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
                    <ImageHolder>
                        <img src={newImageUrl} alt="post" />
                    </ImageHolder>
                </Editor>
                <Divider />
                <Actions className="actions">
                    <Schedule>
                        <ScheduleItem>
                            <InputWrapper>
                                <Icon icon="image" />
                                <input
                                    type="file"
                                    id="avatar"
                                    name="avatar"
                                    onChange={(e: any) => handleFileRead(e)}
                                    accept="image/png, image/jpeg"
                                />
                            </InputWrapper>
                        </ScheduleItem>
                        <ScheduleItem>
                            <Icon icon="calendar" />
                            <Input
                                id="date"
                                change={(v) => setNewDate(v)}
                                initialValue={newDate}
                                mask="date"
                                maxLength={10}
                                placeholder="Date"
                            />
                        </ScheduleItem>
                        <ScheduleItem>
                            <Icon icon="clock" />
                            <Input
                                id="time"
                                change={(v) => setNewTime(v)}
                                initialValue={newTime}
                                mask="time"
                                maxLength={5}
                                placeholder="Time"
                            />
                        </ScheduleItem>
                    </Schedule>
                    <Button
                        click={() => handleSave()}
                        icon="compose"
                        color="white"
                        backgroundColor="primary400"
                        label="Save"
                    />
                </Actions>
                <Button
                    className="close-button"
                    click={() => close()}
                    icon="close"
                    color="gray800"
                    customTitle="close"
                />
            </Content>
            <Overlay data-testid="overlay" onClick={() => close()} />
        </Container>
    );
};
