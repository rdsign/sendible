import { FC, useEffect, useState } from 'react';
import { Feedback, PostCard, PostCardModal, TitleBar } from 'components';
import { cards, generateId, mockupImage, parseDate, parseTime } from 'utils';
import { FixedButton, PostCardList, Section } from './index.styles';

export const Home: FC = () => {
    const sortPosts = (array: PostProps[]): PostProps[] => {
        return array.sort(
            (a, b) =>
                parseDate(a.date) + parseTime(a.time) - (parseDate(b.date) + parseTime(b.time)),
        );
    };

    const [showCompose, setShowCompose] = useState<boolean>(false);
    const [postCards, setPostCards] = useState<PostProps[]>(sortPosts(cards));
    const [currentCard, setCurrentCard] = useState<PostProps | null>(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([]);

    const date = new Date();
    date.setHours(date.getHours() + 24);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        errors.length > 0 &&
            setTimeout(() => {
                setErrors([]);
            }, 8000);
    }, [errors]);

    const handleScroll = (e: any) => {
        const element = e.target.scrollingElement;
        const screenHeight = e.target.scrollingElement.clientHeight;
        const top = element.scrollTop;
        top > screenHeight ? setShowCompose(true) : setShowCompose(false);
    };

    const handleClose = () => {
        setCurrentCard(null);
        setIsModalVisible(false);
    };

    const handleDelete = (id: string) => {
        const newPostCardList = [...postCards];
        const index = newPostCardList.map((i) => i.id).indexOf(id);
        newPostCardList.splice(index, 1);
        setPostCards(sortPosts(newPostCardList));
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
        setPostCards(sortPosts(newPostCardList));
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
                compose={() => setIsModalVisible(true)}
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
            <FixedButton
                backgroundColor="primary400"
                color="white"
                icon="compose"
                label="COMPOSE"
                isVisible={showCompose}
                click={() => setIsModalVisible(true)}
            />
        </Section>
    );
};
