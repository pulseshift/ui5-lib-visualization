/**
 * A control template consists of the following parts:
 * 1. main information
 * 2. usage samples
 * 3. properties
 * 4. aggregations
 * 5. events
 * 6. methods
 */
const defaultTemplateData = {
  main: {},
  samples: [],
  properties: [],
  aggregations: [],
  events: [],
  methods: []
}

// define block types
const blockTypes = [
  {
    type: 'MAIN',
    is: comment => comment.isClass === true,
    transform: comment => ({
      name: comment.tags.alias
        ? comment.tags.alias.string
        : 'no `alias` tag defined',
      description: comment.tags.class
        ? comment.tags.class.string
        : 'no `class` tag defined',
      extends: comment.tags.extends ? comment.tags.extends.string : null
    }),
    mutateTemplate: (templateData, blockData) => {
      templateData.main = blockData
      return templateData
    }
  },
  {
    type: 'SAMPLE',
    is: comment => comment.tags.example !== undefined,
    transform: comment => ({
      name: comment.tags.example
        ? comment.tags.example.string
        : 'no `example` tag defined',
      description: comment.description
        ? comment.description.full
        : 'no `description` defined',
      code: comment.tags.code
        ? comment.tags.code.string
        : 'no `code` tag defined',
      codeType:
        comment.tags.type && comment.tags.type.types.length > 0
          ? comment.tags.type.types[0]
          : 'js'
    }),
    mutateTemplate: (templateData, blockData) => {
      templateData.samples = templateData.samples.concat(blockData)
      return templateData
    }
  },
  {
    type: 'PROPERTY',
    is: comment =>
      comment.isEvent === false &&
      comment.tags.event === undefined &&
      comment.ctx &&
      comment.ctx.type === 'property' &&
      comment.code.indexOf('type') !== -1 &&
      comment.code.indexOf('multiple') === -1,
    transform: comment => ({
      name: comment.ctx.name,
      type:
        comment.code.indexOf('type') !== -1
          ? comment.code.match(/["']?type["']?\s*:\s*["'](\S*)["']/m)[1]
          : 'no property type defined',
      default:
        comment.code.indexOf('defaultValue') > -1
          ? comment.code.match(/["']?defaultValue["']?\s*:\s*(\S*)\s*[,}]/m)[1]
          : 'no default defined',
      description: comment.description
        ? comment.description.full
        : 'no `description` defined'
    }),
    mutateTemplate: (templateData, blockData) => {
      templateData.properties = templateData.properties.concat(blockData)
      return templateData
    }
  },
  {
    type: 'AGGREGATION',
    is: comment =>
      comment.isEvent === false &&
      comment.tags.event === undefined &&
      comment.ctx &&
      comment.ctx.type === 'property' &&
      comment.code.indexOf('type') !== -1 &&
      comment.code.indexOf('multiple') !== -1,
    transform: comment => ({
      name: comment.ctx.name,
      type:
        comment.code.indexOf('type') !== -1
          ? comment.code.match(/["']?type["']?:\s*["'](\S*)["']/m)[1]
          : 'no property type defined',
      cardinality: comment.code.match(/["']?multiple["']?:\s*true/m)
        ? '0..n'
        : '0..1',
      description: comment.description
        ? comment.description.full
        : 'no `description` defined'
    }),
    mutateTemplate: (templateData, blockData) => {
      templateData.aggregations = templateData.aggregations.concat(blockData)
      return templateData
    }
  },
  {
    type: 'EVENT',
    is: comment =>
      comment.isEvent &&
      comment.tags.event &&
      comment.code.indexOf('type') === -1 &&
      comment.ctx &&
      comment.ctx.type === 'property',
    transform: comment => ({
      name: comment.ctx.name,
      description: comment.description
        ? comment.description.full
        : 'no `description` defined',
      parameters: []
    }),
    mutateTemplate: (templateData, blockData) => {
      templateData.events = templateData.events.concat(blockData)
      return templateData
    }
  },
  {
    type: 'EVENT_PARAMETER',
    is: comment =>
      comment.isEvent &&
      comment.tags.event &&
      comment.code.indexOf('type') !== -1 &&
      comment.ctx &&
      comment.ctx.type === 'property',
    transform: comment => ({
      event: comment.tags.event
        ? comment.tags.event.string
        : 'no `event` tag defined',
      name: comment.ctx.name,
      type:
        comment.code.indexOf('type') !== -1
          ? comment.code.match(/["']?type["']?:\s*["'](\S*)["']/m)[1]
          : 'no property type defined',
      description: comment.description
        ? comment.description.full
        : 'no `description` defined'
    }),
    mutateTemplate: (templateData, blockData) => {
      templateData.events = templateData.events.map(
        event =>
          event.name === blockData.event
            ? {
                ...event,
                parameters: event.parameters.concat(blockData)
              }
            : event
      )
      return templateData
    }
  },
  {
    type: 'METHOD',
    is: comment =>
      comment.isPrivate === false &&
      comment.tags.override === undefined &&
      comment.ctx &&
      comment.ctx.type === 'method',
    transform: comment => ({
      name: comment.ctx.name,
      return: comment.tags.return
        ? {
            types: comment.tags.return.types,
            description: comment.tags.return.description
          }
        : null,
      description: comment.description
        ? comment.description.full
        : 'no `description` defined',
      definition: `${comment.ctx.name}(${comment.params
        .map(
          param =>
            `${param.name.replace(/\W/g, '')}${param.optional ? '?' : ''}`
        )
        .join(', ')})`,
      parameters: comment.params.map(param => ({
        name: param.name.replace(/\W/g, ''),
        description: param.description,
        types: param.types || [],
        // NOTE: default must be contained in descripton right now
        optional: param.optional
      }))
    }),
    mutateTemplate: (templateData, blockData) => {
      templateData.methods = templateData.methods.concat(blockData)
      return templateData
    }
  }
]

// transform comments to template data
const getTemplateData = comments =>
  comments.reduce(
    (templateData, comment) =>
      blockTypes
        .filter(blockType => blockType.is(comment))
        .reduce(
          (templateData, blockType) =>
            blockType.mutateTemplate(
              templateData,
              blockType.transform(comment)
            ),
          templateData
        ),
    defaultTemplateData
  )

export { getTemplateData }
