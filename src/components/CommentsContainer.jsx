const CommentsContainer = () => {
  const commentsData = [
    {
        name: "John Doe",
        text: "This is an amazing video!",
        replies: [
          {
            name: "Alice",
            text: "Great point!",
            replies: [
              {
                name: "Bob",
                text: "Can you elaborate more on that?",
                replies: [
                  {
                    name: "Charlie",
                    text: "I totally agree with you.",
                    replies: []
                  }
                ]
              }
            ]
          },
          {
            name: "Eve",
            text: "Interesting perspective.",
            replies: [
              {
                name: "Dave",
                text: "That's a valid argument.",
                replies: []
              }
            ]
          }
        ]
      }
  ];

  const Comments = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="my-2 flex rounded-lg bg-gray-100 px-2 py-3 shadow-sm">
        <img
          className="h-12 w-12"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="user image"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div>
        <Comments key={index} data={comment} />
        <div className=" border border-l-black ml-5">
            <CommentsList key={index} comments={comment.replies}/>
        </div>
      </div>
    ));
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-3xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
