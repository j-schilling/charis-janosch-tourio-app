import styled from "styled-components";
import { Input, Label } from "./Form";
import { StyledButton } from "./StyledButton.js";

const StyledArticle = styled.article`
  display: column;
  margin: 15px;
  justify-items: left;
`;

const FormCommentContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  justify-items: left;

  box-sizing: border-box;
  border-radius: 20px;
  padding:15px;
  z-index: 1;
  background-color: rgba(213, 202, 235, 0.6);
  margin-block:10px;
`;


const StyledFormCommentTitle = styled.p`
text-align: left;
margin: 5px;
color:black;
z-index: 5;
`;


const Textarea = styled.textarea`
  font-family: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;


// const StyledCommentsList = styled.div`
//   box-sizing: border-box;
//   border-radius: 20px;
//   padding:15px;
//   z-index: 1;
//   background-color: rgba(213, 202, 235, 0.6);
//   margin-block:10px;
//   width: 300px;
//   border-radius: 40px;
//   padding: 24px;
//   text-align: center;
//   position: relative;

// &::before {
//     content: "";
//     width: 0px;
//     height: 0px;
//     position: absolute;
//     border-left: 24px solid #fff;
//     border-right: 12px solid transparent;
//     border-top: 12px solid #fff;
//     border-bottom: 20px solid transparent;
//     left: 32px;
//     bottom: -24px;
//     background-color: rgba(213, 202, 235, 0.6);
//     }
// `

const StyledCommentsList = styled.div`
box-sizing: border-box;
z-index: 1;

  position: relative;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 24px;
  width: 90%;
  background-color: rgba(213, 202, 235, 0.6);
  border-radius: 40px;
  padding: 18px;
  padding-top:3px;
  text-align: left;
  color: #000;
  margin-bottom: 45px; /* Add margin bottom to create space for the speech bubble */

  /* Speech bubble */
  &::before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 24px solid rgba(213, 202, 235, 0.6);
    border-right: 12px solid transparent;
    border-top: 12px solid rgba(213, 202, 235, 0.6);
    border-bottom: 20px solid transparent;
    left: 32px;
    bottom: -31px;
  }
`;



export default function Comments({ locationName, comments }) {
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid black;
    border-radius: 0.8rem;
    padding: 0.5rem;
    text-align: center;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
    }
  `;

  function handleSubmitComment(e) {
    e.preventDefault();
  }

  return (
    <StyledArticle>
      <FormCommentContainer onSubmit={handleSubmitComment}>
        <StyledFormCommentTitle> Add your own comment</StyledFormCommentTitle>
        <Label htmlFor="name">Your Name</Label>
        <Input type="text" name="name" placeholder="your name" />
        <Label htmlFor="comment">Your Comment</Label>
        <Textarea type="text"
          name="comment"
          placeholder="comment here..."
          cols="30"
          rows="5"
        />
        <StyledButton type="submit">Send</StyledButton>
      </FormCommentContainer>
      {comments && (
        <>
          <h3> {comments.length} fans commented on this place:</h3>

          {comments.map(({ name, comment }, idx) => {
            return (
              <StyledCommentsList key={idx}>
                <p>
                  <small>
                    <strong>{name}</strong> commented on 📍{locationName}
                  </small>
                </p>
                <span>{comment}</span>
              </StyledCommentsList>
            );
          })}
        </>
      )}
    </StyledArticle>
  );
}
