import React, { Component } from 'react'
import { readPDFToDataURL } from '../lib/pdf'
import { Document, Page } from 'react-pdf'

class PdfDocument extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fileUrl: null,
      numPages: 0
    }
  }

  componentDidMount () {
    readPDFToDataURL(
      'E:\\Juan Manuel\\Dropbox\\Dropbox\\vscode-keyboard-shortcuts-windows.pdf'
    ).then(fileUrl => {
      console.warn('fileUrl', fileUrl)
      this.setState({
        fileUrl
      })
    }).catch(err => {
      alert(err.message)
    })
  }

  _onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages })
  }

  render () {
    const { fileUrl, numPages } = this.state
    if (!fileUrl) {
      return null
    }
    const pages = []
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <div key={i}>
          <Page key={i} pageNumber={i} scale={1} />
          <hr />
        </div>
      )
    }
    return (
      <Document file={fileUrl} onLoadSuccess={this._onDocumentLoad} loading='loading...'>
        {pages}
      </Document>
    )
  }
}

export default PdfDocument
