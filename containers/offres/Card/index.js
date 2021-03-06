import { createComponent } from 'react-fela'

const card = () => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: 100,
  padding: 30,
  marginTop: 30,
  boxShadow: '0 0 20px 4px rgba(0,0,0,0.1)',
  color: '#fff',
  // cursor: 'pointer',
  transition: 'all .3s ease',
  tabletUp: {
    maxWidth: "300px",
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 6,
  },
  '>svg': { transition: 'fill .3s ease' },
  '>svg>path': { transition: 'fill .3s ease' },
  '>h3': { transition: 'color .3s ease' },
  '>p': { transition: 'color .3s ease' },
  // ':hover': {
  //   backgroundColor: '#fff',
  //   color: '#6C3DCB',
  //   boxShadow: '0 0 30px 8px rgba(0,0,0,0.1)',
  //   '>svg': { fill: '#6C3DCB'},
  //   '>svg>path': { fill: '#6C3DCB' },
  //   '>h3': { color: '#6C3DCB' },
  //   '>p': { color: '#6C3DCB' },
  // }
})

export default createComponent(card, 'div')
