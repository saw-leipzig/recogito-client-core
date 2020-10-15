import React, { Component } from 'preact/compat';
import ContentEditable from 'react-contenteditable';
import i18n from '../../../i18n';

/** 
 * A basic text entry field, for reuse in different widgets.
 * 
 * Note that react-contenteditable seems to have compatibility 
 * issues with React hooks, therefore this component is 
 * implemented as a class.
 */
export default class TextEntryField extends Component {

  // CTRL+Enter functions as Ok
  onKeyDown = evt => {
    if (evt.which === 13 && evt.ctrlKey)
      this.props.onSaveAndClose();
  }

  // Focus on render
  onRender = ref => {
    if (ref && this.props.editable)
      ref.focus();
  }

  render() {
    return (
      <ContentEditable
        innerRef={this.onRender}
        className="r6o-editable-text" 
        html={this.props.content}
        data-placeholder={this.props.placeholder || i18n.t('Add a comment...')}
        disabled={!this.props.editable}
        onChange={this.props.onChange}
        onKeyDown={this.onKeyDown} />
    )
  }

} 