import React, { Component } from 'react';
import Youtube from './api/Youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

export class App extends Component {
    
    state = { 
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.onTermSubmit('react');
    }

    onTermSubmit = async (term) => {
        
        const response =  await Youtube.get('/search',  {
            params: {
                q: term
            }
        })

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    
    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={ this.onTermSubmit }/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={ this.state.videos } onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App