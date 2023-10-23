import { Component } from "react";
import { QuizList } from "./QuizList/QuizList";


export class App extends Component {
  state = {
    quizItems: []
  };

  render() {
    return <div>
  <QuizList />
</div>
  } 
  
}
