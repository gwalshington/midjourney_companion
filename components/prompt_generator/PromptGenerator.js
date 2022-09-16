import React, { Component } from "react";
import { View, Text, FlatList, Image } from 'react-native';
import TopNav from '../nav/TopNav'
import Loader from '../common/Loader'
import MainIdea from './MainIdea'
import NoInclude from './NoInclude'
import Descriptors from './Descriptors'
import ItemSelector from './ItemSelector'
import {
  addPromptItem,
  removePromptItem,
  updatePromptString,
  updateMainIdea,
  updatePromptSingleItem
} from '../../actions/index';
import { connect } from 'react-redux';

class PromptGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      noIncludeText: '',
      descriptorText: '',
    }

    this.addNoInclude = this.addNoInclude.bind(this)
    this.removeNoInclude = this.removeNoInclude.bind(this)
    this.addDescriptor = this.addDescriptor.bind(this)
    this.removeDescriptor = this.removeDescriptor.bind(this)
    this.updateSelector = this.updateSelector.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.updateMainIdea = this.updateMainIdea.bind(this)
  }

  componentDidMount() {
    this.props.updatePromptSingleItem('type', this.props.route.params.type)
    this.setState({
      loaded: true
    })
  }

  async updateMainIdea(text) {
    await this.props.updatePromptSingleItem('mainIdea', text)
    await this.props.updatePromptString()
  }

  async addNoInclude() {
    await this.updateSelector('noInclude', this.state.noIncludeText)
    this.setState({
      noIncludeText: '',
    }, () => this.props.updatePromptString())
  }

  removeNoInclude(index) {
    this.props.removePromptItem('noInclude', index)
    this.props.updatePromptString()
  }

  async addDescriptor() {
    await this.updateSelector('descriptors', this.state.descriptorText)
    this.setState({
      descriptorText: '',
    }, () => this.props.updatePromptString())
  }

  removeDescriptor(index) {
    this.removeItem('descriptors', index)
    this.props.updatePromptString()
  }

  updateSelector(key, value) {
    this.props.addPromptItem(key, value)
    this.props.updatePromptString()
  }

  removeItem(key, index) {
    this.props.removePromptItem(key, index)
    this.props.updatePromptString()
  }

  render() {
    if(!this.state.loaded) {
      return <Loader />
    }
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TopNav navigation={this.props.navigation} back={true}/>
        <View style={{marginTop: 50, padding: 20}}>
          <MainIdea text={this.props.prompt.mainIdea} onChangeText={(text) => this.updateMainIdea(text)}/>
          <NoInclude
            noInclude={this.props.prompt.noInclude}
            addNoInclude={this.addNoInclude}
            removeNoInclude={this.removeNoInclude}
            removeItem={this.removeItem}
            text={this.state.noIncludeText}
            onChangeText={(text) => this.setState({noIncludeText: text})}
          />
          <Descriptors
            descriptors={this.props.prompt.descriptors}
            addDescriptor={this.addDescriptor}
            removeDescriptor={this.removeDescriptor}
            text={this.state.descriptorText}
            onChangeText={(text) => this.setState({descriptorText: text})}
          />
          <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginBottom: 10}}>
            <ItemSelector
              items={this.props.presets.artists}
              keyName={'artists'}
              title={'Artist'}
              selectItem={this.updateSelector}
              removeItem={this.removeItem}
              color={"#FFD166"}
              halfColor={"rgba(255, 209, 102, 0.3)"}
              selectedValues={this.props.prompt.artists}
            />
            <ItemSelector
              items={this.props.presets.lighting}
              keyName={'lighting'}
              title={'Lighting'}
              selectItem={this.updateSelector}
              removeItem={this.removeItem}
              color={"#FFD166"}
              halfColor={"rgba(255, 209, 102, 0.3)"}
              selectedValues={this.props.prompt.lighting}
            />
            <ItemSelector
              items={this.props.presets.camera}
              keyName={'camera'}
              title={'Camera'}
              selectItem={this.updateSelector}
              removeItem={this.removeItem}
              color={"#FFD166"}
              halfColor={"rgba(255, 209, 102, 0.3)"}
              selectedValues={this.props.prompt.camera}
            />
            <ItemSelector
              items={this.props.presets.colors}
              keyName={'colors'}
              title={'Colors'}
              selectItem={this.updateSelector}
              removeItem={this.removeItem}
              color={"#FFD166"}
              halfColor={"rgba(255, 209, 102, 0.3)"}
              selectedValues={this.props.prompt.colors}
            />
          </View>
          <View style={{borderColor: '#4CC9F0', borderWidth: 2, borderRadius: 10, padding: 10, marginTop: 10}}>
            <View style={{backgroundColor: 'background: rgba(76, 201, 240, 0.1);', padding: 10, borderRadius: 10}}>
              <Text>{this.props.prompt.prompt}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    presets: state.presets,
    prompt: state.prompt
  };
}

export default connect(
  mapStateToProps, {
    addPromptItem,
    removePromptItem,
    updatePromptString,
    updateMainIdea,
    updatePromptSingleItem
  })(PromptGenerator);


//export default PromptGenerator
