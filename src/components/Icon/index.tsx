import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { SVGMockup } from './SVGMockup';

interface IconProps {
    icon: Icons;
}

export const Icon: FC<IconProps> = (props) => {
    const { icon } = props;

    const SVG = () => (
        <ReactSVG
            src={`assets/svgs/icon_${icon}.svg`}
            wrapper="svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
        />
    );

    return process.env.NODE_ENV !== 'test' ? <SVG /> : <SVGMockup />;
};
