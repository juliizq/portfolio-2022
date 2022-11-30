import React, { useState } from 'react'
import { HStack, Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const languages = ['en', 'es', 'fr']

export default function Languages () {
  const [t, i18n] = useTranslation('global')

  const [currentLang, setCurrentLang] = useState(i18n.language)

  const handleLangChange = (e: any) => {
    const language = e.target.value
    setCurrentLang(language)
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }

  return (
    <HStack
      bottom={['22px', '30px']}
      px={['2%']}
      h="15px"
      alignItems="center"
      zIndex={'999'}
      position={'fixed'}
    >
      <Select
        size="sm"
        borderRadius={'10px'}
        borderColor={'#1A202C'}
        variant="outline"
        transition={'ease-in-out .5s'}
        _focusVisible={{
          borderColor: '#805aff'
        }}
        value={currentLang}
        onChange={handleLangChange}
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </Select>
    </HStack>
  )
}
