import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user:{
                name: ""
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/metinbicaksiz");
        const json = await data.json();
        this.setState({
            user: json
        })
        // this.timer = setInterval(() => {
        //     console.log("timer")
        // }, 1000 )
    }

    componentDidUpdate(prevProps, prevState) {
       // update process
    }

    componentWillUnmount() {
        // cleanup process
        // clearInterval(this.timer);
    }

    render() {
        const {name, location, avatar_url, blog } = this.state.user;
        return (
            <div className="userCard">
                <h1>Name: {name}</h1>
                <h3>Location: {location}</h3>
                <h3>Blog: {blog}</h3>
                <h3><img src={avatar_url} alt="avatar"/></h3>
            </div>
        )
    };
}

export default UserClass;