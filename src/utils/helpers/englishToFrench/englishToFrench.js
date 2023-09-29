import { i18n } from '@/plugins'
import { translations } from "@/content"

const englishToFrench = (app) => {
    app.use(i18n, translations)
}

export { englishToFrench };
