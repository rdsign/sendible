import { FC, ChangeEvent, useEffect, useRef } from 'react';
import { date, time } from 'utils';

interface InputProps {
    id: string;
    initialValue?: string;
    mask?: 'date' | 'time';
    maxLength?: number;
    placeholder?: string;
    change: (e: string) => void;
}

export const Input: FC<InputProps> = (props) => {
    const { id, initialValue, mask, maxLength, placeholder, change } = props;
    const masks = { date, time };

    const ref = useRef<any>(null);

    useEffect(() => {
        initialValue && (ref.current.value = initialValue);
    }, [initialValue]);

    const handleChange = (v: string) => {
        let format = v;
        if (mask) {
            format = masks[mask](v);
        }
        ref.current.value = format;
        change(format);
    };

    return (
        <input
            id={id}
            maxLength={maxLength}
            placeholder={placeholder}
            ref={ref}
            type="input"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
        />
    );
};
