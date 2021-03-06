const { createDeprecatedFunction } = require('@ghadyani-framework/base')
const { defaultConfigurationsNamespace } = require('$redux/configurations/actions')

const configurationSetSelector = (
	({ configurations }, props) => (
		configurations
		.configurationSets
		.get(
			props
			? props.namespace
			: defaultConfigurationsNamespace
		)
	)
)

module.exports = {
	configurationSetSelector,
	getConfigurationSet: (
		createDeprecatedFunction({
			deprecatedMethodName: 'getConfigurationSet',
			func: configurationSetSelector,
			replacementMethodName: 'configurationSetSelector',
		})
	),
}
