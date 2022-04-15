/* eslint-disable import/imports-first */
import { convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic';
import draftToHtml from 'draftjs-to-html';

import { EditorWrapper } from './styles';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ReactDraftEditor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false },
);

const Editor = ({ editorState, setEditorState }) => {
  const onEditorStateChange = (state) => {
    setEditorState(state);
  };

  return (
    <EditorWrapper>
      <ReactDraftEditor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </EditorWrapper>
  );
};
export default Editor;
