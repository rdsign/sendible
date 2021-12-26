import { FC, useState } from 'react';
import { PostCard, PostCardModal, TitleBar } from 'components';
import { cards } from 'utils/fakeList';
import { PostCardList, Section } from './index.styles';

export const Home: FC = () => {
    const [postCards, setPostCarts] = useState<PostProps[]>(cards);
    const [currentCard, setCurrentCard] = useState<PostProps | null>(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleCompose = (post: PostProps) => {
        setIsModalVisible(true);
    };

    const handleEdit = (post: PostProps) => {
        const newPost = { ...post, id: postCards.length };
        const newPostCardList = [...postCards, newPost];
        setPostCarts(newPostCardList);
    };

    const handleDelete = (id: number) => {
        const newPostCardList = [...postCards];
        const index = newPostCardList.map((i) => i.id).indexOf(id);
        newPostCardList.splice(index, 1);
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
            edit={() => {
                setIsModalVisible(true);
                setCurrentCard(c);
            }}
        />
    ));

    return (
        <Section className="wrapper">
            <TitleBar
                compose={() => {
                    setIsModalVisible(true);
                    handleCompose(cards[5]);
                }}
                italicTitle="posts"
                strongTitle="Scheduled"
            />
            <PostCardList>{postCardList}</PostCardList>
            <PostCardModal
                date={currentCard?.date || ''}
                id={currentCard?.id || postCards.length}
                imageUrl={currentCard?.imageUrl || null}
                message={currentCard?.message || ''}
                time={currentCard?.time || ''}
                isVisible={isModalVisible}
                close={() => {
                    setCurrentCard(null);
                    setIsModalVisible(false);
                }}
                save={() => {
                    setCurrentCard(null);
                    console.log('save');
                }}
            />
        </Section>
    );
};
