import { FC } from 'react';
import { TitleBar, PostCard } from 'components';
import { cards } from 'utils/fakeList';
import { PostCardList, Section } from './index.styles';

export const Home: FC = () => {
    const postCardList = cards.map((c) => (
        <PostCard
            date={c.date}
            key={c.id}
            id={c.id}
            imageUrl={c.imageUrl}
            message={c.message}
            time={c.time}
            del={() => console.log('del')}
            edit={() => console.log('edit')}
        />
    ));

    return (
        <Section className="wrapper">
            <TitleBar italicTitle="posts" strongTitle="Scheduled" />
            <PostCardList>{postCardList}</PostCardList>
        </Section>
    );
};
