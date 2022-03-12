import {Component} from 'react'

class Home extends Component {
    state = {
        
        wtoken : '',
        seacrchValue:''
    }

    componentDidMount () {
        this.getData()
    }

    getData = async () => {
        const url = 'http://3.109.141.224:5000/api/user-access-token'

        

        const resposne = await fetch(url)
        if (resposne.ok ===true) {
            const responseData = await resposne.json()
            
            const tok = responseData.token
            this.setState({
                wtoken:tok
            })
        }

    }

    onSearchValue = event => {
        const {seacrchValue} = this.state
        console.log(event.target.value)
        this.setState({
            seacrchValue:event.target.value
        })
    }

    onSearch = async () => {
        const {seacrchValue,wtoken} = this.state
        

        const options = {
            method: 'GET',
            headers:{
                
                'user-access-token':  wtoken
            }
        }

        const url = `http://3.109.141.224:5000/api/data?search_string=${seacrchValue}`

        const resposne = await fetch (url,options)
        console.log(resposne)
        if (response.ok === true) {
            const data = await response.json()
            console.log(data)
        } else {
            console.log('fetch err')
        }

    }



    render() {
        const {seacrchValue} = this.state
        
        return(
                <div>
                    <input type="search" value={seacrchValue} onChange={this.onSearchValue}  />
                    <button onClick={this.onSearch} >
                        search
                    </button>
                </div>
        )
    }
}

export default Home