import { Animate as AnimateComponent, Box } from '@nectar-ui/nectar'
import { Meta } from '@storybook/react'
import { useRef, useState } from 'react'

const meta: Meta<typeof AnimateComponent> = {
  title: 'Components/Animate',
  component: AnimateComponent
} satisfies Meta<typeof AnimateComponent>

export default meta

export const Fade = args => {
  const [inState, setInState] = useState(false)
  const ref = useRef()
  return (
    <>
      <button onClick={() => setInState(true)}>Run Animation.</button>
      <AnimateComponent.fade
        in={inState}
        nodeRef={ref}
        timeout={200}
        {...args}
        classNames="fade"
      >
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </AnimateComponent.fade>
    </>
  )
}
