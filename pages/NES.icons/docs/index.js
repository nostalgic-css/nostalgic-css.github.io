import axios from 'axios'
import classnames from 'classnames'
import Router from 'next/router'
import React from 'react'





class Icons extends React.Component {
  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  componentDidMount () {
    if (typeof window !== 'undefined') {
      Router.replace('/docs/introduction')
    }
  }

  render = () => null
}





export default Icons
