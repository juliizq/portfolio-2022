import React from 'react'
import { HStack, Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function Languages () {
  const [t, i18n] = useTranslation('global')

  const handleLangChange = (e: any) => {
    const language = e.target.value
    i18n.changeLanguage(language).catch((error) => {
      console.error(error)
    })
  }

  return (
    <HStack
      bottom={['22px', '30px']}
      left={['10px', '30px']}
      h='15px'
      alignItems='center'
      zIndex={'999'}
      position={'fixed'}>
        <Select
          size='sm'
          borderRadius={'10px'}
          borderColor={'#1A202C'}
          variant='outline'
          transition={'ease-in-out .5s'}
          _focusVisible={{
            borderColor: '#805aff'
          }}
          onChange={handleLangChange}>
          <option
            value='en'>
            EN
          </option>
          <option
            value='es'>
            ES
          </option>
          <option
            value='fr'
            onChange={async () => await i18n.changeLanguage('fr')}>
            FR
          </option>
        </Select>
    </HStack>
  )
}
