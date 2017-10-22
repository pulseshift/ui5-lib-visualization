/* @flow */
/* eslint-env node */

import path from 'path'
import fs from 'fs-es6-promise'
import dox from 'dox'
import handlebars from 'handlebars'
import { getTemplateData } from './templates/ui5-control.js'

// register handlebars helper function
handlebars.registerHelper('sentence', function(str) {
  str = str.replace('\n', ' ')
  return str
})
handlebars.registerHelper('code', function(str) {
  str = str.replace('<code>', '')
  str = str.replace('</code>', '')
  str = str.replace(/\s/g, '')
  return str.indexOf('sap.') === 0
    ? `[${str}](https://openui5.hana.ondemand.com/#/api/${str})`
    : `\`${str}\``
})

// TODO: parse path from args
createDocs(path.resolve(__dirname, '../../src/ui5/viz'))

async function createDocs(dir) {
  try {
    // read ui5 control handlebars template
    const templateHbs = await fs.readFile(
      path.resolve(__dirname, './templates/ui5-control.hbs'),
      'utf-8'
    )

    // read files
    const files = await fs.readdir(dir)

    // create a markdown doc for each file
    for (let file of files) {
      const fileStat = await fs.stat(`${dir}/${file}`)
      if (!fileStat.isDirectory() && file !== 'library.js') {
        // read comments
        const code = await fs.readFile(`${dir}/${file}`, 'utf-8')
        const doxComments = dox.parseComments(code, {
          raw: true,
          skipSingleStar: true
        })
        const comments = postprocessDox(doxComments)

        // transform comments with template
        const templateData = getTemplateData(comments)
        const compiledMarkdown = handlebars.compile(templateHbs, {
          noEscape: true
        })(templateData)

        // write final markdown document
        await fs.writeFile(
          path.resolve(__dirname, `../${file.replace(/.js$/, '.md')}`),
          compiledMarkdown
        )
      }
    }
  } catch (e) {
    // promise was rejected and we can handle errors with try/catch!
    console.error(e) // eslint-disable-line no-console
  }
}

// transform comments to have easier access to tags and method parameters
function postprocessDox(comments) {
  return comments.map(comment => ({
    ...comment,
    params: comment.tags.filter(tag => tag.type === 'param'),
    tags: comment.tags.reduce((map, tag) => ({ ...map, [tag.type]: tag }), {})
  }))
}
