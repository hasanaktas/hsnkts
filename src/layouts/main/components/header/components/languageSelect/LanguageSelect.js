import React, { useState } from 'react'
import {
  Button,
  SvgIcon,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import TranslateIcon from 'mdi-material-ui/Translate'
import DownIcon from 'mdi-material-ui/ChevronDown'
import TurkishIcon from '../../assets/turkish.svg'
import EnglishIcon from '../../assets/english.svg'
import {
  useDispatchLocalization,
  useLocalization,
} from '../../../../../../localization'

const LanguageSelect = () => {
  const localization = useLocalization()
  const dispatch = useDispatchLocalization()
  const [localizationMenu, setLocalizationMenu] = useState(null)
  const localizationMenuOpen = Boolean(localizationMenu)
  const languages = [
    {
      title: 'Türkçe',
      short: 'tr',
      icon: TurkishIcon,
      onClick: () => {
        dispatch({
          type: 'tr',
        })
        setLocalizationMenu(null)
      },
    },
    {
      title: 'English',
      short: 'en',
      icon: EnglishIcon,
      onClick: () => {
        dispatch({
          type: 'en',
        })
        setLocalizationMenu(null)
      },
    },
  ]

  return (
    <>
      <Button
        variant='text'
        startIcon={<TranslateIcon />}
        endIcon={<DownIcon />}
        onClick={(event) => setLocalizationMenu(event.currentTarget)}
      >
        {localization.language}
      </Button>
      <Menu
        anchorEl={localizationMenu}
        keepMounted
        open={localizationMenuOpen}
        onClose={() => setLocalizationMenu(null)}
      >
        {languages.map((item) => {
          return (
            <MenuItem key={item.short} onClick={item.onClick}>
              <ListItemIcon>
                <SvgIcon>
                  <item.icon />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default LanguageSelect
