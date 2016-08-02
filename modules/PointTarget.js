import React, { PropTypes } from 'react'

const touchX = (event) =>
  event.touches[0].clientX

const touchY = (event) =>
  event.touches[0].clientY

class PointTarget extends React.Component {
  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]).isRequired,
    tolerance: PropTypes.number,
    onPoint: PropTypes.func
  }

  static defaultProps = {
    component: 'div',
    tolerance: 10
  }

  handleClick = () => {
    if (!this.usingTouch && this.props.onPoint)
      this.props.onPoint()
  }
  
  handleTouchStart = (event) => {
    this.usingTouch = true
    
    if (this.touchStarted)
      return
    
    this.touchStarted = true
    
    this.touchMoved = false
    this.startX = touchX(event)
    this.startY = touchY(event)
  }
  
  handleTouchMove = (event) => {
    if (!this.touchMoved) {
      const { tolerance } = this.props

      this.touchMoved = Math.abs(this.startX - touchX(event)) > tolerance ||
                        Math.abs(this.startY - touchY(event)) > tolerance
    }
  }
  
  handleTouchCancel = () => {
    this.touchStarted = this.touchMoved = false
    this.startX = this.startY = 0
  }
  
  handleTouchEnd = () => {
    this.touchStarted = false
    
    if (!this.touchMoved && this.props.onPoint)
      this.props.onPoint()
  }
  
  componentWillMount() {
    this.usingTouch = false
  }
  
  render() {
    const { component, ...props } = this.props

    // Let React setup event handlers for us.
    // TODO: Warn if they try to pass these props in?
    props.onClick = this.handleClick
    props.onTouchStart = this.handleTouchStart
    props.onTouchMove = this.handleTouchMove
    props.onTouchCancel = this.handleTouchCancel
    props.onTouchEnd = this.handleTouchEnd

    // Avoid unknown props warning.
    delete props.onPoint
    delete props.tolerance

    return React.createElement(
      component,
      props
    )
  }
}

export default PointTarget
