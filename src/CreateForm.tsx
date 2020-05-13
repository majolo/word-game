import React, {useState} from "react";

interface CreateGameProps {
    // pushItemFunc: (item: string) => void;
}

export const CreateGameForm: React.FC<CreateGameProps> = props => {

    const [formValue, setFormValue] = useState('');
    const [shareValue, setShareValue] = useState('');

    function handleChange(event: any) {
        setFormValue(event.target.value)
    }

    function handleSubmit(event: any) {
        setShareValue("Share this link: " + window.location + btoa(formValue))
        // alert("creating page: " + btoa(formValue))
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={formValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Create Game" />
            </form>
            {shareValue}
        </div>

    );
}