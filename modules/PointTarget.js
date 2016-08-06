import React, { PropTypes } from 'react'

const touchX = (event) =>
  event.touches[0].clientX

const touchY = (event) =>
  event.touches[0].clientY

class PointTarget extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    tolerance: PropTypes.number,
    onPoint: PropTypes.func,
    mouseDown: PropTypes.func,
    mouseUp: PropTypes.func
  }

  static defaultProps = {
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

  handleMouseDown = () => {
    if (this.props.mouseDown) {
      this.props.mouseDown()
    }
  }

  handleMouseUp = () => {
    if (this.props.mouseUp) {
      this.props.mouseUp()
    }
  }

  componentWillMount() {
    this.usingTouch = false
  }

  render() {
    const { children } = this.props

    const element = children ? React.Children.only(children) : <button/>

    return React.cloneElement(element, {
      onClick: this.handleClick,
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove,
      onTouchCancel: this.handleTouchCancel,
      onTouchEnd: this.handleTouchEnd,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    })
  }
}

export default PointTarget
