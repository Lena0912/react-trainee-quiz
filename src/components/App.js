import { Component } from "react";
import { QuizList } from "./QuizList/QuizList";
import initialQuizItems from '../data.json';
import { SearchBar } from "./SearchBar/SearchBar";



export class App extends Component {
  state = {
    quizItems: initialQuizItems,
  };

  render() {
    return (
      <div>
        <SearchBar/>
        <QuizList items={ this.state.quizItems} />
      </div>
    );
  }
}
