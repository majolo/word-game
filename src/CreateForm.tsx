import React, {useState} from "react";
import {List} from "./List";

interface CreateGameProps {
    // pushItemFunc: (item: string) => void;
}

export function CleanInput(input: string) {
    return input.toLowerCase().trim()
}

export const CreateGameForm: React.FC<CreateGameProps> = props => {

    const [formValue, setFormValue] = useState('');
    const [shareValue, setShareValue] = useState('');

    function handleChange(event: any) {
        setFormValue(event.target.value)
    }

    function handleSubmit(event: any) {
        // TODO: better joining here
        setShareValue( window.location + btoa(CleanInput(formValue)))
        event.preventDefault();
    }

    return (
        <div>
            <p><small>Enter a word to create a game:</small></p>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={formValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Create Game" />
            </form>
            {shareValue.length > 0 && (
                <p>Share this link: <a href={shareValue}>{shareValue}</a></p>
            )}
        </div>

    );
}