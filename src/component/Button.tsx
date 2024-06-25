import { MouseEvent } from 'react';

interface BoxValue {
    value: string;
    className: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ value, onClick, className }: BoxValue) {
    return (
        <div>
            <button onClick={onClick} className={className}>{value}</button>
        </div>
    );
}
