import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from "faker";

const App = () => {
    return (
      <div className="ui container comments">
          <ApprovalCard>
              <div>
                  <h4>Warning!</h4>
                 Are you sure you want to do this?
              </div>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                chatText="It's over 9000!"
                chatLogo={faker.image.avatar()}
             />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                chatText="TLDR; I like burritos."
                chatLogo={faker.image.avatar()}
             />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 2:45PM"
                chatText="Pray for me."
                chatLogo={faker.image.avatar()}
            />
          </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));