declare module '*.svg' {
    import React = require('react');

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

type Icons = 'calendar' | 'clock' | 'close' | 'compose' | 'delete' | 'edit' | 'image';

interface PostProps {
    id: string;
    message: string;
    imageUrl: string;
    date: string;
    time: string;
}

interface PostCardProps extends PostProps {
    edit: (id: number) => void;
    del: (id: number) => void;
}
