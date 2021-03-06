import React from 'react';
import Vote from './Vote';
import Delete from './Delete';
import Moment from 'react-moment';
import { Link } from '@reach/router';

const CommentsCard = props => {
  const { comments, article_id, user } = props;
  return (
    <>
      <ul className="comments">
        {comments.map(comment => (
          <li id="comment-item" key={comment.comment_id}>
            <div
              className={
                comment.author === user.username
                  ? 'vote-body'
                  : 'vote-body-no-delete'
              }
            >
              <Vote
                comment_id={comment.comment_id}
                votes={comment.votes}
                article_id={article_id}
                className="float-left"
              />
              <p className="align-body-center">{comment.body}</p>
              {comment.author === user.username && (
                <Delete
                  comment_id={comment.comment_id}
                  article_id={article_id}
                />
              )}
            </div>
            <Link to={`/users/${comment.author}`}>{comment.author}</Link>{' '}
            <Moment fromNow>{comment.created_at}</Moment>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentsCard;
