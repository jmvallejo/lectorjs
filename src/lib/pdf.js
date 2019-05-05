import fs from 'fs'

/**
 * Read pdf to dataURL
 *
 * @param {String} path file path
 * @returns {Promise} Promise that resolves to base64 data url
 */
export const readPDFToDataURL = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      try {
        const base64Url = `data:application/pdf;base64,${data.toString(
          'base64'
        )}`
        resolve(base64Url)
      } catch (err) {
        reject(err)
      }
    })
  })
}
