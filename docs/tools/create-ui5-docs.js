/* @flow */
/* eslint-env node */

import path from 'path'
import fs from 'fs'
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

// read ui5 control handlebars template
const templateHbs = fs.readFileSync(
  path.resolve(__dirname, './templates/ui5-control.hbs'),
  'utf-8'
)

// read files
const dir = path.resolve(__dirname, '../../src/ui5/viz/')
const files = fs.readdirSync(dir)

// create a markdown doc for each file
files
  .filter(
    file =>
      !fs.statSync(`${dir}/${file}`).isDirectory() && file !== 'library.js'
  )
  .forEach(file => {
    // read comments
    const code = fs.readFileSync(`${dir}/${file}`, 'utf-8')
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
    fs.writeFileSync(
      path.resolve(__dirname, `../${file.replace(/.js$/, '.md')}`),
      compiledMarkdown
    )
  })

// transform comments to have easier access to tags and method parameters
function postprocessDox(comments) {
  return comments.map(comment => ({
    ...comment,
    params: comment.tags.filter(tag => tag.type === 'param'),
    tags: comment.tags.reduce((map, tag) => ({ ...map, [tag.type]: tag }), {})
  }))
}
