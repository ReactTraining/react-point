import expect from 'expect'
import React from 'react'
import { render } from 'react-dom'
import { Simulate } from 'react-dom/test-utils'
import PointTarget from '../PointTarget'

const touch = (clientX, clientY) => ({
  clientX,
  clientY
})

describe('A <PointTarget>', () => {
  let node
  beforeEach(() => {
    node = document.createElement('div')
  })

  describe('with no children', () => {
    it('renders a button', () => {
      render(<PointTarget/>, node, () => {
        expect(node.firstChild.tagName.toLowerCase()).toEqual('button')
      })
    })
  })

  describe('with children', () => {
    it('renders them', () => {
      render(<PointTarget><div/></PointTarget>, node, () => {
        expect(node.firstChild.tagName.toLowerCase()).toEqual('div')
      })
    })
  })

  describe('when it is clicked', () => {
    it('calls the onPoint callback', () => {
      let called = false

      render(<PointTarget onPoint={() => called = true}/>, node, () => {
        Simulate.click(node.firstChild)

        expect(called).toBe(true)
      })
    })
  })

  describe('when it is "tapped"', () => {
    it('calls the onPoint callback', () => {
      let called = false

      render(<PointTarget onPoint={() => called = true}/>, node, () => {
        Simulate.touchStart(node.firstChild, { touches: [ touch(0, 0) ] })
        Simulate.touchEnd(node.firstChild, { touches: [ touch(0, 0) ] })

        expect(called).toBe(true)
      })
    })
  })

  describe('when a touch moves around too much', () => {
    it('does not call the onPoint callback', () => {
      let called = false

      render(<PointTarget onPoint={() => called = true}/>, node, () => {
        Simulate.touchStart(node.firstChild, { touches: [ touch(0, 0) ] })
        Simulate.touchMove(node.firstChild, { touches: [ touch(0, 20) ] })
        Simulate.touchEnd(node.firstChild, { touches: [ touch(0, 0) ] })

        expect(called).toBe(false)
      })
    })
  })

  describe('when a touch is canceled', () => {
    it('does not call the onPoint callback', () => {
      let called = false

      render(<PointTarget onPoint={() => called = true}/>, node, () => {
        Simulate.touchStart(node.firstChild, { touches: [ touch(0, 0) ] })
        Simulate.touchCancel(node.firstChild)

        expect(called).toBe(false)
      })
    })
  })
})
