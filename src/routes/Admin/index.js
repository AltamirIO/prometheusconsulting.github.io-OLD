window.CMS_MANUAL_INIT = true

const CMS  = require ('netlify-cms')
const React = require('react')

export default (props) => {
  window.initCMS()
  return <div id="nc-root" />
}
