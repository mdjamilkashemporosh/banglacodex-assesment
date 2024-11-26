export interface InputProps {
    id: string;
    type?: 'text' | 'email' | 'password' | 'number';
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}