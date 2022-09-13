import React, { Component } from "react";
import { View, Text } from 'react-native';
import TopNav from '../nav/TopNav'
import Loader from '../common/Loader'
import MainIdea from './MainIdea'
import NoInclude from './NoInclude'
import Descriptors from './Descriptors'

class PromptGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      type: 'text',
      mainIdea: '',
      noInclude: [],
      noIncludeText: '',
      descriptorText: '',
      descriptors: []
    }

    this.updatePrompt = this.updatePrompt.bind(this)
    this.addNoInclude = this.addNoInclude.bind(this)
    this.removeNoInclude = this.removeNoInclude.bind(this)
    this.addDescriptor = this.addDescriptor.bind(this)
    this.removeDescriptor = this.removeDescriptor.bind(this)
  }

  componentDidMount() {
    this.setState({
      type: this.props.route.params.type,
      loaded: true
    })
  }

  updatePrompt() {
    const noInclude = this.state.noInclude.length > 0 ? `--no ${this.state.noInclude.join(", ")}` : ''
    const descriptors = this.state.descriptors.length > 0 ? `${this.state.descriptors.join(":: ")}:: ` : ''

    this.setState({
      prompt: `/imagine prompt: ${this.state.mainIdea}:: ${descriptors} ${noInclude}`
    })
  }

  addNoInclude() {
    this.setState({
      noInclude: [...this.state.noInclude, this.state.noIncludeText],
      noIncludeText: '',
    }, () => this.updatePrompt())
  }

  removeNoInclude(index) {
    noInclude = this.state.noInclude
    noInclude.splice(index, 1)
    this.setState({
      noInclude: noInclude,
    }, () => this.updatePrompt())
  }

  addDescriptor() {
    this.setState({
      descriptors: [...this.state.descriptors, this.state.descriptorText],
      descriptorText: '',
    }, () => this.updatePrompt())
  }

  removeDescriptor(index) {
    descriptors = this.state.descriptors
    descriptors.splice(index, 1)
    this.setState({
      descriptors: descriptors,
    }, () => this.updatePrompt())
  }


  render() {
    if(!this.state.loaded) {
      return <Loader />
    }
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TopNav navigation={this.props.navigation} back={true}/>
        <View style={{marginTop: 50, padding: 20}}>
          <MainIdea text={this.state.mainIdea} onChangeText={(text) => this.setState({mainIdea: text}, () => this.updatePrompt())}/>
          <NoInclude
            noInclude={this.state.noInclude}
            addNoInclude={this.addNoInclude}
            removeNoInclude={this.removeNoInclude}
            text={this.state.noIncludeText}
            onChangeText={(text) => this.setState({noIncludeText: text})}
          />
          <Descriptors
            descriptors={this.state.descriptors}
            addDescriptor={this.addDescriptor}
            removeDescriptor={this.removeDescriptor}
            text={this.state.descriptorText}
            onChangeText={(text) => this.setState({descriptorText: text})}
          />
          <View style={{borderColor: '#4CC9F0', borderWidth: 2, borderRadius: 10, padding: 10, marginTop: 10}}>
            <View style={{backgroundColor: 'background: rgba(76, 201, 240, 0.1);', padding: 10, borderRadius: 10}}>
              <Text>{this.state.prompt}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PromptGenerator
