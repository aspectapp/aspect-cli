import React from 'react';

export namespace Aspect {
  
}

export class HStack extends React.Component<HStack.Props, any> {
  customState = 'default';

  constructor(props: HStack.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<div children={this.props.children} style={{
alignItems: 'center',
boxSizing: 'border-box',
display: 'grid',
gap: '8px',
gridAutoFlow: 'column',
justifyContent: 'flex-start'
,
...this.props.style}} />
)
    }
  }
}

export namespace HStack {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    children?: JSX.Element | JSX.Element[];
  }
}

export class ModalView extends React.Component<ModalView.Props, any> {
  customState = 'default';

  constructor(props: ModalView.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<div children={
<><div children={this.props.property1} style={{
MozBoxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
WebkitBoxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
backgroundColor: '#fff',
boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
display: 'grid',
gridAutoFlow: 'row',
maxHeight: 'calc(100vh - 80px)',
minWidth: '480px',
overflowY: 'auto',
padding: '20px',
position: 'relative'
}} /></>
} style={{
alignItems: 'center',
backgroundColor: 'rgba(0, 0, 0, 0.5)',
display: 'flex',
height: '100vh',
justifyContent: 'center',
left: '0',
padding: '24px',
position: 'fixed',
top: '0',
width: '100vw',
zIndex: '5'
,
...this.props.style}} />
)
    }
  }
}

export namespace ModalView {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    property1?: JSX.Element | JSX.Element[];
  }
}

export class ProjectSettingsView extends React.Component<ProjectSettingsView.Props, any> {
  customState = 'default';

  constructor(props: ProjectSettingsView.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<VStack children={
<><HStack children={
<><Text text={this.props.title} style={{
fontSize: 15,
fontWeight: 500
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<HStack children={
<><Text text="Project ID" style={{
fontWeight: 500
}} />
<Text text={this.props.projectId}
onClick={this.props.onProjectIdClick?.bind(this)} style={{
border: '1px solid #ddd',
fontSize: 13,
padding: '6px 10px'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<HStack children={
<><Text text="API Key" style={{
fontWeight: 500
}} />
<Text text={this.props.apiKey}
onClick={this.props.onApiKeyClick?.bind(this)} style={{
border: '1px solid #ddd',
fontSize: 13,
padding: '6px 10px'
}} /></>
} style={{
justifyContent: 'space-between',
width: '100%'
}} />
<div onClick={this.props.onCreateApiKeyClick?.bind(this)}
children={
<><Text text="Generate new API key" style={{
minHeight: 0
}} /></>
} style={{
border: '1px solid #ddd',
fontSize: 13,
justifySelf: 'end',
padding: '6px 12px',
width: 'fit-content'
}} /></>
} style={{
fontSize: 13,
gap: 12,
minHeight: 166,
minWidth: 400,
padding: 24,
width: '100%'
,
...this.props.style}} />
)
    }
  }
}

export namespace ProjectSettingsView {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    title?: string;
apiKey?: string;
onApiKeyClick?: (e: any) => any;
onCreateApiKeyClick?: (e: any) => any;
projectId?: string;
onProjectIdClick?: (e: any) => any;
  }
}

export class ProjectViewButton extends React.Component<ProjectViewButton.Props, any> {
  customState = 'default';

  constructor(props: ProjectViewButton.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<HStack children={
<><Text text={this.props.title} style={{
fontSize: 11,
fontWeight: 500
}} />
<div onClick={this.props.onSettingsClick?.bind(this)} style={{
minHeight: 24,
width: 28
}} /></>
} style={{
backgroundColor: '#fff',
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
justifyContent: 'space-between',
minHeight: 36,
paddingLeft: 16,
paddingRight: 8,
width: 224
,
...this.props.style}} />
)
    }
  }
}

export namespace ProjectViewButton {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    title?: string;
onSettingsClick?: (e: any) => any;
  }
}

export class StateManagerPopover extends React.Component<StateManagerPopover.Props, any> {
  customState = 'default';

  constructor(props: StateManagerPopover.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<VStack style={{
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
minHeight: 116,
width: 271
,
...this.props.style}} />
)
    }
  }
}

export namespace StateManagerPopover {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    
  }
}

export class Text extends React.Component<Text.Props, any> {
  customState = 'default';

  constructor(props: Text.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<span onClick={this.props.onClick?.bind(this)}
children={this.props.text} style={this.props.style} />
)
    }
  }
}

export namespace Text {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    text?: string;
onClick?: (e: any) => any;
  }
}

export class UserPhotoUploadButton extends React.Component<UserPhotoUploadButton.Props, any> {
  customState = 'default';

  constructor(props: UserPhotoUploadButton.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<div style={{
borderRadius: '50%',
height: '112px',
overflow: 'hidden',
position: 'relative',
width: '112px'
,
...this.props.style}} />
)
    }
  }
}

export namespace UserPhotoUploadButton {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    
  }
}

export class UserView extends React.Component<UserView.Props, any> {
  customState = 'default';

  constructor(props: UserView.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<div children={
<><HStack style={{
borderBottom: '1px solid #e0e0e0',
gap: '24px',
justifyContent: 'space-between',
padding: '40px 24px 40px 0'
}} />
<div children={
<><div style={{
height: '100%',
overflow: 'auto',
padding: '20px 0',
zIndex: '2'
}} /></>
} style={{
overflow: 'hidden'
}} /></>
} style={{
display: 'flex',
flexDirection: 'column',
height: '100%',
overflow: 'hidden',
padding: '0 24px',
width: '100%'
,
...this.props.style}} />
)
    }
  }
}

export namespace UserView {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    
  }
}

export class VStack extends React.Component<VStack.Props, any> {
  customState = 'default';

  constructor(props: VStack.Props) {
    super(props);
    this.state = {};
  }
  
  render() {
    switch (this.customState) {
      default:
return (
<div children={this.props.children} style={{
alignContent: 'flex-start',
alignItems: 'flex-start',
boxSizing: 'border-box',
display: 'grid',
gap: '8px'
,
...this.props.style}} />
)
    }
  }
}

export namespace VStack {
  export interface Props {
    key?: string;
    style?: React.CSSProperties;
    children?: JSX.Element | JSX.Element[];
  }
}