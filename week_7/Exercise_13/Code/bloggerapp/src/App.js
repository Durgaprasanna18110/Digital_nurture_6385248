import React, { Component } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'book'  // initial value
    };
  }

  renderContent() {
    // 1. Using if-else
    if (this.state.selected === 'book') {
      return <BookDetails />;
    } else if (this.state.selected === 'blog') {
      return <BlogDetails />;
    } else if (this.state.selected === 'course') {
      return <CourseDetails />;
    } else {
      return <p>❌ Please select a valid option.</p>;
    }
  }

  render() {
    // 2. Using element variable
    let content;
    switch (this.state.selected) {
      case 'book':
        content = <BookDetails />;
        break;
      case 'blog':
        content = <BlogDetails />;
        break;
      case 'course':
        content = <CourseDetails />;
        break;
      default:
        content = null;
    }

    // 3. Using ternary (optional alternate demo)
    const showMessage = this.state.selected === 'blog'
      ? <p>Blog is currently selected.</p>
      : <p>Another component is selected.</p>;

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>📘 BloggerApp Dashboard</h1>

        <div>
          <button onClick={() => this.setState({ selected: 'book' })}>Show Book</button>
          <button onClick={() => this.setState({ selected: 'blog' })}>Show Blog</button>
          <button onClick={() => this.setState({ selected: 'course' })}>Show Course</button>
        </div>

        <div style={{ marginTop: '20px' }}>
          {this.renderContent()} {/* From method */}
          {/* OR use content here instead: {content} */}
          {showMessage}
        </div>
      </div>
    );
  }
}

export default App;
