import { useContext } from 'react'

import { LANG_TEXT_MAP } from '~/common/enums'
import {
  DropdownDialog,
  Form,
  LanguageContext,
  LanguageSwitchContent,
  Translate,
} from '~/components'

const SwitchLanguage = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <DropdownDialog
      dropdown={{
        content: <LanguageSwitchContent isInDropdown />,
        placement: 'bottom-end',
      }}
      dialog={{
        content: <LanguageSwitchContent />,
        title: (
          <Translate
            zh_hant="修改界面語言"
            zh_hans="修改介面语言"
            en="Language"
          />
        ),
      }}
    >
      {({ openDialog, type, ref }) => (
        <Form.List.Item
          title={<Translate id="settingsLanguage" />}
          onClick={openDialog}
          rightText={LANG_TEXT_MAP[lang]}
          aria-haspopup={type}
          role="button"
          ref={ref}
        />
      )}
    </DropdownDialog>
  )
}

export default SwitchLanguage
