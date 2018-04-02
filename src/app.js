import React, {PureComponent} from 'react'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import Calendar from './components/calendar'
import 'react-select/dist/react-select.css'
import './app.css'

class App extends PureComponent {
    state = this.getInitialState()

    getInitialState() {
      return {
        selected: null,
        from: undefined,
        to: undefined
      };
    }

    render() {
        let { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
         if (this.state.from) {
           articles = articles.filter(article => new Date(article.date) > new Date(this.state.from))
         }
          if (this.state.to) {
            articles = articles.filter(article => new Date(article.date) < new Date(this.state.to))
          }

        return (
            <div className="App">
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelectChange} multi/>
                <Chart articles = {articles} />
                <Calendar selectedDays={{from: this.state.from, to:this.state.to}} handleDayClick = {this.handleDay} handleResetClick={this.handleResetClick}/>
                <ArticleList articles = {articles}/>
            </div>
        )
    }

    handleSelectChange = selected => this.setState({ selected })
    handleDay = day => this.setState({ from: day.from, to: day.to })
    handleResetClick = () => this.setState({ from: undefined, to: undefined })
}

export default App
