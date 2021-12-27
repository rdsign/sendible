import { FC, useEffect, useState } from 'react';
import { Feedback, PostCard, PostCardModal, TitleBar } from 'components';
import { cards, generateId, mockupImage } from 'utils';
import { PostCardList, Section } from './index.styles';

export const Home: FC = () => {
    const [postCards, setPostCarts] = useState<PostProps[]>(cards);
    const [currentCard, setCurrentCard] = useState<PostProps | null>(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([]);

    const date = new Date();
    date.setHours(date.getHours() + 24);

    useEffect(() => {
        errors.length > 0 &&
            setTimeout(() => {
                setErrors([]);
            }, 8000);
    }, [errors]);

    const handleClose = () => {
        setCurrentCard(null);
        setIsModalVisible(false);
    };

    const handleDelete = (id: string) => {
        const newPostCardList = [...postCards];
        const index = newPostCardList.map((i) => i.id).indexOf(id);
        newPostCardList.splice(index, 1);
        setPostCarts(newPostCardList);
    };

    const handleEdit = (post: PostProps) => {
        setCurrentCard(post);
        setIsModalVisible(true);
    };

    const handleErrors = (errs: string[]) => {
        setErrors(errs);
    };

    const handleSave = (post: PostProps) => {
        setCurrentCard(null);
        setErrors([]);
        setIsModalVisible(false);
        const { id } = post;
        const index = postCards.map((i) => i.id).indexOf(id);
        const newPostCardList = [...postCards];
        if (index < 0) {
            newPostCardList.push(post);
        } else {
            newPostCardList[index] = post;
        }
        setPostCarts(newPostCardList);
    };

    const postCardList = postCards.map((c) => (
        <PostCard
            date={c.date}
            key={c.id}
            id={c.id}
            imageUrl={c.imageUrl}
            message={c.message}
            time={c.time}
            del={() => handleDelete(c.id)}
            edit={() => handleEdit(c)}
        />
    ));

    return (
        <Section className="wrapper">
            <TitleBar
                compose={() => {
                    setIsModalVisible(true);
                }}
                italicTitle="posts"
                strongTitle="Scheduled"
            />
            <PostCardList>{postCardList}</PostCardList>
            <PostCardModal
                date={currentCard?.date || date.toLocaleDateString('en-GB')}
                id={currentCard?.id || generateId()}
                imageUrl={currentCard?.imageUrl || mockupImage}
                message={currentCard?.message || ''}
                time={currentCard?.time || '12:00'}
                isVisible={isModalVisible}
                close={() => handleClose()}
                error={(errs: string[]) => handleErrors(errs)}
                save={(post: PostProps) => handleSave(post)}
            />
            <Feedback messages={errors} />
        </Section>
    );
};
