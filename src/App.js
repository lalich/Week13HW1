import logo from './logo.svg';
import './App.css';
import './components/Footer'
import './components/Header'
import './components/Main'


import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'


const App = () => {

    return (
        <div className='App'>
        <Header
            LinkedinProfile='https://www.linkedin.com/in/mark-d-lalich/'
            GithubProfile='https://github.com/lalich'/>
        <br></br>
        <Main />
        <br></br>
        <Footer />
        </div>
    )

}


export default App;
