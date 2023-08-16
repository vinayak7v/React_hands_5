import React, { PureComponent } from 'react'

export default class MyPureComponent extends PureComponent {
  render() {
    return (
      <div className='down'>
        <h1>PureComponentCount:{this.props.count}</h1>
      </div>
    )
  }
}