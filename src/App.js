import React, { Component } from 'react';
import api from './services/api'
import styled from 'styled-components'

const Title = styled.li`
    color:blue;
`
export default class src extends Component {
    state = {
        repo: []
    }
    async componentDidMount(){
        try{
            const { data } = await api.get('repos/angular/angular')
            console.log(data)
            this.setState({
                repo : [...this.state.repo, data]
            })
        }catch(err){
            console.log(err.status)
        }
    }

  render() {
    return (
        <div>
            {this.state.repo.map(data =>(
                <div className='repositories'>
                  <Title>  { data.name } / {data.forks}</Title>
                </div>
            ))}
        </div>
    );
  }
}
