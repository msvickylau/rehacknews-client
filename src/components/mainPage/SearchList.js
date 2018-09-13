import React from 'react';
import PropTypes from 'prop-types';
import {
  WrapperBar,
  PointsContainerBar,
  CommentsButtonBar,
  SaveContainerBar,
  StoryContainerBar,
  Wrapper,
  PointsContainer,
  CommentsButton,
  StoryContainer,
  TitleLink,
  FooterLink,
  XButton,
  HeartButton
} from '../style';

const SearchList = ({ stories, onDismiss, onSave }) =>
  <div className="table">
    <WrapperBar>
      <PointsContainerBar>PTs</PointsContainerBar>
      <CommentsButtonBar>CMTs</CommentsButtonBar>
      <SaveContainerBar>SAVE</SaveContainerBar>
      <StoryContainerBar>STORY</StoryContainerBar>
    </WrapperBar>

    {stories.map(item =>
      <Wrapper key={item.objectID}>
        <PointsContainer>{item.points}</PointsContainer>

        <CommentsButton
          target="_blank"
          href={'https://news.ycombinator.com/item?id=' + item.objectID }>
          {item.num_comments}
        </CommentsButton>

        <HeartButton onClick={() => onSave(item)}>
          <i className="fas fa-heart"></i>
        </HeartButton>

        <StoryContainer>
          <TitleLink href={item.url}>{item.title}</TitleLink>
          <FooterLink href={item.url}>{item.url}</FooterLink>
        </StoryContainer>

        <XButton onClick={() => onDismiss(item.objectID)}>
          &#10006;
        </XButton>

      </Wrapper>
    )}
  </div>

SearchList.propTypes = {
  stories: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default SearchList;
