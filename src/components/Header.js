import '../index.css'


const Header = (props) => {

    return (
    <div className='Header'>
        Off with oth HeadZ
        < br/>
        < br/>
    <a href={props.LinkedinProfile} target='_blank' rel='noopener noreferrer'>Linkedin Profile</a>
    < br/>
    <a href={props.GithubProfile} target='_blank' rel='noopener noreferrer'>Github Profile</a>
    
    </div>
    )
}

export default Header