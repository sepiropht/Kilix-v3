import { createComponent } from 'react-fela'

const containerProjects = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: 100,
  tabletUp: {
    paddingTop: 25,
  }
})

export default createComponent(containerProjects, 'div')
