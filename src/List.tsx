import React, { useContext, useState } from 'react';
import {CleanInput} from "./CreateForm";

interface WordFormProps {
    pushItemFunc: (item: string) => void;
}

export const WordForm: React.FC<WordFormProps> = props => {

    const [formValue, setFormValue] = useState('');

    function handleChange(event: any) {
        setFormValue(event.target.value)
    }

    function handleSubmit(event: any) {
        // Append to parent list of words
        // Sort the list
        // If it matches the word minus / then say congrats and how many guesses it took
        // var checkWord = require('check-word'), words = checkWord('en'); // setup the language for check, default is en

        // console.log(words.check(formValue))



        props.pushItemFunc(CleanInput(formValue))
        setFormValue('')
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={formValue} onChange={handleChange} />
            </label>
            {/*<input type="submit" value="Submit" />*/}
        </form>
    );
}

interface ListProps {
}

export const List: React.FC<ListProps> = props => {

    let guessWord = atob(window.location.pathname.slice(11))

    const items = [guessWord]
    const [listItems, setListItems] = useState(items);
    const renderItems = []
    for (const value of listItems) {
        if (value == guessWord) {
            renderItems.push(<WordForm pushItemFunc={addToList}/>)
            continue
        }
        renderItems.push(<ListItem ListItem={value}/>)
    }

    function addToList(item:string) {
        if (item == guessWord) {
            alert('Congratulations you got it with ' + listItems.length + ' attempts!');
        }

        var copyList = listItems.slice()
        copyList.push(item)
        copyList.sort()
        copyList = copyList.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        })
        setListItems(copyList)
    }

    return (
        <div>
            <div>
                Current Score: {renderItems.length -1}
            </div>
            {renderItems}
        </div>
    );
}


interface ListItemProps {
    ListItem: string;
}

export const ListItem: React.FC<ListItemProps> = props => {
    return (
        <div>
            {props.ListItem}
        </div>
    );
}