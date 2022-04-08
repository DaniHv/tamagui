import { AnimationDriver } from '@tamagui/core'

export function createAnimations<A extends Object>(animations: A): AnimationDriver<A> {
  return {
    animations,
    useAnimations: (props, { style, hoverStyle, pressStyle, focusStyle, exitStyle }) => {
      const animation = animations[props.animation]
      if (!animation) {
        throw new Error(`no animation found: ${props.animation}`)
      }
      return {
        transition: `all ${animation}`,
        ...style,
        ...focusStyle,
        ...hoverStyle,
        ...pressStyle,
        ...exitStyle,
      }
    },
  }
}
