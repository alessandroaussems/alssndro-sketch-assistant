import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const layerMeaningfulName: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context
    //Loop through layers
    for (const layer of utils.objects.anyLayer) {
      const value = layer.name;
      if (value.toLowerCase().includes('layer')) {
        // Report
        utils.report(`“${layer.name}” is not a meaningful name. It should be changed`, layer)
      }
    }
  },
  name: 'alssndro-sketch-assistant/layer-meaningful-name',
  title: 'Layer Meaningful Name',
  description: 'Reports if a the name of layer is not meaningful. For ex: Layer 1 => Header'
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'alssndro-sketch-assistant',
    rules: [layerMeaningfulName],
    config: {
      rules: {
        'alssndro-sketch-assistant/layer-meaningful-name': { active: true },
      },
    },
  }
}

export default assistant
