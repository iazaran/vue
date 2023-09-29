import i18nPlugin from '../../../plugins/i18n'

const englishToFrench = (app) => {
    app.use(i18nPlugin, {
        greetings: {
          hello: 'Bonjour!'
        }
    })
}

export { englishToFrench };
