import React, { Component } from 'react';
import './App.css';
import { Editor, EditorState } from 'draft-js';
import Autocomplete from 'draft-js-autocomplete';
import PropTypes from 'prop-types';

import 'draft-js/dist/Draft.css';

import mention from './autocompletes/mention';
import hashtag from './autocompletes/hashtag';

import './autocompletes/mention.css';
import './autocompletes/hashtag.css';

import { stateFromHTML } from "draft-js-import-html";

class App extends Component {
  static propTypes = {
    content: PropTypes.string,
  }

  autocompletes = [
    mention,
    hashtag
  ];

  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.state = {
      editorState: EditorState.createWithContent(stateFromHTML(props.content ?? ''))
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.content != this.props.content) {
      const updatedEditorState = EditorState.createWithContent(stateFromHTML(this.props.content ?? ''))
      this.setState({ editorState:updatedEditorState  })
    }
  }

  onChange = (editorState) => {
    this.setState({ editorState })
  };

  focusEditor = ()  => {
    this.editorRef.current?.focus()
    this.setState({focus: true})
  }

  blurEditor = ()  => {
    this.setState({focus: false})
  }

  render() {
    const { editorState } = this.state;

    return (
      <React.Fragment>
        <h1 className="Title">Draft-JS Autocomplete example</h1>
        <div className="Editor" onClick={this.focusEditor.bind(this)}>
          <Autocomplete editorState={editorState} focus={this.state.focus} onChange={this.onChange} autocompletes={this.autocompletes}>
            <Editor ref={this.editorRef} onBlur={this.blurEditor.bind(this)} />
          </Autocomplete>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
