import * as React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'

const {
  singleItemStyles,
  singleItemImageStyle,
  singleItemTextContainer,
  singleItemTextTitle
} = styles

class SingleItem extends React.Component {
  constructor(props) {
    super(props)
    this.animatedView = new Animated.Value(0)
    this.animatedText = new Animated.Value(0)
    this.animatedImage = new Animated.Value(0)
  }

  componentDidMount() {
    this.animateRender()
  }

  animateRender = () => {
    const animationDuration = 400
    const animationDelay = 150

    const animateView = Animated.timing(this.animatedView, {
      easing: Easing.elastic(0.9),
      toValue: 1,
      duration: animationDuration,
      delay: animationDelay
    })
    const animateText = Animated.timing(this.animatedText, {
      easing: Easing.elastic(0.9),
      toValue: 1,
      duration: animationDuration,
      delay: animationDelay
    })
    const animateImage = Animated.timing(this.animatedImage, {
      easing: Easing.elastic(0.9),
      toValue: 1,
      duration: animationDuration,
      delay: animationDelay
    })

    const animations = [animateView, animateText, animateImage]
    Animated.stagger(600, animations).start()
  }

  render() {
    const animateView = this.animatedView
    const animateText = this.animatedText
    const animateImage = this.animatedImage

    const { item } = this.props

    return (
      <Animated.View
        style={[singleItemStyles, { opacity: animateView }]}
      >
        <Animated.Image
          style={[singleItemImageStyle, { opacity: animateImage }]}
          source={{ uri: item.image_url }}
          resizeMode='contain'
        />
        <Animated.View
          style={[singleItemTextContainer, { opacity: animateText }]}
        >
          <Text
            style={singleItemTextTitle}
            key={item.id}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {item.name}
          </Text>
          <Text>First Brewed: {item.first_brewed}</Text>
        </Animated.View>
      </Animated.View>
    )
  }
}

SingleItem.propTypes = {
  item: PropTypes.object.isRequired
}
export default SingleItem
