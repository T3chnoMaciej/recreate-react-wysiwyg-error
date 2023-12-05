"use client"

"use client";
import { useState } from 'react';
import { BtnBold, BtnItalic, Editor, EditorProvider, Toolbar, BtnNumberedList, BtnBulletList, BtnUnderline} from 'react-simple-wysiwyg';

export default function NotesComponent() {
    const [notesValue, setNotesValue] = useState('Start typing...');

    function onChangeEditor(e) {
        setNotesValue(e.target.value);
    }

    return(
        <EditorProvider>
            <Editor value={notesValue} onChange={onChangeEditor} >
                <Toolbar>
                    <BtnBold />
                    <BtnUnderline />
                    <BtnItalic />
                    <div className="rsw-separator" />
                    <BtnNumberedList />
                    <BtnBulletList />
                </Toolbar>
            </Editor>
        </EditorProvider>
    )
}