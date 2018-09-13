import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as saveActions from '../../actions/saveActions';
import * as courseActions from '../../actions/topStoriesActions';
import TopStoriesList from './TopStoriesList'
import { BodyStyle, Wrapper, MoreButton, MoreLink } from '../style';

class TopStoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topStories: this.props.topStories,
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.saveStory = this.saveStory.bind(this);
  }

  onDismiss(story) {
    this.props.courseActions.dismissStory(story);
  }

  saveStory(story) {
    const data = {
      objectID: story.id,
      title: story.title,
      url: story.url
    }
    this.props.saveActions.createSave(data);
    this.props.courseActions.dismissStory(story);
  }

  render() {
    if (!this.props.topStories.length) {
      return(
        <BodyStyle>
          <Wrapper>Sorry there was an issue loading...</Wrapper>
          <MoreLink to="/topStories">
            <MoreButton> R E L O A D </MoreButton>
          </MoreLink>
        </BodyStyle>
      )
    }
    return (
      <BodyStyle>

        <TopStoriesList
          topStories={this.props.topStories}
          onDismiss={this.onDismiss}
          onSave={this.saveStory}
        />

      </BodyStyle>
    );
  }
}

TopStoriesContainer.propTypes = {
  topStories: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    topStories: state.topStories.topStories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveActions: bindActionCreators(saveActions, dispatch),
    courseActions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesContainer);
